---
title: window.CloseEvent
description: Creates an instance of CloseEvent.
---



# window.CloseEvent
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)  




## CloseEvent(code, reason, wasClean)
Creates an instance of CloseEvent.


| Param | Type |
| --- | --- |
| code | `*` | 
| reason | `*` | 
| wasClean | `*` | 





## code ⇒ `number`
**Returns**: `number` - returns the close code sent by the server.  




## reason ⇒ `number`
**Returns**: `number` - returns the string indicating the reason the server closed the connection..  




## wasClean ⇒ `boolean`
**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.  




## type
**Read only**




## isTrusted : `boolean`
**Read only**




## target : `Node`
**Read only**




## currentTarget : `Node`
**Read only**




## bubbles : `boolean`
**Read only**




## cancelable : `boolean`
**Read only**




## eventPhase
**Read only**




## defaultPrevented : `boolean`
**Read only**




## returnValue : `*`




## initEvent(typeArg, bubblesArg, cancelableArg)

| Param | Type |
| --- | --- |
| typeArg | `string` | 
| bubblesArg | `boolean` | 
| cancelableArg | `boolean` | 





## preventDefault()




## stopImmediatePropagation()




## stopPropagation()

  