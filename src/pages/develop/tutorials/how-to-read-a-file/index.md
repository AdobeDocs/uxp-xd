---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# How to read a file

This tutorial will show you how an XD plugin can read in a file from the file system. As one of example of what you can do with a file, we'll extract text from the file and add that text to the scenegraph.

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- [Quick Start Tutorial](/develop/tutorials/quick-start/)
- [Debugging Tutorial](/develop/tutorials/debugging/)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-read-a-file).

### 1. Prepare your plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/develop/tutorials/quick-start).

Replace the `uiEntryPoints` field of the manifest with the following:

```json
"uiEntryPoints": [
    {
        "type": "menu",
        "label": "Insert Text From File",
        "commandId": "insertTextFromFileCommand"
    }
]
```

If you're curious about what each entry means, [see the manifest documentation](/develop/plugin-development/plugin-structure/manifest/), where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager.

Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code (note the presence of the `async` keyword, which we'll look at in a later step):

```js
async function insertTextFromFileHandler(selection) {
  // The body of this function is added later
}

module.exports = {
  commands: {
    insertTextFromFileCommand: insertTextFromFileHandler,
  },
};
```

The remaining steps in this tutorial describe additional edits to the `main.js` file.

### 2. Require in XD API dependencies

For this tutorial, we need access to two XD scenegraph dependencies and one UXP dependency.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const { Text, Color } = require("scenegraph");
const fs = require("uxp").storage.localFileSystem;
```

Now the `Text` and `Color` classes are required in and ready to be used, as well as UXP's local file system provider.

### 3. Create a handler function

Our plugin will allow the user to pick a file from the system file picker, read that file's contents, and add the contents to a text object on the scenegraph.

Each of the numbered comments are explained below the code:

```js
async function insertTextFromFileHandler(selection) {
  // [1]
  const aFile = await fs.getFileForOpening({ types: ["txt"] }); // [2]
  if (!aFile) return; // [3]

  const contents = await aFile.read(); // [4]

  const text = new Text(); // [5]
  text.text = contents;
  text.styleRanges = [
    {
      length: contents.length,
      fill: new Color("#0000ff"),
      fontSize: 12,
    },
  ];

  selection.insertionParent.addChild(text); // [6]
  text.moveInParentCoordinates(10, 30);
}
```

1. This example uses XD's asynchronous Filo I/O APIs, so the handler function must be declared as an async method. To learn more about async support in XD plugin APIs, see [our document on sync and async support](/develop/plugin-development/javascript-and-xd/sync-async/).
2. A file picker dialog is displayed, and the function waits for the user to select a text file. The selected file is assigned to `aFile`. The `#getFileForOpening` method is asynchronous, so the `await` keyword is used.
3. If `aFile` is undefined (because the user did not select a file), then plugin exits.
4. The contents of the file is read in, and returned as a string. See below for more detail. The `#read` method is asynchronous, so the `await` keyword is used.
5. The contents of the string is added to a `Text` object. For details on `Text` properties, see the "[How to style text](/develop/tutorials/how-to-style-text)" tutorial.
6. The `text` object is added to and positioned on the selected artboard.

### 4. Run the plugin

After saving all of your changes, reload the plugin in XD and run it. First you'll see a file picker:

![System file picker](../../images/filepicker.png)

If you select a file containing text, the text should be added to the currently-selected artboard:

![blue text added to the artboard](../../images/displayed-results.png)
