---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Dialog Element
description: Creates an instance of HTMLDialogElement.
---




## HTMLDialogElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement)

* [HTMLDialogElement](#HTMLDialogElement)
    * [new HTMLDialogElement(document, nodeName, namespaceURI)](#new-htmldialogelement-new)
    * [.open](#htmldialogelement-open) : `boolean`
    * [.returnValue](#htmldialogelement-returnvalue) : `\*`
    * [.REJECTION_REASON_NOT_ALLOWED](#htmldialogelement-rejection-reason-not-allowed)
    * [.REJECTION_REASON_DETACHED](#htmldialogelement-rejection-reason-detached)
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
    * [.showModal()](#htmldialogelement-showmodal)
    * [.close([returnValue])](#htmldialogelement-close)
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



### new HTMLDialogElement(document, nodeName, namespaceURI)
Creates an instance of HTMLDialogElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlDialogElement.open : `boolean`

**Read only**



### htmlDialogElement.returnValue : `\*`



### htmlDialogElement.REJECTION\_REASON\_NOT\_ALLOWED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the application does not allow showing dialogs (e.g. only one dialog is allowed).



### htmlDialogElement.REJECTION\_REASON\_DETACHED
When the promise returned from openDialog() is rejected, error.code can be equal to this value,
which means that the node has been detached from DOM tree.



### htmlDialogElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlDialogElement.nodeName : `string`

**Read only**



### htmlDialogElement.localName : `string`

**Read only**



### htmlDialogElement.tagName : `string`

**Read only**



### htmlDialogElement.nodeType : `number`

**Read only**



### htmlDialogElement.namespaceURI : `string`

**Read only**



### htmlDialogElement.id : `string`



### htmlDialogElement.tabIndex : `number`



### htmlDialogElement.className : `string`



### htmlDialogElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlDialogElement.style : `Style`

**Read only**



### htmlDialogElement.clientLeft : `number`

**Read only**



### htmlDialogElement.clientTop : `number`

**Read only**



### htmlDialogElement.clientWidth : `number`

**Read only**



### htmlDialogElement.clientHeight : `number`

**Read only**



### htmlDialogElement.height : `string` \| `Number`
The height of the element



### htmlDialogElement.width : `string` \| `Number`
The width of the element



### htmlDialogElement.offsetParent : [`Element`](#element)

**Read only**



### htmlDialogElement.offsetLeft : `number`

**Read only**



### htmlDialogElement.offsetTop : `number`

**Read only**



### htmlDialogElement.offsetWidth : `number`

**Read only**



### htmlDialogElement.offsetHeight : `number`

**Read only**



### htmlDialogElement.scrollLeft : `number`



### htmlDialogElement.scrollTop : `number`



### htmlDialogElement.scrollWidth : `number`

**Read only**



### htmlDialogElement.scrollHeight : `number`

**Read only**



### htmlDialogElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlDialogElement.disabled : `boolean`



### htmlDialogElement.innerHTML : `string`



### htmlDialogElement.outerHTML : `string`



### htmlDialogElement.contentEditable

**Read only**



### htmlDialogElement.isConnected : `boolean`

**Read only**



### htmlDialogElement.parentNode : [`Node`](#node)

**Read only**



### htmlDialogElement.parentElement : [`Element`](#element)

**Read only**



### htmlDialogElement.firstChild : [`Node`](#node)

**Read only**



### htmlDialogElement.lastChild : [`Node`](#node)

**Read only**



### htmlDialogElement.previousSibling : [`Node`](#node)

**Read only**



### htmlDialogElement.nextSibling : [`Node`](#node)

**Read only**



### htmlDialogElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlDialogElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlDialogElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlDialogElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlDialogElement.textContent : `string`



### htmlDialogElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlDialogElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlDialogElement.ownerDocument

**Read only**



### htmlDialogElement.showModal()
Show the modal dialog.

**Returns**: `Promise` - A promise that resolves when the dialog is closed (**NSC**)
                   after calling the close() method or clicking the "submit" button.
                   The promise will be resolved with returnValue as a parameter.
                   The promise can be rejected if the dialog was closed for other reasons
                   e.g. the user hit escape or closed the window, or if the application
                   does not allow showing the dialog. The error parameter will give more details.
                   error.code will be one of the values from HTMLDialogElement.rejectionReasons.



### htmlDialogElement.close([returnValue])
Closes the dialog; setting the return value (optional)

| Param | Type |
| --- | --- |
| \[returnValue] | `\*` |



### htmlDialogElement.scrollIntoView()



### htmlDialogElement.scrollIntoViewIfNeeded()



### htmlDialogElement.focus()



### htmlDialogElement.blur()



### htmlDialogElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlDialogElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlDialogElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlDialogElement.click()



### htmlDialogElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlDialogElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlDialogElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlDialogElement.getBoundingClientRect()



### htmlDialogElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlDialogElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlDialogElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlDialogElement.hasChildNodes()



### htmlDialogElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlDialogElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlDialogElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlDialogElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlDialogElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlDialogElement.remove()



### htmlDialogElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlDialogElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlDialogElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlDialogElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlDialogElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlDialogElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlDialogElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

