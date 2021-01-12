# The `main.js` file

Every _UI entry point_ you declare in [`manifest.json`](/develop/plugin-development/plugin-structure/manifest/) must be fulfilled by a definition exported from your `main.js` module.

_Exporting_ happens by setting the value of `module.exports`:

```js
module.exports = {
  commands: {
    // definitions for each commandId in manifest go here
  },
  panels: {
    // definitions for each panelId in manifest go here
  },
};
```

The details of what you need to export are different depending on the type of UI entry point. One plugin may use multiple types of UI entry points.

<a name="command"></a>

## Direct-action commands (`commandId`)

`exports.commands` is a map linking each `commandId` from the manifest to a JS _handler function_ in your code.

Manifest:

```json
"uiEntryPoints": [
    {
        "type": "menu",
        "label": "Hello World Command",
        "commandId": "helloCommand"
    }
]
```

main.js:

```js
function sayHello(selection, documentRoot) {
  console.log("Hello, world!");
}

module.exports = {
  commands: {
    helloCommand: sayHello,
  },
};
```

Notice how the exported map object makes the connection from manifest to code:

1. The `commandId` from the manifest, `helloCommand`, is the _key_
2. The handler function, `sayHello`, is the _value_ that the key maps to

The handler is called each time the command is invoked, and XD passes it [two arguments providing useful context](#contextual-arguments). Your handler function can [show UI in a dialog box](/develop/reference/ui/dialogs/) and/or [edit the XD document](/develop/plugin-development/xd-concepts/lifecycle/#edit-operations).

<a name="panel"></a>

## Panel UI (`panelId`)

`exports.panels` is a map linking each `panelId` from the manifest to a JS _panel object_ in your code.

Manifest:

```json
"uiEntryPoints": [
    {
        "type": "panel",
        "label": "Hello World Panel",
        "panelId": "helloPanel"
    }
]
```

main.js:

```js
function show(event) {
  let dom = document.createElement("panel");
  dom.innerHTML = `
        <form method="dialog" id="main">
        </form>
    `;
  event.node.appendChild(dom);
}

function hide(event) {
  event.node.firstChild.remove();
}

function update(selection, documentRoot) {
  // ...update panel DOM based on selection...
}

module.exports = {
  panels: {
    helloPanel: {
      show,
      hide,
      update,
    },
  },
};
```

Notice how the exported map object makes the connection from manifest to code:

1. The `panelId` from the manifest, `helloPanel`, is the _key_
2. An object with three methods (`show()`, `hide()`, and `update()`) is the _value_ that the key maps to

The panel object implements this interface:

- [`show()` (required)](/develop/reference/ui/panels/show/): called when your panel is made visible to the user. To populate the panel with UI elements, add DOM nodes to the `event.node` root node that is provided.

- [`hide()` (optional)](/develop/reference/ui/panels/hide/): called when your panel is hidden/closed.

- [`update` (optional)](/develop/reference/ui/panels/update/): called whenever panel UI content should be updated. This includes when the panel is is shown, when the selection changes, or when the selected objects are mutated (move, resize, fill color change, etc.). This function should execute quickly since it's triggered for essentially every user action in XD while your panel is open. XD passes `update()` [two arguments providing useful context](#contextual-arguments).

Typically, you'll attach UI event listeners to the DOM nodes in your panel, and these event listeners may [edit the XD document using an `application.editDocument()` operation](/develop/plugin-development/xd-concepts/lifecycle/#edit-operations).

## Contextual arguments

The handler function for commands (`sayHello()` above) and the `update()` function for panels are both called with two arguments that provide useful context about XD's current state:

- The current [selection state](/develop/reference/selection/)
- The [root node of the document's scenegraph](/develop/reference/scenegraph/#rootnode)

The argument names `selection` and `documentRoot` seen in the code samples above are arbitrary, but you'll see this naming convention used throughout our documentation.

## Accessing app APIs

XD calls _into_ your plugin code via the above exports. To call into XD's APIs from your plugin code, see [Accessing APIs](/develop/plugin-development/xd-concepts/apis/).
