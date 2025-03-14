// main-fe.js

import { ClassicEditor, editorConfig } from "./main.js";

// 1. Move style imports from main.js here.
import "ckeditor5/ckeditor5.css";
import "./ckeditor5-premium-features.css";

import "./style.css";

// 2. Initialize editor.
ClassicEditor.create(document.querySelector("#editor"), editorConfig);
