// main-fe.js

import { ClassicEditor, editorConfig } from "./main.js";

// 1. Move style imports from main.js here.
import "ckeditor5/ckeditor5.css";
import "./ckeditor5-premium-features.css";
import "./style.css";

// 2. Set initial data for the editor
editorConfig.initialData = `
<div class="protected-block">
    <p>This is protected content.</p>
    <span>Additional content inside the block.</span>
</div>
`;

// 3. Initialize editor
ClassicEditor.create(document.querySelector("#editor"), editorConfig)
  .then((editor) => {
    console.log("Editor initialized successfully!");
  })
  .catch((error) => {
    console.error("Error initializing editor:", error);
  });
