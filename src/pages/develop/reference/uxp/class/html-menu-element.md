---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Menu Element
description: Creates an instance of HTMLMenuElement.
---




## HTMLMenuElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMenuElement)

* [HTMLMenuElement](#HTMLMenuElement)
    * [new HTMLMenuElement(document, nodeName, namespaceURI)](#new-htmlmenuelement-new)
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
    * [.popupAt(x, y)](#htmlmenuelement-popupat)
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



### new HTMLMenuElement(document, nodeName, namespaceURI)
Creates an instance of HTMLMenuElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlMenuElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlMenuElement.nodeName : `string`

**Read only**



### htmlMenuElement.localName : `string`

**Read only**



### htmlMenuElement.tagName : `string`

**Read only**



### htmlMenuElement.nodeType : `number`

**Read only**



### htmlMenuElement.namespaceURI : `string`

**Read only**



### htmlMenuElement.id : `string`



### htmlMenuElement.tabIndex : `number`



### htmlMenuElement.className : `string`



### htmlMenuElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlMenuElement.style : `Style`

**Read only**



### htmlMenuElement.clientLeft : `number`

**Read only**



### htmlMenuElement.clientTop : `number`

**Read only**



### htmlMenuElement.clientWidth : `number`

**Read only**



### htmlMenuElement.clientHeight : `number`

**Read only**



### htmlMenuElement.height : `string` \| `Number`
The height of the element



### htmlMenuElement.width : `string` \| `Number`
The width of the element



### htmlMenuElement.offsetParent : [`Element`](#element)

**Read only**



### htmlMenuElement.offsetLeft : `number`

**Read only**



### htmlMenuElement.offsetTop : `number`

**Read only**



### htmlMenuElement.offsetWidth : `number`

**Read only**



### htmlMenuElement.offsetHeight : `number`

**Read only**



### htmlMenuElement.scrollLeft : `number`



### htmlMenuElement.scrollTop : `number`



### htmlMenuElement.scrollWidth : `number`

**Read only**



### htmlMenuElement.scrollHeight : `number`

**Read only**



### htmlMenuElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlMenuElement.disabled : `boolean`



### htmlMenuElement.innerHTML : `string`



### htmlMenuElement.outerHTML : `string`



### htmlMenuElement.contentEditable

**Read only**



### htmlMenuElement.isConnected : `boolean`

**Read only**



### htmlMenuElement.parentNode : [`Node`](#node)

**Read only**



### htmlMenuElement.parentElement : [`Element`](#element)

**Read only**



### htmlMenuElement.firstChild : [`Node`](#node)

**Read only**



### htmlMenuElement.lastChild : [`Node`](#node)

**Read only**



### htmlMenuElement.previousSibling : [`Node`](#node)

**Read only**



### htmlMenuElement.nextSibling : [`Node`](#node)

**Read only**



### htmlMenuElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlMenuElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlMenuElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlMenuElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlMenuElement.textContent : `string`



### htmlMenuElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlMenuElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlMenuElement.ownerDocument

**Read only**



### htmlMenuElement.popupAt(x, y)
Render the menu at the `x`,`y` coordinates

| Param | Type |
| --- | --- |
| x | `number` |
| y | `number` |



### htmlMenuElement.scrollIntoView()



### htmlMenuElement.scrollIntoViewIfNeeded()



### htmlMenuElement.focus()



### htmlMenuElement.blur()



### htmlMenuElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlMenuElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlMenuElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlMenuElement.click()



### htmlMenuElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlMenuElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlMenuElement.getBoundingClientRect()



### htmlMenuElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlMenuElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlMenuElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlMenuElement.hasChildNodes()



### htmlMenuElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlMenuElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlMenuElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlMenuElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlMenuElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlMenuElement.remove()



### htmlMenuElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlMenuElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlMenuElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlMenuElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

