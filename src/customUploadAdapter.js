class CustomUploadAdapter {
  constructor(loader, options) {
    this.loader = loader;
    this.options = options;
  }

  upload() {
    return this.loader.file.then((file) => {
      return new Promise((resolve, reject) => {
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
      });
    });
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
