---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# application

The `application` module exposes APIs for exporting content, initiating edits from panel UI, and getting version / locale info.

## editDocument()

▸ **editDocument**(`options`, `editFunction`) | (`editFunction`)

Call `editDocument()` from a **plugin panel UI** event listener to initiate an [edit operation](/develop/plugin-development/xd-concepts/lifecycle/#edit-operations) batch in order to modify the XD document. This API is irrelevant for plugin menu item commands, which are wrapped in an edit batch automatically.

XD calls the `editFunction()` synchronously (before `editDocument()` returns). This function is treated the same as a [menu command handler](/develop/plugin-development/plugin-structure/handlers/#direct-action-commands-commandid):

- It is passed two arguments, the selection and the root node of the scenegraph
- It can return a Promise to extend the duration of the edit asynchronously

You can _only_ call `editDocument()` in response to a user action, such as a button `"click"` event or a text input's `"input"` event. This generally means you must call it while a UI event handler is on the call stack.
For a plugin's panel, these UI events can trigger a call to `editDocument()`:
* _blur_
* _change_
* _click_
* _drop_ (since XD 47)
* _input_
* _keydown_
* _keypress_
* _keyup_
* _mousedown_
* _mouseup_

For UI events that often occur in rapid-fire clusters, such as dragging a slider or pressing keys in a text field, XD tries to smartly merge consecutive edits into a single atomic Undo step. See the `mergeId` option below to customize this behavior.

| Param          | Type                                   | Description                                                         |
| ------------   | -------------------------------------- | ------------------------------------------------------------------- |
| `options`      | EditSettings                           | Optional settings object (see below). This argument can be omitted. |
| `editFunction` | function(Selection, RootNode):?Promise | Function which will perform your plugin's edits to the scenegraph.  |

**Kind**: static method of [application](#module_application)

**Typedef EditSettings**

| Property    | Type    | Description                                                                                                                                                                                                                                                                                          |
| ---------   | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `editLabel` | ?string | Used as the Undo label in the **Edit** menu. If unspecified, XD uses the `uxp-edit-label` attribute on the DOM node which the user interacted with, and if that does not exist then the plugin's name will be used.                                                                                  |
| `mergeId`   | ?string | If two consecutive edits to the same selection have the same `mergeId`, they are flattened together into one Undo step. If unspecified, for "high frequency" UI events (see above), XD treats the originating DOM node as a unique identifier for merging; for other UI events, merging is disabled. |

**Example**

```js
let Color = require("scenegraph").Color;
let application = require("application");

let panelButton = document.querySelector("panel #myButton");

// When button is clicked, set selected item's fill to solid red
panelButton.addEventListener("click", (event) => {
  application.editDocument((selection) => {
    selection.items[0].fill = new Color("red");
  });
});
```

**Example**

```js
const { editDocument } = require("application");
const { Color, selection } = require("scenegraph");
var panel;

// Illustrates editing the selected document content in response to a "drop" event in the panel UI
function show(event) {
    if (!panel) {
        panel = document.createElement("div");

        // Specify plugin panel to have a draggable source div and a target div
        panel.innerHTML = `
            <div id="divDragSource" style="height: 50px; width: 50%; background-color: aqua" data-color="aqua" draggable=true>Drag Source</div>
            <div id="divDragTarget" style="height: 50px; width: 50%; background-color: black">Drag Target</div>`;

        // Upon starting drag, set custom data from drag source
        panel.querySelector("#divDragSource").addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("text", event.target.getAttribute("data-color"));
        });

        // Upon dragging over target, change mouse cursor
        panel.querySelector("#divDragTarget").addEventListener("dragover", (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = "link";
        });

        // Upon dropping onto target, get custom data from drag source
        panel.querySelector("#divDragTarget").addEventListener("drop", (event) => {
            event.preventDefault();
            let colorName = event.dataTransfer.getData("text");

            // Set the fill color of everything selected in the document
            editDocument(() => {
                selection.items.forEach(item => item.fill = new Color(colorName));
            });
        });

        event.node.appendChild(panel);
    }
}
```

> **Info**
> For comparison, plugin [menu command handlers](/develop/plugin-development/plugin-structure/handlers/#direct-action-commands-commandid) are effectively run as if they were passed to `editDocument()` with `editLabel` set to the menu item's label and `mergeId` set to null.

## createRenditions()

▸ **createRenditions**(`renditions`)

Generate renditions of nodes in the document in a batch. Overwrites any existing files without warning.

A single `createRenditions()` call can generate any number of renditions, including multiple renditions of the same node (with
different output settings) or renditions of multiple different nodes. Only one `createRenditions()` call can be executing at any
given time, so wait for the Promise it returns before calling it again.

**Returns**: `Promise<Array<RenditionResult>, string>` - Promise which is fulfilled with an array of RenditionResults (pointing to
the same `outputFile`s that were originally passed in, or rejected with an error string if one or more renditions failed for
any reason.

**Kind**: static method of [application](#module_application)

| Param        | Type                       | Description                    |
| ----------   | -------------------------- | ------------------------------ |
| `renditions` | `Array<RenditionSettings>` | List of renditions to generate |

**Typedef RenditionSettings**

_All rendition settings fields are required_ (for a given rendition type) unless otherwise specified.

| Property    | Type              | Description                                                                                                                                                            |
| ----------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `node`        | `SceneNode`        | Root of scenegraph subtree to render. This may be _any_ node in the scenegraph, regardless of the current edit context.                                                |
| `outputFile`  | `uxp.storage.File` | File to save the rendition to (overwritten without warning if it already exists)                                                                                       |
| `type`        | `string`            | File type: RenditionType.PNG, JPG, PDF, or SVG                                                                                                                         |
| `scale`       | `number`            | _(PNG & JPG renditions)_ DPI multipler in the range [0.1, 100], e.g. 2.0 for @2x DPI.                                                                                  |
| `quality`     | `number`            | _(JPG renditions)_ Compression quality in the range [1, 100].                                                                                                          |
| `background`  | `?Color`            | _(PNG & JPEG renditions)_ Alpha component ignored for JPG. Optional: defaults to transparent for PNG, solid white for JPG.                                             |
| `minify`      | `boolean`           | _(SVG renditions)_ If true, SVG code is minified.                                                                                                                      |
| `embedImages` | `boolean `          | _(SVG renditions)_ If true, bitmap images are stored as base64 data inside the SVG file. If false, bitmap images are saved as separate files linked from the SVG code. |

**Typedef RenditionResult**

| Property   | Type              | Description                                                                    |
| ---------- | ----------------- | ------------------------------------------------------------------------------ |
| `outputFile` | `uxp.storage.File` | File the rendition was written to (equal to `outputFile` in RenditionSettings) |

**Example**

```js
// Generate PNG rendition of the selected node
let application = require("application");
let fs = require("uxp").storage.localFileSystem;

let file = await fs.getFileForSaving();
let shape = selection.items[0];
let renditions = [
  {
    node: shape,
    outputFile: file,
    type: application.RenditionType.PNG,
    scale: 2,
  },
];
application.createRenditions(renditions).then(function (results) {
  // ...do something with outputFiles on disk...
});
```

## import()

▸ **import**(`entries`)

**Since**: XD 45

Equivalent to _File > Import_.  Brings assets into the XD document, including images, videos, and _Adobe Photoshop_ or _Adobe Illustrator_ files.
Assets will be added as a child of the [artboard](/develop/reference/Artboard) that is the parent of the current [selection](/develop/reference/selection) (or to the [document root](/develop/reference/RootNode) if nothing is selected).

Supported import file extensions: AI (_Illustrator_), BMP, GIF, JPG, JPEG, JSON ([Lottie](/develop/reference/Lottie)), MP4 ([Video](/develop/reference/Video)), PNG, PSD (_Photoshop_), TIF, TIFF, TXT

An error will be thrown if a passed file does not exist or has an unsupported file extension.
Parsing errors or other import problems that are specific to formats supported by XD are displayed to the user in the same way the _File > Import_ action informs users.

**Kind**: static method of [application](#module_application)

| Param        | Type                       | Description                    |
| ----------   | -------------------------- | ------------------------------ |
| `entries` | Array&lt;[uxp.storage.File](https://www.adobe.io/xd/uxp/uxp/reference-js/Modules/uxp/Persistent%20File%20Storage/File/)&gt; | List of files to be imported |

**Example**

```js
const application = require("application");
const fs = require("uxp").storage.localFileSystem;

// Import all files in the plugin's temporary folder
application.editDocument({ editLabel: "Importing assets" }, async function () {
    let tempFolder = await fs.getTemporaryFolder();
    let entries = await tempFolder.getEntries();
    application.import(entries);
});

// Import one file selected by the user
application.editDocument({ editLabel: "Importing asset" }, async function () {
    let importTypes = ["ai", "bmp", "gif", "jpeg", "jpg", "json", "mp4", "png", "psd", "tif", "tiff", "txt"];
    let fileAsset = await fs.getFileForOpening({ types: importTypes });
    if (fileAsset) {
        application.import([fileAsset]);
    }
});
```


## version

▸ **version**: `string`

Adobe XD version number in the form "major.minor.patch.build"

**Kind**: static property of [application](#module_application)
**Read only**: true

**Example**

```js
console.log("Version:", application.version); // e.g. "13.0.21.3"
```

## appLanguage

▸ **appLanguage**: `string`

Current language the application UI is using. This may not equal the user's OS locale setting: it is the closest
locale _supported by XD_ - use this when you want your plugin's UI to be consistent with XD's UI. Specifies
language only, with no region info (e.g. "fr", not "fr_FR").

**Kind**: static property of [application](#module_application)
**Read only**: true

**Example**

```js
console.log("XD locale:", application.appLanguage); // e.g. "en"
```

## systemLocale

▸ **systemLocale**: `string`

User's OS-wide locale setting. May not match the XD UI, since XD does not support all world languages. Includes both
language _and_ region (e.g. "fr_CA" or "en_US").

**Kind**: static property of [application](#module_application)
**Read only**: true

**Example**

```js
console.log("OS locale:", application.systemLocale); // e.g. "en_US"
```

## activeDocument

▸ **activeDocument**: `DocumentInfo`

Information about the document which this instance of the plugin is attached to.

> **Tip** > _This does **not** indicate the frontmost "active" document window in the XD application._
> In XD, each document window [loads a separate copy of your plugin](/develop/plugin-development/xd-concepts/lifecycle/#plugin-loading). When a given instance of your plugin calls this API, you will always receive information about the document that this instance of the plugin is attached to, even if it's not the active window.

**Kind**: static property of [application](#module_application)
**Read only**: true

**Typedef DocumentInfo**

| Property | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| name     | string | Document name as displayed in the titlebar. For untitled documents, this will be a localized string such as "Untitled-1."                                                                                                                                                                                                                                                                  |
| guid     | string | _Semi_-unique document identifier. Duplicating an .xd file on disk will result in two files with the same GUID. Duplicating a document via "Save As" will change its GUID; thus two _cloud_ documents will never have the same GUID. The GUID of an Untitled document doesn't change when it is saved for the first time. <br/><br/>This returns the same value as `scenegraph.root.guid`. |

**Example**

```js
let application = require("application");
let documentInfo = application.activeDocument;
console.log("Document title: " + documentInfo.name);
console.log("Document ID: " + documentInfo.guid);
```
