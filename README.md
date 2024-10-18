# Obsidian Paste TeX Replacer

This plugin replaces `\\(` and `\\)` with `$` and `\\[` and `\\]` with `$$` on paste in Obsidian.

## Installation

1. **Download the Plugin:**
   - Clone or download the repository to your local machine.

2. **Build the Plugin:**
   - Open a terminal in the plugin directory and run the following command to install dependencies:
     ```sh
     npm install
     ```
   - Build the plugin by running:
     ```sh
     npm run build
     ```

3. **Load the Plugin in Obsidian:**
   - Copy the contents of the `dist` folder to your Obsidian plugins directory. This is usually located at:
     ```
     <vault>/.obsidian/plugins/obsidian-paste-tex-replacer/
     ```
   - Ensure that the `main.js`, `manifest.json`, and `styles.css` (if any) files are in the plugin directory.

4. **Enable the Plugin:**
   - Open Obsidian and go to `Settings` > `Community plugins`.
   - Click on `Browse` and search for `Paste TeX Replacer`.
   - Enable the `Paste TeX Replacer` plugin.

## Development

To develop and test the plugin locally:

1. **Start the Development Server:**
   - Run the following command to start the development server:
     ```sh
     npm run dev
     ```

2. **Watch for Changes:**
   - The development server will watch for changes and rebuild the plugin automatically.

## Usage

Once the plugin is enabled, it will automatically replace `\\(` and `\\)` with `$` and `\\[` and `\\]` with `$$` when you paste text into an Obsidian note.

## Uninstallation

To uninstall the plugin:

1. **Disable the Plugin:**
   - Open Obsidian and go to `Settings` > `Community plugins`.
   - Disable the `Paste TeX Replacer` plugin.

2. **Remove the Plugin Files:**
   - Delete the `obsidian-paste-tex-replacer` folder from your Obsidian plugins directory.

## License

This project is licensed under the MIT License.# obsidian-paste-tex-replacer
