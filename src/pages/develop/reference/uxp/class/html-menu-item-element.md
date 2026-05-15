---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Menu Item Element
description: Creates an instance of HTMLMenuItemElement.
---




## HTMLMenuItemElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem)

* [HTMLMenuItemElement](#HTMLMenuItemElement)
    * [new HTMLMenuItemElement(document, nodeName, namespaceURI)](#new-htmlmenuitemelement-new)
    * [.checked](#htmlmenuitemelement-checked) : `boolean`
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



### new HTMLMenuItemElement(document, nodeName, namespaceURI)
Creates an instance of HTMLMenuItemElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlMenuItemElement.checked : `boolean`
Indicates if the menu item is checked.



### htmlMenuItemElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlMenuItemElement.nodeName : `string`

**Read only**



### htmlMenuItemElement.localName : `string`

**Read only**



### htmlMenuItemElement.tagName : `string`

**Read only**



### htmlMenuItemElement.nodeType : `number`

**Read only**



### htmlMenuItemElement.namespaceURI : `string`

**Read only**



### htmlMenuItemElement.id : `string`



### htmlMenuItemElement.tabIndex : `number`



### htmlMenuItemElement.className : `string`



### htmlMenuItemElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlMenuItemElement.style : `Style`

**Read only**



### htmlMenuItemElement.clientLeft : `number`

**Read only**



### htmlMenuItemElement.clientTop : `number`

**Read only**



### htmlMenuItemElement.clientWidth : `number`

**Read only**



### htmlMenuItemElement.clientHeight : `number`

**Read only**



### htmlMenuItemElement.height : `string` \| `Number`
The height of the element



### htmlMenuItemElement.width : `string` \| `Number`
The width of the element



### htmlMenuItemElement.offsetParent : [`Element`](#element)

**Read only**



### htmlMenuItemElement.offsetLeft : `number`

**Read only**



### htmlMenuItemElement.offsetTop : `number`

**Read only**



### htmlMenuItemElement.offsetWidth : `number`

**Read only**



### htmlMenuItemElement.offsetHeight : `number`

**Read only**



### htmlMenuItemElement.scrollLeft : `number`



### htmlMenuItemElement.scrollTop : `number`



### htmlMenuItemElement.scrollWidth : `number`

**Read only**



### htmlMenuItemElement.scrollHeight : `number`

**Read only**



### htmlMenuItemElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlMenuItemElement.disabled : `boolean`



### htmlMenuItemElement.innerHTML : `string`



### htmlMenuItemElement.outerHTML : `string`



### htmlMenuItemElement.contentEditable

**Read only**



### htmlMenuItemElement.isConnected : `boolean`

**Read only**



### htmlMenuItemElement.parentNode : [`Node`](#node)

**Read only**



### htmlMenuItemElement.parentElement : [`Element`](#element)

**Read only**



### htmlMenuItemElement.firstChild : [`Node`](#node)

**Read only**



### htmlMenuItemElement.lastChild : [`Node`](#node)

**Read only**



### htmlMenuItemElement.previousSibling : [`Node`](#node)

**Read only**



### htmlMenuItemElement.nextSibling : [`Node`](#node)

**Read only**



### htmlMenuItemElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlMenuItemElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlMenuItemElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlMenuItemElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlMenuItemElement.textContent : `string`



### htmlMenuItemElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlMenuItemElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlMenuItemElement.ownerDocument

**Read only**



### htmlMenuItemElement.scrollIntoView()



### htmlMenuItemElement.scrollIntoViewIfNeeded()



### htmlMenuItemElement.focus()



### htmlMenuItemElement.blur()



### htmlMenuItemElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlMenuItemElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlMenuItemElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlMenuItemElement.click()



### htmlMenuItemElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlMenuItemElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlMenuItemElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlMenuItemElement.getBoundingClientRect()



### htmlMenuItemElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlMenuItemElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlMenuItemElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlMenuItemElement.hasChildNodes()



### htmlMenuItemElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlMenuItemElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlMenuItemElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlMenuItemElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlMenuItemElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlMenuItemElement.remove()



### htmlMenuItemElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuItemElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuItemElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlMenuItemElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlMenuItemElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlMenuItemElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlMenuItemElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

