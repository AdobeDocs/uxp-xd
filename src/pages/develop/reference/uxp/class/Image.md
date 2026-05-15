---
title: Image
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="image" id="image"/a
---



## Image

**Extends**: [`HTMLImageElement`](#htmlimageelement)

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

* [Image](#Image)
    * [.src](#htmlimageelement-src) : `string` \| `File`
    * [.dataset](#htmlelement-dataset)
    * [.nodeName](#element-nodename) : `string`
    * [.localName](#element-localname) : `string`
    * [.tagName](#element-tagname) : `string`
    * [.nodeType](#element-nodetype) : `number`
    * [.namespaceURI](#element-namespaceuri) : `string`
    * [.id](#element-id) : `string`
    * [.tabIndex](#element-tabindex) : `number`
    * [.className](#element-classname) : `string`
    * [.attributes](#Element+attributes) : [`NamedNodeMap`](#namednodemap)
    * [.style](#element-style) : `Style`
    * [.clientLeft](#element-clientleft) : `number`
    * [.clientTop](#element-clienttop) : `number`
    * [.clientWidth](#element-clientwidth) : `number`
    * [.clientHeight](#element-clientheight) : `number`
    * [.height](#element-height) : `string` \| `Number`
    * [.width](#element-width) : `string` \| `Number`
    * [.offsetParent](#Element+offsetParent) : [`Element`](#element)
    * [.offsetLeft](#element-offsetleft) : `number`
    * [.offsetTop](#element-offsettop) : `number`
    * [.offsetWidth](#element-offsetwidth) : `number`
    * [.offsetHeight](#element-offsetheight) : `number`
    * [.scrollLeft](#element-scrollleft) : `number`
    * [.scrollTop](#element-scrolltop) : `number`
    * [.scrollWidth](#element-scrollwidth) : `number`
    * [.scrollHeight](#element-scrollheight) : `number`
    * [.uxpContainer](#Element+uxpContainer) : [`UXPContainer`](#uxpcontainer)
    * [.disabled](#element-disabled) : `boolean`
    * [.innerHTML](#element-innerhtml) : `string`
    * [.outerHTML](#element-outerhtml) : `string`
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
    * [.scrollIntoView()](#element-scrollintoview)
    * [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
    * [.focus()](#element-focus)
    * [.blur()](#element-blur)
    * [.getAttribute(name)](#element-getattribute)
    * [.setAttribute(name, value)](#element-setattribute)
    * [.removeAttribute(name)](#element-removeattribute)
    * [.hasAttribute(name)](#element-hasattribute)
    * [.getAttributeNode(name)](#element-getattributenode)
    * [.setAttributeNode(newAttr)](#element-setattributenode)
    * [.removeAttributeNode(oldAttr)](#element-removeattributenode)
    * [.click()](#element-click)
    * [.getElementsByClassName(name)](#Element+getElementsByClassName)
    * [.getElementsByTagName(name)](#Element+getElementsByTagName)
    * [.querySelector(selector)](#Element+querySelector)
    * [.querySelectorAll(selector)](#Element+querySelectorAll)
    * [.getBoundingClientRect()](#element-getboundingclientrect)
    * [.insertAdjacentHTML(position, value)](#element-insertadjacenthtml)
    * [.insertAdjacentElement(position, node)](#Element+insertAdjacentElement)
    * [.insertAdjacentText(position, text)](#element-insertadjacenttext)
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


### image.src : `string` \| `File`
The source of the image


### image.dataset
Access to all the custom data attributes (data-*) set.

**See**: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset


### image.nodeName : `string`

**Read only**


### image.localName : `string`

**Read only**


### image.tagName : `string`

**Read only**


### image.nodeType : `number`

**Read only**


### image.namespaceURI : `string`

**Read only**


### image.id : `string`


### image.tabIndex : `number`


### image.className : `string`


### image.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**


### image.style : `Style`

**Read only**


### image.clientLeft : `number`

**Read only**


### image.clientTop : `number`

**Read only**


### image.clientWidth : `number`

**Read only**


### image.clientHeight : `number`

**Read only**


### image.height : `string` \| `Number`
The height of the element


### image.width : `string` \| `Number`
The width of the element


### image.offsetParent : [`Element`](#element)

**Read only**


### image.offsetLeft : `number`

**Read only**


### image.offsetTop : `number`

**Read only**


### image.offsetWidth : `number`

**Read only**


### image.offsetHeight : `number`

**Read only**


### image.scrollLeft : `number`


### image.scrollTop : `number`


### image.scrollWidth : `number`

**Read only**


### image.scrollHeight : `number`

**Read only**


### image.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**


### image.disabled : `boolean`


### image.innerHTML : `string`


### image.outerHTML : `string`


### image.contentEditable

**Read only**


### image.isConnected : `boolean`

**Read only**


### image.parentNode : [`Node`](#node)

**Read only**


### image.parentElement : [`Element`](#element)

**Read only**


### image.firstChild : [`Node`](#node)

**Read only**


### image.lastChild : [`Node`](#node)

**Read only**


### image.previousSibling : [`Node`](#node)

**Read only**


### image.nextSibling : [`Node`](#node)

**Read only**


### image.firstElementChild : [`Node`](#node)

**Read only**


### image.lastElementChild : [`Node`](#node)

**Read only**


### image.previousElementSibling : [`Node`](#node)

**Read only**


### image.nextElementSibling : [`Node`](#node)

**Read only**


### image.textContent : `string`


### image.childNodes : [`NodeList`](#nodelist)

**Read only**


### image.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### image.ownerDocument

**Read only**


### image.scrollIntoView()


### image.scrollIntoViewIfNeeded()


### image.focus()


### image.blur()


### image.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


### image.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


### image.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


### image.click()


### image.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### image.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### image.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### image.getBoundingClientRect()


### image.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


### image.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


### image.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


### image.hasChildNodes()


### image.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### image.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### image.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### image.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### image.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### image.remove()


### image.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### image.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### image.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### image.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### image.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### image.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### image.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

