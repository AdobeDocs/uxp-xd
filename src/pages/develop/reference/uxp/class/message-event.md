---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Message Event
description: Creates an instance of MessageEvent.
---




## MessageEvent

**Extends**: [`Event`](#event)

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)

* [MessageEvent](#MessageEvent)
    * [new MessageEvent(data, origin, source, eventInit)](#new-messageevent-new)
    * [.data](#messageevent-data)
    * [.origin](#messageevent-origin)
    * [.source](#messageevent-source)
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



### new MessageEvent(data, origin, source, eventInit)
Creates an instance of MessageEvent.

| Param | Type |
| --- | --- |
| data | `\*` |
| origin | `\*` |
| source | `\*` |
| eventInit | `\*` |



### messageEvent.data

**Returns**: `string` - returns the data sent by the server.



### messageEvent.origin

**Returns**: `string` - returns the origin of the message.



### messageEvent.source

**Returns**: `string` - returns the string indicating the messageEventSource.



### messageEvent.type

**Read only**



### messageEvent.isTrusted : `boolean`

**Read only**



### messageEvent.target : [`Node`](#node)

**Read only**



### messageEvent.currentTarget : [`Node`](#node)

**Read only**



### messageEvent.bubbles : `boolean`

**Read only**



### messageEvent.cancelable : `boolean`

**Read only**



### messageEvent.eventPhase

**Read only**



### messageEvent.defaultPrevented : `boolean`

**Read only**



### messageEvent.returnValue : `\*`



### messageEvent.preventDefault()



### messageEvent.stopImmediatePropagation()



### messageEvent.stopPropagation()

