---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Option Element
description: Creates an instance of HTMLOptionElement.
---




## HTMLOptionElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOptionElement)

* [HTMLOptionElement](#HTMLOptionElement)
    * [new HTMLOptionElement(document, nodeName, namespaceURI)](#new-htmloptionelement-new)
    * [.value](#htmloptionelement-value) : `string`
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



### new HTMLOptionElement(document, nodeName, namespaceURI)
Creates an instance of HTMLOptionElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlOptionElement.value : `string`



### htmlOptionElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlOptionElement.nodeName : `string`

**Read only**



### htmlOptionElement.localName : `string`

**Read only**



### htmlOptionElement.tagName : `string`

**Read only**



### htmlOptionElement.nodeType : `number`

**Read only**



### htmlOptionElement.namespaceURI : `string`

**Read only**



### htmlOptionElement.id : `string`



### htmlOptionElement.tabIndex : `number`



### htmlOptionElement.className : `string`



### htmlOptionElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlOptionElement.style : `Style`

**Read only**



### htmlOptionElement.clientLeft : `number`

**Read only**



### htmlOptionElement.clientTop : `number`

**Read only**



### htmlOptionElement.clientWidth : `number`

**Read only**



### htmlOptionElement.clientHeight : `number`

**Read only**



### htmlOptionElement.height : `string` \| `Number`
The height of the element



### htmlOptionElement.width : `string` \| `Number`
The width of the element



### htmlOptionElement.offsetParent : [`Element`](#element)

**Read only**



### htmlOptionElement.offsetLeft : `number`

**Read only**



### htmlOptionElement.offsetTop : `number`

**Read only**



### htmlOptionElement.offsetWidth : `number`

**Read only**



### htmlOptionElement.offsetHeight : `number`

**Read only**



### htmlOptionElement.scrollLeft : `number`



### htmlOptionElement.scrollTop : `number`



### htmlOptionElement.scrollWidth : `number`

**Read only**



### htmlOptionElement.scrollHeight : `number`

**Read only**



### htmlOptionElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlOptionElement.disabled : `boolean`



### htmlOptionElement.innerHTML : `string`



### htmlOptionElement.outerHTML : `string`



### htmlOptionElement.contentEditable

**Read only**



### htmlOptionElement.isConnected : `boolean`

**Read only**



### htmlOptionElement.parentNode : [`Node`](#node)

**Read only**



### htmlOptionElement.parentElement : [`Element`](#element)

**Read only**



### htmlOptionElement.firstChild : [`Node`](#node)

**Read only**



### htmlOptionElement.lastChild : [`Node`](#node)

**Read only**



### htmlOptionElement.previousSibling : [`Node`](#node)

**Read only**



### htmlOptionElement.nextSibling : [`Node`](#node)

**Read only**



### htmlOptionElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlOptionElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlOptionElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlOptionElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlOptionElement.textContent : `string`



### htmlOptionElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlOptionElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlOptionElement.ownerDocument

**Read only**



### htmlOptionElement.scrollIntoView()



### htmlOptionElement.scrollIntoViewIfNeeded()



### htmlOptionElement.focus()



### htmlOptionElement.blur()



### htmlOptionElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlOptionElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlOptionElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlOptionElement.click()



### htmlOptionElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlOptionElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlOptionElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlOptionElement.getBoundingClientRect()



### htmlOptionElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlOptionElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlOptionElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlOptionElement.hasChildNodes()



### htmlOptionElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlOptionElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlOptionElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlOptionElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlOptionElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlOptionElement.remove()



### htmlOptionElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlOptionElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlOptionElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlOptionElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlOptionElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlOptionElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlOptionElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

