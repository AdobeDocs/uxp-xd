---
jsDoc: true
title: require('uxp').storage.EntryMetadata
description: Metadata for an entry. It includes useful information such as:
---



# require('uxp').storage.EntryMetadata
Metadata for an entry. It includes useful information such as:

* size of the file (if a file)
* date created
* date modified
* name

You'll not instantiate this directly; use [Entry#getMetadata](/uxp/reference-js/Modules/uxp/persistent-file-storage/entry.md#module-storage-entry-getmetadata) to do so.





## name : `string`
The name of the entry.





## size : `number`
The size of the entry, if a file. Zero if a folder.





## dateCreated : `Date`
The date this entry was created.





## dateModified : `Date`
The date this entry was modified.





## isFile : `boolean`
Indicates if the entry is a file





## isFolder : `boolean`
Indicates if the entry is a folder


