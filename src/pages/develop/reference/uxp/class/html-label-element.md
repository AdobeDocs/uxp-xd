---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Label Element
description: Creates an instance of HTMLLabelElement.
---




## HTMLLabelElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLLabelElement)

* [HTMLLabelElement](#HTMLLabelElement)
    * [new HTMLLabelElement(document, nodeName, namespaceURI)](#new-htmllabelelement-new)
    * [.control](#HTMLLabelElement+control) : [`HTMLElement`](#htmlelement)
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



### new HTMLLabelElement(document, nodeName, namespaceURI)
Creates an instance of HTMLLabelElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlLabelElement.control : [`HTMLElement`](#htmlelement)

**Read only**



### htmlLabelElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlLabelElement.nodeName : `string`

**Read only**



### htmlLabelElement.localName : `string`

**Read only**



### htmlLabelElement.tagName : `string`

**Read only**



### htmlLabelElement.nodeType : `number`

**Read only**



### htmlLabelElement.namespaceURI : `string`

**Read only**



### htmlLabelElement.id : `string`



### htmlLabelElement.tabIndex : `number`



### htmlLabelElement.className : `string`



### htmlLabelElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlLabelElement.style : `Style`

**Read only**



### htmlLabelElement.clientLeft : `number`

**Read only**



### htmlLabelElement.clientTop : `number`

**Read only**



### htmlLabelElement.clientWidth : `number`

**Read only**



### htmlLabelElement.clientHeight : `number`

**Read only**



### htmlLabelElement.height : `string` \| `Number`
The height of the element



### htmlLabelElement.width : `string` \| `Number`
The width of the element



### htmlLabelElement.offsetParent : [`Element`](#element)

**Read only**



### htmlLabelElement.offsetLeft : `number`

**Read only**



### htmlLabelElement.offsetTop : `number`

**Read only**



### htmlLabelElement.offsetWidth : `number`

**Read only**



### htmlLabelElement.offsetHeight : `number`

**Read only**



### htmlLabelElement.scrollLeft : `number`



### htmlLabelElement.scrollTop : `number`



### htmlLabelElement.scrollWidth : `number`

**Read only**



### htmlLabelElement.scrollHeight : `number`

**Read only**



### htmlLabelElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlLabelElement.disabled : `boolean`



### htmlLabelElement.innerHTML : `string`



### htmlLabelElement.outerHTML : `string`



### htmlLabelElement.contentEditable

**Read only**



### htmlLabelElement.isConnected : `boolean`

**Read only**



### htmlLabelElement.parentNode : [`Node`](#node)

**Read only**



### htmlLabelElement.parentElement : [`Element`](#element)

**Read only**



### htmlLabelElement.firstChild : [`Node`](#node)

**Read only**



### htmlLabelElement.lastChild : [`Node`](#node)

**Read only**



### htmlLabelElement.previousSibling : [`Node`](#node)

**Read only**



### htmlLabelElement.nextSibling : [`Node`](#node)

**Read only**



### htmlLabelElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlLabelElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlLabelElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlLabelElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlLabelElement.textContent : `string`



### htmlLabelElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlLabelElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlLabelElement.ownerDocument

**Read only**



### htmlLabelElement.scrollIntoView()



### htmlLabelElement.scrollIntoViewIfNeeded()



### htmlLabelElement.focus()



### htmlLabelElement.blur()



### htmlLabelElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlLabelElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlLabelElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlLabelElement.click()



### htmlLabelElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlLabelElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlLabelElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlLabelElement.getBoundingClientRect()



### htmlLabelElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlLabelElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlLabelElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlLabelElement.hasChildNodes()



### htmlLabelElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlLabelElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlLabelElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlLabelElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlLabelElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlLabelElement.remove()



### htmlLabelElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLabelElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLabelElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlLabelElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlLabelElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlLabelElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlLabelElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

