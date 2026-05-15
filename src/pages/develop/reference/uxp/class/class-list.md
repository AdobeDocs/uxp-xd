---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Class List
description: Implements classlist
---




## ClassList

**Extends**: [`DOMTokenList`](#domtokenlist)

**Category**: browser

**See**: [https://dom.spec.whatwg.org/#dom-element-classlist](https://dom.spec.whatwg.org/#dom-element-classlist)

* [ClassList](#ClassList)
    * [new ClassList()](#new-classlist-new)
    * _instance_
        * [.value](#classlist-value) : `string`
        * [.length](#domtokenlist-length)
        * [.add(...tokens)](#domtokenlist-add)
        * [.remove(...tokens)](#domtokenlist-remove)
        * [.replace(oldToken, newToken)](#domtokenlist-replace)
        * [.toggle(token, force)](#domtokenlist-toggle)
        * [.item(index)](#domtokenlist-item)
        * [.contains(token)](#domtokenlist-contains)
        * [.supports(token)](#domtokenlist-supports)
    * _static_
        * [.ClassList](#classlist-classlist)
            * [new ClassList(node)](#new-classlist-classlist-new)



### new ClassList()
Implements classlist



### classList.value : `string`

**Overrides**: [`value`](#domtokenlist-value)



### classList.length
Returns the number of tokens in the list

**Read only**

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-length](https://dom.spec.whatwg.org/#dom-domtokenlist-length)



### classList.add(...tokens)
Adds the specified tokens to the token list. If the token is already present, no error is thrown.

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-add](https://dom.spec.whatwg.org/#dom-domtokenlist-add)

| Param | Type |
| --- | --- |
| ...tokens | `string` |



### classList.remove(...tokens)
Removes the specified items from the token list. If the token is not present, no error is thrown.

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-remove](https://dom.spec.whatwg.org/#dom-domtokenlist-remove)

| Param | Type |
| --- | --- |
| ...tokens | `string` |



### classList.replace(oldToken, newToken)
Replaces an old token with a new token. If the old token doesn't exist,
no action occurs, and `false` is returned.

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-replace](https://dom.spec.whatwg.org/#dom-domtokenlist-replace)

| Param | Type |
| --- | --- |
| oldToken | `any` |
| newToken | `any` |



### classList.toggle(token, force)
Toggles a token within the list. If `force` is not present, then the following
rules are applied:

* if the token is present, it is removed, and `false` is returned
* if the token isn't present, it is added, and `true` is returned

If `force` is supplied, then:

* if `true`, the token is added
* if `false`, the token is removed

**Returns**: `boolean` - if the token exists in the last after the operation

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-toggle](https://dom.spec.whatwg.org/#dom-domtokenlist-toggle)

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |



### classList.item(index)
Return the item at the specified index, or `null` if the index is out-of-range

**Returns**: `string` - the item at the index, or null if index is out of range

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-item](https://dom.spec.whatwg.org/#dom-domtokenlist-item)

| Param | Type |
| --- | --- |
| index | `number` |



### classList.contains(token)
Returns whether the token is in the list or not.

**Returns**: `boolean` - if `true`, the token is in the list, otherwise it isn't

**Throws**:

- [`DOMException`](#domexception)

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-contains](https://dom.spec.whatwg.org/#dom-domtokenlist-contains)

| Param | Type |
| --- | --- |
| token | `any` |



### classList.supports(token)
Returns `true` if the token is acceptable to the list; otherwise returns `false`.
If `false` is returned, passing the token would throw an error when calling
any other method.

**Returns**: `boolean` - if `true`, the token is acceptable when calling other methods

**See**: [https://dom.spec.whatwg.org/#dom-domtokenlist-supports](https://dom.spec.whatwg.org/#dom-domtokenlist-supports)

| Param | Type |
| --- | --- |
| token | `string` |



### ClassList.ClassList



#### new ClassList(node)
Creates an instance of ClassList.

| Param | Type |
| --- | --- |
| node | `any` |

