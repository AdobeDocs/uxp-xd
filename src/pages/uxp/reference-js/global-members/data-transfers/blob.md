---
title: window.Blob
description: Size of the Blob in bytes
---



# window.Blob
**Since**: UXP v6.3  




## size
Size of the Blob in bytes





## type
MIME type of the Blob





## arrayBuffer()
Return the contents of the Blob in the form of an ArrayBuffer

**Returns**: `Promise<ArrayBuffer>` - A promise that resolves with an ArrayBuffer that contains the Blob's data in binary form  




## slice(start, end, contentType)
Return a new Blob containing the specified subset of the Blob's data

**Returns**: `Blob` - a new Blob object containing the specified subset of the data contained within the Blob on which this method was called  

| Param | Type | Description |
| --- | --- | --- |
| start | `*` | index into the Blob indicating the first byte to include in the new Blob |
| end | `*` | index into the Blob indicating the first byte that will NOT be included in the new Blob |
| contentType | `*` | content type to assign to the new Blob |





## stream()
Returns a ReadableStream which upon reading returns the data contained within the Blob

**Returns**: `ReadableStream` - ReadableStream which, upon reading, returns the contents of the Blob  




## text()
Returns a Promise that resolves with a string containing the contents of the Blob

**Returns**: `Promise<String>` - A promise that resolves with a string which contains the Blob's data as a text string. The data is always presumed to be in UTF-8 format.  

  