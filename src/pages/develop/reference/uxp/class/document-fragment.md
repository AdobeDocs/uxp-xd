---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Document Fragment
description: Overview of Document Fragment.
---




## DocumentFragment

**Extends**: [`Node`](#node)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

* [DocumentFragment](#DocumentFragment)
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



### documentFragment.contentEditable

**Read only**



### documentFragment.isConnected : `boolean`

**Read only**



### documentFragment.parentNode : [`Node`](#node)

**Read only**



### documentFragment.parentElement : [`Element`](#element)

**Read only**



### documentFragment.firstChild : [`Node`](#node)

**Read only**



### documentFragment.lastChild : [`Node`](#node)

**Read only**



### documentFragment.previousSibling : [`Node`](#node)

**Read only**



### documentFragment.nextSibling : [`Node`](#node)

**Read only**



### documentFragment.firstElementChild : [`Node`](#node)

**Read only**



### documentFragment.lastElementChild : [`Node`](#node)

**Read only**



### documentFragment.previousElementSibling : [`Node`](#node)

**Read only**



### documentFragment.nextElementSibling : [`Node`](#node)

**Read only**



### documentFragment.textContent : `string`



### documentFragment.childNodes : [`NodeList`](#nodelist)

**Read only**



### documentFragment.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### documentFragment.ownerDocument

**Read only**



### documentFragment.attributes

**Read only**



### documentFragment.hasChildNodes()



### documentFragment.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### documentFragment.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### documentFragment.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### documentFragment.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### documentFragment.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### documentFragment.remove()



### documentFragment.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### documentFragment.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### documentFragment.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### documentFragment.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### documentFragment.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### documentFragment.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### documentFragment.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

