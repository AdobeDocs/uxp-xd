---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Form Element
description: Returns an HTMLCollection containing all of the form controls.
---



## HTMLFormElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement)

- [HTMLFormElement](#HTMLFormElement)
  - [.elements](#htmlformelement-elements)
  - [.dataset](#htmlelement-dataset)
  - [.nodeName](#element-nodename) : `string`
  - [.localName](#element-localname) : `string`
  - [.tagName](#element-tagname) : `string`
  - [.nodeType](#element-nodetype) : `number`
  - [.namespaceURI](#element-namespaceuri) : `string`
  - [.id](#element-id) : `string`
  - [.tabIndex](#element-tabindex) : `number`
  - [.className](#element-classname) : `string`
  - [.attributes](#Element+attributes) : [`NamedNodeMap`](#namednodemap)
  - [.style](#element-style) : `Style`
  - [.clientLeft](#element-clientleft) : `number`
  - [.clientTop](#element-clienttop) : `number`
  - [.clientWidth](#element-clientwidth) : `number`
  - [.clientHeight](#element-clientheight) : `number`
  - [.height](#element-height) : `string` \| `Number`
  - [.width](#element-width) : `string` \| `Number`
  - [.offsetParent](#Element+offsetParent) : [`Element`](#element)
  - [.offsetLeft](#element-offsetleft) : `number`
  - [.offsetTop](#element-offsettop) : `number`
  - [.offsetWidth](#element-offsetwidth) : `number`
  - [.offsetHeight](#element-offsetheight) : `number`
  - [.scrollLeft](#element-scrollleft) : `number`
  - [.scrollTop](#element-scrolltop) : `number`
  - [.scrollWidth](#element-scrollwidth) : `number`
  - [.scrollHeight](#element-scrollheight) : `number`
  - [.uxpContainer](#Element+uxpContainer) : [`UXPContainer`](#uxpcontainer)
  - [.disabled](#element-disabled) : `boolean`
  - [.innerHTML](#element-innerhtml) : `string`
  - [.outerHTML](#element-outerhtml) : `string`
  - [.contentEditable](#node-contenteditable)
  - [.isConnected](#node-isconnected) : `boolean`
  - [.parentNode](#Node+parentNode) : [`Node`](#node)
  - [.parentElement](#Node+parentElement) : [`Element`](#element)
  - [.firstChild](#Node+firstChild) : [`Node`](#node)
  - [.lastChild](#Node+lastChild) : [`Node`](#node)
  - [.previousSibling](#Node+previousSibling) : [`Node`](#node)
  - [.nextSibling](#Node+nextSibling) : [`Node`](#node)
  - [.firstElementChild](#Node+firstElementChild) : [`Node`](#node)
  - [.lastElementChild](#Node+lastElementChild) : [`Node`](#node)
  - [.previousElementSibling](#Node+previousElementSibling) : [`Node`](#node)
  - [.nextElementSibling](#Node+nextElementSibling) : [`Node`](#node)
  - [.textContent](#node-textcontent) : `string`
  - [.childNodes](#Node+childNodes) : [`NodeList`](#nodelist)
  - [.children](#Node+children) : [`HTMLCollection`](#htmlcollection)
  - [.ownerDocument](#node-ownerdocument)
  - [.scrollIntoView()](#element-scrollintoview)
  - [.scrollIntoViewIfNeeded()](#element-scrollintoviewifneeded)
  - [.focus()](#element-focus)
  - [.blur()](#element-blur)
  - [.getAttribute(name)](#element-getattribute)
  - [.setAttribute(name, value)](#element-setattribute)
  - [.removeAttribute(name)](#element-removeattribute)
  - [.hasAttribute(name)](#element-hasattribute)
  - [.getAttributeNode(name)](#element-getattributenode)
  - [.setAttributeNode(newAttr)](#element-setattributenode)
  - [.removeAttributeNode(oldAttr)](#element-removeattributenode)
  - [.click()](#element-click)
  - [.getElementsByClassName(name)](#Element+getElementsByClassName)
  - [.getElementsByTagName(name)](#Element+getElementsByTagName)
  - [.querySelector(selector)](#Element+querySelector)
  - [.querySelectorAll(selector)](#Element+querySelectorAll)
  - [.getBoundingClientRect()](#element-getboundingclientrect)
  - [.insertAdjacentHTML(position, value)](#element-insertadjacenthtml)
  - [.insertAdjacentElement(position, node)](#Element+insertAdjacentElement)
  - [.insertAdjacentText(position, text)](#element-insertadjacenttext)
  - [.hasChildNodes()](#node-haschildnodes)
  - [.cloneNode(deep)](#Node+cloneNode)
  - [.appendChild(child)](#Node+appendChild)
  - [.insertBefore(child, before)](#Node+insertBefore)
  - [.replaceChild(newChild, oldChild)](#Node+replaceChild)
  - [.removeChild(child)](#Node+removeChild)
  - [.remove()](#node-remove)
  - [.before(...nodes)](#node-before)
  - [.after(...nodes)](#node-after)
  - [.replaceWith(...nodes)](#node-replacewith)
  - [.contains(node)](#node-contains)
  - [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
  - [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
  - [.dispatchEvent(event)](#eventtarget-dispatchevent)



### htmlFormElement.elements

Returns an HTMLCollection containing all of the form controls.
It should technicaly be an HTMLFormControlsCollection which subclasses HTMLCollection.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements)



### htmlFormElement.dataset

Access to all the custom data attributes (data-\*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlFormElement.nodeName : `string`

**Read only**



### htmlFormElement.localName : `string`

**Read only**



### htmlFormElement.tagName : `string`

**Read only**



### htmlFormElement.nodeType : `number`

**Read only**



### htmlFormElement.namespaceURI : `string`

**Read only**



### htmlFormElement.id : `string`



### htmlFormElement.tabIndex : `number`



### htmlFormElement.className : `string`



### htmlFormElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlFormElement.style : `Style`

**Read only**



### htmlFormElement.clientLeft : `number`

**Read only**



### htmlFormElement.clientTop : `number`

**Read only**



### htmlFormElement.clientWidth : `number`

**Read only**



### htmlFormElement.clientHeight : `number`

**Read only**



### htmlFormElement.height : `string` \| `Number`

The height of the element



### htmlFormElement.width : `string` \| `Number`

The width of the element



### htmlFormElement.offsetParent : [`Element`](#element)

**Read only**



### htmlFormElement.offsetLeft : `number`

**Read only**



### htmlFormElement.offsetTop : `number`

**Read only**



### htmlFormElement.offsetWidth : `number`

**Read only**



### htmlFormElement.offsetHeight : `number`

**Read only**



### htmlFormElement.scrollLeft : `number`



### htmlFormElement.scrollTop : `number`



### htmlFormElement.scrollWidth : `number`

**Read only**



### htmlFormElement.scrollHeight : `number`

**Read only**



### htmlFormElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlFormElement.disabled : `boolean`



### htmlFormElement.innerHTML : `string`



### htmlFormElement.outerHTML : `string`



### htmlFormElement.contentEditable

**Read only**



### htmlFormElement.isConnected : `boolean`

**Read only**



### htmlFormElement.parentNode : [`Node`](#node)

**Read only**



### htmlFormElement.parentElement : [`Element`](#element)

**Read only**



### htmlFormElement.firstChild : [`Node`](#node)

**Read only**



### htmlFormElement.lastChild : [`Node`](#node)

**Read only**



### htmlFormElement.previousSibling : [`Node`](#node)

**Read only**



### htmlFormElement.nextSibling : [`Node`](#node)

**Read only**



### htmlFormElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlFormElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlFormElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlFormElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlFormElement.textContent : `string`



### htmlFormElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlFormElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlFormElement.ownerDocument

**Read only**



### htmlFormElement.scrollIntoView()



### htmlFormElement.scrollIntoViewIfNeeded()



### htmlFormElement.focus()



### htmlFormElement.blur()



### htmlFormElement.getAttribute(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.setAttribute(name, value)

| Param | Type     |
| ----- | -------- |
| name  | `string` |
| value | `string` |



### htmlFormElement.removeAttribute(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.hasAttribute(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.getAttributeNode(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.setAttributeNode(newAttr)

| Param   | Type |
| ------- | ---- |
| newAttr | `\*` |



### htmlFormElement.removeAttributeNode(oldAttr)

| Param   | Type |
| ------- | ---- |
| oldAttr | `\*` |



### htmlFormElement.click()



### htmlFormElement.getElementsByClassName(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.getElementsByTagName(name)

| Param | Type     |
| ----- | -------- |
| name  | `string` |



### htmlFormElement.querySelector(selector)

| Param    | Type     |
| -------- | -------- |
| selector | `string` |



### htmlFormElement.querySelectorAll(selector)

| Param    | Type     |
| -------- | -------- |
| selector | `string` |



### htmlFormElement.getBoundingClientRect()



### htmlFormElement.insertAdjacentHTML(position, value)

| Param    | Type     |
| -------- | -------- |
| position |          |
| value    | `string` |



### htmlFormElement.insertAdjacentElement(position, node)

| Param    | Type |
| -------- | ---- |
| position | `\*` |
| node     | `\*` |



### htmlFormElement.insertAdjacentText(position, text)

| Param    | Type |
| -------- | ---- |
| position | `\*` |
| text     | `\*` |



### htmlFormElement.hasChildNodes()



### htmlFormElement.cloneNode(deep)

| Param | Type      |
| ----- | --------- |
| deep  | `boolean` |



### htmlFormElement.appendChild(child)

| Param | Type            |
| ----- | --------------- |
| child | [`Node`](#node) |



### htmlFormElement.insertBefore(child, before)

| Param  | Type            |
| ------ | --------------- |
| child  | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlFormElement.replaceChild(newChild, oldChild)

| Param    | Type            |
| -------- | --------------- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlFormElement.removeChild(child)

| Param | Type            |
| ----- | --------------- |
| child | [`Node`](#node) |



### htmlFormElement.remove()



### htmlFormElement.before(...nodes)

| Param    | Type                    |
| -------- | ----------------------- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlFormElement.after(...nodes)

| Param    | Type                    |
| -------- | ----------------------- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlFormElement.replaceWith(...nodes)

| Param    | Type                    |
| -------- | ----------------------- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlFormElement.contains(node)

| Param | Type            |
| ----- | --------------- |
| node  | [`Node`](#node) |



### htmlFormElement.addEventListener(eventName, callback, [capture])

| Param     | Type      | Default |
| --------- | --------- | ------- |
| eventName | `\*`      |         |
| callback  | `\*`      |         |
| \[capture] | `boolean` | `false` |



### htmlFormElement.removeEventListener(eventName, callback, [capture])

| Param     | Type      | Default |
| --------- | --------- | ------- |
| eventName | `\*`      |         |
| callback  | `\*`      |         |
| \[capture] | `boolean` | `false` |



### htmlFormElement.dispatchEvent(event)

| Param | Type |
| ----- | ---- |
| event | `\*` |
