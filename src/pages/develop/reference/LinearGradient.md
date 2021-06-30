# LinearGradient

**Kind**: class

In a linear gradient, colors blend smoothly along a straight line, extending out perpendicularly from that line. The gradient fills the entire area of the shape it is
applied to.

## new LinearGradient()

Create a new LinearGradient instance.

### _linearGradient.clone() ⇒ `!LinearGradient`_

Returns a copy of this instance.

**Kind**: instance method of [`LinearGradient`](#LinearGradient)

### _linearGradient.colorStops : `!Array<{stop:number, color:\![Color](Color/)}>`_

Array of objects representing each color and its position along the gradient line. The position (`stop` value) is a number 0.0 - 1.0.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)

### _linearGradient.startX : `number`_

X position of the start of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)

### _linearGradient.startY : `number`_

Y position of the start of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)

### _linearGradient.endX : `number`_

X position of the end of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)

### _linearGradient.endY : `number`_

Y position of the end of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be < 0 or > 1.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)

### _linearGradient.getEndPoints() ⇒ `!Array<number>`_

Returns an array of \[startX, startY, endX, endY\].

**Kind**: instance method of [`LinearGradient`](#LinearGradient)

### \*linearGradient.setEndPoints(startX, startY, endX, endY)

Shorthand for setting all four start/endpoint properties.

**Kind**: instance method of [`LinearGradient`](#LinearGradient)

### _linearGradient.type : `string`_

String representing the type of the gradient, in this case linear gradient.

**Kind**: instance property of [`LinearGradient`](#LinearGradient)
