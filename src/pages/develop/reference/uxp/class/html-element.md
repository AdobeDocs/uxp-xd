---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Element
description: Creates an instance of HTMLElement.
---




## HTMLElement

**Extends**: [`Element`](#element)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

* [HTMLElement](#HTMLElement)
    * [new HTMLElement(document, nodeName, namespaceURI)](#new-htmlelement-new)
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



### new HTMLElement(document, nodeName, namespaceURI)
Creates an instance of HTMLElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlElement.nodeName : `string`

**Read only**



### htmlElement.localName : `string`

**Read only**



### htmlElement.tagName : `string`

**Read only**



### htmlElement.nodeType : `number`

**Read only**



### htmlElement.namespaceURI : `string`

**Read only**



### htmlElement.id : `string`



### htmlElement.tabIndex : `number`



### htmlElement.className : `string`



### htmlElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlElement.style : `Style`

**Read only**



### htmlElement.clientLeft : `number`

**Read only**



### htmlElement.clientTop : `number`

**Read only**



### htmlElement.clientWidth : `number`

**Read only**



### htmlElement.clientHeight : `number`

**Read only**



### htmlElement.height : `string` \| `Number`
The height of the element



### htmlElement.width : `string` \| `Number`
The width of the element



### htmlElement.offsetParent : [`Element`](#element)

**Read only**



### htmlElement.offsetLeft : `number`

**Read only**



### htmlElement.offsetTop : `number`

**Read only**



### htmlElement.offsetWidth : `number`

**Read only**



### htmlElement.offsetHeight : `number`

**Read only**



### htmlElement.scrollLeft : `number`



### htmlElement.scrollTop : `number`



### htmlElement.scrollWidth : `number`

**Read only**



### htmlElement.scrollHeight : `number`

**Read only**



### htmlElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlElement.disabled : `boolean`



### htmlElement.innerHTML : `string`



### htmlElement.outerHTML : `string`



### htmlElement.contentEditable

**Read only**



### htmlElement.isConnected : `boolean`

**Read only**



### htmlElement.parentNode : [`Node`](#node)

**Read only**



### htmlElement.parentElement : [`Element`](#element)

**Read only**



### htmlElement.firstChild : [`Node`](#node)

**Read only**



### htmlElement.lastChild : [`Node`](#node)

**Read only**



### htmlElement.previousSibling : [`Node`](#node)

**Read only**



### htmlElement.nextSibling : [`Node`](#node)

**Read only**



### htmlElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlElement.textContent : `string`



### htmlElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlElement.ownerDocument

**Read only**



### htmlElement.scrollIntoView()



### htmlElement.scrollIntoViewIfNeeded()



### htmlElement.focus()



### htmlElement.blur()



### htmlElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlElement.click()



### htmlElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlElement.getBoundingClientRect()



### htmlElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlElement.hasChildNodes()



### htmlElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlElement.remove()



### htmlElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

