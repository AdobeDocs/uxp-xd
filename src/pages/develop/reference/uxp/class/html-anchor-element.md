---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Anchor Element
description: Creates an instance of HTMLAnchorElement.
---




## HTMLAnchorElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)

* [HTMLAnchorElement](#HTMLAnchorElement)
    * [new HTMLAnchorElement(document, nodeName, namespaceURI)](#new-htmlanchorelement-new)
    * [.href](#htmlanchorelement-href) : `string`
    * [.pathname](#htmlanchorelement-pathname) : `string`
    * [.protocol](#htmlanchorelement-protocol) : `string`
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



### new HTMLAnchorElement(document, nodeName, namespaceURI)
Creates an instance of HTMLAnchorElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlAnchorElement.href : `string`
The `href` value for the anchor



### htmlAnchorElement.pathname : `string`
The path portion of the anchor's `href`

**Read only**



### htmlAnchorElement.protocol : `string`
The protocol portion of the anchor's `href`.

**Read only**



### htmlAnchorElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlAnchorElement.nodeName : `string`

**Read only**



### htmlAnchorElement.localName : `string`

**Read only**



### htmlAnchorElement.tagName : `string`

**Read only**



### htmlAnchorElement.nodeType : `number`

**Read only**



### htmlAnchorElement.namespaceURI : `string`

**Read only**



### htmlAnchorElement.id : `string`



### htmlAnchorElement.tabIndex : `number`



### htmlAnchorElement.className : `string`



### htmlAnchorElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlAnchorElement.style : `Style`

**Read only**



### htmlAnchorElement.clientLeft : `number`

**Read only**



### htmlAnchorElement.clientTop : `number`

**Read only**



### htmlAnchorElement.clientWidth : `number`

**Read only**



### htmlAnchorElement.clientHeight : `number`

**Read only**



### htmlAnchorElement.height : `string` \| `Number`
The height of the element



### htmlAnchorElement.width : `string` \| `Number`
The width of the element



### htmlAnchorElement.offsetParent : [`Element`](#element)

**Read only**



### htmlAnchorElement.offsetLeft : `number`

**Read only**



### htmlAnchorElement.offsetTop : `number`

**Read only**



### htmlAnchorElement.offsetWidth : `number`

**Read only**



### htmlAnchorElement.offsetHeight : `number`

**Read only**



### htmlAnchorElement.scrollLeft : `number`



### htmlAnchorElement.scrollTop : `number`



### htmlAnchorElement.scrollWidth : `number`

**Read only**



### htmlAnchorElement.scrollHeight : `number`

**Read only**



### htmlAnchorElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlAnchorElement.disabled : `boolean`



### htmlAnchorElement.innerHTML : `string`



### htmlAnchorElement.outerHTML : `string`



### htmlAnchorElement.contentEditable

**Read only**



### htmlAnchorElement.isConnected : `boolean`

**Read only**



### htmlAnchorElement.parentNode : [`Node`](#node)

**Read only**



### htmlAnchorElement.parentElement : [`Element`](#element)

**Read only**



### htmlAnchorElement.firstChild : [`Node`](#node)

**Read only**



### htmlAnchorElement.lastChild : [`Node`](#node)

**Read only**



### htmlAnchorElement.previousSibling : [`Node`](#node)

**Read only**



### htmlAnchorElement.nextSibling : [`Node`](#node)

**Read only**



### htmlAnchorElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlAnchorElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlAnchorElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlAnchorElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlAnchorElement.textContent : `string`



### htmlAnchorElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlAnchorElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlAnchorElement.ownerDocument

**Read only**



### htmlAnchorElement.scrollIntoView()



### htmlAnchorElement.scrollIntoViewIfNeeded()



### htmlAnchorElement.focus()



### htmlAnchorElement.blur()



### htmlAnchorElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlAnchorElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlAnchorElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlAnchorElement.click()



### htmlAnchorElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlAnchorElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlAnchorElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlAnchorElement.getBoundingClientRect()



### htmlAnchorElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlAnchorElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlAnchorElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlAnchorElement.hasChildNodes()



### htmlAnchorElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlAnchorElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlAnchorElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlAnchorElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlAnchorElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlAnchorElement.remove()



### htmlAnchorElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlAnchorElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlAnchorElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlAnchorElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlAnchorElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlAnchorElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlAnchorElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

