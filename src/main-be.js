// main-be.js

import {
  ClassicEditor,
  pluginList,
  editorConfig,
  LICENSE_KEY,
} from "./main.js";

class CKEditorCS extends ClassicEditor {}

// 1. Assign plugins to be used in bundle.
CKEditorCS.builtinPlugins = pluginList;

// 1. Assign plugins to be used in bundle.
CKEditorCS.editorConfig = editorConfig;

CKEditorCS.LICENSE_KEY = LICENSE_KEY;

// 2. Export editor class.
export default CKEditorCS;
