import { Table } from "ckeditor5";

export class CustomTable extends Table {
  init() {
    const editor = this.editor;

    // Add a custom `isEditable` property to the table schema
    editor.model.schema.extend("table", {
      allowAttributes: ["isEditable"],
    });

    // Upcast conversion: Handle the `isEditable` attribute from the view
    editor.conversion.for("upcast").attributeToAttribute({
      view: {
        name: "figure",
        key: "data-is-editable",
      },
      model: "isEditable",
    });

    // Downcast conversion: Add the `isEditable` attribute to the view
    editor.conversion.for("downcast").add((dispatcher) => {
      dispatcher.on("insert:table", (evt, data, conversionApi) => {
        const viewWriter = conversionApi.writer;
        const viewElement = conversionApi.mapper.toViewElement(data.item);

        if (viewElement) {
          // Traverse the ancestors to find the <figure> element
          const figureElement = viewElement.findAncestor((element) =>
            element.is("element", "figure")
          );

          if (figureElement) {
            const isEditable = data.item.getAttribute("isEditable");
            if (isEditable !== undefined) {
              // Apply `data-is-editable` to the <figure> element
              viewWriter.setAttribute(
                "data-is-editable",
                isEditable,
                figureElement
              );
            }
          }

          // Apply `data-is-editable` to the <table>` element
          const isEditable = data.item.getAttribute("isEditable");
          if (isEditable !== undefined) {
            viewWriter.setAttribute(
              "data-is-editable",
              isEditable,
              viewElement
            );
          }
        }
      });
    });

    editor.conversion.for("editingDowncast").add((dispatcher) => {
      dispatcher.on("insert:table", (evt, data, conversionApi) => {
        const viewWriter = conversionApi.writer;
        const viewElement = conversionApi.mapper.toViewElement(data.item);

        if (viewElement) {
          // Set `contenteditable="false"` on the table
          viewWriter.setAttribute("contenteditable", "false", viewElement);

          // Traverse all rows and cells in the table
          for (const child of viewElement.getChildren()) {
            if (child.is("element", "tr")) {
              for (const cell of child.getChildren()) {
                if (cell.is("element", "td") || cell.is("element", "th")) {
                  // Set `contenteditable="false"` on the cell
                  viewWriter.setAttribute("contenteditable", "false", cell);
                }
              }
            }
          }
        }
      });
    });

    editor.commands.get("input").on("execute", (evt, data) => {
      const selection = editor.model.document.selection;
      const selectedElement = selection.getSelectedElement();

      if (selectedElement && selectedElement.is("element", "td")) {
        evt.stop(); // Prevent input
        console.log("Editing inside non-editable cell prevented.");
      }
    });

    editor.commands.get("delete").on("execute", (evt, data) => {
      const selection = editor.model.document.selection;
      const selectedElement = selection.getSelectedElement();

      if (selectedElement && selectedElement.is("element", "td")) {
        evt.stop(); // Prevent deletion
        console.log("Deletion inside non-editable cell prevented.");
      }
    });

    editor.commands.get("insertText").on("execute", (evt, data) => {
      const selection = editor.model.document.selection;
      const selectedElement = selection.getSelectedElement();

      if (selectedElement && selectedElement.is("element", "td")) {
        evt.stop(); // Prevent text insertion
        console.log("Text insertion inside non-editable cell prevented.");
      }
    });

    // Intercept table interactions based on `isEditable`
    editor.editing.view.document.on("mousedown", (evt, data) => {
      const target = data.target;

      // Check if the clicked element is a table cell
      if (target.is("element", "td") || target.is("element", "th")) {
        const tableAncestor = target.findAncestor((element) =>
          element.is("element", "table")
        );

        if (
          tableAncestor &&
          tableAncestor.getAttribute("data-is-editable") === "false"
        ) {
          evt.stop(); // Prevent selection
          console.log("Selection inside non-editable cell prevented.");
        }
      }
    });

    editor.conversion.for("downcast").add((dispatcher) => {
      dispatcher.on("insert:table", (evt, data, conversionApi) => {
        const viewWriter = conversionApi.writer;
        const viewElement = conversionApi.mapper.toViewElement(data.item);

        if (viewElement) {
          // Traverse the ancestors to find the <figure> element
          const figureElement = viewElement.findAncestor((element) =>
            element.is("element", "figure")
          );

          if (figureElement) {
            const isEditable = data.item.getAttribute("isEditable");
            if (isEditable !== undefined) {
              // Apply `data-is-editable` to the <figure> element
              viewWriter.setAttribute(
                "data-is-editable",
                isEditable,
                figureElement
              );
            }
          }

          // Apply `data-is-editable` to the <table>` element
          const isEditable = data.item.getAttribute("isEditable");
          if (isEditable !== undefined) {
            viewWriter.setAttribute(
              "data-is-editable",
              isEditable,
              viewElement
            );
          }
        }
      });
    });

    const originalDeleteContent = editor.model.deleteContent;

    editor.model.deleteContent = (selection, options) => {
      const selectedElement = selection.getSelectedElement();

      if (selectedElement && selectedElement.is("element", "table")) {
        const isEditable = selectedElement.getAttribute("isEditable");

        if (isEditable === "false") {
          console.log("Deletion of non-editable table content prevented.");
          return; // Prevent deletion
        }
      }

      // Call the original deleteContent method for other cases
      return originalDeleteContent.call(editor.model, selection, options);
    };
  }
}
