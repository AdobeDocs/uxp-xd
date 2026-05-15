---
title: Comment
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="comment" id="comment"/a
---



## Comment

**Extends**: [`CharacterData`](#characterdata)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Comment](https://developer.mozilla.org/en-US/docs/Web/API/Comment)

* [Comment](#Comment)
    * [new Comment(document, comment)](#new-comment-new)
    * [.nodeName](#comment-nodename) : `string`
    * [.nodeType](#comment-nodetype) : `number`
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


### new Comment(document, comment)
Creates an instance of Comment.

| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| comment | `string` |


### comment.nodeName : `string`

**Read only**


### comment.nodeType : `number`

**Read only**


### comment.data : `string`


### comment.textContent : `string`


### comment.nodeValue : `string`


### comment.length : `number`

**Read only**


### comment.contentEditable

**Read only**


### comment.isConnected : `boolean`

**Read only**


### comment.parentNode : [`Node`](#node)

**Read only**


### comment.parentElement : [`Element`](#element)

**Read only**


### comment.firstChild : [`Node`](#node)

**Read only**


### comment.lastChild : [`Node`](#node)

**Read only**


### comment.previousSibling : [`Node`](#node)

**Read only**


### comment.nextSibling : [`Node`](#node)

**Read only**


### comment.firstElementChild : [`Node`](#node)

**Read only**


### comment.lastElementChild : [`Node`](#node)

**Read only**


### comment.previousElementSibling : [`Node`](#node)

**Read only**


### comment.nextElementSibling : [`Node`](#node)

**Read only**


### comment.childNodes : [`NodeList`](#nodelist)

**Read only**


### comment.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### comment.ownerDocument

**Read only**


### comment.attributes

**Read only**


### comment.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |


### comment.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |


### comment.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |


### comment.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |


### comment.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |


### comment.hasChildNodes()


### comment.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### comment.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### comment.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### comment.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### comment.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### comment.remove()


### comment.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### comment.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### comment.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### comment.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### comment.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### comment.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### comment.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

