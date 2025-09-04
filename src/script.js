// Replace the placeholders below with your actual values
const licenseKey =
  "eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTgxNTM1OTksImp0aSI6IjY3N2FjOWMxLTI2MGItNDU3MC1hZDUyLWI5ZGI2NTg2YzRhZSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImM1MzRiYjZmIn0.jKYXb80Wd1as3zGfiIwn-m9s51ie9B44tD3Ti9szTrWTx0XqlCcnDT7FJXpnXqMgQL9A6HMdbbafD14sINgnqw";
const tokenUrl = "https://example.com/cs-token-endpoint";

import { DecoupledEditor } from "ckeditor5";

import { Pagination } from "@ckeditor/ckeditor5-pagination/dist/index.js";

DecoupledEditor.create(document.querySelector("#editor"), {
  licenseKey,
  plugins: [Pagination /* …other plugins… */],
  toolbar: [
    "previousPage",
    "nextPage",
    "pageNavigation",
    "|",
    "undo",
    "redo",
    "bold",
    "italic",
  ],
  cloudServices: {
    tokenUrl,
  },
  pagination: {
    pageWidth: "21cm",
    pageHeight: "29.7cm",
    pageMargins: {
      top: "20mm",
      bottom: "20mm",
      left: "12mm",
      right: "12mm",
    },
  },
  exportPdf: {
    stylesheets: ["styles.css"],
    fileName: "document.pdf",
    converterOptions: {
      format: "A4",
      margin_top: "20mm",
      margin_bottom: "20mm",
      margin_left: "12mm",
      margin_right: "12mm",
      page_orientation: "portrait",
    },
  },
  exportWord: {
    stylesheets: ["styles.css"],
    fileName: "document.docx",
    converterOptions: {
      format: "A4",
      margin_top: "20mm",
      margin_bottom: "20mm",
      margin_left: "12mm",
      margin_right: "12mm",
    },
  },
})
  .then((editor) => {
    document
      .querySelector("#toolbar-container")
      .appendChild(editor.ui.view.toolbar.element);
  })
  .catch((error) => {
    console.error("Error initializing editor:", error);
  });
