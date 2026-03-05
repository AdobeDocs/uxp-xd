---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Shadow

**Kind**: class

## new Shadow()

▸ **new Shadow**(`x`, `y`, `blur`, `color`, `visible`): [Shadow](#Shadow)

Creates a drop shadow style object with the given properties.

The `visible` argument is optional and defaults to true.

| Param   | Type                |
| ------- | ------------------- |
| x       | `number`            |
| y       | `number`            |
| blur    | `number`            |
| color   | [Color](/develop/reference/Color) |
| visible | `?boolean`          |

## x

▸ **x**: `number`

X offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [Shadow](#Shadow)

## y

▸ **y**: `number`

Y offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [Shadow](#Shadow)

## blur

▸ **blur**: `number`

`number` must be >= 0.

**Kind**: instance property of [Shadow](#Shadow)

## color

▸ **color**: [Color](/develop/reference/Color)

**Kind**: instance property of [Shadow](#Shadow)

## visible

▸ **visible**: `boolean`

If false, the shadow is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [Shadow](#Shadow)
