<a name="Color"></a>

## Color
**Kind**: class  

* [Color](#Color)
    * [new Color(value, opacity)](#new_Color_new)
    * [.a](#Color-a) : `number`
    * [.r](#Color-r) : `number`
    * [.g](#Color-g) : `number`
    * [.b](#Color-b) : `number`
    * [.toRgba()](#Color-toRgba) ⇒ `!{r:number, g:number, b:number, a:number}`
    * [.toHex(forceSixDigits)](#Color-toHex) ⇒ `string`
    * [.clone()](#Color-clone) ⇒ `!Color`


* * *

<a name="new_Color_new"></a>

### new Color(value, opacity)
Create a new color instance.

| Param | Type | Description |
| --- | --- | --- |
| value | `! string &#124; number &#124; {r:number, g:number, b:number, a:?number}`` | One of:<ul><li>String in CSS color format (hex, rgb, rgba, hsl, hsla, hsv, hsva, or color name)</li><li>ARGB numeric value (unsigned 32-bit integer)</li><li>Object with `r`, `g`, `b`, `a` keys all set to integers from 0 - 255 (if `a` is omitted, 255 is used)</li></ul> |
| opacity | `?number` | Optional, floating-point value from 0 - 1. Use when `value` parameter doesn't specify an opacity and you don't want the default 1.0 (100%) opacity. |


* * *

<a name="Color-a"></a>

### *color.a : `number`*
Integer 0-255. Get/set the alpha channel value.

**Kind**: instance property of [`Color`](#Color)  


* * *

<a name="Color-r"></a>

### *color.r : `number`*
Integer 0-255. Get/set the red channel value.

**Kind**: instance property of [`Color`](#Color)  


* * *

<a name="Color-g"></a>

### *color.g : `number`*
Integer 0-255. Get/set the green channel value.

**Kind**: instance property of [`Color`](#Color)  


* * *

<a name="Color-b"></a>

### *color.b : `number`*
Integer 0-255. Get/set the blue channel value.

**Kind**: instance property of [`Color`](#Color)  


* * *

<a name="Color-toRgba"></a>

### color.toRgba()
Convert to an object with r, g, b, a keys where
r, g, b, a range from 0 - 255.

**Kind**: instance method of [`Color`](#Color)  
**Returns**: `!{r:number, g:number, b:number, a:number}`


* * *

<a name="Color-toHex"></a>

### color.toHex(forceSixDigits) ⇒ `string`
Convert to hex string with "#" prefix. Ignores the Color's alpha value.
Returns a 3-digit string if possible, otherwise returns a 6-digit string.

**Kind**: instance method of [`Color`](#Color)  
**Returns**: `string` - Hex color string in the form #123 or #456ABC.  

| Param | Type | Description |
| --- | --- | --- |
| forceSixDigits | `boolean` | True if you want the result to always have 6 digits. |


* * *

<a name="Color-clone"></a>

### color.clone() ⇒ [!`Color`](#Color)
Returns a clone of the current color object

**Kind**: instance method of [`Color`](#Color)  

