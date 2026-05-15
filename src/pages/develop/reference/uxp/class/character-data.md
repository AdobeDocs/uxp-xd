---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Character Data
description: Creates an instance of CharacterData.
---




## CharacterData

**Extends**: [`Node`](#node)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/CharacterData](https://developer.mozilla.org/en-US/docs/Web/API/CharacterData)

* [CharacterData](#CharacterData)
    * [new CharacterData(document, textContent)](#new-characterdata-new)
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



### new CharacterData(document, textContent)
Creates an instance of CharacterData.

| Param | Type |
| --- | --- |
| document | `\*` |
| textContent | `\*` |



### characterData.data : `string`



### characterData.textContent : `string`

**Overrides**: [`textContent`](#node-textcontent)



### characterData.nodeValue : `string`



### characterData.length : `number`

**Read only**



### characterData.contentEditable

**Read only**



### characterData.isConnected : `boolean`

**Read only**



### characterData.parentNode : [`Node`](#node)

**Read only**



### characterData.parentElement : [`Element`](#element)

**Read only**



### characterData.firstChild : [`Node`](#node)

**Read only**



### characterData.lastChild : [`Node`](#node)

**Read only**



### characterData.previousSibling : [`Node`](#node)

**Read only**



### characterData.nextSibling : [`Node`](#node)

**Read only**



### characterData.firstElementChild : [`Node`](#node)

**Read only**



### characterData.lastElementChild : [`Node`](#node)

**Read only**



### characterData.previousElementSibling : [`Node`](#node)

**Read only**



### characterData.nextElementSibling : [`Node`](#node)

**Read only**



### characterData.childNodes : [`NodeList`](#nodelist)

**Read only**



### characterData.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### characterData.ownerDocument

**Read only**



### characterData.attributes

**Read only**



### characterData.substringData(offset, count)

| Param | Type |
| --- | --- |
| offset | `\*` |
| count | `\*` |



### characterData.appendData(arg)

| Param | Type |
| --- | --- |
| arg | `string` |



### characterData.insertData(offset, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| arg | `string` |



### characterData.deleteData(offset, count)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |



### characterData.replaceData(offset, count, arg)

| Param | Type |
| --- | --- |
| offset | `number` |
| count | `number` |
| arg | `string` |



### characterData.hasChildNodes()



### characterData.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### characterData.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### characterData.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### characterData.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### characterData.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### characterData.remove()



### characterData.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### characterData.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### characterData.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### characterData.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### characterData.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### characterData.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### characterData.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

