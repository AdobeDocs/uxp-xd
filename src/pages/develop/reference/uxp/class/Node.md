---
title: Node
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="node" id="node"/a
---



## Node

**Extends**: [`EventTarget`](#eventtarget)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

* [Node](#Node)
    * [new Node(ownerDocument)](#new-node-new)
    * _instance_
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
    * _static_
        * [.ELEMENT_NODE](#node-element-node)
        * [.ATTRIBUTE_NODE](#node-attribute-node)
        * [.TEXT_NODE](#node-text-node)
        * [.DOCUMENT_NODE](#node-document-node)
        * [.DOCUMENT_FRAGMENT_NODE](#node-document-fragment-node)
        * [.COMMENT_NODE](#node-comment-node)


### new Node(ownerDocument)
Creates an instance of Node.

| Param | Type |
| --- | --- |
| ownerDocument | `\*` |


### node.contentEditable

**Read only**


### node.isConnected : `boolean`

**Read only**


### node.parentNode : [`Node`](#node)

**Read only**


### node.parentElement : [`Element`](#element)

**Read only**


### node.firstChild : [`Node`](#node)

**Read only**


### node.lastChild : [`Node`](#node)

**Read only**


### node.previousSibling : [`Node`](#node)

**Read only**


### node.nextSibling : [`Node`](#node)

**Read only**


### node.firstElementChild : [`Node`](#node)

**Read only**


### node.lastElementChild : [`Node`](#node)

**Read only**


### node.previousElementSibling : [`Node`](#node)

**Read only**


### node.nextElementSibling : [`Node`](#node)

**Read only**


### node.textContent : `string`


### node.childNodes : [`NodeList`](#nodelist)

**Read only**


### node.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### node.ownerDocument

**Read only**


### node.attributes

**Read only**


### node.hasChildNodes()


### node.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### node.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### node.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### node.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### node.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### node.remove()


### node.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### node.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### node.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### node.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### node.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### node.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### node.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |


### Node.ELEMENT\_NODE


### Node.ATTRIBUTE\_NODE


### Node.TEXT\_NODE


### Node.DOCUMENT\_NODE


### Node.DOCUMENT\_FRAGMENT\_NODE


### Node.COMMENT\_NODE

