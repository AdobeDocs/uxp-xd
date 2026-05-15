---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Html Input Element
description: Creates an instance of HTMLInputElement.
---




## HTMLInputElement

**Extends**: [`HTMLElement`](#htmlelement)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

* [HTMLInputElement](#HTMLInputElement)
    * [new HTMLInputElement(document, nodeName, namespaceURI)](#new-htmlinputelement-new)
    * _instance_
        * [.value](#htmlinputelement-value) : `\*`
        * [.defaultValue](#htmlinputelement-defaultvalue) : `string`
        * [.checked](#htmlinputelement-checked) : `boolean`
        * [.indeterminate](#htmlinputelement-indeterminate) : `boolean`
        * [.autofocus](#htmlinputelement-autofocus) : `boolean`
        * [.name](#htmlinputelement-name) : `string`
        * [.type](#htmlinputelement-type) : `string`
        * [.placeholder](#htmlinputelement-placeholder) : `string`
        * [.readOnly](#htmlinputelement-readonly) : `boolean`
        * [.min](#htmlinputelement-min) : `string`
        * [.max](#htmlinputelement-max) : `string`
        * [.step](#htmlinputelement-step) : `string`
        * [.uxpVariant](#htmlinputelement-uxpvariant) : `string`
        * [.uxpQuiet](#htmlinputelement-uxpquiet) : `string`
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
    * _static_
        * [.HTMLTextAreaElement#defaultValue](#htmlinputelement-htmltextareaelement-defaultvalue) : `string`



### new HTMLInputElement(document, nodeName, namespaceURI)
Creates an instance of HTMLInputElement.

| Param | Type |
| --- | --- |
| document | `\*` |
| nodeName | `\*` |
| namespaceURI | `\*` |



### htmlInputElement.value : `\*`
Returns the value of the input element.



### htmlInputElement.defaultValue : `string`
The defaultValue for the input element (if applicable to the input element's type)



### htmlInputElement.checked : `boolean`
Indicates if the checkbox is checked.



### htmlInputElement.indeterminate : `boolean`
Indicates if the element is indeterminate



### htmlInputElement.autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded in a form.



### htmlInputElement.name : `string`
Specifies the name of this input element.



### htmlInputElement.type : `string`
Specifies the type of input control



### htmlInputElement.placeholder : `string`
The placeholder for the input element (if applicable to the input element's type)



### htmlInputElement.readOnly : `boolean`
Determines if the element's content is read only.



### htmlInputElement.min : `string`
Minimum value allowed (used for `input type="range"`)



### htmlInputElement.max : `string`
Maximum value allowed (used for `input type="range"`)



### htmlInputElement.step : `string`
the size of each movement of the slder control (used for `input type="range"`)



### htmlInputElement.uxpVariant : `string`
Controls the type of native widget.



### htmlInputElement.uxpQuiet : `string`
Determines if a control is rendered in "quiet" mode



### htmlInputElement.dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)



### htmlInputElement.nodeName : `string`

**Read only**



### htmlInputElement.localName : `string`

**Read only**



### htmlInputElement.tagName : `string`

**Read only**



### htmlInputElement.nodeType : `number`

**Read only**



### htmlInputElement.namespaceURI : `string`

**Read only**



### htmlInputElement.id : `string`



### htmlInputElement.tabIndex : `number`



### htmlInputElement.className : `string`



### htmlInputElement.attributes : [`NamedNodeMap`](#namednodemap)

**Read only**



### htmlInputElement.style : `Style`

**Read only**



### htmlInputElement.clientLeft : `number`

**Read only**



### htmlInputElement.clientTop : `number`

**Read only**



### htmlInputElement.clientWidth : `number`

**Read only**



### htmlInputElement.clientHeight : `number`

**Read only**



### htmlInputElement.height : `string` \| `Number`
The height of the element



### htmlInputElement.width : `string` \| `Number`
The width of the element



### htmlInputElement.offsetParent : [`Element`](#element)

**Read only**



### htmlInputElement.offsetLeft : `number`

**Read only**



### htmlInputElement.offsetTop : `number`

**Read only**



### htmlInputElement.offsetWidth : `number`

**Read only**



### htmlInputElement.offsetHeight : `number`

**Read only**



### htmlInputElement.scrollLeft : `number`



### htmlInputElement.scrollTop : `number`



### htmlInputElement.scrollWidth : `number`

**Read only**



### htmlInputElement.scrollHeight : `number`

**Read only**



### htmlInputElement.uxpContainer : [`UXPContainer`](#uxpcontainer)

**Read only**



### htmlInputElement.disabled : `boolean`



### htmlInputElement.innerHTML : `string`



### htmlInputElement.outerHTML : `string`



### htmlInputElement.contentEditable

**Read only**



### htmlInputElement.isConnected : `boolean`

**Read only**



### htmlInputElement.parentNode : [`Node`](#node)

**Read only**



### htmlInputElement.parentElement : [`Element`](#element)

**Read only**



### htmlInputElement.firstChild : [`Node`](#node)

**Read only**



### htmlInputElement.lastChild : [`Node`](#node)

**Read only**



### htmlInputElement.previousSibling : [`Node`](#node)

**Read only**



### htmlInputElement.nextSibling : [`Node`](#node)

**Read only**



### htmlInputElement.firstElementChild : [`Node`](#node)

**Read only**



### htmlInputElement.lastElementChild : [`Node`](#node)

**Read only**



### htmlInputElement.previousElementSibling : [`Node`](#node)

**Read only**



### htmlInputElement.nextElementSibling : [`Node`](#node)

**Read only**



### htmlInputElement.textContent : `string`



### htmlInputElement.childNodes : [`NodeList`](#nodelist)

**Read only**



### htmlInputElement.children : [`HTMLCollection`](#htmlcollection)

**Read only**



### htmlInputElement.ownerDocument

**Read only**



### htmlInputElement.scrollIntoView()



### htmlInputElement.scrollIntoViewIfNeeded()



### htmlInputElement.focus()



### htmlInputElement.blur()



### htmlInputElement.getAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` |
| value | `string` |



### htmlInputElement.removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.hasAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.getAttributeNode(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `\*` |



### htmlInputElement.removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `\*` |



### htmlInputElement.click()



### htmlInputElement.getElementsByClassName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.getElementsByTagName(name)

| Param | Type |
| --- | --- |
| name | `string` |



### htmlInputElement.querySelector(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlInputElement.querySelectorAll(selector)

| Param | Type |
| --- | --- |
| selector | `string` |



### htmlInputElement.getBoundingClientRect()



### htmlInputElement.insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  |
| value | `string` |



### htmlInputElement.insertAdjacentElement(position, node)

| Param | Type |
| --- | --- |
| position | `\*` |
| node | `\*` |



### htmlInputElement.insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `\*` |
| text | `\*` |



### htmlInputElement.hasChildNodes()



### htmlInputElement.cloneNode(deep)

| Param | Type |
| --- | --- |
| deep | `boolean` |



### htmlInputElement.appendChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlInputElement.insertBefore(child, before)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |
| before | [`Node`](#node) |



### htmlInputElement.replaceChild(newChild, oldChild)

| Param | Type |
| --- | --- |
| newChild | [`Node`](#node) |
| oldChild | [`Node`](#node) |



### htmlInputElement.removeChild(child)

| Param | Type |
| --- | --- |
| child | [`Node`](#node) |



### htmlInputElement.remove()



### htmlInputElement.before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlInputElement.after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlInputElement.replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | [`Array.<Node>`](#node) |



### htmlInputElement.contains(node)

| Param | Type |
| --- | --- |
| node | [`Node`](#node) |



### htmlInputElement.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlInputElement.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### htmlInputElement.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |



### HTMLInputElement.HTMLTextAreaElement#defaultValue : `string`
The defaultValue for the textarea element

