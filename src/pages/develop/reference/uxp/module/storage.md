---
title: Storage
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="module-storage" id="module-storage"/a
---



## storage

**Category**: uxp, io, file

* [storage](#module-storage)
    * [.Entry](#module-storage-entry)
        * [.name](#module-storage-entry-name) : `string`
        * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
        * [.url](#module-storage-entry-url) : `URL`
        * [.nativePath](#module-storage-entry-nativepath) : `string`
        * [.isEntry](#module-storage-entry-isentry) : `boolean`
        * [.isFile](#module-storage-entry-isfile) : `boolean`
        * [.isFolder](#module-storage-entry-isfolder) : `boolean`
        * [.toString()](#module-storage-entry-tostring) ⇒ `string`
        * [.copyTo(folder, options)](#module-storage-entry-copyto) ⇒ `Promise`
        * [.moveTo(folder, options)](#module-storage-entry-moveto) ⇒ `Promise`
        * [.delete()](#module-storage-entry-delete) ⇒ `Promise`
        * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`
    * [.EntryMetadata](#module-storage-entrymetadata)
        * [.name](#module-storage-entrymetadata-name) : `string`
        * [.size](#module-storage-entrymetadata-size) : `number`
        * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
        * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
        * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
        * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`
    * [.File](#module-storage-file)
        * [.mode](#module-storage-file-mode) : `Symbol`
        * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
        * [.write(data, options)](#module-storage-file-write)
    * [.FileSystemProvider](#module-storage-filesystemprovider)
        * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `Promise.<?File>` \| `Promise.<!Array.<File>>`
        * [.getFileForSaving(suggestedName, options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `Promise.<?File>`
        * [.getFolder()](#module-storage-filesystemprovider-getfolder) ⇒ `Promise.<?Folder>`
        * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder) ⇒ `Promise.<Folder>`
        * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder) ⇒ `Promise.<Folder>`
        * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder) ⇒ `Promise.<Folder>`
        * [.getFsUrl(entry)](#module-storage-filesystemprovider-getfsurl) ⇒ `URL`
        * [.getNativePath(entry)](#module-storage-filesystemprovider-getnativepath) ⇒ `string`
    * [.Folder](#module-storage-folder) ⇐ `Entry`
        * [.getEntries()](#module-storage-folder-getentries) ⇒ `Promise.<Array.<Entry>>`
        * [.createFile(name, options)](#module-storage-folder-createfile) ⇒ `Promise.<File>`
        * [.createFolder(name)](#module-storage-folder-createfolder) ⇒ `Folder`
        * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `Promise.<(File\|Folder)>`
        * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry) ⇒ `Promise`
    * [.localFileSystem](#module-storage-localfilesystem) : `LocalFileSystemProvider`
    * [.errors](#module-storage-errors) : `Errors`
        * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
        * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
        * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
        * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
        * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
        * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
        * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
        * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
        * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
        * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
        * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
        * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`
    * [.fileTypes](#module-storage-filetypes)
        * [.text](#module-storage-filetypes-text)
        * [.images](#module-storage-filetypes-images)
        * [.all](#module-storage-filetypes-all)
    * [.formats](#module-storage-formats)
        * [.utf8](#module-storage-formats-utf8) : `Symbol`
        * [.binary](#module-storage-formats-binary) : `Symbol`
    * [.modes](#module-storage-modes)
        * [.readOnly](#module-storage-modes-readonly) : `Symbol`
        * [.readWrite](#module-storage-modes-readwrite) : `Symbol`
    * [.types](#module-storage-types)
        * [.file](#module-storage-types-file) : `Symbol`
        * [.folder](#module-storage-types-folder) : `Symbol`



### storage.Entry
An `Entry` is the base class for `File` and `Folder`. You'll
never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.

> **Info**
>
> Important:
>
> * An Entry object may exist even if the corresponding file/folder on disk does not
>   currently exist.
> * It's possible for multiple Entry objects to represent the same item on disk,
>   for example if the item was picked via multiple separate file picker invocations.

**Kind**: static class of [`storage`](#module-storage)
**Since**: XD 13

* [.Entry](#module-storage-entry)
    * [.name](#module-storage-entry-name) : `string`
    * [.provider](#module-storage-entry-provider) : `FileSystemProvider`
    * [.url](#module-storage-entry-url) : `URL`
    * [.nativePath](#module-storage-entry-nativepath) : `string`
    * [.isEntry](#module-storage-entry-isentry) : `boolean`
    * [.isFile](#module-storage-entry-isfile) : `boolean`
    * [.isFolder](#module-storage-entry-isfolder) : `boolean`
    * [.toString()](#module-storage-entry-tostring) ⇒ `string`
    * [.copyTo(folder, options)](#module-storage-entry-copyto) ⇒ `Promise`
    * [.moveTo(folder, options)](#module-storage-entry-moveto) ⇒ `Promise`
    * [.delete()](#module-storage-entry-delete) ⇒ `Promise`
    * [.getMetadata()](#module-storage-entry-getmetadata) ⇒ `Promise.<EntryMetadata>`



#### entry.name : `string`
The name of this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Since**: XD 13
**Example**
```js
console.log(anEntry.name);
```


#### entry.provider : `FileSystemProvider`
The associated provider that services this entry. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Since**: XD 13
**Example**
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```


#### entry.url : `URL`
The url of this entry. You can use this url as the `src` attribute of an `<img>` tag in the UI. Read-only.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Since**: XD 13
**Example**
```js
console.log(anEntry.url);
```


#### entry.nativePath : `string`
The platform native file-system path of this entry. Read-only

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Since**: XD 13
**Example**
```js
console.log(anEntry.nativePath);
```

#### entry.isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Example**
```js
if (something.isEntry) {
    return something.getMetadata();
}
```


#### entry.isFile : `boolean`
Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Example**
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```


#### entry.isFolder : `boolean`
Indicates that this instance is **not** a folder. Useful for type-
checking.

**Kind**: instance property of [`Entry`](#module-storage-entry)
**Read only**: true
**Example**
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```


#### entry.toString() ⇒ `string`
Returns the details of the given entry like name, type and native path in a readable string format.

**Kind**: instance method of [`Entry`](#module-storage-entry)
**Since**: XD 13


#### entry.copyTo(folder, options) ⇒ `Promise`
Copies this entry to the specified `folder`.

The Entry object passed to this function will continue to reference the
original item - it is _not_ updated to reference the copy.

**Kind**: instance method of [`Entry`](#module-storage-entry)
**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space

**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `\*` |  |  |
| \[options.overwrite] | `boolean` | `false` | if `true`, allows overwriting existing entries |

**Example**
```js
await someFile.copyTo(someFolder);
```
**Example**
```js
await someFile.copyTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.copyTo(anotherFolder, {overwrite: true});
```


#### entry.moveTo(folder, options) ⇒ `Promise`
Moves this entry to the target folder, optionally specifying a new name.

The Entry object passed to this function is automatically updated to
reference the new location, however any _other_ Entry objects
referencing the original item will not be updated, and will thus no
longer point to an item that exists on disk.

**Kind**: instance method of [`Entry`](#module-storage-entry)
**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `\*` |  |  |
| \[options.overwrite] | `boolean` | `false` | If `true` allows the move to overwrite existing files |
| \[options.newName] | `string` |  | If specified, the entry is renamed to this name |

**Example**
```js
await someFile.moveTo(someFolder);
```
**Example**
```js
await someFile.moveTo(someFolder, {overwrite: true});
```
**Example**
```js
await someFolder.moveTo(anotherFolder, {overwrite: true});
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
```
**Example**
```js
await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
```


#### entry.delete() ⇒ `Promise`
Removes this entry from the file system. If the entry is a folder, you must remove the files inside before removing the folder.

**Kind**: instance method of [`Entry`](#module-storage-entry)
**Since**: XD 13
**Example**
```js
await aFile.delete();
```


#### entry.getMetadata() ⇒ `Promise.<EntryMetadata>`
Returns this entry's metadata.

**Kind**: instance method of [`Entry`](#module-storage-entry)
**Since**: XD 13
**Example**
```js
const metadata = await aFile.getMetadata();
```


### storage.EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll never instantiate an `EntryMetadata` directly; instead use
[getMetadata](#module-storage-entry-getmetadata) to get metadata for a
specific File or Folder entry.

**Kind**: static class of [`storage`](#module-storage)

* [.EntryMetadata](#module-storage-entrymetadata)
    * [.name](#module-storage-entrymetadata-name) : `string`
    * [.size](#module-storage-entrymetadata-size) : `number`
    * [.dateCreated](#module-storage-entrymetadata-datecreated) : `Date`
    * [.dateModified](#module-storage-entrymetadata-datemodified) : `Date`
    * [.isFile](#module-storage-entrymetadata-isfile) : `boolean`
    * [.isFolder](#module-storage-entrymetadata-isfolder) : `boolean`



#### entryMetadata.name : `string`
The name of the entry.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


#### entryMetadata.size : `number`
The size of the entry, if a file. Zero if a folder.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


#### entryMetadata.dateCreated : `Date`
The date this entry was created.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


#### entryMetadata.dateModified : `Date`
The date this entry was modified.

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


#### entryMetadata.isFile : `boolean`
Indicates if the entry is a file

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


#### entryMetadata.isFolder : `boolean`
Indicates if the entry is a folder

**Kind**: instance property of [`EntryMetadata`](#module-storage-entrymetadata)


### storage.File
Represents a file on a file system. Provides methods for reading from and
writing to the file. You'll never instantiate a `File` directly; instead
you'll get access via a [FileSystemProvider](#module-storage-filesystemprovider).
method such as [`getFileForOpening()`](#module-storage-filesystemprovider-getfileforopening).

**Kind**: static class of [`storage`](#module-storage)
**Since**: XD 13

> **Info**
>
> Important:
>
> * A File object may exist even if the corresponding file on disk does not currently exist.
>
> * It's possible for multiple File objects to represent the same file on disk,
> for example if the file was picked via multiple separate file picker invocations.

* [.File](#module-storage-file)
    * [.mode](#module-storage-file-mode) : `Symbol`
    * [.read(options)](#module-storage-file-read) ⇒ `Promise.<(string\|ArrayBuffer)>`
    * [.write(data, options)](#module-storage-file-write)



#### file.mode : `Symbol`
Indicates whether this File object supports read-only or read-write
access. See [readOnly](#module-storage-modes-readonly) and [readWrite](#module-storage-modes-readwrite).

**Kind**: instance property of [`File`](#module-storage-file)
**Since**: XD 13
**Example**
```js
if (aFile.mode === modes.readOnly) {
    throw new Error("Can't write to a file opened as read-only.");
}
```


#### file.read(options) ⇒ `Promise.<(string\|ArrayBuffer)>`
Reads data from the file and returns it. The file format can be specified
with the `format` option. If a format is not supplied, the file is assumed
to be a text file using UTF8 encoding.

**Kind**: instance method of [`File`](#module-storage-file)
**Returns**: `Promise.<(string\|ArrayBuffer)>` - the contents of the file
**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  |  |
| \[options.format] | `Symbol` | `formats.utf8` | Optional. Format to read: one of [`storage.formats.utf8`](#module-storage-formats-utf8) or [`storage.formats.binary`](#module-storage-formats-binary). |

**Example**
```js
const text = await myNovel.read(); // 'text' is a string
```
**Example**
```js
const data = await myNovel.read({format: formats.binary}); // 'data' is an ArrayBuffer
console.log("File is " + data.byteLength + " bytes long.");
```


#### file.write(data, options)
Writes data to a file, appending if desired. The format of the file
is controlled via the `format` option, and defaults to UTF8.

**Kind**: instance method of [`File`](#module-storage-file)
**Throws**:

- `FileIsReadOnly` if writing to a read-only file
- `OutOfSpace` If writing to the file causes the file system to exceed the available space (or quota)

**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| data | `string` \| `ArrayBuffer` |  | Data to write to the file |
| options | `Object` |  |  |
| \[options.format] | `Symbol` | `formats.utf8` | Optional. Format to write: [`storage.formats.utf8`](#module-storage-formats-utf8) or [`storage.formats.binary`](#module-storage-formats-binary). |

**Example**
```js
await myNovel.write("It was a dark and stormy night.\n");
```
**Example**
```js
const data = new Uint8Array([0xFF, 0xA1]);
await aDataFile.write(data, {format: formats.binary});  // writes a 2-byte file
```


### storage.FileSystemProvider
Provides access to files and folders on a file system. You don't instantiate
this directly; instead you'll use an instance that has already been created for
you.

**Kind**: static class of [`storage`](#module-storage)
**Since**: XD 13

* [.FileSystemProvider](#module-storage-filesystemprovider)
    * [.getFileForOpening(options)](#module-storage-filesystemprovider-getfileforopening) ⇒ `Promise.<?File>` \| `Promise.<!Array.<File>>`
    * [.getFileForSaving(suggestedName, options)](#module-storage-filesystemprovider-getfileforsaving) ⇒ `Promise.<?File>`
    * [.getFolder()](#module-storage-filesystemprovider-getfolder) ⇒ `Promise.<?Folder>`
    * [.getTemporaryFolder()](#module-storage-filesystemprovider-gettemporaryfolder) ⇒ `Promise.<Folder>`
    * [.getDataFolder()](#module-storage-filesystemprovider-getdatafolder) ⇒ `Promise.<Folder>`
    * [.getPluginFolder()](#module-storage-filesystemprovider-getpluginfolder) ⇒ `Promise.<Folder>`
    * [.getFsUrl(entry)](#module-storage-filesystemprovider-getfsurl) ⇒ `URL`
    * [.getNativePath(entry)](#module-storage-filesystemprovider-getnativepath) ⇒ `string`



#### fileSystemProvider.getFileForOpening(options) ⇒ `Promise.<File>` \| `Promise.<Array.<File>>`
Gets a file (or files) suitable for reading by displaying an "Open" file
picker dialog to the user. File entries returned by this API are read-only -
use [getFileForSaving](#module-storage-filesystemprovider-getfileforsaving)
to get a File entry you can write to.

The user can select multiple files only if the `allowMultiple` option is `true`.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Returns**: `Promise.<?File>` \| `Promise.<!Array.<File>>` - `?File` if `allowMultiple` is false (null if picker canceled); or `!Array<File>` if `allowMultiple` is true (length 0 if picker canceled)
**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | `Object` |  |  |
| \[options.types] | `Array.<string>` | `\[&#x27;*&#x27;]` | Optional. Allowed file extensions, with no "." prefix; use [`storage.fileTypes.all`](#module-storage-filetypes-all) to allow any file to be picked |
| \[options.allowMultiple] | `boolean` | `false` | Optional. If true, multiple files can be selected and this API returns `Array<File>`.\<br/\>\<br/\>If false, only one file can be selected and this API returns a `File` directly. |

**Example**
```js
const file = await fs.getFileForOpening();
if (!file) {
    // file picker dialog was canceled
    return;
}
const text = await file.read();
```
**Example**
```js
const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
if (files.length === 0) {
    // no files selected
}
```


#### fileSystemProvider.getFileForSaving(suggestedName, options) ⇒ `Promise.<?File>`
Gets a file reference suitable for read-write by displaying a "Save" file
picker dialog to the user.

If the act of writing to the file would overwrite it, the file picker
will prompt the user to confirm before returning a result to you.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Returns**: `Promise.<?File>` - returns the selected file, or `null` if canceled
**Since**: XD 13

| Param | Type | Description |
| --- | --- | --- |
| suggestedName | `string` | Required. The file extension should match one of the options specified in the `types` option. |
| options | `Object` |  |
| \[options.types] | `Array.<string>` | Required. Allowed file extensions, with no "." prefix. |

**Example**
```js
const file = await fs.getFileForSaving("output.txt", { types: [ "txt" ]});
if (!file) {
    // file picker was cancelled
    return;
}
await file.write("It was a dark and stormy night");
```


#### fileSystemProvider.getFolder() ⇒ `Promise.<?Folder>`
Gets a folder from the file system via a folder picker dialog. The files
and folders within can be accessed via [getEntries](#module-storage-folder-getentries). Any
files within are read-write.

If the user cancels the picker, `null` is returned instead.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Returns**: `Promise.<?Folder>` - the selected folder or `null` if picker is canceled.
**Since**: XD 13
**Example**
```js
const folder = await fs.getFolder();
const myNovel = (await fs.getEntries()).find(entry => entry.name.includes('novel'));
const text = await myNovel.read();
```


#### fileSystemProvider.getTemporaryFolder() ⇒ `Promise.<Folder>`
Returns a temporary folder. The contents of the folder may be lost when
the host application is closed.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Since**: XD 13
**Example**
```js
const temp = await fs.getTemporaryFolder();
```


#### fileSystemProvider.getDataFolder() ⇒ `Promise.<Folder>`
Returns a folder that can be used for storing plugin-specific data without needing user
interaction though a file picker. Its contents remain persistent when the host
application is updated _and_ when your plugin is updated.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Since**: XD 13


#### fileSystemProvider.getPluginFolder() ⇒ `Promise.<Folder>`
Returns an plugin's folder – this folder and everything within it are read only.
This contains all the Plugin related packaged assets.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)
**Since**: XD 13


#### fileSystemProvider.getFsUrl(entry) ⇒ `URL`
Returns the fs url of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)

| Param | Type |
| --- | --- |
| entry | `Entry` |



#### fileSystemProvider.getNativePath(entry) ⇒ `string`
Returns the platform native file system path of given entry.

**Kind**: instance method of [`FileSystemProvider`](#module-storage-filesystemprovider)

| Param | Type |
| --- | --- |
| entry | `Entry` |



### storage.Folder ⇐ `Entry`
Represents a folder on a file system. You'll never instantiate this directly,
but will get it by calling [getTemporaryFolder](#module-storage-filesystemprovider-gettemporaryfolder),
[getFolder](#module-storage-filesystemprovider-getfolder), or via
[getEntries](#module-storage-folder-getentries).

> **Info**
>
> Important:
>
> * A Folder object may exist even if the corresponding folder on disk does not currently
>  exist.
> * It's possible for multiple Folder objects to represent the same folder on disk,
>   for example if the folder was picked via multiple separate folder picker invocations.

**Kind**: static class of [`storage`](#module-storage)
**Extends**: `Entry`
**Since**: XD 13

* [.Folder](#module-storage-folder) ⇐ `Entry`
    * [.getEntries()](#module-storage-folder-getentries) ⇒ `Promise.<Array.<Entry>>`
    * [.createFile(name, options)](#module-storage-folder-createfile) ⇒ `Promise.<File>`
    * [.createFolder(name)](#module-storage-folder-createfolder) ⇒ `Folder`
    * [.getEntry(filePath)](#module-storage-folder-getentry) ⇒ `Promise.<(File\|Folder)>`
    * [.renameEntry(entry, newName, options)](#module-storage-folder-renameentry) ⇒ `Promise`



#### folder.getEntries() ⇒ `Promise.<Array.<Entry>>`
Returns an array of entries contained within this folder.

**Kind**: instance method of [`Folder`](#module-storage-folder)
**Returns**: `Promise.<Array.<Entry>>` - The entries within the folder.
**Since**: XD 13
**Example**
```js
const entries = await aFolder.getEntries();
const allFiles = entries.filter(entry => entry.isFile);
```


#### folder.createFile(name, options) ⇒ `Promise.<File>`
Creates a File object within this folder, which need not correspond to a file that exists on disk
yet.

> **Info**
>
> Important:
>
> * If the file already exists on disk (and `overwrite` is true), creates a File object but does not
>   modify the existing file on disk in any way.
> * If the file does not exist yet, creates a File object but does _not_ create the file on disk yet.
>   You can then use [write](#module-storage-file-write) to create the file and give it
>   content.

**Kind**: instance method of [`Folder`](#module-storage-folder)
**Returns**: `Promise.<File>` - the created file entry
**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | `string` |  | the name of the file to create. |
| options | `Object` |  |  |
| \[options.overwrite] | `boolean` | `false` | If `false`, the call will fail if the file already exists. If `true`, the call will succeed regardless of whether the file currently exists on disk. |

**Example**
```js
const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
```


#### folder.createFolder(name) ⇒ `Folder`
Creates a Folder object within this folder _and_ creates the folder on disk. Unlike `createFile()`,
this call _does_ modify the disk, and it cannot be used if the folder already exists
(use [getEntry](#module-storage-folder-getentry) in that case).

> **Info**
>
> Important:
>
> * If the folder already exists on disk, fails with an error.
> * If the folder does not exist yet, immediately creates it on disk and then returns a Folder object
>   for it.

**Kind**: instance method of [`Folder`](#module-storage-folder)
**Returns**: `Folder` - the created folder entry object
**Since**: XD 13

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | the name of the folder to create. |

**Example**
```js
const myCollectionsFolder = await aFolder.createFolder("collections");
```


#### folder.getEntry(filePath) ⇒ `Promise.<(File\|Folder)>`
Returns a File or Folder entry for an item that already exists on disk within this folder or
its hierarchy of subfolders. Fails if no entry with the given name/path currently exists on disk.

**Kind**: instance method of [`Folder`](#module-storage-folder)
**Returns**: `Promise.<(File\|Folder)>` - the fetched entry.
**Since**: XD 13

| Param | Type | Description |
| --- | --- | --- |
| filePath | `string` | Name, with optional relative path prefix, of an existing entry within this folder |

**Example**
```js
const myNovel = await aFolder.getEntry("mynovel.txt");
```


#### folder.renameEntry(entry, newName, options) ⇒ `Promise`
Renames an item on disk to a new name within the same folder. The Entry object passed to this
function is automatically updated to reference the new name, however any _other_ Entry objects
referencing the original item will not be updated, and will thus no longer point to an item that
exists on disk.

**Kind**: instance method of [`Folder`](#module-storage-folder)
**Since**: XD 13

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| entry | `Entry` |  | entry to rename (File or Folder). Must exist. |
| newName | `string` |  | the new name to assign |
| options | `any` |  |  |
| \[options.overwrite] | `boolean` | `false` | if `true`, renaming can overwrite an existing entry |

**Example**
```js
await myNovels.rename(myNovel, "myFantasticNovel.txt");
```


### storage.localFileSystem : `LocalFileSystemProvider`
**Kind**: static property of [`storage`](#module-storage)


### storage.errors : `Errors`
**Kind**: static property of [`storage`](#module-storage)

* [.errors](#module-storage-errors) : `Errors`
    * [.AbstractMethodInvocationError](#module-storage-errors-abstractmethodinvocationerror) ⇐ `Error`
    * [.ProviderMismatchError](#module-storage-errors-providermismatcherror) ⇐ `Error`
    * [.EntryIsNotAnEntryError](#module-storage-errors-entryisnotanentryerror) ⇐ `Error`
    * [.EntryIsNotAFolderError](#module-storage-errors-entryisnotafoldererror) ⇐ `Error`
    * [.EntryIsNotAFileError](#module-storage-errors-entryisnotafileerror) ⇐ `Error`
    * [.NotAFileSystemError](#module-storage-errors-notafilesystemerror) ⇐ `Error`
    * [.OutOfSpaceError](#module-storage-errors-outofspaceerror) ⇐ `Error`
    * [.PermissionDeniedError](#module-storage-errors-permissiondeniederror) ⇐ `Error`
    * [.EntryExistsError](#module-storage-errors-entryexistserror) ⇐ `Error`
    * [.FileIsReadOnlyError](#module-storage-errors-fileisreadonlyerror) ⇐ `Error`
    * [.DomainNotSupportedError](#module-storage-errors-domainnotsupportederror) ⇐ `Error`
    * [.InvalidFileNameError](#module-storage-errors-invalidfilenameerror) ⇐ `Error`



#### errors.AbstractMethodInvocationError ⇐ `Error`
Attempted to invoke an abstract method.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.ProviderMismatchError ⇐ `Error`
Attempted to execute a command that required the providers of all
entries to match.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.EntryIsNotAnEntryError ⇐ `Error`
The object passed as an entry is not actually an `Entry`.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.EntryIsNotAFolderError ⇐ `Error`
The entry is not a folder, but was expected to be a folder.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.EntryIsNotAFileError ⇐ `Error`
The entry is not a file, but was expected to be.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.NotAFileSystemError ⇐ `Error`
The instance was expected to be a file system, but wasn't.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.OutOfSpaceError ⇐ `Error`
The file system is out of space (or quota has been exceeded)

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.PermissionDeniedError ⇐ `Error`
The file system revoked permission to complete the requested
action.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.EntryExistsError ⇐ `Error`
An attempt was made to overwrite an entry without indicating
that it was safe to do so via `overwrite: true`.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.FileIsReadOnlyError ⇐ `Error`
An attempt was made to write to a file that was opened as
read-only.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.DomainNotSupportedError ⇐ `Error`
Domain is not supported by the current FileSystemProvider
instance.

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


#### errors.InvalidFileNameError ⇐ `Error`
The file name contains invalid characters

**Kind**: static class of [`errors`](#module-storage-errors)
**Extends**: `Error`


### storage.fileTypes
This namespace describes the various file type extensions that can used be used in some FS file open methods.

**Kind**: static constant of [`storage`](#module-storage)

* [.fileTypes](#module-storage-filetypes)
    * [.text](#module-storage-filetypes-text)
    * [.images](#module-storage-filetypes-images)
    * [.all](#module-storage-filetypes-all)



#### fileTypes.text
Text file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)


#### fileTypes.images
Image file extensions

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)


#### fileTypes.all
All file types

**Kind**: static property of [`fileTypes`](#module-storage-filetypes)


### storage.formats
This namespace describes the file content formats supported in FS methods like read and write.

**Kind**: static constant of [`storage`](#module-storage)

* [.formats](#module-storage-formats)
    * [.utf8](#module-storage-formats-utf8) : `Symbol`
    * [.binary](#module-storage-formats-binary) : `Symbol`



#### formats.utf8 : `Symbol`
UTF8 File encoding

**Kind**: static property of [`formats`](#module-storage-formats)


#### formats.binary : `Symbol`
Binary file encoding

**Kind**: static property of [`formats`](#module-storage-formats)


### storage.modes
This namespace describes the access modes that can be supported by a given File entry.

**Kind**: static constant of [`storage`](#module-storage)

* [.modes](#module-storage-modes)
    * [.readOnly](#module-storage-modes-readonly) : `Symbol`
    * [.readWrite](#module-storage-modes-readwrite) : `Symbol`



#### modes.readOnly : `Symbol`
The file is read-only; attempts to write will fail.

**Kind**: static property of [`modes`](#module-storage-modes)


#### modes.readWrite : `Symbol`
The file is read-write.

**Kind**: static property of [`modes`](#module-storage-modes)


### storage.types
This namespace describes the type of the entry. Whether file or folder etc.

**Kind**: static constant of [`storage`](#module-storage)

* [.types](#module-storage-types)
    * [.file](#module-storage-types-file) : `Symbol`
    * [.folder](#module-storage-types-folder) : `Symbol`



#### types.file : `Symbol`
A file; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)


#### types.folder : `Symbol`
A folder; used when creating an entity

**Kind**: static property of [`types`](#module-storage-types)
