---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Progress Element
description: Creates an instance of HTMLProgressElement.
---




## HTMLProgressElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLProgressElement)

* [HTMLProgressElement](#HTMLProgressElement)
    * [new HTMLProgressElement(document, nodeName, namespaceURI)](#new-htmlprogresselement-new)
    * [.max](#htmlprogresselement-max) : `number`
    * [.value](#htmlprogresselement-value) : `number`
    * [.position](#htmlprogresselement-position) : `number`
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



### new HTMLProgressElement(document, nodeName, namespaceURI)
Creates an instance of HTMLProgressElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlProgressElement.max : `number`
Maximum value for the progress bar



### htmlProgressElement.value : `number`
Value of the progress bar



### htmlProgressElement.position : `number`
Completion value of the progress bar

**Read only**



### htmlProgressElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlProgressElement.nodeName : `string`

**Read only**



### htmlProgressElement.localName : `string`

**Read only**



### htmlProgressElement.tagName : `string`

**Read only**



### htmlProgressElement.nodeType : `number`

**Read only**



### htmlProgressElement.namespaceURI : `string`

**Read only**



### htmlProgressElement.id : `string`



### htmlProgressElement.tabIndex : `number`



### htmlProgressElement.className : `string`



### htmlProgressElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlProgressElement.style : `Style`

**Read only**



### htmlProgressElement.clientLeft : `number`

**Read only**



### htmlProgressElement.clientTop : `number`

**Read only**



### htmlProgressElement.clientWidth : `number`

**Read only**



### htmlProgressElement.clientHeight : `number`

**Read only**



### htmlProgressElement.height : `string` \| `Number`
The height of the element



### htmlProgressElement.width : `string` \| `Number`
The width of the element



### htmlProgressElement.offsetParent : [`Element`](#element)

**Read only**



### htmlProgressElement.offsetLeft : `number`

**Read only**



### htmlProgressElement.offsetTop : `number`

**Read only**



### htmlProgressElement.offsetWidth : `number`

**Read only**



### htmlProgressElement.offsetHeight : `number`

**Read only**



### htmlProgressElement.scrollLeft : `number`



### htmlProgressElement.scrollTop : `number`



### htmlProgressElement.scrollWidth : `number`

**Read only**



### htmlProgressElement.scrollHeight : `number`

**Read only**



### htmlProgressElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlProgressElement.disabled : `boolean`



### htmlProgressElement.innerHTML : `string`



### htmlProgressElement.outerHTML : `string`



### htmlProgressElement.contentEditable

**Read only**



### htmlProgressElement.isConnected : `boolean`

**Read only**



### htmlProgressElement.parentNode : [`Node`](#node)

**Read only**



### htmlProgressElement.parentElement : [`Element`](#element)

**Read only**



### htmlProgressElement.firstChild : [`Node`](#node)

**Read only**



### htmlProgressElement.lastChild : [`Node`](#node)

**Read only**



### htmlProgressElement.previousSibling : [`Node`](#node)

**Read only**



### htmlProgressElement.nextSibling : [`Node`](#node)

**Read only**



### htmlProgressElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlProgressElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlProgressElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlProgressElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlProgressElement.textContent : `string`



### htmlProgressElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlProgressElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlProgressElement.ownerDocument

**Read only**



### htmlProgressElement.scrollIntoView()



### htmlProgressElement.scrollIntoViewIfNeeded()



### htmlProgressElement.focus()



### htmlProgressElement.blur()



### htmlProgressElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlProgressElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlProgressElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlProgressElement.click()



### htmlProgressElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlProgressElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlProgressElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlProgressElement.getBoundingClientRect()



### htmlProgressElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlProgressElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlProgressElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlProgressElement.hasChildNodes()



### htmlProgressElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlProgressElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlProgressElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlProgressElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlProgressElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlProgressElement.remove()



### htmlProgressElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlProgressElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlProgressElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlProgressElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlProgressElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlProgressElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlProgressElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

