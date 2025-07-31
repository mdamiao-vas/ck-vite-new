class CustomUploadAdapter {
  constructor(loader, options) {
    this.loader = loader;
    this.options = options;
  }

  upload() {
    return this.loader.file.then((file) => {
      return new Promise((resolve, reject) => {
        // Implement tiered compression strategy based on file size
        if (file.size > 3 * 1024 * 1024) {
          // For very large images (>3MB), use aggressive compression
          console.log(
            `File size is ${(file.size / (1024 * 1024)).toFixed(
              2
            )}MB, using aggressive compression...`
          );
          this.compressImage(file, 0.6, 0.8) // More aggressive compression with some resizing
            .then((compressedFile) =>
              this.uploadFile(compressedFile, resolve, reject)
            )
            .catch((error) => reject(error));
        } else if (file.size > 1024 * 1024) {
          // For medium-sized images (1-3MB)
          console.log(
            `File size is ${(file.size / (1024 * 1024)).toFixed(
              2
            )}MB, compressing...`
          );
          this.compressImage(file, 0.7, 1.0) // Standard compression, no resize
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
          this.compressImage(file, 1.0, 1.0) // More aggressive compression with some resizing
            .then((compressedFile) =>
              this.uploadFile(compressedFile, resolve, reject)
            )
            .catch((error) => reject(error));
        }
      });
    });
  }

  compressImage(file, quality = 0.7, scaleFactor = 1.0) {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Calculate dimensions with scaling
        const width = img.width * scaleFactor;
        const height = img.height * scaleFactor;

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Fill canvas with white background for JPEG
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the image onto the canvas
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        // Determine output format (WebP if supported, otherwise JPEG)
        const outputFormat = this.supportsWebP() ? "image/webp" : "image/jpeg";

        // Convert canvas to blob with specified quality
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const extension = outputFormat === "image/webp" ? "webp" : "jpg";
              const fileName = this.changeFileExtension(file.name, extension);

              const compressedFile = new File([blob], fileName, {
                type: outputFormat,
                lastModified: Date.now(),
              });

              URL.revokeObjectURL(img.src);
              resolve(compressedFile);
            } else {
              URL.revokeObjectURL(img.src);
              reject("Failed to compress image");
            }
          },
          outputFormat,
          quality
        );
      };

      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        reject("Failed to load image for compression");
      };

      img.src = URL.createObjectURL(file);
    });
  }

  // Helper methods
  supportsWebP() {
    const canvas = document.createElement("canvas");
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }

  getExtensionFromMimeType(mimeType) {
    const map = {
      "image/jpeg": "jpg",
      "image/png": "png",
      "image/webp": "webp",
      "image/gif": "gif",
    };
    return map[mimeType] || "jpg";
  }

  changeFileExtension(filename, newExtension) {
    const lastDotPosition = filename.lastIndexOf(".");
    if (lastDotPosition === -1) return `${filename}.${newExtension}`;
    return filename.substring(0, lastDotPosition + 1) + newExtension;
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
