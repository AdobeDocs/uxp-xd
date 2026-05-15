---
title: UxpPanelInfo
description: Class describing a panel of the plugin.
---



# UxpPanelInfo
Class describing a panel of the plugin.



## id ⇒ `string`
Get panel id

**Returns**: `string`  




## label ⇒ `string`
Get panel label, localized string

**Returns**: `string`  




## description ⇒ `string`
Get panel description, localized string

**Returns**: `string`  




## shortcut ⇒ `Object`
Get panel shortcut

**Returns**: `Object` - which consists of following keys:
                 \{string} shortcutKey
                 \{boolean} commandKey
                 \{boolean} altKey
                 \{boolean} shiftKey
                 \{boolean} ctrlKey  




## title ⇒ `string`
Get panel title, localized string

**Returns**: `string`  




## icons ⇒ `Array`
Get panel icons

**Returns**: `Array` - each object contains following properties:
                           \{string} path
                           \{Array of Number} scale
                           \{Array of string} theme
*                          \{Array of string} species  




## minimumSize ⇒ `Object`
Get panel minimum size

**Returns**: `Object` - each object contains following properties:
                           \{Number} width
                           \{Number} height  




## maximumSize ⇒ `Object`
Get panel maximum size

**Returns**: `Object` - each object contains following properties:
                           \{Number} width
                           \{Number} height  




## preferredDockedSize ⇒ `Object`
Get panel preferred docked size

**Returns**: `Object` - each object contains following properties:
                           \{Number} width
                           \{Number} height  




## preferredFloatingSize ⇒ `Object`
Get panel preferred floating size

**Returns**: `Object` - each object contains following properties:
                           \{Number} width
                           \{Number} height  




## menuItems ⇒ `UxpMenuItems`
Get panel menu items

**Returns**: `UxpMenuItems`  

  