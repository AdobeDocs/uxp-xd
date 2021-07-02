# LinearGradient

**Kind**: class

In a linear gradient, colors blend smoothly along a straight line, extending out perpendicularly from that line. The gradient fills the entire area of the shape it is
applied to.

## new LinearGradient()

▸ **new LinearGradient**(): [LinearGradient](#LinearGradient)

Create a new LinearGradient instance.

## clone()

▸ **clone()**: `LinearGradient`

Returns a copy of this instance.

**Kind**: instance method of [LinearGradient](#LinearGradient)

## colorStops

▸ **colorStops**: `Array<{stop:number, color:`[Color](/develop/reference/Color)`}>`

Array of objects representing each color and its position along the gradient line. The position (`stop` value) is a number 0.0 - 1.0.

**Example**
```js
let gradient = new LinearGradient();
gradient.colorStops = [{ stop: 0, color: new Color("Red") },
    { stop: 1, color: new Color("Blue") }];
selection.items[0].fill = gradient;
```

**Kind**: instance property of [LinearGradient](#LinearGradient)

## startX

▸ **startX**: `number`

X position of the start of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [LinearGradient](#LinearGradient)

## startY

▸ **startY**: `number`

Y position of the start of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [LinearGradient](#LinearGradient)

## endX

▸ **endX**: `number`

X position of the end of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [LinearGradient](#LinearGradient)

## endY

▸ **endY**: `number`

Y position of the end of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [LinearGradient](#LinearGradient)

## getEndPoints()

▸ **getEndPoints()**: `Array<number>`

Returns an array of \[startX, startY, endX, endY\].

**Kind**: instance method of [LinearGradient](#LinearGradient)

## setEndPoints()

▸ **setEndPoints**(startX, startY, endX, endY)

Shorthand for setting all four start/endpoint properties.

**Kind**: instance method of [LinearGradient](#LinearGradient)

## type

▸ **type**: `string`

**Since**: XD 42

String representing the type of the gradient, in this case linear gradient.

**Kind**: instance property of [LinearGradient](#LinearGradient)
