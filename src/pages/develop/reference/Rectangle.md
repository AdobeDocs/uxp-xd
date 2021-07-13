# Rectangle

**Kind**: class
**Extends**: [GraphicNode](/develop/reference/GraphicNode)

Rectangle leaf node shape, with or without rounded corners. Like all shape nodes, has no fill or stroke by default unless you set one.

**Example**

```js
let rect = new Rectangle();
rect.width = 100;
rect.height = 25;
rect.fill = new Color("red");
selection.insertionParent.addChild(rect);
selection.items = [rect];
```

## width

▸ **width**: `number` > 0

**Kind**: instance property of [Rectangle](#rectangle)

## height

▸ **height**: `number` > 0

**Kind**: instance property of [Rectangle](#rectangle)

## cornerRadii

▸ **cornerRadii**: `{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}`

All numbers >= 0.

**Default**: `{topLeft:0, topRight:0, bottomRight:0, bottomLeft:0}`

The actual corner radius that is rendered is capped based on the size of the rectangle even if the radius value set here is higher (see
[effectiveCornerRadii](#effectivecornerradii).

To set all corners to the same value, use [setAllCornerRadii](#setallcornerradii).

**Kind**: instance property of [Rectangle](#rectangle)

## hasRoundedCorners

▸ **hasRoundedCorners**: `boolean`

True if any of the Rectangle's four corners is rounded (corner radius > 0).

**Kind**: instance property of [Rectangle](#rectangle)
**Read only**: true

## setAllCornerRadii()

▸ **setAllCornerRadii**(`radius`)

Set the rounding radius of all four corners of the Rectangle to the same value. The actual corner radius that is rendered is capped based on
the size of the rectangle even if the radius value set here is higher (see [effectiveCornerRadii](#effectivecornerradii).

To set the corners to different radius values, use [cornerRadii](#cornerradii).


| Param  | Type     |
| ------ | -------- |
| radius | `number` |

**Kind**: instance method of [Rectangle](#rectangle)

## effectiveCornerRadii

▸ **effectiveCornerRadii**: `{topLeft:number, topRight:number, bottomRight:number, bottomLeft:number}`

The actual corner radius that is rendered may be capped by the size of the rectangle. Returns the actual radii that
are currently in effect, which may be smaller than the `cornerRadii` values as a result.

**Kind**: instance property of [Rectangle](#rectangle)
**Read only**: true
