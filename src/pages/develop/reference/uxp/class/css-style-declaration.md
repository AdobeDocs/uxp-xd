---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Css Style Declaration
description: Number of properties in this style declaration
---




## CSSStyleDeclaration

**Category**: browser, cssom

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration)

* [CSSStyleDeclaration](#cssstyledeclaration)
    * [.length](#cssstyledeclaration-length)
    * [.parentRule](#CSSStyleDeclaration+parentRule) : [`CSSStyleRule`](#cssstylerule)
    * [.item(index)](#cssstyledeclaration-item)
    * [.getPropertyValue(property)](#cssstyledeclaration-getpropertyvalue)
    * [.setProperty(property, value, [priority])](#cssstyledeclaration-setproperty)
    * [.removeProperty(property)](#cssstyledeclaration-removeproperty)



### cssStyleDeclaration.length
Number of properties in this style declaration

**Read only**



### cssStyleDeclaration.parentRule : [`CSSStyleRule`](#cssstylerule)
Get the parent style rule

**Read only**



### cssStyleDeclaration.item(index)
Return the property name at the specified index.

| Param | Type |
| --- | --- |
| index | `number` |



### cssStyleDeclaration.getPropertyValue(property)
Returns the value of the specified property

| Param | Type |
| --- | --- |
| property | `DOMString` |



### cssStyleDeclaration.setProperty(property, value, [priority])
Set the property value

| Param | Type | Default |
| --- | --- | --- |
| property | `DOMString` |  |
| value | `DOMString` |  |
| \[priority] | `string` | `&quot;&quot;` |



### cssStyleDeclaration.removeProperty(property)
Remove the specified property

| Param | Type |
| --- | --- |
| property | `DOMString` |

