import {
  DecoupledEditor,
  //ClassicEditor,
  pluginList,
  editorConfig,
  LICENSE_KEY,
  defaultConfig,
  createEditorWithEvents,
  setEditorReadOnly,
  isEditorReadOnly,
} from "./main.js";

class CKEditorCS extends DecoupledEditor {
  // Add a static method to create editor with event handlers
  static createWithEvents(
    element,
    config,
    onChangeCallback,
    onDestroyCallback
  ) {
    // Use the config from this class if not provided
    const editorConfig = config || this.editorConfig;

    // Call the createEditorWithEvents function
    return createEditorWithEvents(
      element,
      editorConfig,
      onChangeCallback,
      onDestroyCallback
    ).then((editor) => {
      // Register the editor instance
      this.registerEditor(element.id, editor);
      return editor;
    });
  }

  // Registry to store editor instances
  static instances = {};

  // Register an editor instance
  static registerEditor(id, editor) {
    this.instances[id] = editor;

    // Clean up when the editor is destroyed
    const originalDestroy = editor.destroy;
    editor.destroy = function () {
      delete CKEditorCS.instances[id];
      return originalDestroy.call(this);
    };
  }

  // Get an editor instance by ID
  static getEditor(id) {
    return this.instances[id];
  }

  // Get data from an editor by ID
  static getData(id) {
    const editor = this.getEditor(id);
    return editor ? editor.getData() : null;
  }

  // Set data to an editor by ID
  static setData(id, data) {
    const editor = this.getEditor(id);
    if (editor) {
      editor.setData(data);
      return true;
    }
    return false;
  }

  // Set read-only mode for an editor by ID
  static setReadOnly(id, isReadOnly = true) {
    const editor = this.getEditor(id);
    return setEditorReadOnly(editor, isReadOnly);
  }

  // Check if an editor is in read-only mode
  static isReadOnly(id) {
    const editor = this.getEditor(id);
    return isEditorReadOnly(editor);
  }

  // Toggle read-only mode for an editor by ID
  static toggleReadOnly(id) {
    const editor = this.getEditor(id);
    if (editor) {
      const currentState = isEditorReadOnly(editor);
      setEditorReadOnly(editor, !currentState);
      return !currentState;
    }
    return false;
  }
}

// 1. Assign plugins to be used in bundle.
CKEditorCS.builtinPlugins = pluginList;

// 2. Assign editor config.
CKEditorCS.editorConfig = editorConfig;

// 3. Set license key.
CKEditorCS.LICENSE_KEY = LICENSE_KEY;

// 4. Set default config.
CKEditorCS.defaultConfig = defaultConfig;

// 5. Override the create method to add change detection by default
const originalCreate = CKEditorCS.create;
CKEditorCS.create = function (element, config) {
  // If you want basic change detection without callbacks, use this
  // Otherwise, use createWithEvents for full control
  const editorConfig = config || this.editorConfig;

  // Check if the element exists
  if (!element) {
    return Promise.reject(new Error("Element not found"));
  }

  // Use the original create method
  return originalCreate.call(this, element, editorConfig).then((editor) => {
    editor.hasChanged = false;
    const initialData = editor.getData(); // This is the initial body content

    // Set up change detection
    editor.model.document.on("change:data", () => {
      const currentBodyData = editor.getData(); // Current body content

      const dataHasChanged = currentBodyData !== initialData;
      if (dataHasChanged !== editor.hasChanged) {
        editor.hasChanged = dataHasChanged;
        // Use fullHtml in your callback
        console.log("Editor content changed:", editor.hasChanged);
      }
    });

    // Register the editor instance
    if (element.id) {
      CKEditorCS.registerEditor(element.id, editor);
    }

    // Set editor to read-only mode by default
    setEditorReadOnly(editor, false);

    return editor;
  });
};

// 6. Export editor class.
export default CKEditorCS;
