---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Progress Event
description: Creates an instance of ProgressEvent.
---




## ProgressEvent

**Extends**: [`Event`](#event)

**See**

- [https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent](https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent)
- [https://xhr.spec.whatwg.org/#progressevent](https://xhr.spec.whatwg.org/#progressevent)

* [ProgressEvent](#ProgressEvent)
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
        * [.module.exports](#progressevent-module-exports)
            * [new module.exports(typeArg, [eventInit])](#new-progressevent-module-exports-new)
        * [.lengthComputable](#progressevent-lengthcomputable)
        * [.loaded](#progressevent-loaded)
        * [.total](#progressevent-total)
        * [.initEvent(typeArg, bubbles, cancelable)](#progressevent-initevent)



### progressEvent.type

**Read only**



### progressEvent.isTrusted : `boolean`

**Read only**



### progressEvent.target : [`Node`](#node)

**Read only**



### progressEvent.currentTarget : [`Node`](#node)

**Read only**



### progressEvent.bubbles : `boolean`

**Read only**



### progressEvent.cancelable : `boolean`

**Read only**



### progressEvent.eventPhase

**Read only**



### progressEvent.defaultPrevented : `boolean`

**Read only**



### progressEvent.returnValue : `\*`



### progressEvent.preventDefault()



### progressEvent.stopImmediatePropagation()



### progressEvent.stopPropagation()



### ProgressEvent.module.exports



#### new module.exports(typeArg, [eventInit])
Creates an instance of ProgressEvent.

| Param | Type | Default |
| --- | --- | --- |
| typeArg | `\*` |  |
| \[eventInit] | `\*` | `{}` |



### ProgressEvent.lengthComputable

**Read only**



### ProgressEvent.loaded

**Read only**



### ProgressEvent.total

**Read only**



### ProgressEvent.initEvent(typeArg, bubbles, cancelable)

| Param | Type |
| --- | --- |
| typeArg | `\*` |
| bubbles | `\*` |
| cancelable | `\*` |

