---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Link Element
description: Creates an instance of HTMLLinkElement.
---




## HTMLLinkElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLinkElement)

* [HTMLLinkElement](#HTMLLinkElement)
    * [new HTMLLinkElement(document, nodeName, namespaceURI)](#new-htmllinkelement-new)
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



### new HTMLLinkElement(document, nodeName, namespaceURI)
Creates an instance of HTMLLinkElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlLinkElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlLinkElement.nodeName : `string`

**Read only**



### htmlLinkElement.localName : `string`

**Read only**



### htmlLinkElement.tagName : `string`

**Read only**



### htmlLinkElement.nodeType : `number`

**Read only**



### htmlLinkElement.namespaceURI : `string`

**Read only**



### htmlLinkElement.id : `string`



### htmlLinkElement.tabIndex : `number`



### htmlLinkElement.className : `string`



### htmlLinkElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlLinkElement.style : `Style`

**Read only**



### htmlLinkElement.clientLeft : `number`

**Read only**



### htmlLinkElement.clientTop : `number`

**Read only**



### htmlLinkElement.clientWidth : `number`

**Read only**



### htmlLinkElement.clientHeight : `number`

**Read only**



### htmlLinkElement.height : `string` \| `Number`
The height of the element



### htmlLinkElement.width : `string` \| `Number`
The width of the element



### htmlLinkElement.offsetParent : [`Element`](#element)

**Read only**



### htmlLinkElement.offsetLeft : `number`

**Read only**



### htmlLinkElement.offsetTop : `number`

**Read only**



### htmlLinkElement.offsetWidth : `number`

**Read only**



### htmlLinkElement.offsetHeight : `number`

**Read only**



### htmlLinkElement.scrollLeft : `number`



### htmlLinkElement.scrollTop : `number`



### htmlLinkElement.scrollWidth : `number`

**Read only**



### htmlLinkElement.scrollHeight : `number`

**Read only**



### htmlLinkElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlLinkElement.disabled : `boolean`



### htmlLinkElement.innerHTML : `string`



### htmlLinkElement.outerHTML : `string`



### htmlLinkElement.contentEditable

**Read only**



### htmlLinkElement.isConnected : `boolean`

**Read only**



### htmlLinkElement.parentNode : [`Node`](#node)

**Read only**



### htmlLinkElement.parentElement : [`Element`](#element)

**Read only**



### htmlLinkElement.firstChild : [`Node`](#node)

**Read only**



### htmlLinkElement.lastChild : [`Node`](#node)

**Read only**



### htmlLinkElement.previousSibling : [`Node`](#node)

**Read only**



### htmlLinkElement.nextSibling : [`Node`](#node)

**Read only**



### htmlLinkElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlLinkElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlLinkElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlLinkElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlLinkElement.textContent : `string`



### htmlLinkElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlLinkElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlLinkElement.ownerDocument

**Read only**



### htmlLinkElement.scrollIntoView()



### htmlLinkElement.scrollIntoViewIfNeeded()



### htmlLinkElement.focus()



### htmlLinkElement.blur()



### htmlLinkElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlLinkElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlLinkElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlLinkElement.click()



### htmlLinkElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLinkElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlLinkElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlLinkElement.getBoundingClientRect()



### htmlLinkElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlLinkElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlLinkElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlLinkElement.hasChildNodes()



### htmlLinkElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlLinkElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlLinkElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlLinkElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlLinkElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlLinkElement.remove()



### htmlLinkElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLinkElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLinkElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLinkElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlLinkElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlLinkElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlLinkElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

