---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Body Element
description: Creates an instance of HTMLBodyElement.
---




## HTMLBodyElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLBodyElement)

* [HTMLBodyElement](#HTMLBodyElement)
    * [new HTMLBodyElement(document, nodeName, namespaceURI)](#new-htmlbodyelement-new)
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



### new HTMLBodyElement(document, nodeName, namespaceURI)
Creates an instance of HTMLBodyElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlBodyElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlBodyElement.nodeName : `string`

**Read only**



### htmlBodyElement.localName : `string`

**Read only**



### htmlBodyElement.tagName : `string`

**Read only**



### htmlBodyElement.nodeType : `number`

**Read only**



### htmlBodyElement.namespaceURI : `string`

**Read only**



### htmlBodyElement.id : `string`



### htmlBodyElement.tabIndex : `number`



### htmlBodyElement.className : `string`



### htmlBodyElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlBodyElement.style : `Style`

**Read only**



### htmlBodyElement.clientLeft : `number`

**Read only**



### htmlBodyElement.clientTop : `number`

**Read only**



### htmlBodyElement.clientWidth : `number`

**Read only**



### htmlBodyElement.clientHeight : `number`

**Read only**



### htmlBodyElement.height : `string` \| `Number`
The height of the element



### htmlBodyElement.width : `string` \| `Number`
The width of the element



### htmlBodyElement.offsetParent : [`Element`](#element)

**Read only**



### htmlBodyElement.offsetLeft : `number`

**Read only**



### htmlBodyElement.offsetTop : `number`

**Read only**



### htmlBodyElement.offsetWidth : `number`

**Read only**



### htmlBodyElement.offsetHeight : `number`

**Read only**



### htmlBodyElement.scrollLeft : `number`



### htmlBodyElement.scrollTop : `number`



### htmlBodyElement.scrollWidth : `number`

**Read only**



### htmlBodyElement.scrollHeight : `number`

**Read only**



### htmlBodyElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlBodyElement.disabled : `boolean`



### htmlBodyElement.innerHTML : `string`



### htmlBodyElement.outerHTML : `string`



### htmlBodyElement.contentEditable

**Read only**



### htmlBodyElement.isConnected : `boolean`

**Read only**



### htmlBodyElement.parentNode : [`Node`](#node)

**Read only**



### htmlBodyElement.parentElement : [`Element`](#element)

**Read only**



### htmlBodyElement.firstChild : [`Node`](#node)

**Read only**



### htmlBodyElement.lastChild : [`Node`](#node)

**Read only**



### htmlBodyElement.previousSibling : [`Node`](#node)

**Read only**



### htmlBodyElement.nextSibling : [`Node`](#node)

**Read only**



### htmlBodyElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlBodyElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlBodyElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlBodyElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlBodyElement.textContent : `string`



### htmlBodyElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlBodyElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlBodyElement.ownerDocument

**Read only**



### htmlBodyElement.scrollIntoView()



### htmlBodyElement.scrollIntoViewIfNeeded()



### htmlBodyElement.focus()



### htmlBodyElement.blur()



### htmlBodyElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlBodyElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlBodyElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlBodyElement.click()



### htmlBodyElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlBodyElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlBodyElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlBodyElement.getBoundingClientRect()



### htmlBodyElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlBodyElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlBodyElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlBodyElement.hasChildNodes()



### htmlBodyElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlBodyElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlBodyElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlBodyElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlBodyElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlBodyElement.remove()



### htmlBodyElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlBodyElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlBodyElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlBodyElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlBodyElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlBodyElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlBodyElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

