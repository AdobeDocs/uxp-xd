---
title: window.HTMLAnchorElement
description: The href value for the anchor
---



# window.HTMLAnchorElement
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement)  




## href : `string`
The `href` value for the anchor





## pathname : `string`
**Read only**
The path portion of the anchor's `href`





## protocol : `string`
**Read only**
The protocol portion of the anchor's `href`.





## dataset
Access to all the custom data attributes (data-*) set.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)  




## innerText : `string`




## nodeName : `string`
**Read only**




## localName : `string`
**Read only**




## tagName : `string`
**Read only**




## nodeType : `number`
**Read only**




## namespaceURI : `string`
**Read only**




## id : `string`




## tabIndex : `number`




## className : `string`




## attributes : `NamedNodeMap`
**Read only**




## style : `Style`
**Read only**




## clientLeft : `number`
**Read only**




## clientTop : `number`
**Read only**




## clientWidth : `number`
**Read only**




## clientHeight : `number`
**Read only**




## height : `string` \| `Number`
The height of the element





## width : `string` \| `Number`
The width of the element





## offsetParent : `Element`
**Read only**




## offsetLeft : `number`
**Read only**




## offsetTop : `number`
**Read only**




## offsetWidth : `number`
**Read only**




## offsetHeight : `number`
**Read only**




## scrollLeft : `number`




## scrollTop : `number`




## scrollWidth : `number`
**Read only**




## scrollHeight : `number`
**Read only**




## autofocus : `boolean`
Indicates if the element will focus automatically when it is loaded





## uxpContainer : `number`
**Read only**




## disabled : `boolean`




## innerHTML : `string`




## outerHTML : `string`




## contentEditable
**Read only**




## isConnected : `boolean`
**Read only**




## parentNode : `Node`
**Read only**




## parentElement : `Element`
**Read only**




## firstChild : `Node`
**Read only**




## lastChild : `Node`
**Read only**




## previousSibling : `Node`
**Read only**




## nextSibling : `Node`
**Read only**




## firstElementChild : `Node`
**Read only**




## lastElementChild : `Node`
**Read only**




## previousElementSibling : `Node`
**Read only**




## nextElementSibling : `Node`
**Read only**




## textContent : `string`




## childNodes : `NodeList`
**Read only**




## children : `HTMLCollection`
**Read only**




## ownerDocument
**Read only**




## scrollTo(xOrOptions, y)
Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo)  

| Param | Type | Description |
| --- | --- | --- |
| xOrOptions | `*` | either the new scrollLeft position or an options object. |
| y | `*` | the optional new scrollTop position. |





## scrollIntoView(alignToTop)

| Param | Type |
| --- | --- |
| alignToTop | `boolean` | 





## scrollIntoViewIfNeeded()




## focus()




## blur()




## getAttribute(name)
**Returns**: `string`  

| Param | Type |
| --- | --- |
| name | `string` | 





## setAttribute(name, value)

| Param | Type |
| --- | --- |
| name | `string` | 
| value | `string` | 





## removeAttribute(name)

| Param | Type |
| --- | --- |
| name | `string` | 





## hasAttribute(name)
**Returns**: `boolean`  

| Param | Type |
| --- | --- |
| name | `string` | 





## getAttributeNode(name)
**Returns**: `*`  

| Param | Type |
| --- | --- |
| name | `string` | 





## setAttributeNode(newAttr)

| Param | Type |
| --- | --- |
| newAttr | `*` | 





## removeAttributeNode(oldAttr)

| Param | Type |
| --- | --- |
| oldAttr | `*` | 





## click()




## getElementsByClassName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 





## getElementsByTagName(name)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| name | `string` | 





## querySelector(selector)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| selector | `string` | 





## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 





## getBoundingClientRect()
**Returns**: `*`  




## closest(selectorString)
**Returns**: `Element`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)  

| Param | Type |
| --- | --- |
| selectorString | `string` | 





## matches(selectorString)
**Returns**: `boolean`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Element/matches](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)  

| Param | Type |
| --- | --- |
| selectorString | `string` | 





## insertAdjacentHTML(position, value)

| Param | Type |
| --- | --- |
| position |  | 
| value | `string` | 





## insertAdjacentElement(position, node)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| position | `*` | 
| node | `*` | 





## insertAdjacentText(position, text)

| Param | Type |
| --- | --- |
| position | `*` | 
| text | `*` | 





## hasChildNodes()
**Returns**: `boolean`  




## cloneNode(deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 





## appendChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 





## insertBefore(child, before)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 
| before | `Node` | 





## replaceChild(newChild, oldChild)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| newChild | `Node` | 
| oldChild | `Node` | 





## removeChild(child)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| child | `Node` | 





## remove()




## before(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 





## after(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 





## replaceWith(...nodes)

| Param | Type |
| --- | --- |
| ...nodes | `Array<Node>` | 





## contains(node)

| Param | Type |
| --- | --- |
| node | `Node` | 





## addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| \[capture] | `boolean` | `false` | 





## removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `*` |  | 
| callback | `*` |  | 
| \[capture] | `boolean` | `false` | 





## dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `*` | 


  