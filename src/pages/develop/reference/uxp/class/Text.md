---
title: Text
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="text" id="text"/a
---



## Text

**Extends**: [`CharacterData`](#characterdata)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Text

* [Text](#Text)
    * [new Text(document, textContent)](#new-text-new)
    * [.nodeName](#text-nodename) : `string`
    * [.nodeType](#text-nodetype) : `number`
    * [.data](#characterdata-data) : `string`
    * [.textContent](#characterdata-textcontent) : `string`
    * [.nodeValue](#characterdata-nodevalue) : `string`
    * [.length](#characterdata-length) : `number`
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
    * [.childNodes](#Node+childNodes) : [`NodeList`](#nodelist)
    * [.children](#Node+children) : [`HTMLCollection`](#htmlcollection)
    * [.ownerDocument](#node-ownerdocument)
    * [.attributes](#node-attributes)
    * [.substringData(offset, count)](#characterdata-substringdata)
    * [.appendData(arg)](#characterdata-appenddata)
    * [.insertData(offset, arg)](#characterdata-insertdata)
    * [.deleteData(offset, count)](#characterdata-deletedata)
    * [.replaceData(offset, count, arg)](#characterdata-replacedata)
    * [.hasChildNodes()](#node-haschildnodes)
    * [.cloneNode(deep)](#Node+cloneNode)
    * [.appendChild(child)](#Node+appendChild)
    * [.insertBefore(child, before)](#Node+insertBefore)
    * [.replaceChild(newChild, oldChild)](#Node+replaceChild)
    * [.removeChild(child)](#Node+removeChild)
    * [.remove()](#node-remove)
    * [.before(...nodes)](#node-before)
    * [.after(...nodes)](#node-after)
    * [.replaceWith(...nodes)](#node-replacewith)
    * [.contains(node)](#node-contains)
    * [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
    * [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)


### new Text(document, textContent)
Creates an instance of Text.

| Param | Type |
| --- | --- |
| document | `\*` |
| textContent | `\*` |


### text.nodeName : `string`

**Default**: `&quot;\&quot;#text\&quot;&quot;`

**Read only**


### text.nodeType : `number`

**Default**: `Node.TEXT_NODE`

**Read only**


### text.data : `string`


### text.textContent : `string`


### text.nodeValue : `string`


### text.length : `number`

**Read only**


### text.contentEditable

**Read only**


### text.isConnected : `boolean`

**Read only**


### text.parentNode : [`Node`](#node)

**Read only**


### text.parentElement : [`Element`](#element)

**Read only**


### text.firstChild : [`Node`](#node)

**Read only**


### text.lastChild : [`Node`](#node)

**Read only**


### text.previousSibling : [`Node`](#node)

**Read only**


### text.nextSibling : [`Node`](#node)

**Read only**


### text.firstElementChild : [`Node`](#node)

**Read only**


### text.lastElementChild : [`Node`](#node)

**Read only**


### text.previousElementSibling : [`Node`](#node)

**Read only**


### text.nextElementSibling : [`Node`](#node)

**Read only**


### text.childNodes : [`NodeList`](#nodelist)

**Read only**


### text.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### text.ownerDocument

**Read only**


### text.attributes

**Read only**


### text.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |


### text.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |


### text.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |


### text.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |


### text.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |


### text.hasChildNodes()


### text.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### text.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### text.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### text.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### text.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### text.remove()


### text.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### text.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### text.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### text.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### text.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### text.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### text.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

