# AngularGradient

**Kind**: class
**Since**: XD 42

In an angular (also known as "conical") gradient, colors blend together in a sweeping pattern around a shape from the center of a circle. The gradient fills the entire area of the shape it is applied to.

## new AngularGradient()

▸ **new AngularGradient**(): [AngularGradient](#AngularGradient)

Create a new AngularGradient instance.

## clone()

▸ **clone**(): `AngularGradient`

Returns a copy of this instance.

**Kind**: instance method of [AngularGradient](#AngularGradient)

## colorStops

▸ **colorStops**: `Array<{stop:number, color:`[Color](/develop/reference/Color)`}>`

Array of objects representing each color and its position along the gradient circle. The position (`stop` value) is a number 0.0 - 1.0.

**Example**
```js
let gradient = new AngularGradient();
gradient.colorStops = [{ stop: 0, color: new Color("Red") },
    { stop: 1, color: new Color("Blue") }];
selection.items[0].fill = gradient;
```

**Kind**: instance property of [AngularGradient](#AngularGradient)

## startX

▸ **startX**: `number`

X position of the center of the gradient circle, as a multiple of the object's
bounding box: X=0 indicates the left edge of the bounding box and X=1
indicates the right edge. The gradient circle center may start or end outside
the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [AngularGradient](#AngularGradient)

## startY

▸ **startY**: `number`

Y position of the center of the gradient circle, as a multiple of the object's
bounding box: Y=0 indicates the top edge of the bounding box and Y=1
indicates the bottom edge. The gradient circle center may start or end outside
the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [AngularGradient](#AngularGradient)

## getEndPoints()

▸ **getEndPoints**(): `Array<number>`

Returns an array of \[startX, startY, endX, endY\].

**Kind**: instance method of [AngularGradient](#AngularGradient)

## setEndPoints()

▸ **setEndPoints**(`startX`, `startY`, `endX`, `endY`)

Method for setting all four start/endpoint properties. _(endX, endY)_ point is the end of the gradient circle radius.

**Kind**: instance method of [AngularGradient](#AngularGradient)

## rotation

▸ **rotation**: `number`

Rotation of the gradient in degrees.

**Kind**: instance property of [AngularGradient](#AngularGradient)

## type

▸ **type**: `string`

String representing the type of the gradient, in this case angular gradient.

**Kind**: instance property of [AngularGradient](#AngularGradient)
