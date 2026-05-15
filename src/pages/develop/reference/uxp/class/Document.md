---
title: Document
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="document" id="document"/a
---



## Document

**Extends**: [`Node`](#node)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Document

* [Document](#Document)
    * [new Document()](#new-document-new)
    * [.onLine](#document-online) : `boolean`
    * [.nodeName](#document-nodename) : `string`
    * [.nodeType](#document-nodetype) : `number`
    * [.uxpContainer](#Document+uxpContainer)
    * [.activeElement](#Document+activeElement) : [`Node`](#node)
    * [.documentElement](#Document+documentElement) : [`Document`](#document)
    * [.head](#Document+head) : [`HTMLHeadElement`](#htmlheadelement)
    * [.body](#Document+body) : [`HTMLBodyElement`](#htmlbodyelement)
    * [.clipboard](#document-clipboard) : `Clippoard`
    * [.styleSheets](#Document+styleSheets) : [`StyleSheetList`](#stylesheetlist)
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
    * [.createElement(nodeName)](#Document+createElement)
    * [.createElementNS(ns, nodeName)](#Document+createElementNS)
    * [.createAttribute(nodeName)](#Document+createAttribute)
    * [.createTextNode([text])](#Document+createTextNode)
    * [.createComment([comment])](#Document+createComment)
    * [.createDocumentFragment()](#Document+createDocumentFragment)
    * [.cloneNode(deep)](#Document+cloneNode)
    * [.adoptNode(externalNode, deep)](#Document+adoptNode)
    * [.importNode(externalNode, deep)](#Document+importNode)
    * [.querySelector(selector)](#Document+querySelector)
    * [.querySelectorAll(selector)](#Document+querySelectorAll)
    * [.getElementsByClassName(name)](#Document+getElementsByClassName)
    * [.getElementsByTagName(name)](#Document+getElementsByTagName)
    * [.getElementById(id)](#Document+getElementById)
    * [.hasChildNodes()](#node-haschildnodes)
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


### new Document()
Creates an instance of Document.


### document.onLine : `boolean`
Indicates if the computer is online

**Read only**


### document.nodeName : `string`

**Read only**


### document.nodeType : `number`

**Read only**


### document.uxpContainer


### document.activeElement : [`Node`](#node)

**Read only**


### document.documentElement : [`Document`](#document)

**Read only**


### document.head : [`HTMLHeadElement`](#htmlheadelement)

**Read only**


### document.body : [`HTMLBodyElement`](#htmlbodyelement)

**Read only**


### document.clipboard : `Clippoard`

**Read only**


### document.styleSheets : [`StyleSheetList`](#stylesheetlist)

**Read only**


### document.contentEditable

**Read only**


### document.isConnected : `boolean`

**Read only**


### document.parentNode : [`Node`](#node)

**Read only**


### document.parentElement : [`Element`](#element)

**Read only**


### document.firstChild : [`Node`](#node)

**Read only**


### document.lastChild : [`Node`](#node)

**Read only**


### document.previousSibling : [`Node`](#node)

**Read only**


### document.nextSibling : [`Node`](#node)

**Read only**


### document.firstElementChild : [`Node`](#node)

**Read only**


### document.lastElementChild : [`Node`](#node)

**Read only**


### document.previousElementSibling : [`Node`](#node)

**Read only**


### document.nextElementSibling : [`Node`](#node)

**Read only**


### document.textContent : `string`


### document.childNodes : [`NodeList`](#nodelist)

**Read only**


### document.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### document.ownerDocument

**Read only**


### document.attributes

**Read only**


### document.createElement(nodeName)

| Param | Type |
| --- | --- |
| nodeName | `string` |


### document.createElementNS(ns, nodeName)

| Param | Type |
| --- | --- |
| ns | `string` |
| nodeName | `string` |


### document.createAttribute(nodeName)

| Param | Type |
| --- | --- |
| nodeName | `string` |


### document.createTextNode([text])

| Param | Type | Default |
| --- | --- | --- |
| \[text] | `string` | `&quot;&quot;` |


### document.createComment([comment])

| Param | Type | Default |
| --- | --- | --- |
| \[comment] | `string` | `&quot;&quot;` |


### document.createDocumentFragment()


### document.cloneNode(deep)

**Overrides**: [`cloneNode`](#node-clonenode)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### document.adoptNode(externalNode, deep)

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) |
| deep | `boolean` |


### document.importNode(externalNode, deep)

| Param | Type |
| --- | --- |
| externalNode | [`Node`](#node) |
| deep | `boolean` |


### document.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### document.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### document.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### document.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### document.getElementById(id)

| Param | Type |
| --- | --- |
| id | `string` |


### document.hasChildNodes()


### document.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### document.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### document.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### document.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### document.remove()


### document.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### document.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### document.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### document.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### document.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### document.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### document.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

