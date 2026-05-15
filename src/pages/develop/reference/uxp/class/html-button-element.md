---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Button Element
description: Creates an instance of HTMLButtonElement.
---




## HTMLButtonElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement)

* [HTMLButtonElement](#HTMLButtonElement)
    * [new HTMLButtonElement(document, nodeName, namespaceURI)](#new-htmlbuttonelement-new)
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



### new HTMLButtonElement(document, nodeName, namespaceURI)
Creates an instance of HTMLButtonElement.

| Param | Type |
| --- | --- |
| document | [`Document`](#document) |
| nodeName | `string` |
| namespaceURI | `string` |



### htmlButtonElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlButtonElement.nodeName : `string`

**Read only**



### htmlButtonElement.localName : `string`

**Read only**



### htmlButtonElement.tagName : `string`

**Read only**



### htmlButtonElement.nodeType : `number`

**Read only**



### htmlButtonElement.namespaceURI : `string`

**Read only**



### htmlButtonElement.id : `string`



### htmlButtonElement.tabIndex : `number`



### htmlButtonElement.className : `string`



### htmlButtonElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlButtonElement.style : `Style`

**Read only**



### htmlButtonElement.clientLeft : `number`

**Read only**



### htmlButtonElement.clientTop : `number`

**Read only**



### htmlButtonElement.clientWidth : `number`

**Read only**



### htmlButtonElement.clientHeight : `number`

**Read only**



### htmlButtonElement.height : `string` \| `Number`
The height of the element



### htmlButtonElement.width : `string` \| `Number`
The width of the element



### htmlButtonElement.offsetParent : [`Element`](#element)

**Read only**



### htmlButtonElement.offsetLeft : `number`

**Read only**



### htmlButtonElement.offsetTop : `number`

**Read only**



### htmlButtonElement.offsetWidth : `number`

**Read only**



### htmlButtonElement.offsetHeight : `number`

**Read only**



### htmlButtonElement.scrollLeft : `number`



### htmlButtonElement.scrollTop : `number`



### htmlButtonElement.scrollWidth : `number`

**Read only**



### htmlButtonElement.scrollHeight : `number`

**Read only**



### htmlButtonElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlButtonElement.disabled : `boolean`



### htmlButtonElement.innerHTML : `string`



### htmlButtonElement.outerHTML : `string`



### htmlButtonElement.contentEditable

**Read only**



### htmlButtonElement.isConnected : `boolean`

**Read only**



### htmlButtonElement.parentNode : [`Node`](#node)

**Read only**



### htmlButtonElement.parentElement : [`Element`](#element)

**Read only**



### htmlButtonElement.firstChild : [`Node`](#node)

**Read only**



### htmlButtonElement.lastChild : [`Node`](#node)

**Read only**



### htmlButtonElement.previousSibling : [`Node`](#node)

**Read only**



### htmlButtonElement.nextSibling : [`Node`](#node)

**Read only**



### htmlButtonElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlButtonElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlButtonElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlButtonElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlButtonElement.textContent : `string`



### htmlButtonElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlButtonElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlButtonElement.ownerDocument

**Read only**



### htmlButtonElement.scrollIntoView()



### htmlButtonElement.scrollIntoViewIfNeeded()



### htmlButtonElement.focus()



### htmlButtonElement.blur()



### htmlButtonElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlButtonElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlButtonElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlButtonElement.click()



### htmlButtonElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlButtonElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlButtonElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlButtonElement.getBoundingClientRect()



### htmlButtonElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlButtonElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlButtonElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlButtonElement.hasChildNodes()



### htmlButtonElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlButtonElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlButtonElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlButtonElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlButtonElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlButtonElement.remove()



### htmlButtonElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlButtonElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlButtonElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlButtonElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlButtonElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlButtonElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlButtonElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

