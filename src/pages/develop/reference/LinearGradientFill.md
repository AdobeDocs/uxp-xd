# LinearGradientFill

**Kind**: class

In a linear gradient, colors blend smoothly along a straight line, extending out perpendicularly from that line. The gradient fills the entire area of the shape it is
applied to.

## new LinearGradientFill()

Create a new LinearGradientFill instance.

### _linearGradientFill.clone() ⇒ `!LinearGradientFill`_

Returns a copy of this instance.

**Kind**: instance method of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.colorStops : `!Array&lt;{stop:number, color:\![Color](Color/)}>`_

Array of objects representing each color and its position along the gradient line. The position (`stop` value) is a number 0.0 - 1.0.

**Kind**: instance property of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.startX : `number`_

X position of the start of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.startY : `number`_

Y position of the start of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.endX : `number`_

X position of the end of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.endY : `number`_

Y position of the end of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.
The gradient line _may_ start or end outside the object's bounding box, so values may be &lt; 0 or > 1.

**Kind**: instance property of [`LinearGradientFill`](#LinearGradientFill)

### _linearGradientFill.getEndPoints() ⇒ `!Array&lt;number>`_

Returns an array of \[startX, startY, endX, endY\].

**Kind**: instance method of [`LinearGradientFill`](#LinearGradientFill)

### \*linearGradientFill.setEndPoints(startX, startY, endX, endY)

Shorthand for setting all four start/endpoint properties.

**Kind**: instance method of [`LinearGradientFill`](#LinearGradientFill)
