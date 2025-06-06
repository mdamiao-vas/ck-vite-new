import {
  ClassicEditor,
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  //Base64UploadAdapter,
  SimpleUploadAdapter,
  BlockQuote,
  Bold,
  Bookmark,
  CloudServices,
  Code,
  CodeBlock,
  Emoji,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromMarkdownExperimental,
  PasteFromOffice,
  RemoveFormat,
  ShowBlocks,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  PageBreak,
  TodoList,
  Underline,
  WordCount,
} from "ckeditor5";

//import { MultiLevelList } from "ckeditor5-premium-features";
/* 
Importing directly from "ckeditor5-premium-features" breaks the bundle if new premium features are needed you need to import them directly
fro mthe node modules like the multiLevelList.
 */
import { MultiLevelList } from "@ckeditor/ckeditor5-list-multi-level/dist/index.js";

import { ExportWord } from "@ckeditor/ckeditor5-export-word/dist/index.js";

const LICENSE_KEY =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDMxMTk5OTksImp0aSI6ImVjMDAxNDU1LWEyZmItNDY3ZS05OGExLTU3MjgxNjMzZTM5MyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjRkMjgxNDVlIn0.Y9SdnrYDCVgEG9fEUovPnhOTktQ--uvrIO_XfpCxCxidiVl7sJnVaYrIC8IOdFqwlRE5aqzbKBfbfcbd5gR5zQ";

// Create a list of plugins which will be exported
const pluginList = [
  Alignment,
  Autoformat,
  AutoImage,
  AutoLink,
  Autosave,
  //Base64UploadAdapter,
  SimpleUploadAdapter,
  BlockQuote,
  Bold,
  Bookmark,
  CloudServices,
  Code,
  CodeBlock,
  Emoji,
  Essentials,
  FindAndReplace,
  FontBackgroundColor,
  FontColor,
  FontFamily,
  FontSize,
  FullPage,
  GeneralHtmlSupport,
  Heading,
  Highlight,
  HorizontalLine,
  HtmlComment,
  HtmlEmbed,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsert,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  Markdown,
  MediaEmbed,
  Mention,
  PageBreak,
  Paragraph,
  PasteFromMarkdownExperimental,
  PasteFromOffice,
  RemoveFormat,
  ShowBlocks,
  SourceEditing,
  SpecialCharacters,
  SpecialCharactersArrows,
  SpecialCharactersCurrency,
  SpecialCharactersEssentials,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  Strikethrough,
  Style,
  Subscript,
  Superscript,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextPartLanguage,
  TextTransformation,
  TodoList,
  Underline,
  WordCount,
  MultiLevelList,
  ExportWord,
];

// Default editor configuration
const defaultConfig = {
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "style",
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "removeFormat",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "subscript",
      "superscript",
      "|",
      "alignment:left",
      "alignment:right",
      "alignment:center",
      "alignment:justify",
      "|",
      "specialCharacters",
      "link",
      "insertTable",
      "highlight",
      "|",
      "insertImage",
      "insertImageViaUrl",
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      "pageBreak",
      "horizontalLine",
      "|",
      "bulletedList",
      "numberedList",
      "multiLevelList",
      "todoList",
      "|",
      "outdent",
      "indent",
      "|",
      "sourceEditing",
      "multiLevelList",
      "exportWord",
    ],
    shouldNotGroupWhenFull: true,
  },
  image: {
    styles: ["full", "side", "alignLeft", "alignCenter", "alignRight"],
    toolbar: [
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "imageStyle:alignLeft",
      "imageStyle:alignCenter",
      "imageStyle:alignRight",
      "imageResize",
    ],
    resizeOptions: [
      {
        name: "resizeImage:original",
        value: null,
        icon: "original",
      },
      {
        name: "resizeImage:custom",
        value: "custom",
        icon: "custom",
      },
      {
        name: "resizeImage:50",
        value: "50",
        icon: "medium",
      },
      {
        name: "resizeImage:75",
        value: "75",
        icon: "large",
      },
    ],
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
    ],
  },
  fontFamily: {
    options: [
      "default",
      "Arial, Helvetica, sans-serif",
      "Calibri, sans-serif",
      "Courier New, Courier, monospace",
      "Georgia, serif",
      "Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma, Geneva, sans-serif",
      "Times New Roman, Times, serif",
      "Trebuchet MS, Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif",
    ],
    supportAllValues: true,
  },
  fontColor: {
    colors: [
      {
        color: "#000000",
        label: "Black",
      },
      {
        color: "#4d4d4d",
        label: "Dim grey",
      },
      {
        color: "#999999",
        label: "Grey",
      },
      {
        color: "#e6e6e6",
        label: "Light grey",
      },
      {
        color: "#ffffff",
        label: "White",
      },
      {
        color: "#e64c4c",
        label: "Red",
      },
      {
        color: "#e6994c",
        label: "Orange",
      },
      {
        color: "#e6e64c",
        label: "Yellow",
      },
      {
        color: "#99e64c",
        label: "Light green",
      },
      {
        color: "#4ce64c",
        label: "Green",
      },
    ],
    columns: 3,
    documentColors: 0,
    colorPicker: {
      format: "hex",
    },
  },
  fontSize: {
    options: [
      {
        title: "10",
        model: "10pt",
      },
      {
        title: "12",
        model: "12pt",
      },
      {
        title: "14",
        model: "14pt",
      },
      {
        title: "16",
        model: "16pt",
      },
      {
        title: "18",
        model: "18pt",
      },
      {
        title: "20",
        model: "20pt",
      },
      {
        title: "22",
        model: "22pt",
      },
    ],
    fontBackgroundColor: {
      colors: [
        {
          color: "#000000",
          label: "Black",
        },
        {
          color: "#4d4d4d",
          label: "Dim grey",
        },
        {
          color: "#999999",
          label: "Grey",
        },
        {
          color: "#e6e6e6",
          label: "Light grey",
        },
        {
          color: "#ffffff",
          label: "White",
        },
        {
          color: "#e64c4c",
          label: "Red",
        },
        {
          color: "#e6994c",
          label: "Orange",
        },
        {
          color: "#e6e64c",
          label: "Yellow",
        },
        {
          color: "#99e64c",
          label: "Light green",
        },
        {
          color: "#4ce64c",
          label: "Green",
        },
      ],
      columns: 3,
      documentColors: 0,
      colorPicker: {
        format: "hex",
      },
    },
    supportAllValues: true,
  },
  heading: {
    options: [
      {
        model: "paragraph",
        title: "Paragraph",
        class: "ck-heading_paragraph",
      },
      {
        model: "heading1",
        view: "h1",
        title: "Heading 1",
        class: "ck-heading_heading1",
      },
      {
        model: "heading2",
        view: "h2",
        title: "Heading 2",
        class: "ck-heading_heading2",
      },
      {
        model: "heading3",
        view: "h3",
        title: "Heading 3",
        class: "ck-heading_heading3",
      },
      {
        model: "heading4",
        view: "h4",
        title: "Heading 4",
        class: "ck-heading_heading4",
      },
      {
        model: "heading5",
        view: "h5",
        title: "Heading 5",
        class: "ck-heading_heading5",
      },
      {
        model: "heading6",
        view: "h6",
        title: "Heading 6",
        class: "ck-heading_heading6",
      },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: "en",
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: "https://",
    decorators: {
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file",
        },
      },
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  style: {
    definitions: [
      {
        name: "Article category",
        element: "h3",
        classes: ["category"],
      },
      {
        name: "Title",
        element: "h2",
        classes: ["document-title"],
      },
      {
        name: "Subtitle",
        element: "h3",
        classes: ["document-subtitle"],
      },
      {
        name: "Info box",
        element: "p",
        classes: ["info-box"],
      },
      {
        name: "Side quote",
        element: "blockquote",
        classes: ["side-quote"],
      },
      {
        name: "Marker",
        element: "span",
        classes: ["marker"],
      },
      {
        name: "Spoiler",
        element: "span",
        classes: ["spoiler"],
      },
      {
        name: "Code (dark)",
        element: "pre",
        classes: ["fancy-code", "fancy-code-dark"],
      },
      {
        name: "Code (bright)",
        element: "pre",
        classes: ["fancy-code", "fancy-code-bright"],
      },
    ],
  },
  placeholder: "Type or paste your content here!",
};

// Create the editor configuration with plugins
const editorConfig = {
  plugins: pluginList,
  ...defaultConfig,
  // Add license key for premium features
  licenseKey: LICENSE_KEY || "YOUR_LICENSE_KEY",
  simpleUpload: {
    uploadUrl: "http://example.com", // Change to your upload endpoint
    withCredentials: true,
  },
};

// Function to set editor to read-only mode
const setEditorReadOnly = (editor, isReadOnly = true) => {
  if (!editor) {
    return false;
  }

  try {
    // Set the editor's read-only state
    if (isReadOnly) {
      editor.enableReadOnlyMode("external-lock");
    } else {
      editor.disableReadOnlyMode("external-lock");
    }

    // Add or remove a CSS class to the editor element for styling
    const editorElement = editor.ui.view.element;
    if (editorElement) {
      if (isReadOnly) {
        editorElement.classList.add("ck-read-only");
      } else {
        editorElement.classList.remove("ck-read-only");
      }
    }

    return true;
  } catch (error) {
    console.error("Error setting read-only mode:", error);
    return false;
  }
};

// Function to check if editor is in read-only mode
const isEditorReadOnly = (editor) => {
  if (!editor) {
    return false;
  }

  return editor.isReadOnly;
};

// Function to create editor with change detection and destroy handling
const createEditorWithEvents = (
  element,
  config,
  onChangeCallback,
  onDestroyCallback
) => {
  let editor;
  let hasChanged = false;
  let initialData = "";

  return ClassicEditor.create(element, config).then((newEditor) => {
    editor = newEditor;
    initialData = editor.getData();

    // Set editor to read-only mode by default
    setEditorReadOnly(editor, true);

    // Set up change detection
    editor.model.document.on("change:data", () => {
      const currentData = editor.getData();
      const dataHasChanged = currentData !== initialData;

      // Only trigger if the change status has changed
      if (dataHasChanged !== hasChanged) {
        hasChanged = dataHasChanged;

        if (onChangeCallback && typeof onChangeCallback === "function") {
          onChangeCallback({
            hasChanged,
            currentData,
            initialData,
          });
        }
      }
    });

    // Set up destroy handling
    if (onDestroyCallback && typeof onDestroyCallback === "function") {
      // Store the original destroy method
      const originalDestroy = editor.destroy;

      // Override the destroy method
      editor.destroy = function () {
        // Call the callback before destroying
        onDestroyCallback({
          hasChanged,
          finalData: editor.getData(),
          initialData,
        });

        // Call the original destroy method
        return originalDestroy.call(this);
      };
    }

    return editor;
  });
};

// Export shared parts
export {
  ClassicEditor,
  pluginList,
  editorConfig,
  defaultConfig,
  LICENSE_KEY,
  createEditorWithEvents,
  setEditorReadOnly,
  isEditorReadOnly,
};
