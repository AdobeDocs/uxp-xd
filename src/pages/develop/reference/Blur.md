# Blur

**Kind**: class

## Blur()

Creates an object blur or background blur effect object with the given properties.

| Param                | Type      |
| -------------------- | --------- |
| blurAmount           | `number`  |
| brightnessAmount     | `number`  |
| fillOpacity          | `number`  |
| [visible]            | `boolean` |
| [isBackgroundEffect] | `boolean` |

### _blur.blurAmount : `number`_ 0 - 50

**Kind**: instance property of [`Blur`](#Blur)

### _blur.brightnessAmount : `number`_ -50 - 50

For background blur effects, the amount to increase or decrease the brightness of the background. Ignored for object blur effects.

**Kind**: instance property of [`Blur`](#Blur)

### _blur.fillOpacity : `number`_ 0.0 - 1.0

For background blur effects, the a multiplier on the opacity of the object's fill drawn over top of the blurred background. Useful to create a color tint on top of the blurred background. Does _not_ affect stroke opacity.

Ignored for object blur effects.

**Kind**: instance property of [`Blur`](#Blur)

### _blur.isBackgroundEffect : `boolean`_

If true, renders a background blur effect: all objects beneath the shape are blurred (modulated by `brightnessAmount`), but the shape itself is still rendered with crisp edges (with its fill modulated by `fillOpacity`).

If false, renders an object blur effect: the shape itself is blurred, and objects beneath it are unaffected.

**Kind**: instance property of [`Blur`](#Blur)

### _blur.visible : `boolean`_

If false, the blur effect is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [`Blur`](#Blur)
