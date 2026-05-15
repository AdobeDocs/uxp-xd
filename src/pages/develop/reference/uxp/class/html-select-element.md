---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Select Element
description: Creates an instance of HTMLSelectElement.
---




## HTMLSelectElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement)

* [HTMLSelectElement](#HTMLSelectElement)
    * [new HTMLSelectElement(document, nodeName, namespaceURI)](#new-htmlselectelement-new)
    * [.value](#htmlselectelement-value) : `string`
    * [.selectedIndex](#htmlselectelement-selectedindex) : `number`
    * [.selectedOptions](#HTMLSelectElement+selectedOptions) : [`Array.<Node>`](#node)
    * [.uxpVariant](#htmlselectelement-uxpvariant) : `string`
    * [.uxpQuiet](#htmlselectelement-uxpquiet) : `string`
    * [.options](#HTMLSelectElement+options) : [`NodeList`](#nodelist)
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



### new HTMLSelectElement(document, nodeName, namespaceURI)
Creates an instance of HTMLSelectElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlSelectElement.value : `string`



### htmlSelectElement.selectedIndex : `number`



### htmlSelectElement.selectedOptions : [`Array.<Node>`](#node)



### htmlSelectElement.uxpVariant : `string`
Variant



### htmlSelectElement.uxpQuiet : `string`
Determines if control renders quietly



### htmlSelectElement.options : [`NodeList`](#nodelist)

**Read only**



### htmlSelectElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlSelectElement.nodeName : `string`

**Read only**



### htmlSelectElement.localName : `string`

**Read only**



### htmlSelectElement.tagName : `string`

**Read only**



### htmlSelectElement.nodeType : `number`

**Read only**



### htmlSelectElement.namespaceURI : `string`

**Read only**



### htmlSelectElement.id : `string`



### htmlSelectElement.tabIndex : `number`



### htmlSelectElement.className : `string`



### htmlSelectElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlSelectElement.style : `Style`

**Read only**



### htmlSelectElement.clientLeft : `number`

**Read only**



### htmlSelectElement.clientTop : `number`

**Read only**



### htmlSelectElement.clientWidth : `number`

**Read only**



### htmlSelectElement.clientHeight : `number`

**Read only**



### htmlSelectElement.height : `string` \| `Number`
The height of the element



### htmlSelectElement.width : `string` \| `Number`
The width of the element



### htmlSelectElement.offsetParent : [`Element`](#element)

**Read only**



### htmlSelectElement.offsetLeft : `number`

**Read only**



### htmlSelectElement.offsetTop : `number`

**Read only**



### htmlSelectElement.offsetWidth : `number`

**Read only**



### htmlSelectElement.offsetHeight : `number`

**Read only**



### htmlSelectElement.scrollLeft : `number`



### htmlSelectElement.scrollTop : `number`



### htmlSelectElement.scrollWidth : `number`

**Read only**



### htmlSelectElement.scrollHeight : `number`

**Read only**



### htmlSelectElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlSelectElement.disabled : `boolean`



### htmlSelectElement.innerHTML : `string`



### htmlSelectElement.outerHTML : `string`



### htmlSelectElement.contentEditable

**Read only**



### htmlSelectElement.isConnected : `boolean`

**Read only**



### htmlSelectElement.parentNode : [`Node`](#node)

**Read only**



### htmlSelectElement.parentElement : [`Element`](#element)

**Read only**



### htmlSelectElement.firstChild : [`Node`](#node)

**Read only**



### htmlSelectElement.lastChild : [`Node`](#node)

**Read only**



### htmlSelectElement.previousSibling : [`Node`](#node)

**Read only**



### htmlSelectElement.nextSibling : [`Node`](#node)

**Read only**



### htmlSelectElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlSelectElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlSelectElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlSelectElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlSelectElement.textContent : `string`



### htmlSelectElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlSelectElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlSelectElement.ownerDocument

**Read only**



### htmlSelectElement.scrollIntoView()



### htmlSelectElement.scrollIntoViewIfNeeded()



### htmlSelectElement.focus()



### htmlSelectElement.blur()



### htmlSelectElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlSelectElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlSelectElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlSelectElement.click()



### htmlSelectElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlSelectElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlSelectElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlSelectElement.getBoundingClientRect()



### htmlSelectElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlSelectElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlSelectElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlSelectElement.hasChildNodes()



### htmlSelectElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlSelectElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlSelectElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlSelectElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlSelectElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlSelectElement.remove()



### htmlSelectElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlSelectElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlSelectElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlSelectElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlSelectElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlSelectElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlSelectElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

