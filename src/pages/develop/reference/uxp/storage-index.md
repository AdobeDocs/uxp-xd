---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Storage

# Using the File API

XD provides a simple, cross-platform API surface that makes it easy to read and write text and binary files. Three key things to note:

- Instead of working with string paths, you work with File and Folder objects.
- Access to the user's files requires showing a file picker UI, but you can access temporary files and any files packaged inside your plugin without needing any user interaction. If you have a File/Folder object, then you have access to the corresponding item on disk.
- File APIs are asynchronous, returning Promises which you can use with `then()` or the `async`/`await` keywords.

## Getting access to the local file system

Start using the file system APIs by obtaining a [FileSystemProvider](/develop/reference/uxp/module/storage/#filesystemprovider) object (shortened to `fs` in the code here):

```js
const fs = require("uxp").storage.localFileSystem;
```

You can use the `fs` object to access a temporary folder or your plugin's own folder immediately, or request access to user folders by showing a file picker:

```js
// These require no user interaction:
const tempFolder = await fs.getTemporaryFolder();
const pluginFolder = await fs.getPluginFolder(); // read-only access to the plugin's install folder
const pluginDataFolder = await fs.getDataFolder(); // folder to store settings

// Display file/folder picker UI to access user files:
const userFolder = await fs.getFolder(); // folder picker
const aFile = await fs.getFileForOpening(); // "Open" file picker, suitable for reading contents
const anotherFile = await fs.getFileForSaving("hello.txt"); // "Save" file picker, suitable for writing contents
```

If you have a [Folder](/develop/reference/uxp/module/storage/#folder), you can use [`getEntries()`](/develop/reference/uxp/module/storage/#folder-getentries) to enumerate the folder's contents:

```js
const entries = await folder.getEntries();
entries.forEach((entry) => console.log(entry.name));
```

If you have a [File](/develop/reference/uxp/module/storage/#file), you can read and write its contents like so:

```js
const contents = await aFile.read();
await anotherFile.write(contents);
```

You can create new files inside a folder you have access to:

```js
const newFile = await folder.createFile("examples.txt", { overwrite: true });
newFile.write("Hello, world!");
```

See the [full reference](/develop/reference/uxp/module/storage/).
