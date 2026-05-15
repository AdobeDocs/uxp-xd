---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Image Element
description: Creates an instance of HTMLImageElement.
---




## HTMLImageElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)

* [HTMLImageElement](#HTMLImageElement)
    * [new HTMLImageElement(document, nodeName, namespaceURI)](#new-htmlimageelement-new)
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



### new HTMLImageElement(document, nodeName, namespaceURI)
Creates an instance of HTMLImageElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlImageElement.src : `string` \| `File`
The source of the image



### htmlImageElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlImageElement.nodeName : `string`

**Read only**



### htmlImageElement.localName : `string`

**Read only**



### htmlImageElement.tagName : `string`

**Read only**



### htmlImageElement.nodeType : `number`

**Read only**



### htmlImageElement.namespaceURI : `string`

**Read only**



### htmlImageElement.id : `string`



### htmlImageElement.tabIndex : `number`



### htmlImageElement.className : `string`



### htmlImageElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlImageElement.style : `Style`

**Read only**



### htmlImageElement.clientLeft : `number`

**Read only**



### htmlImageElement.clientTop : `number`

**Read only**



### htmlImageElement.clientWidth : `number`

**Read only**



### htmlImageElement.clientHeight : `number`

**Read only**



### htmlImageElement.height : `string` \| `Number`
The height of the element



### htmlImageElement.width : `string` \| `Number`
The width of the element



### htmlImageElement.offsetParent : [`Element`](#element)

**Read only**



### htmlImageElement.offsetLeft : `number`

**Read only**



### htmlImageElement.offsetTop : `number`

**Read only**



### htmlImageElement.offsetWidth : `number`

**Read only**



### htmlImageElement.offsetHeight : `number`

**Read only**



### htmlImageElement.scrollLeft : `number`



### htmlImageElement.scrollTop : `number`



### htmlImageElement.scrollWidth : `number`

**Read only**



### htmlImageElement.scrollHeight : `number`

**Read only**



### htmlImageElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlImageElement.disabled : `boolean`



### htmlImageElement.innerHTML : `string`



### htmlImageElement.outerHTML : `string`



### htmlImageElement.contentEditable

**Read only**



### htmlImageElement.isConnected : `boolean`

**Read only**



### htmlImageElement.parentNode : [`Node`](#node)

**Read only**



### htmlImageElement.parentElement : [`Element`](#element)

**Read only**



### htmlImageElement.firstChild : [`Node`](#node)

**Read only**



### htmlImageElement.lastChild : [`Node`](#node)

**Read only**



### htmlImageElement.previousSibling : [`Node`](#node)

**Read only**



### htmlImageElement.nextSibling : [`Node`](#node)

**Read only**



### htmlImageElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlImageElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlImageElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlImageElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlImageElement.textContent : `string`



### htmlImageElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlImageElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlImageElement.ownerDocument

**Read only**



### htmlImageElement.scrollIntoView()



### htmlImageElement.scrollIntoViewIfNeeded()



### htmlImageElement.focus()



### htmlImageElement.blur()



### htmlImageElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlImageElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlImageElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlImageElement.click()



### htmlImageElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlImageElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlImageElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlImageElement.getBoundingClientRect()



### htmlImageElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlImageElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlImageElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlImageElement.hasChildNodes()



### htmlImageElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlImageElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlImageElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlImageElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlImageElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlImageElement.remove()



### htmlImageElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlImageElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlImageElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlImageElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlImageElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlImageElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlImageElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

