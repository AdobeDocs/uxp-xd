---
title: Element
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="element" id="element"/a
---



## Element

**Extends**: [`Node`](#node)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

* [Element](#Element)
    * [new Element(document, nodeName, namespaceURI)](#new-element-new)
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


### new Element(document, nodeName, namespaceURI)
Creates an instance of Element.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |


### element.nodeName : `string`

**Read only**


### element.localName : `string`

**Read only**


### element.tagName : `string`

**Read only**


### element.nodeType : `number`

**Read only**


### element.namespaceURI : `string`

**Read only**


### element.id : `string`


### element.tabIndex : `number`


### element.className : `string`


### element.attributes : [`NamedNodeMap`](#namednodemap)

**Overrides**: [`attributes`](#node-attributes)

**Read only**


### element.style : `Style`

**Read only**


### element.clientLeft : `number`

**Read only**


### element.clientTop : `number`

**Read only**


### element.clientWidth : `number`

**Read only**


### element.clientHeight : `number`

**Read only**


### element.height : `string` \| `Number`
The height of the element


### element.width : `string` \| `Number`
The width of the element


### element.offsetParent : [`Element`](#element)

**Read only**


### element.offsetLeft : `number`

**Read only**


### element.offsetTop : `number`

**Read only**


### element.offsetWidth : `number`

**Read only**


### element.offsetHeight : `number`

**Read only**


### element.scrollLeft : `number`


### element.scrollTop : `number`


### element.scrollWidth : `number`

**Read only**


### element.scrollHeight : `number`

**Read only**


### element.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**


### element.disabled : `boolean`


### element.innerHTML : `string`


### element.outerHTML : `string`


### element.contentEditable

**Read only**


### element.isConnected : `boolean`

**Read only**


### element.parentNode : [`Node`](#node)

**Read only**


### element.parentElement : [`Element`](#element)

**Read only**


### element.firstChild : [`Node`](#node)

**Read only**


### element.lastChild : [`Node`](#node)

**Read only**


### element.previousSibling : [`Node`](#node)

**Read only**


### element.nextSibling : [`Node`](#node)

**Read only**


### element.firstElementChild : [`Node`](#node)

**Read only**


### element.lastElementChild : [`Node`](#node)

**Read only**


### element.previousElementSibling : [`Node`](#node)

**Read only**


### element.nextElementSibling : [`Node`](#node)

**Read only**


### element.textContent : `string`


### element.childNodes : [`NodeList`](#nodelist)

**Read only**


### element.children : [`HTMLCollection`](#htmlcollection)

**Read only**


### element.ownerDocument

**Read only**


### element.scrollIntoView()


### element.scrollIntoViewIfNeeded()


### element.focus()


### element.blur()


### element.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |


### element.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |


### element.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |


### element.click()


### element.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |


### element.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### element.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |


### element.getBoundingClientRect()


### element.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |


### element.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |


### element.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |


### element.hasChildNodes()


### element.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |


### element.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### element.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |


### element.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |


### element.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |


### element.remove()


### element.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### element.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### element.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |


### element.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |


### element.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### element.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |


### element.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

