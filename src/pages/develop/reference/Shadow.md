# Shadow

**Kind**: class

## new Shadow(x, y, blur, color, visible)

Creates a drop shadow style object with the given properties.

The `visible` argument is optional and defaults to true.

| Param   | Type                |
| ------- | ------------------- |
| x       | `number`            |
| y       | `number`            |
| blur    | `number`            |
| color   | `\![Color](Color/)` |
| visible | `?boolean`          |

### _shadow.x : `number`_

X offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [`Shadow`](#Shadow)

### _shadow.y : `number`_

Y offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [`Shadow`](#Shadow)

### _shadow.blur : `number`_ &gt;= 0

**Kind**: instance property of [`Shadow`](#Shadow)

### _shadow.color : `\![Color](Color/)`_

**Kind**: instance property of [`Shadow`](#Shadow)

### _shadow.visible : `boolean`_

If false, the shadow is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [`Shadow`](#Shadow)
