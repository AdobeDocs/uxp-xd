---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Error Event
description: Creates an instance of ErrorEvent.
---




## ErrorEvent

**Extends**: [`Event`](#event)

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent](https://developer.mozilla.org/en-US/docs/Web/API/ErrorEvent)
- [https://html.spec.whatwg.org/#the-errorevent-interface](https://html.spec.whatwg.org/#the-errorevent-interface)

* [ErrorEvent](#ErrorEvent)
    * [new ErrorEvent(typeArg, [eventInit])](#new-errorevent-new)
    * [.message](#errorevent-message)
    * [.filename](#errorevent-filename)
    * [.lineno](#errorevent-lineno)
    * [.colno](#errorevent-colno)
    * [.error](#errorevent-error)
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



### new ErrorEvent(typeArg, [eventInit])
Creates an instance of ErrorEvent.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `\*` |  |
| \[eventInit] | `\*` | `{}` |



### errorEvent.message

**Read only**



### errorEvent.filename

**Read only**



### errorEvent.lineno

**Read only**



### errorEvent.colno

**Read only**



### errorEvent.error

**Read only**



### errorEvent.type

**Read only**



### errorEvent.isTrusted : `boolean`

**Read only**



### errorEvent.target : [`Node`](#node)

**Read only**



### errorEvent.currentTarget : [`Node`](#node)

**Read only**



### errorEvent.bubbles : `boolean`

**Read only**



### errorEvent.cancelable : `boolean`

**Read only**



### errorEvent.eventPhase

**Read only**



### errorEvent.defaultPrevented : `boolean`

**Read only**



### errorEvent.returnValue : `\*`



### errorEvent.preventDefault()



### errorEvent.stopImmediatePropagation()



### errorEvent.stopPropagation()

