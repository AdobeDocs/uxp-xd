---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Style Element
description: Creates an instance of HTMLStyleElement.
---




## HTMLStyleElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement)

* [HTMLStyleElement](#HTMLStyleElement)
    * [new HTMLStyleElement(document, nodeName, namespaceURI)](#new-htmlstyleelement-new)
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



### new HTMLStyleElement(document, nodeName, namespaceURI)
Creates an instance of HTMLStyleElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlStyleElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlStyleElement.nodeName : `string`

**Read only**



### htmlStyleElement.localName : `string`

**Read only**



### htmlStyleElement.tagName : `string`

**Read only**



### htmlStyleElement.nodeType : `number`

**Read only**



### htmlStyleElement.namespaceURI : `string`

**Read only**



### htmlStyleElement.id : `string`



### htmlStyleElement.tabIndex : `number`



### htmlStyleElement.className : `string`



### htmlStyleElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlStyleElement.style : `Style`

**Read only**



### htmlStyleElement.clientLeft : `number`

**Read only**



### htmlStyleElement.clientTop : `number`

**Read only**



### htmlStyleElement.clientWidth : `number`

**Read only**



### htmlStyleElement.clientHeight : `number`

**Read only**



### htmlStyleElement.height : `string` \| `Number`
The height of the element



### htmlStyleElement.width : `string` \| `Number`
The width of the element



### htmlStyleElement.offsetParent : [`Element`](#element)

**Read only**



### htmlStyleElement.offsetLeft : `number`

**Read only**



### htmlStyleElement.offsetTop : `number`

**Read only**



### htmlStyleElement.offsetWidth : `number`

**Read only**



### htmlStyleElement.offsetHeight : `number`

**Read only**



### htmlStyleElement.scrollLeft : `number`



### htmlStyleElement.scrollTop : `number`



### htmlStyleElement.scrollWidth : `number`

**Read only**



### htmlStyleElement.scrollHeight : `number`

**Read only**



### htmlStyleElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlStyleElement.disabled : `boolean`



### htmlStyleElement.innerHTML : `string`



### htmlStyleElement.outerHTML : `string`



### htmlStyleElement.contentEditable

**Read only**



### htmlStyleElement.isConnected : `boolean`

**Read only**



### htmlStyleElement.parentNode : [`Node`](#node)

**Read only**



### htmlStyleElement.parentElement : [`Element`](#element)

**Read only**



### htmlStyleElement.firstChild : [`Node`](#node)

**Read only**



### htmlStyleElement.lastChild : [`Node`](#node)

**Read only**



### htmlStyleElement.previousSibling : [`Node`](#node)

**Read only**



### htmlStyleElement.nextSibling : [`Node`](#node)

**Read only**



### htmlStyleElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlStyleElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlStyleElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlStyleElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlStyleElement.textContent : `string`



### htmlStyleElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlStyleElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlStyleElement.ownerDocument

**Read only**



### htmlStyleElement.scrollIntoView()



### htmlStyleElement.scrollIntoViewIfNeeded()



### htmlStyleElement.focus()



### htmlStyleElement.blur()



### htmlStyleElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlStyleElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlStyleElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlStyleElement.click()



### htmlStyleElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlStyleElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlStyleElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlStyleElement.getBoundingClientRect()



### htmlStyleElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlStyleElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlStyleElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlStyleElement.hasChildNodes()



### htmlStyleElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlStyleElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlStyleElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlStyleElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlStyleElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlStyleElement.remove()



### htmlStyleElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlStyleElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlStyleElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlStyleElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlStyleElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlStyleElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlStyleElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

