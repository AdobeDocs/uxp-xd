---
jsDoc: true
title: require('uxp').storage.Entry
description: An Entry is the base class for File and Folder. You'll
---



# require('uxp').storage.Entry
An `Entry` is the base class for `File` and `Folder`. You'll
typically never instantiate an `Entry` directly, but it provides
the common fields and methods that both `File` and `Folder`
share.





## Entry(name, provider, id)
Creates an instance of Entry.


| Param | Type |
| --- | --- |
| name | `*` | 
| provider | `*` | 
| id | `*` | 





## isEntry : `boolean`
Indicates that this instance is an `Entry`. Useful for type-checking.

**Example**  
```js
if (something.isEntry) {
    return something.getMetadata();
}
```




## isFile : `boolean`
**Read only**
Indicates that this instance is **not** a `File`. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFile) {
    return "This entry is not a file.";
}
```




## isFolder : `boolean`
**Read only**
Indicates that this instance is **not** a folder. Useful for type-
checking.

**Example**  
```js
if (!anEntry.isFolder) {
    return "This entry is not a folder.";
}
```




## name : `string`
**Read only**
The name of this entry. Read-only.

**Example**  
```js
console.log(anEntry.name);
```




## provider : `FileSystemProvider`
**Read only**
The associated provider that services this entry. Read-only.

**Example**  
```js
if (entryOne.provider !== entryTwo.provider) {
    throw new Error("Providers are not the same");
}
```




## url : `string`
**Read only**
The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.

**Example**  
```js
console.log(anEntry.url);
```




## nativePath : `string`
**Read only**
The platform native file-system path of this entry. Read-only

**Example**  
```js
console.log(anEntry.nativePath);
```




## toString()
Returns the details of the given entry like name, type and native path in a readable string format.

**Returns**: `string`



## copyTo(folder, options)
Copies this entry to the specified `folder`.

**Returns**: `Promise<File|Folder>`

**Throws**:

- `EntryExists` if the attempt would overwrite an entry and `overwrite` is `false`
- `PermissionDenied` if the underlying file system rejects the attempt
- `OutOfSpace` if the file system is out of storage space


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to copy this entry |
| options | `*` |  |  |
| \[options.overwrite] | `boolean` | `false` | if `true`, allows overwriting existing entries |
| \[options.allowFolderCopy] | `boolean` | `false` | if `true`, allows copying the folder |

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
await someFolder.copyTo(anotherFolder, {overwrite: true, allowFolderCopy: true});
```




## moveTo(folder, options)
Moves this entry to the target folder, optionally specifying a new name.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folder | `Folder` |  | the folder to which to move this entry |
| options | `*` |  |  |
| \[options.overwrite] | `boolean` | `false` | If `true` allows the move to overwrite existing files |
| \[options.newName] | `string` |  | If specified, the entry is renamed to this name |

**Returns**: `Promise<void>`

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




## delete()
Removes this entry from the file system. If the entry is a folder, all the
contents will also be removed.

**Returns**: `Promise<number>` - the number is 0 if succeeded, otherwise throws an Error 

**Example**  
```js
await aFile.delete();
```




## getMetadata()
Returns this entry's metadata.

**Returns**: `Promise<EntryMetadata>`  
**Example**  
```js
const metadata = aFile.getMetadata();
```

