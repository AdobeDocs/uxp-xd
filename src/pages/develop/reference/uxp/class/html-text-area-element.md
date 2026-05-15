---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Text Area Element
description: Creates an instance of HTMLTextAreaElement.
---




## HTMLTextAreaElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement)

* [HTMLTextAreaElement](#HTMLTextAreaElement)
    * [new HTMLTextAreaElement(document, nodeName, namespaceURI)](#new-htmltextareaelement-new)
    * [.value](#htmltextareaelement-value) : `string`
    * [.placeholder](#htmltextareaelement-placeholder) : `string`
    * [.readOnly](#htmltextareaelement-readonly) : `boolean`
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



### new HTMLTextAreaElement(document, nodeName, namespaceURI)
Creates an instance of HTMLTextAreaElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlTextAreaElement.value : `string`



### htmlTextAreaElement.placeholder : `string`



### htmlTextAreaElement.readOnly : `boolean`



### htmlTextAreaElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlTextAreaElement.nodeName : `string`

**Read only**



### htmlTextAreaElement.localName : `string`

**Read only**



### htmlTextAreaElement.tagName : `string`

**Read only**



### htmlTextAreaElement.nodeType : `number`

**Read only**



### htmlTextAreaElement.namespaceURI : `string`

**Read only**



### htmlTextAreaElement.id : `string`



### htmlTextAreaElement.tabIndex : `number`



### htmlTextAreaElement.className : `string`



### htmlTextAreaElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlTextAreaElement.style : `Style`

**Read only**



### htmlTextAreaElement.clientLeft : `number`

**Read only**



### htmlTextAreaElement.clientTop : `number`

**Read only**



### htmlTextAreaElement.clientWidth : `number`

**Read only**



### htmlTextAreaElement.clientHeight : `number`

**Read only**



### htmlTextAreaElement.height : `string` \| `Number`
The height of the element



### htmlTextAreaElement.width : `string` \| `Number`
The width of the element



### htmlTextAreaElement.offsetParent : [`Element`](#element)

**Read only**



### htmlTextAreaElement.offsetLeft : `number`

**Read only**



### htmlTextAreaElement.offsetTop : `number`

**Read only**



### htmlTextAreaElement.offsetWidth : `number`

**Read only**



### htmlTextAreaElement.offsetHeight : `number`

**Read only**



### htmlTextAreaElement.scrollLeft : `number`



### htmlTextAreaElement.scrollTop : `number`



### htmlTextAreaElement.scrollWidth : `number`

**Read only**



### htmlTextAreaElement.scrollHeight : `number`

**Read only**



### htmlTextAreaElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlTextAreaElement.disabled : `boolean`



### htmlTextAreaElement.innerHTML : `string`



### htmlTextAreaElement.outerHTML : `string`



### htmlTextAreaElement.contentEditable

**Read only**



### htmlTextAreaElement.isConnected : `boolean`

**Read only**



### htmlTextAreaElement.parentNode : [`Node`](#node)

**Read only**



### htmlTextAreaElement.parentElement : [`Element`](#element)

**Read only**



### htmlTextAreaElement.firstChild : [`Node`](#node)

**Read only**



### htmlTextAreaElement.lastChild : [`Node`](#node)

**Read only**



### htmlTextAreaElement.previousSibling : [`Node`](#node)

**Read only**



### htmlTextAreaElement.nextSibling : [`Node`](#node)

**Read only**



### htmlTextAreaElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlTextAreaElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlTextAreaElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlTextAreaElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlTextAreaElement.textContent : `string`



### htmlTextAreaElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlTextAreaElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlTextAreaElement.ownerDocument

**Read only**



### htmlTextAreaElement.scrollIntoView()



### htmlTextAreaElement.scrollIntoViewIfNeeded()



### htmlTextAreaElement.focus()



### htmlTextAreaElement.blur()



### htmlTextAreaElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlTextAreaElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlTextAreaElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlTextAreaElement.click()



### htmlTextAreaElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlTextAreaElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlTextAreaElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlTextAreaElement.getBoundingClientRect()



### htmlTextAreaElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlTextAreaElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlTextAreaElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlTextAreaElement.hasChildNodes()



### htmlTextAreaElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlTextAreaElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlTextAreaElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlTextAreaElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlTextAreaElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlTextAreaElement.remove()



### htmlTextAreaElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlTextAreaElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlTextAreaElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlTextAreaElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlTextAreaElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlTextAreaElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlTextAreaElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

