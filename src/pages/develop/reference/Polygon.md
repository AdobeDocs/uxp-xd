---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Polygon

**Kind**: class
**Extends**: [GraphicNode](/develop/reference/GraphicNode)
**Since**: XD 19

Leaf node shape that is either a convex polygon _or_ a star shape. May have rounded corners. The sides are not necessarily all equal in length:
this is true only when the Polygon's width and height matches the aspect ratio of a regular (equilateral) polygon with the given number of
sides.

When unrotated, a non-star Polygon always has its bottommost side as a perfectly horizontal line - with the exception of the 4-sided Polygon, which
is a diamond shape instead.

Like all shape nodes, has no size, fill, or stroke by default unless you set one.

**Example**

```js
// Add a red triangle to the document
var polygon = new Polygon();
polygon.cornerCount = 3;
polygon.width = 50;
polygon.height = 100;
polygon.fill = new Color("red");
selection.insertionParent.addChild(polygon);

// Add a blue 5-pointed star with rounded corners
var polygon = new Polygon();
polygon.cornerCount = 5;
polygon.starRatio = 55;
polygon.setAllCornerRadii(4);
polygon.width = 100;
polygon.height = 95;
polygon.fill = new Color("blue");
selection.insertionParent.addChild(polygon);
```

## width

▸ **width**: `number` > 0

**Kind**: instance property of [Polygon](#polygon)

## height

▸ **height**: `number` > 0

**Kind**: instance property of [Polygon](#polygon)

## cornerCount

▸ **cornerCount**: `number` (integer >= 3)

**Default**: 3

For a non-star shape, defines the number of corners (vertices), and also therefore number of sides. For a star shape, defines the
number of star points -- there will be twice as many corners in total (the tips of the points _plus_ all the inside corners
between the points).

Setting `cornerCount` on an existing Polygon behaves in one of two different ways:

- If the shape's aspect ratio gives it equilateral sides, the sides remain equilateral while the size and aspect ratio of the
  shape are automatically changed as needed.
- Otherwise, the size and aspect ratio of the shape remain unchanged.

This matches how changing the corner count in XD's UI behaves.

To change corner count while guaranteeing the shape will not change size, save its original size first, set `cornerCount`, and
then set size back to the saved values.

**Kind**: instance property of [Polygon](#polygon)

## cornerRadii

▸ **cornerRadii**: `Array<number>`

List of corner radius for each corner of the polygon. To set corner radius, use [setAllCornerRadii()](#setallcornerradii).

**Kind**: instance property of [Polygon](#polygon)
**Read only**: true

## hasRoundedCorners

▸ **hasRoundedCorners**: `boolean`

True if any of the Polygon's corners is rounded (corner radius > 0).

**Kind**: instance property of [Polygon](#polygon)
**Read only**: true

## setAllCornerRadii()

▸ **setAllCornerRadii**(`radius`)

Set the corner radius of all corners of the Polygon to the same value.

**Kind**: instance method of [Polygon](#polygon)

| Param  | Type     |
| ------ | -------- |
| radius | `number` |

## starRatio

▸ **starRatio**: `number` (1.0 to 100.0)

**Default**: `100`

**Since**: XD 26

Determines how prominent the shape's star points are. The default value of 100 is a normal convex polygon (not a star at all).
For a star shape, consider that the outer vertices at the tips of the points all lie on a circle and the inner vertices
between the points all lie on a second, smaller circle. The `starRatio` is the ratio of the smaller circle's diameter to the
outer circle's diameter, expressed as a percentage.

**Kind**: instance property of [Polygon](#polygon)

