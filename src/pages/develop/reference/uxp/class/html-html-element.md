---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Html Element
description: Creates an instance of HTMLHtmlElement.
---




## HTMLHtmlElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLHtmlElement)

* [HTMLHtmlElement](#HTMLHtmlElement)
    * [new HTMLHtmlElement(document, nodeName, namespaceURI)](#new-htmlhtmlelement-new)
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



### new HTMLHtmlElement(document, nodeName, namespaceURI)
Creates an instance of HTMLHtmlElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlHtmlElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlHtmlElement.nodeName : `string`

**Read only**



### htmlHtmlElement.localName : `string`

**Read only**



### htmlHtmlElement.tagName : `string`

**Read only**



### htmlHtmlElement.nodeType : `number`

**Read only**



### htmlHtmlElement.namespaceURI : `string`

**Read only**



### htmlHtmlElement.id : `string`



### htmlHtmlElement.tabIndex : `number`



### htmlHtmlElement.className : `string`



### htmlHtmlElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlHtmlElement.style : `Style`

**Read only**



### htmlHtmlElement.clientLeft : `number`

**Read only**



### htmlHtmlElement.clientTop : `number`

**Read only**



### htmlHtmlElement.clientWidth : `number`

**Read only**



### htmlHtmlElement.clientHeight : `number`

**Read only**



### htmlHtmlElement.height : `string` \| `Number`
The height of the element



### htmlHtmlElement.width : `string` \| `Number`
The width of the element



### htmlHtmlElement.offsetParent : [`Element`](#element)

**Read only**



### htmlHtmlElement.offsetLeft : `number`

**Read only**



### htmlHtmlElement.offsetTop : `number`

**Read only**



### htmlHtmlElement.offsetWidth : `number`

**Read only**



### htmlHtmlElement.offsetHeight : `number`

**Read only**



### htmlHtmlElement.scrollLeft : `number`



### htmlHtmlElement.scrollTop : `number`



### htmlHtmlElement.scrollWidth : `number`

**Read only**



### htmlHtmlElement.scrollHeight : `number`

**Read only**



### htmlHtmlElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Overrides**: [`uxpContainer`](#element-uxpcontainer)

**Read only**



### htmlHtmlElement.disabled : `boolean`



### htmlHtmlElement.innerHTML : `string`



### htmlHtmlElement.outerHTML : `string`



### htmlHtmlElement.contentEditable

**Read only**



### htmlHtmlElement.isConnected : `boolean`

**Read only**



### htmlHtmlElement.parentNode : [`Node`](#node)

**Read only**



### htmlHtmlElement.parentElement : [`Element`](#element)

**Read only**



### htmlHtmlElement.firstChild : [`Node`](#node)

**Read only**



### htmlHtmlElement.lastChild : [`Node`](#node)

**Read only**



### htmlHtmlElement.previousSibling : [`Node`](#node)

**Read only**



### htmlHtmlElement.nextSibling : [`Node`](#node)

**Read only**



### htmlHtmlElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlHtmlElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlHtmlElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlHtmlElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlHtmlElement.textContent : `string`



### htmlHtmlElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlHtmlElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlHtmlElement.ownerDocument

**Read only**



### htmlHtmlElement.scrollIntoView()



### htmlHtmlElement.scrollIntoViewIfNeeded()



### htmlHtmlElement.focus()



### htmlHtmlElement.blur()



### htmlHtmlElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlHtmlElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlHtmlElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlHtmlElement.click()



### htmlHtmlElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlHtmlElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlHtmlElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlHtmlElement.getBoundingClientRect()



### htmlHtmlElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlHtmlElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlHtmlElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlHtmlElement.hasChildNodes()



### htmlHtmlElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlHtmlElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlHtmlElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlHtmlElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlHtmlElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlHtmlElement.remove()



### htmlHtmlElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHtmlElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHtmlElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlHtmlElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlHtmlElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlHtmlElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlHtmlElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

