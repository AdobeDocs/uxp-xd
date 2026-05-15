---
title: window.localStorage
description: Provides a local key-value store useful for setting preferences and other kinds of data.
---



# window.localStorage
Provides a local key-value store useful for setting preferences and other kinds of data.
This data is technically persistent, but can be cleared in a variety of ways,
so you should not store data using localStorage that you cannot otherwise reconstruct.
<InlineAlert variant="warning" slots="text"/>

Do not store passwords or other secure forms of data using `localStorage`. Instead, use [storage.secureStorage](/uxp/reference-js/Modules/uxp/key-value-storage/secure-storage.md).





## length ⇒ `int`
**Read only**
Returns number of items stored in the local storage.

**Returns**: `int` - returns the number of items  




## key()
Returns key which is stored at the given index

**Returns**: `int` - Returns key which is stored at the given index.  

| Param | Type |
| --- | --- |
| index. | `number` | 





## getItem(key)
Get value from the local storage for the key.

**Returns**: `string` - returns value corresponding to the key as string. If key doesn't exist, this function returns null.  

| Param | Type | Description |
| --- | --- | --- |
| key | `string` | A key to get value. |





## setItem(key, value)
Set key and value to the local storage.
If the key is newly set or value is different from old value, an update event will be fired later.

**Throws**:

- `Error` throw an error if fails to store


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | A key to set value |
| value | `string` | A value for the key |





## removeItem(key)
Remove a key/value pair from the local storage.
If the key exists in the local storage, an update event will be fired later.


| Param | Type | Description |
| --- | --- | --- |
| key | `string` | A key to set value |





## clear()
Remove all key/value pairs from the local storage.
An update event will be fired later.


  