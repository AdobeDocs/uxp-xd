---
title: Event
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
description: a name="event" id="event"/a
---



## Event

**See**: https://developer.mozilla.org/en-US/docs/Web/API/Event

* [Event](#event)
    * [new Event(eventType, eventInit)](#new-event-new)
    * _instance_
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
    * _static_
        * [.NONE](#event-none)
        * [.CAPTURING_PHASE](#event-capturing-phase)
        * [.AT_TARGET](#event-at-target)
        * [.BUBBLING_PHASE](#event-bubbling-phase)


### new Event(eventType, eventInit)
Creates an instance of Event.

| Param | Type |
| --- | --- |
| eventType | `\*` |
| eventInit | `\*` |


### event.type

**Read only**


### event.isTrusted : `boolean`

**Read only**


### event.target : [`Node`](#node)

**Read only**


### event.currentTarget : [`Node`](#node)

**Read only**


### event.bubbles : `boolean`

**Read only**


### event.cancelable : `boolean`

**Read only**


### event.eventPhase

**Read only**


### event.defaultPrevented : `boolean`

**Read only**


### event.returnValue : `\*`


### event.preventDefault()


### event.stopImmediatePropagation()


### event.stopPropagation()


### Event.NONE


### Event.CAPTURING\_PHASE


### Event.AT\_TARGET


### Event.BUBBLING\_PHASE

