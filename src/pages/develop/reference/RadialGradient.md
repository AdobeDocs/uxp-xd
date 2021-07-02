# RadialGradient

**Kind**: class

In a radial gradient, colors blend smoothly in a radius around a center point. The gradient fills the entire area of the shape it is applied to.

**Since**: XD 42

## new RadialGradient()

▸ **new RadialGradient**(): [RadialGradient](#RadialGradient)

Create a new RadialGradient instance.

## clone()

▸ **clone**(): [RadialGradient](#RadialGradient)

Returns a copy of this instance.

**Kind**: instance method of [RadialGradient](#RadialGradient)

## colorStops

▸ **colorStops**: `Array<{stop:number, color:`[Color](/develop/reference/Color)`}>`

Array of objects representing each color and its position along the gradient line. The position (`stop` value) is a number 0.0 - 1.0.

**Example**
```js
let gradient = new RadialGradient();
gradient.colorStops = [{ stop: 0, color: new Color("Red") },
    { stop: 1, color: new Color("Blue") }];
selection.items[0].fill = gradient;
```

**Kind**: instance property of [RadialGradient](#RadialGradient)

## endR

▸ **endR**: `number`

Number representing the gradient radius. The value is multiple of the object's bounding box with condition 0 ≤ endR.

**Kind**: instance property of [RadialGradient](#RadialGradient)

## getCenterPoint()

▸ **getCenterPoint**(): `{x:number, y:number}`

Returns a point (cx, cy) representing the gradient center. The values are multiple of the object's bounding box: 0 ≤ cx, cy ≤ 1 to position
the gradient inside the object's bounding box, or the values may be < 0 or > 1 for a gradient outside the object's bounding box.

**Kind**: instance method of [RadialGradient](#RadialGradient)

## setCenterPoint()

▸ **setCenterPoint**(cx, cy)

Method for setting the gradient center.

**Kind**: instance method of [RadialGradient](#RadialGradient)

## type

▸ **type**: `string`

String representing the type of the gradient, in this case radial gradient.

**Kind**: instance property of [RadialGradient](#RadialGradient)
