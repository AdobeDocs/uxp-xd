---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# GraphicNode

**Kind**: abstract class
**Extends**: [SceneNode](/develop/reference/SceneNode)

Base class for nodes that have a stroke and/or fill. This includes leaf nodes such as Rectangle, as well as BooleanGroup
which is a container node. If you create a shape node, it will not be visible unless you explicitly give it either a stroke
or a fill.

## fill

▸ **fill**: [Color](/develop/reference/Color) | [LinearGradient](/develop/reference/LinearGradient) | [RadialGradient](/develop/reference/RadialGradient) | [AngularGradient](/develop/reference/AngularGradient) | [ImageFill](/develop/reference/ImageFill)

**Updated** XD 42

**Default**: `null`

The fill applied to this shape, if any. If this property is null _or_ `fillEnabled` is false, no fill is drawn.
Freshly created nodes have no fill by default.

For Line nodes, fill is ignored. For Text nodes, _only_ solid Color fill values are allowed. For Artboard nodes, image fill values
are not allowed.

**Example**

```js
ellipse.fill = new Color("red");
```

To modify an existing fill, always be sure to re-invoke the `fill` setter rather than just changing the fill object's properties inline.
See ["Properties with object values"](/develop/plugin-development/xd-concepts/properties-with-object-values/).

**Kind**: instance property of [GraphicNode](#graphicnode)

## fillEnabled

▸ **fillEnabled**: `boolean`

**Default**: `true`

If false, the `fill` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [GraphicNode](#graphicnode)

## stroke

▸ **stroke**: [Color](/develop/reference/Color)

**Default**: `null`

The stroke color applied to this shape, if any. If this property is null _or_ `strokeEnabled` is false, no stroke is drawn.
Freshly created nodes have no stroke by default. Artboard objects ignore stroke settings.

Depending on the [strokeWidth](#strokewidth) and [strokePosition](#strokeposition), the path outline
of a node may need to be positioned on fractional pixels in order for the stroke itself to be crisply aligned to the pixel grid.
For example, if a horizontal line uses a 1px center stroke, the line's y should end in .5 to keep the stroke on-pixel.

**Example**

```js
ellipse.stroke = new Color("red");
```

To modify an existing stroke, always be sure to re-invoke the `stroke` setter rather than just changing the Color object's properties inline.
See ["Properties with object values"](/develop/plugin-development/xd-concepts/properties-with-object-values/).

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeEnabled

▸ **strokeEnabled**: `boolean`

**Default**: `false`

If false, the `stroke` is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeWidth

▸ **strokeWidth**: `number` >= 0

**Default**: `1.0`

Thickness in pixels of the stroke.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokePosition

▸ **strokePosition**: `string`

**Default**: `CENTER_STROKE` for most shapes, `INNER_STROKE` for Rectangle, Ellipse & Polygon

Position of the stroke relative to the shape's path outline: GraphicNode.INNER_STROKE, OUTER_STROKE, or CENTER_STROKE. Ignored by Text and Line, which always render using CENTER_STROKE.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeEndCaps

▸ **strokeEndCaps**: `string`

**Default**: `STROKE_CAP_NONE`

For Lines and non-closed Paths, how the dangling ends of the stroke are rendered: GraphicNode.STROKE_CAP_NONE, STROKE_CAP_SQUARE, or STROKE_CAP_ROUND.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeJoins

▸ **strokeJoins**: `string`

**Default**: `STROKE_JOIN_MITER`

How sharp corners in the shape are rendered: GraphicNode.STROKE_JOIN_BEVEL, STROKE_JOIN_ROUND, or STROKE_JOIN_MITER.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeMiterLimit

▸ **strokeMiterLimit**: `number` >= 0

**Default**: `4`

Expressed as a multiple of stroke width. Only used when [strokeJoins](#strokejoins) = STROKE_JOIN_MITER.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeDashArray

▸ **strokeDashArray**: `Array<number>`

**Default**: `[]`

Empty array indicates a solid stroke. If non-empty, values represent the lengths of rendered and blank segments of the
stroke's dash pattern, repeated along the length of the stroke. The first value is the length of the first solid segment.
If the array is odd length, the items are copied to double the array length. For example, `[3]` produces the same effect
as `[3, 3]`.

The appearance of each segment's start/end follows the [strokeEndCaps](#strokeendcaps) setting.

**Kind**: instance property of [GraphicNode](#graphicnode)

## strokeDashOffset

▸ **strokeDashOffset**: `number`

**Default**: `0`

Ignored unless `strokeDashArray` is non-empty. Shifts the "phase" of the repeating dash pattern along the length of the stroke.

**Kind**: instance property of [GraphicNode](#graphicnode)

## shadow

▸ **shadow**: ?[Shadow](/develop/reference/Shadow)

**Default**: `null`

The node's drop shadow, if any. If there is no shadow applied, this property may be null _or_ `shadow.visible` may be false.

To modify an existing shadow, always be sure to re-invoke the `shadow` setter rather than just changing the Shadow object's properties inline.
See ["Properties with object values"](/develop/plugin-development/xd-concepts/properties-with-object-values/).

**Kind**: instance property of [GraphicNode](#graphicnode)

## blur

▸ **blur**: ?[Blur](/develop/reference/Blur)

**Default**: `null`

The node's object blur or background blur settings, if applicable (a node may not have both types of blur at once). If there is no blur
effect applied, this property may be null _or_ `blur.visible` may be false.

To modify an existing blur, always be sure to re-invoke the `blur` setter rather than just changing the Blur object's properties inline.
See ["Properties with object values"](/develop/plugin-development/xd-concepts/properties-with-object-values/).

**Kind**: instance property of [GraphicNode](#graphicnode)

## pathData

▸ **pathData**: `string`

Returns a representation of the node's outline in SVG `<path>` syntax. Note that only nodes with [strokePosition](#strokeposition) ==
`GraphicNode.CENTER_STROKE` can be faithfully rendered in actual SVG using the exact pathData shown here.

**Kind**: instance property of [GraphicNode](#graphicnode)
**Read only**: true

## hasLinkedGraphicFill

▸ **hasLinkedGraphicFill**: `boolean`

True if the node has an image fill that comes from a link to an external resource, such as Creative Cloud Libraries. Equivalent to the expression: `node.fill && node.fill.linked`.

**Kind**: instance property of [GraphicNode](#graphicnode)
**Read only**: true
