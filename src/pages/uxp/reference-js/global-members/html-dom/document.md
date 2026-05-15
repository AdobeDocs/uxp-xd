---
title: window.Document
description: Creates an instance of Document.
---



# window.Document
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)  




## Document()
Creates an instance of Document.





## onLine : `boolean`
**Read only**
Indicates if the computer is online





## nodeName : `string`
**Read only**




## nodeType : `number`
**Read only**




## uxpContainer ⇒ `UXPContainer`
**Returns**: `UXPContainer`  




## activeElement : `Node`
**Read only**




## documentElement : `Document`
**Read only**




## head : `HTMLHeadElement`
**Read only**




## body : `HTMLBodyElement`
**Read only**




## clipboard : `Clippoard`
**Read only**




## styleSheets : `StyleSheetList`
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




## createElement(name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| name | `string` | 





## createElementNS(ns, name)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| ns | `string` | 
| name | `string` | 





## createEvent(eventType)
**See**: [https://dom.spec.whatwg.org/#dom-document-createevent](https://dom.spec.whatwg.org/#dom-document-createevent)  

| Param | Type |
| --- | --- |
| eventType | `string` | 





## createAttribute(nodeName)
**Returns**: `Attr`  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute)  

| Param | Type |
| --- | --- |
| nodeName | `string` | 





## createTextNode([text])
**Returns**: `Text`  

| Param | Type | Default |
| --- | --- | --- |
| \[text] | `string` | `&quot;\&quot;\&quot;&quot;` | 





## createComment([comment])
**Returns**: `Comment`  

| Param | Type | Default |
| --- | --- | --- |
| \[comment] | `string` | `&quot;\&quot;\&quot;&quot;` | 





## createDocumentFragment()
**Returns**: `DocumentFragment`  




## cloneNode(deep)
**Returns**: `Document`  

| Param | Type |
| --- | --- |
| deep | `boolean` | 





## adoptNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 





## importNode(externalNode, deep)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| externalNode | `Node` | 
| deep | `boolean` | 





## querySelector(selector)
**Returns**: `Node`  

| Param | Type |
| --- | --- |
| selector | `string` | 





## querySelectorAll(selector)
**Returns**: `NodeList`  

| Param | Type |
| --- | --- |
| selector | `string` | 





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





## getElementById(id)
**Returns**: `Element`  

| Param | Type |
| --- | --- |
| id | `string` | 





## hasChildNodes()
**Returns**: `boolean`  




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


  