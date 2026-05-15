---
title: window.Attr
description: Creates an instance of Attr.
---



# window.Attr
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Attr](https://developer.mozilla.org/en-US/docs/Web/API/Attr)  




## Attr(document, nodeName)
Creates an instance of Attr.


| Param | Type |
| --- | --- |
| document | `Document` | 
| nodeName | `string` | 





## nodeName : `string`
**Read only**




## localName : `string`
**Read only**




## name : `string`
**Read only**




## specified : `boolean`
**Read only**




## value : `*`




## nodeType : `number`
**Read only**




## nodeValue : `*`




## ownerElement : `Element`
**Read only**




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




## attributes
**Read only**




## remove()




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


  