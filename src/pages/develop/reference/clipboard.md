# clipboard

This module lets you copy text to the clipboard. It is not yet possible to copy other content types, or to handle paste events.

**Example**

```js
// Copy the layer name of the selected item to the clipboard
let clipboard = require("clipboard");
clipboard.copyText(selection.items[0].name);
```

### clipboard.copyText()

Write plain text to the clipboard.

**Kind**: static method of [`clipboard`](#module_clipboard)

| Param | Type   | Description                                                             |
| ----- | ------ | ----------------------------------------------------------------------- |
| text  | string | Will be automatically converted to string if a different type is passed |
