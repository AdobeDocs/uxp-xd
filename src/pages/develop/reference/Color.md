# Color

**Kind**: class

## new Color(value, opacity)

Create a new color instance.

| Param   | Type                                                                       | Description                                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value   | `! string &#124; number &#124; {r:number, g:number, b:number, a:?number}`` | One of:<ul><li>String in CSS color format (hex, rgb, rgba, hsl, hsla, hsv, hsva, or color name)</li><li>ARGB numeric value (unsigned 32-bit integer)</li><li>Object with `r`, `g`, `b`, `a` keys all set to integers from 0 - 255 (if `a` is omitted, 255 is used)</li></ul> |
| opacity | `?number`                                                                  | Optional, floating-point value from 0 - 1. Use when `value` parameter doesn't specify an opacity and you don't want the default 1.0 (100%) opacity.                                                                                                                          |

### _color.a : `number`_

Integer 0-255. Get/set the alpha channel value.

**Kind**: instance property of [`Color`](#Color)

### _color.r : `number`_

Integer 0-255. Get/set the red channel value.

**Kind**: instance property of [`Color`](#Color)

### _color.g : `number`_

Integer 0-255. Get/set the green channel value.

**Kind**: instance property of [`Color`](#Color)

### _color.b : `number`_

Integer 0-255. Get/set the blue channel value.

**Kind**: instance property of [`Color`](#Color)

### color.toRgba()

Convert to an object with r, g, b, a keys where
r, g, b, a range from 0 - 255.

**Kind**: instance method of [`Color`](#Color)  
**Returns**: `!{r:number, g:number, b:number, a:number}`

### color.toHex(forceSixDigits) ⇒ `string`

Convert to hex string with "#" prefix. Ignores the Color's alpha value.
Returns a 3-digit string if possible, otherwise returns a 6-digit string.

**Kind**: instance method of [`Color`](#Color)  
**Returns**: `string` - Hex color string in the form #123 or #456ABC.

| Param          | Type      | Description                                          |
| -------------- | --------- | ---------------------------------------------------- |
| forceSixDigits | `boolean` | True if you want the result to always have 6 digits. |

### color.clone() ⇒ [!`Color`](#Color)

Returns a clone of the current color object

**Kind**: instance method of [`Color`](#Color)
