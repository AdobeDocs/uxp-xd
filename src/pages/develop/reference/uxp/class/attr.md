---
title: Attr
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="attr" id="attr"/a
---



## Attr

**Extends**: [`Node`](#node)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr)

* [Attr](#Attr)
    * [new Attr(document, nodeName)](#new-attr-new)
    * [.nodeName](#attr-nodename) : `string`
    * [.localName](#attr-localname) : `string`
    * [.name](#attr-name) : `string`
    * [.specified](#attr-specified) : `boolean`
    * [.value](#attr-value) : `\*`
    * [.nodeType](#attr-nodetype) : `number`
    * [.nodeValue](#attr-nodevalue) : `\*`
    * [.ownerElement](#Attr+ownerElement) : [`Element`](#element)
    * [.contentEditable](#node-contenteditable)
    * [.isConnected](#node-isconnected) : `boolean`
    * [.parentNode](#Node+parentNode) : [`Node`](#node)
    * [.parentElement](#Node+parentElement) : [`Element`](#element)
    * [.firstChild](#Node+firstChild) : [`Node`](#node)
    * [.lastChild](#Node+lastChild) : [`Node`](#node)
    * [.previousSibling](#Node+previousSibling) : [`Node`](#node)
    * [.nextSibling](#Node+nextSibling) : [`Node`](#node)
    * [.firstElementChild](#Node+firstElementChild) : [`Node`](#node)
    * [.lastElementChild](#Node+lastElementChild) : [`Node`](#node)
    * [.previousElementSibling](#Node+previousElementSibling) : [`Node`](#node)
    * [.nextElementSibling](#Node+nextElementSibling) : [`Node`](#node)
    * [.textContent](#node-textcontent) : `string`
    * [.childNodes](#Node+childNodes) : [`NodeList`](#nodelist)
    * [.children](#Node+children) : [`HTMLCollection`](#htmlcollection)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.remove()](#attr-remove)
    * [.hasChildNodes()](#node-haschildnodes)
    * [.cloneNode(deep)](#Node+cloneNode)
    * [.appendChild(child)](#Node+appendChild)
    * [.insertBefore(child, before)](#Node+insertBefore)
    * [.replaceChild(newChild, oldChild)](#Node+replaceChild)
    * [.removeChild(child)](#Node+removeChild)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.contains(node)](#node-contains)
    * [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
    * [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)


### new Attr(document, nodeName)
Creates an instance of Attr.

| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| nodeName | `string` |


### attr.nodeName : `string`

**Read only**


### attr.localName : `string`

**Read only**


### attr.name : `string`

**Read only**


### attr.specified : `boolean`

**Read only**


### attr.value : `\*`


### attr.nodeType : `number`

**Read only**


### attr.nodeValue : `\*`


### attr.ownerElement : [`Element`](#element)

**Read only**


### attr.contentEditable

**Read only**


### attr.isConnected : `boolean`

**Read only**


### attr.parentNode : [`Node`](#node)

**Read only**


### attr.parentElement : [`Element`](#element)

**Read only**


### attr.firstChild : [`Node`](#node)

**Read only**


### attr.lastChild : [`Node`](#node)

**Read only**


### attr.previousSibling : [`Node`](#node)

**Read only**


### attr.nextSibling : [`Node`](#node)

**Read only**


### attr.firstElementChild : [`Node`](#node)

**Read only**


### attr.lastElementChild : [`Node`](#node)

**Read only**


### attr.previousElementSibling : [`Node`](#node)

**Read only**


### attr.nextElementSibling : [`Node`](#node)

**Read only**


### attr.textContent : `string`


### attr.childNodes : [`NodeList`](#nodelist)

**Read only**


### attr.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### attr.ownerDocument

**Read only**


### attr.attributes

**Read only**


### attr.remove()

**Overrides**: [`remove`](#node-remove)


### attr.hasChildNodes()


### attr.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### attr.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### attr.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### attr.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### attr.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### attr.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### attr.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### attr.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### attr.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### attr.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### attr.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### attr.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

