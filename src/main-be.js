// main-be.js

import {
  ClassicEditor,
  pluginList,
  editorConfig,
  LICENSE_KEY,
  defaultConfig,
} from "./main.js";

class CKEditorCS extends ClassicEditor {}

// 1. Assign plugins to be used in bundle.
CKEditorCS.builtinPlugins = pluginList;

// 1. Assign plugins to be used in bundle.
CKEditorCS.editorConfig = editorConfig;

CKEditorCS.LICENSE_KEY = LICENSE_KEY;

CKEditorCS.defaultConfig = defaultConfig;

// 2. Export editor class.
export default CKEditorCS;
