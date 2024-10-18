import { Plugin } from "obsidian";

export default class PasteTeXReplacer extends Plugin {
  onload() {
    console.log("Loading Paste TeX Replacer Plugin");

    // Listen for the paste event globally
    this.registerEvent(
      this.app.workspace.on("editor-paste", (evt: ClipboardEvent, editor) => {
        // Get the pasted text
        let clipboardData = evt.clipboardData;
        if (!clipboardData) {
          return;
        }
        let pastedText = clipboardData.getData("text");

        // Replace \[ with $$, \] with $$, \( and \) with $, and remove extra spaces
        pastedText = pastedText
          .replace(/\\\(\s*/g, "$")  // Replace \( and remove spaces after it
          .replace(/\s*\\\)/g, "$")  // Replace \) and remove spaces before it
          .replace(/\\\[\s*/g, "$$") // Replace \[ and remove spaces after it
          .replace(/\s*\\\]/g, "$$") // Replace \] and remove spaces before it

        // Prevent the default paste action
        evt.preventDefault();

        // Insert the modified text at the cursor position
        editor.replaceSelection(pastedText);
      })
    );
  }

  onunload() {
    console.log("Unloading Paste TeX Replacer Plugin");
  }
}
