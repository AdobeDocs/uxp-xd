---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Head Element
description: Creates an instance of HTMLHeadElement.
---




## HTMLHeadElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadElement)

* [HTMLHeadElement](#HTMLHeadElement)
    * [new HTMLHeadElement(document, nodeName, namespaceURI)](#new-htmlheadelement-new)
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



### new HTMLHeadElement(document, nodeName, namespaceURI)
Creates an instance of HTMLHeadElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlHeadElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlHeadElement.nodeName : `string`

**Read only**



### htmlHeadElement.localName : `string`

**Read only**



### htmlHeadElement.tagName : `string`

**Read only**



### htmlHeadElement.nodeType : `number`

**Read only**



### htmlHeadElement.namespaceURI : `string`

**Read only**



### htmlHeadElement.id : `string`



### htmlHeadElement.tabIndex : `number`



### htmlHeadElement.className : `string`



### htmlHeadElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlHeadElement.style : `Style`

**Read only**



### htmlHeadElement.clientLeft : `number`

**Read only**



### htmlHeadElement.clientTop : `number`

**Read only**



### htmlHeadElement.clientWidth : `number`

**Read only**



### htmlHeadElement.clientHeight : `number`

**Read only**



### htmlHeadElement.height : `string` \| `Number`
The height of the element



### htmlHeadElement.width : `string` \| `Number`
The width of the element



### htmlHeadElement.offsetParent : [`Element`](#element)

**Read only**



### htmlHeadElement.offsetLeft : `number`

**Read only**



### htmlHeadElement.offsetTop : `number`

**Read only**



### htmlHeadElement.offsetWidth : `number`

**Read only**



### htmlHeadElement.offsetHeight : `number`

**Read only**



### htmlHeadElement.scrollLeft : `number`



### htmlHeadElement.scrollTop : `number`



### htmlHeadElement.scrollWidth : `number`

**Read only**



### htmlHeadElement.scrollHeight : `number`

**Read only**



### htmlHeadElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlHeadElement.disabled : `boolean`



### htmlHeadElement.innerHTML : `string`



### htmlHeadElement.outerHTML : `string`



### htmlHeadElement.contentEditable

**Read only**



### htmlHeadElement.isConnected : `boolean`

**Read only**



### htmlHeadElement.parentNode : [`Node`](#node)

**Read only**



### htmlHeadElement.parentElement : [`Element`](#element)

**Read only**



### htmlHeadElement.firstChild : [`Node`](#node)

**Read only**



### htmlHeadElement.lastChild : [`Node`](#node)

**Read only**



### htmlHeadElement.previousSibling : [`Node`](#node)

**Read only**



### htmlHeadElement.nextSibling : [`Node`](#node)

**Read only**



### htmlHeadElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlHeadElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlHeadElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlHeadElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlHeadElement.textContent : `string`



### htmlHeadElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlHeadElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlHeadElement.ownerDocument

**Read only**



### htmlHeadElement.scrollIntoView()



### htmlHeadElement.scrollIntoViewIfNeeded()



### htmlHeadElement.focus()



### htmlHeadElement.blur()



### htmlHeadElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlHeadElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlHeadElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlHeadElement.click()



### htmlHeadElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHeadElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlHeadElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlHeadElement.getBoundingClientRect()



### htmlHeadElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlHeadElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlHeadElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlHeadElement.hasChildNodes()



### htmlHeadElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlHeadElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlHeadElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlHeadElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlHeadElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlHeadElement.remove()



### htmlHeadElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHeadElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHeadElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHeadElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlHeadElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlHeadElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlHeadElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

