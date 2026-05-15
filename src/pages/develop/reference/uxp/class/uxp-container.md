---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Uxp Container
description: Describes information regarding the UXP container for the attached element.
---




## UXPContainer

**Extends**: [`EventTarget`](#eventtarget)

**Category**: uxp

* [UXPContainer](#UXPContainer)
    * [new UXPContainer()](#new-uxpcontainer-new)
    * [.devicePixelRatio](#uxpcontainer-devicepixelratio) : `number`
    * [.addEventListener(eventName, callback, [capture])](#eventtarget-addeventlistener)
    * [.removeEventListener(eventName, callback, [capture])](#eventtarget-removeeventlistener)
    * [.dispatchEvent(event)](#eventtarget-dispatchevent)



### new UXPContainer()
Describes information regarding the UXP container for the attached element.



### uxpContainer.devicePixelRatio : `number`
Returns the device pixel ratio for this element

**Read only**



### uxpContainer.addEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### uxpContainer.removeEventListener(eventName, callback, [capture])

| Param | Type | Default |
| --- | --- | --- |
| eventName | `\*` |  |
| callback | `\*` |  |
| \[capture] | `boolean` | `false` |



### uxpContainer.dispatchEvent(event)

| Param | Type |
| --- | --- |
| event | `\*` |

