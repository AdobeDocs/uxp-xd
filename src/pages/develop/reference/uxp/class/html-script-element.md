---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Script Element
description: Creates an instance of HTMLScriptElement.
---




## HTMLScriptElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)

* [HTMLScriptElement](#HTMLScriptElement)
    * [new HTMLScriptElement(document, nodeName, namespaceURI)](#new-htmlscriptelement-new)
    * [.type](#htmlscriptelement-type) : `string`
    * [.src](#htmlscriptelement-src) : `string`
    * [.charset](#htmlscriptelement-charset) : `string`
    * [.text](#htmlscriptelement-text) : `string`
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



### new HTMLScriptElement(document, nodeName, namespaceURI)
Creates an instance of HTMLScriptElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlScriptElement.type : `string`



### htmlScriptElement.src : `string`



### htmlScriptElement.charset : `string`



### htmlScriptElement.text : `string`



### htmlScriptElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlScriptElement.nodeName : `string`

**Read only**



### htmlScriptElement.localName : `string`

**Read only**



### htmlScriptElement.tagName : `string`

**Read only**



### htmlScriptElement.nodeType : `number`

**Read only**



### htmlScriptElement.namespaceURI : `string`

**Read only**



### htmlScriptElement.id : `string`



### htmlScriptElement.tabIndex : `number`



### htmlScriptElement.className : `string`



### htmlScriptElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlScriptElement.style : `Style`

**Read only**



### htmlScriptElement.clientLeft : `number`

**Read only**



### htmlScriptElement.clientTop : `number`

**Read only**



### htmlScriptElement.clientWidth : `number`

**Read only**



### htmlScriptElement.clientHeight : `number`

**Read only**



### htmlScriptElement.height : `string` \| `Number`
The height of the element



### htmlScriptElement.width : `string` \| `Number`
The width of the element



### htmlScriptElement.offsetParent : [`Element`](#element)

**Read only**



### htmlScriptElement.offsetLeft : `number`

**Read only**



### htmlScriptElement.offsetTop : `number`

**Read only**



### htmlScriptElement.offsetWidth : `number`

**Read only**



### htmlScriptElement.offsetHeight : `number`

**Read only**



### htmlScriptElement.scrollLeft : `number`



### htmlScriptElement.scrollTop : `number`



### htmlScriptElement.scrollWidth : `number`

**Read only**



### htmlScriptElement.scrollHeight : `number`

**Read only**



### htmlScriptElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlScriptElement.disabled : `boolean`



### htmlScriptElement.innerHTML : `string`



### htmlScriptElement.outerHTML : `string`



### htmlScriptElement.contentEditable

**Read only**



### htmlScriptElement.isConnected : `boolean`

**Read only**



### htmlScriptElement.parentNode : [`Node`](#node)

**Read only**



### htmlScriptElement.parentElement : [`Element`](#element)

**Read only**



### htmlScriptElement.firstChild : [`Node`](#node)

**Read only**



### htmlScriptElement.lastChild : [`Node`](#node)

**Read only**



### htmlScriptElement.previousSibling : [`Node`](#node)

**Read only**



### htmlScriptElement.nextSibling : [`Node`](#node)

**Read only**



### htmlScriptElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlScriptElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlScriptElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlScriptElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlScriptElement.textContent : `string`

**Overrides**: [`textContent`](#node-textcontent)



### htmlScriptElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlScriptElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlScriptElement.ownerDocument

**Read only**



### htmlScriptElement.scrollIntoView()



### htmlScriptElement.scrollIntoViewIfNeeded()



### htmlScriptElement.focus()



### htmlScriptElement.blur()



### htmlScriptElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlScriptElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlScriptElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlScriptElement.click()



### htmlScriptElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlScriptElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlScriptElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlScriptElement.getBoundingClientRect()



### htmlScriptElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlScriptElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlScriptElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlScriptElement.hasChildNodes()



### htmlScriptElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlScriptElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlScriptElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlScriptElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlScriptElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlScriptElement.remove()



### htmlScriptElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlScriptElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlScriptElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlScriptElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlScriptElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlScriptElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlScriptElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

