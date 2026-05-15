---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Close Event
description: Creates an instance of CloseEvent.
---




## CloseEvent

**Extends**: [`Event`](#event)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent)

* [CloseEvent](#CloseEvent)
    * [new CloseEvent(code, reason, wasClean)](#new-closeevent-new)
    * [.code](#closeevent-code)
    * [.reason](#closeevent-reason)
    * [.wasClean](#closeevent-wasclean)
    * [.type](#event-type)
    * [.isTrusted](#event-istrusted) : `boolean`
    * [.target](#Event+target) : [`Node`](#node)
    * [.currentTarget](#Event+currentTarget) : [`Node`](#node)
    * [.bubbles](#event-bubbles) : `boolean`
    * [.cancelable](#event-cancelable) : `boolean`
    * [.eventPhase](#event-eventphase)
    * [.defaultPrevented](#event-defaultprevented) : `boolean`
    * [.returnValue](#event-returnvalue) : `\*`
    * [.preventDefault()](#event-preventdefault)
    * [.stopImmediatePropagation()](#event-stopimmediatepropagation)
    * [.stopPropagation()](#event-stoppropagation)



### new CloseEvent(code, reason, wasClean)
Creates an instance of CloseEvent.

| Param | Type |
| --- | --- |
| code | `\*` |
| reason | `\*` |
| wasClean | `\*` |



### closeEvent.code

**Returns**: `number` - returns the close code sent by the server.



### closeEvent.reason

**Returns**: `number` - returns the string indicating the reason the server closed the connection..



### closeEvent.wasClean

**Returns**: `boolean` - returns a boolean that inndicates whether or not the connection was cleanly closed.



### closeEvent.type

**Read only**



### closeEvent.isTrusted : `boolean`

**Read only**



### closeEvent.target : [`Node`](#node)

**Read only**



### closeEvent.currentTarget : [`Node`](#node)

**Read only**



### closeEvent.bubbles : `boolean`

**Read only**



### closeEvent.cancelable : `boolean`

**Read only**



### closeEvent.eventPhase

**Read only**



### closeEvent.defaultPrevented : `boolean`

**Read only**



### closeEvent.returnValue : `\*`



### closeEvent.preventDefault()



### closeEvent.stopImmediatePropagation()



### closeEvent.stopPropagation()

