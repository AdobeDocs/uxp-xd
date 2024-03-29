---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# How to make network requests

This sample app will show you how to load an image in an XD object (Rectangle or Artboard) by making network requests using `XHR` and `fetch`.

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Basic knowledge of `XMLHttpRequest` and `fetch`
- [Quick Start Tutorial](/develop/tutorials/quick-start/)
- [Debugging Tutorial](/develop/tutorials/debugging/)

## Development Steps

> **Info**
> Complete code for this plugin can be found [on GitHub](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-make-network-requests).

### 1. Create plugin scaffold

First, edit the manifest file for the plugin you created in our [Quick Start Tutorial](/develop/tutorials/quick-start).

Replace the `uiEntryPoints` field of the manifest with the following:

```json
"uiEntryPoints": [
    {
        "type": "menu",
        "label": "How to make network requests",
        "commandId": "applyImage"
    }
]
```

If you're curious about what each entry means, [see the manifest documentation](/develop/plugin-development/plugin-structure/manifest/), where you can also learn about all manifest requirements for a plugin to be published in the XD Plugin Manager.

Then, update your `main.js` file, mapping the manifest's `commandId` to a handler function.

Replace the content of your `main.js` file with the following code:

```js
function applyImage(selection) {
  // The body of this function is added later
}

module.exports = {
  commands: {
    applyImage,
  },
};
```

The remaining steps in this tutorial describe additional edits to the `main.js` file.

### 2. Require in XD API dependencies

For this tutorial, we just need access to one XD scenegraph class.

Add the following lines to the top of your `main.js` file:

```js
// Add this to the top of your main.js file
const { ImageFill } = require("scenegraph");
```

Now the `ImageFill` class is imported and ready to be used.

### 3. Write a helper function to make XHR requests

Our XHR helper `xhrBinary` will make an HTTP GET request to any URL it is passed, and a return a Promise with an `arraybuffer`.

```js
function xhrBinary(url) {
  // [1]
  return new Promise((resolve, reject) => {
    // [2]
    const req = new XMLHttpRequest(); // [3]
    req.onload = () => {
      if (req.status === 200) {
        try {
          const arr = new Uint8Array(req.response); // [4]
          resolve(arr); // [5]
        } catch (err) {
          reject(`Couldnt parse response. ${err.message}, ${req.response}`);
        }
      } else {
        reject(`Request had an error: ${req.status}`);
      }
    };
    req.onerror = reject;
    req.onabort = reject;
    req.open("GET", url, true);
    req.responseType = "arraybuffer"; // [6]
    req.send();
  });
}
```

1. `xhrBinary` function takes a url as a parameter
2. The function returns a Promise
3. The function uses `XMLHttpRequest` to make network requests
4. Once the correct response comes back, the function uses `Unit8Array` method to convert the response to an `arraybuffer`
5. After the conversion, the promise is resolved
6. Make sure the set the `responseType` as `arraybuffer`

### 4. Write a helper to apply `ImageFill`

This helper function will create an `ImageFill` instance that can be applied to a user-selected XD scengraph object:

```js
function applyImagefill(selection, file) {
  // [1]
  const imageFill = new ImageFill(file); // [2]
  selection.items[0].fill = imageFill; // [3]
}
```

1. The function accepts the `selection` and a `file` as parameters
2. Use the `ImageFill` class to create the fill
3. Apply the image to the user-selected XD object

We'll use this function in the next step.

### 5. Write a helper function to download the image

Ok, you've just made three helper functions. Now we're going to tie them all together!

Note the use of the `async` keyword at the beginning of the function.

```js
async function downloadImage(selection, jsonResponse) {
  // [1]
  try {
    const photoUrl = jsonResponse.message; // [2]
    const photoObj = await xhrBinary(photoUrl); // [3]
    const tempFolder = await fs.getTemporaryFolder(); // [4]
    const tempFile = await tempFolder.createFile("tmp", { overwrite: true }); // [5]
    await tempFile.write(photoObj, { format: uxp.formats.binary }); // [6]
    applyImagefill(selection, tempFile); // [7]
  } catch (err) {
    console.log("error");
    console.log(err.message);
  }
}
```

1. This helper function accepts the `selection` and a JSON response object as parameters
2. Gets the URL from the JSON response
3. Uses our async `xhrBinary` function to get an `arraybuffer`
4. Uses the `fs` module and its `getTemporaryFolder` method to create a temp folder
5. Uses the `createFile` method to create a temp file
6. Uses the `write` method to write the binary file to store
7. Uses `applyImagefill` to place the image into a user-selected XD object

### 6. Write the main handler function

This is the function that will be called with the user runs our plugin command.

```js
function applyImage(selection) {
  if (selection.items.length) {
    // [1]
    const url = "https://dog.ceo/api/breeds/image/random"; // [2]
    return fetch(url) // [3]
      .then(function (response) {
        return response.json(); // [4]
      })
      .then(function (jsonResponse) {
        return downloadImage(selection, jsonResponse); // [5]
      });
  } else {
    console.log("Please select a shape to apply the downloaded image.");
  }
}
```

1. Checks if user has selected at least one object
2. This is an example public URL to an image
3. Pass the URL to `fetch`
4. The first `.then` block returns the response JSON object
5. The second `.then` block passes the `selection` and our JSON reponse to our `downloadImage` function, ultimately placing it in the document
