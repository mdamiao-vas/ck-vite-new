class CustomUploadAdapter {
  constructor(loader, options) {
    this.loader = loader;
    this.options = options;
  }

  upload() {
    return this.loader.file.then((file) => {
      return new Promise((resolve, reject) => {
        // Check if file size is above 1MB (1024 * 1024 bytes)
        if (file.size > 1024 * 1024) {
          console.log(
            `File size is ${(file.size / (1024 * 1024)).toFixed(
              2
            )}MB, compressing...`
          );
          this.compressImage(file, 0.7) // Compress by 30% (quality 0.7)
            .then((compressedFile) =>
              this.uploadFile(compressedFile, resolve, reject)
            )
            .catch((error) => reject(error));
        } else {
          console.log(
            `File size is ${(file.size / (1024 * 1024)).toFixed(
              2
            )}MB, no compression needed`
          );
          this.uploadFile(file, resolve, reject);
        }
      });
    });
  }

  compressImage(file, quality) {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Set canvas dimensions to image dimensions
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image to canvas
        ctx.drawImage(img, 0, 0);

        // Convert canvas to blob with specified quality
        canvas.toBlob(
          (blob) => {
            if (blob) {
              // Create a new File object with compressed data
              const compressedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              console.log(
                `Compressed from ${(file.size / (1024 * 1024)).toFixed(
                  2
                )}MB to ${(compressedFile.size / (1024 * 1024)).toFixed(2)}MB`
              );
              resolve(compressedFile);
            } else {
              reject("Failed to compress image");
            }
          },
          file.type,
          quality
        );
      };

      img.onerror = () => reject("Failed to load image for compression");
      img.src = URL.createObjectURL(file);
    });
  }

  uploadFile(file, resolve, reject) {
    const data = new FormData();
    data.append("upload", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", this.options.uploadUrl, true);
    xhr.withCredentials = !!this.options.withCredentials;

    // Set headers if provided
    if (this.options.headers) {
      Object.entries(this.options.headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value);
      });
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        const uploadedUrl = response.url;

        console.log("File uploaded successfully:", uploadedUrl);

        // Wait for the image to be ready
        this.waitForImageReady(uploadedUrl)
          .then(() => resolve({ default: uploadedUrl }))
          .catch((error) => reject(error));
      } else {
        reject(xhr.responseText);
      }
    };

    xhr.onerror = () => reject("Upload failed.");
    xhr.send(data);
  }

  // ...existing waitForImageReady method...
  waitForImageReady(url) {
    return new Promise((resolve, reject) => {
      let retryCount = 0; // Initialize retry counter
      const maxRetries = 10; // Maximum number of retries

      const checkImageReady = () => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "arraybuffer"; // Expect binary response from the server

        xhr.onload = () => {
          if (xhr.status === 200 && xhr.response.byteLength > 0) {
            console.log("Image is ready:", url);
            console.log("Image size:", xhr.response.byteLength, "bytes");
            console.log("Image content:", xhr.response);
            console.log("Status code:", xhr.status);
            resolve(); // Image is ready (binary content exists)
          } else if (retryCount < maxRetries) {
            retryCount++; // Increment retry counter
            setTimeout(checkImageReady, 3000); // Retry after 3 seconds
            console.log(
              `Retrying image readiness check (${retryCount}/${maxRetries})...`
            );
          } else {
            console.error(
              "Image readiness check failed after maximum retries."
            );
            reject("Image readiness check failed after 10 attempts.");
          }
        };

        xhr.onerror = () => reject("Failed to check image readiness.");
        xhr.send();
      };
      // Start the first check
      checkImageReady();
    });
  }

  abort() {
    // Optional: implement abort logic if needed
  }
}

// Plugin to integrate the custom upload adapter
function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new CustomUploadAdapter(loader, editor.config.get("customUpload"));
  };
}

export { CustomUploadAdapterPlugin };
