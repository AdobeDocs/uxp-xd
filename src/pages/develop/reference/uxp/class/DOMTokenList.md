---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---


<a name="domtokenlist" id="domtokenlist"></a>

## DOMTokenList
DOMTokenList supports the ClassList and other token list functionality

**See**

- https://dom.spec.whatwg.org/#interface-domtokenlist
- https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList

* [DOMTokenList](#domtokenlist)
    * [.length](#domtokenlist-length)
    * [.value](#domtokenlist-value)
    * [.add(...tokens)](#domtokenlist-add)
    * [.remove(...tokens)](#domtokenlist-remove)
    * [.replace(oldToken, newToken)](#domtokenlist-replace)
    * [.toggle(token, force)](#domtokenlist-toggle)
    * [.item(index)](#domtokenlist-item)
    * [.contains(token)](#domtokenlist-contains)
    * [.supports(token)](#domtokenlist-supports)

<a name="domtokenlist-length" id="domtokenlist-length"></a>

### domTokenList.length
Returns the number of tokens in the list

**Read only**

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-length

<a name="domtokenlist-value" id="domtokenlist-value"></a>

### domTokenList.value
The serialized string value of the token list

**Read only**

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-value

<a name="domtokenlist-add" id="domtokenlist-add"></a>

### domTokenList.add(...tokens)
Adds the specified tokens to the token list. If the token is already present, no error is thrown.

**Throws**:

- [`DOMException`](#domexception)

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-add

| Param | Type |
| --- | --- |
| ...tokens | `string` |

<a name="domtokenlist-remove" id="domtokenlist-remove"></a>

### domTokenList.remove(...tokens)
Removes the specified items from the token list. If the token is not present, no error is thrown.

**Throws**:

- [`DOMException`](#domexception)

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-remove

| Param | Type |
| --- | --- |
| ...tokens | `string` |

<a name="domtokenlist-replace" id="domtokenlist-replace"></a>

### domTokenList.replace(oldToken, newToken)
Replaces an old token with a new token. If the old token doesn't exist,
no action occurs, and `false` is returned.

**Throws**:

- [`DOMException`](#domexception)

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-replace

| Param | Type |
| --- | --- |
| oldToken | `any` |
| newToken | `any` |

<a name="domtokenlist-toggle" id="domtokenlist-toggle"></a>

### domTokenList.toggle(token, force)
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

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-toggle

| Param | Type |
| --- | --- |
| token | `string` |
| force | `boolean` |

<a name="domtokenlist-item" id="domtokenlist-item"></a>

### domTokenList.item(index)
Return the item at the specified index, or `null` if the index is out-of-range

**Returns**: `string` - the item at the index, or null if index is out of range

**Throws**:

- [`DOMException`](#domexception)

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-item

| Param | Type |
| --- | --- |
| index | `number` |

<a name="domtokenlist-contains" id="domtokenlist-contains"></a>

### domTokenList.contains(token)
Returns whether the token is in the list or not.

**Returns**: `boolean` - if `true`, the token is in the list, otherwise it isn't

**Throws**:

- [`DOMException`](#domexception)

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-contains

| Param | Type |
| --- | --- |
| token | `any` |

<a name="domtokenlist-supports" id="domtokenlist-supports"></a>

### domTokenList.supports(token)
Returns `true` if the token is acceptable to the list; otherwise returns `false`.
If `false` is returned, passing the token would throw an error when calling
any other method.

**Returns**: `boolean` - if `true`, the token is acceptable when calling other methods

**See**: https://dom.spec.whatwg.org/#dom-domtokenlist-supports

| Param | Type |
| --- | --- |
| token | `string` |

