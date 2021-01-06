<a name="Matrix"></a>

## Matrix
**Kind**: class  

* [Matrix](#Matrix)
    * [new Matrix(a, b, c, d, e, f)](#new_Matrix_new)
    * [.setFrom(otherMatrix)](#Matrix-setFrom)
    * [.clone()](#Matrix-clone) ⇒ !Matrix
    * [.add(a, b, c, d, e, f)](#Matrix-add) ⇒ !Matrix
    * [.multLeft(a, b, c, d, e, f)](#Matrix-multLeft) ⇒ !Matrix
    * [.invert()](#Matrix-invert) ⇒ !Matrix
    * [.translate(tx, ty)](#Matrix-translate) ⇒ !Matrix
    * [.scale(sx, sy, tx, ty)](#Matrix-scale) ⇒ !Matrix
    * [.rotate(a, x, y)](#Matrix-rotate) ⇒ !Matrix
    * [.x(x, y)](#Matrix-x) ⇒ `number`
    * [.y(x, y)](#Matrix-y) ⇒ `number`
    * [.transformPoint(point)](#Matrix-transformPoint) ⇒ `!{x:number, y:number}`
    * [.transformRect(rect)](#Matrix-transformRect) ⇒ `!{x:number, y:number, width:number, height:number}`
    * [.getTranslate()](#Matrix-getTranslate) ⇒ `!Array.&lt;number&gt;`
    * [.determinant()](#Matrix-determinant) ⇒ `number`
    * [.split()](#Matrix-split) ⇒ `!{dx:number, dy:number, scaleX:number, scaleY:number, shear:number, rotate:number, isSimple:boolean}`
    * [.scaleFactors([flipInfo])](#Matrix-scaleFactors) ⇒ `!{scaleX:number, scaleY:number}`
    * [.removedScaleMatrix(scaleX, scaleY)](#Matrix-removedScaleMatrix) ⇒ !Matrix
    * [.hasSkew()](#Matrix-hasSkew) ⇒ `boolean`
    * [.getRotation()](#Matrix-getRotation) ⇒ `number`


* * *

<a name="new_Matrix_new"></a>

## new Matrix(a, b, c, d, e, f)
Creates a new transform matrix with the following structure:
```
| a c e |
| b d f |
| 0 0 1 |
```
Note: XD does not generally allow transform matrices with scale or shear (skew) components - only translate and rotate components are typically permitted.

If no arguments, creates a new identity matrix by default.


* * *

<a name="Matrix-setFrom"></a>

### matrix.setFrom(otherMatrix)
Copies another matrix's values into this matrix.

**Kind**: instance method of [`Matrix`](#Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| otherMatrix | \![`Matrix`](#Matrix) | The matrix to copy values from. |


* * *

<a name="Matrix-clone"></a>

### matrix.clone()
Returns a copy of the matrix

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix)


* * *

<a name="Matrix-add"></a>

### matrix.add(aOrMatrix, b, c, d, e, f) ⇒ \![`Matrix`](#Matrix)
Multiplies a passed affine transform to the right: this * M. The result effectively applies
the transform of the passed in matrix first, followed by the transform of this matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix) - The current matrix after right multiply.  

| Param | Type | Description |
| --- | --- | --- |
| aOrMatrix | `number|!Matrix` | A Matrix or the `a` component of an affine transform. |
| b | `?number` | The `b` component of an affine transform. |
| c | `?number` | The `c` component of an affine transform. |
| d | `?number` | The `d` component of an affine transform. |
| e | `?number` | The `e` component of an affine transform. |
| f | `?number` | The `f` component of an affine transform. |


* * *

<a name="Matrix-multLeft"></a>

### matrix.multLeft(aOrMatrix, b, c, d, e, f) ⇒ \![`Matrix`](#Matrix)
Multiplies a passed affine transform to the left: M * this. The result effectively applies
the transform of this matrix first, followed by the transform of the passed in matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix) - The current matrix after left multiply.  

| Param | Type | Description |
| --- | --- | --- |
| aOrMatrix | `number|!Matrix` | A Matrix or the `a` component of an affine transform. |
| b | `?number` | The `b` component of an affine transform. |
| c | `?number` | The `c` component of an affine transform. |
| d | `?number` | The `d` component of an affine transform. |
| e | `?number` | The `e` component of an affine transform. |
| f | `?number` | The `f` component of an affine transform. |


* * *

<a name="Matrix-invert"></a>

### matrix.invert() ⇒ \![`Matrix`](#Matrix)
Returns an inverted version of the matrix. Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix)


* * *

<a name="Matrix-translate"></a>

### matrix.translate(tx, ty) ⇒ \![`Matrix`](#Matrix)
Applies translation *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| tx | `number` | horizontal offset distance |
| ty | `number` | vertical offset distance |


* * *

<a name="Matrix-scale"></a>

### matrix.scale(sx, sy, cx, cy) ⇒ \![`Matrix`](#Matrix)
Applies scaling *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

Note: scale transforms are not generally permitted in XD.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| sx | `number` | amount to be scaled, with `1` resulting in no change |
| sy | `?number` | amount to scale along the vertical axis. (Otherwise `sx` applies to both axes.) |
| cx | `?number` | horizontal origin point from which to scale (if unspecified, scales from the local coordinates' origin point) |
| cy | `?number` | vertical origin point from which to scale |


* * *

<a name="Matrix-rotate"></a>

### matrix.rotate(angle, cx, cy) ⇒ \![`Matrix`](#Matrix)
Applies clockwise rotation *before* the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix)

| Param | Type | Description |
| --- | --- | --- |
| angle | `number` | angle of rotation, in degrees clockwise |
| cx | `?number` | horizontal origin point from which to rotate (if unspecified, scales from the local coordinates' origin point) |
| cy | `?number` | vertical origin point from which to rotate |


* * *

<a name="Matrix-x"></a>

### matrix.x(x, y) ⇒ `number`
Returns x coordinate of the given point after transformation described by this matrix. See also [Matrix.y](#Matrix-y) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `number`

| Param | Type |
| --- | --- |
| x | `number` |
| y | `number` |


* * *

<a name="Matrix-y"></a>

### matrix.y(x, y) ⇒ `number`
Returns y coordinate of the given point after transformation described by this matrix. See also [Matrix.x](#Matrix-x) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `number`

| Param | Type |
| --- | --- |
| x | `number` |
| y | `number` |


* * *

<a name="Matrix-transformPoint"></a>

### matrix.transformPoint(point) ⇒ `!{x:number, y:number}`
Returns x & y coordinates of the given point after transformation described by this matrix.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `!{x:number, y:number}`

| Param | Type |
| --- | --- |
| point | `!{x:number, y:number}` |


* * *

<a name="Matrix-transformRect"></a>

### matrix.transformRect(rect) ⇒ `!{x:number, y:number, width:number, height:number}`
Transforms a rectangle using this matrix, returning the _axis-aligned_ bounds of the resulting rectangle. If this matrix has
rotation, then the result will have different width & height from the original rectangle, due to axis alignment. See
["Coordinate Spaces"](/reference/core/coordinate-spaces-and-units/) for some illustrations of this.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `!{x:number, y:number, width:number, height:number}`

| Param | Type |
| --- | --- |
| rect | `!{x:number, y:number, width:number, height:number}` |


* * *

<a name="Matrix-getTranslate"></a>

### matrix.getTranslate() ⇒ `!Array.&lt;number&gt;`
**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `!Array.&lt;number&gt;` - The translation component of this matrix: [tx, ty]. Equals the `e` and `f` components of this matrix.

* * *

<a name="Matrix-scaleFactors"></a>

### matrix.scaleFactors() ⇒ `!{scaleX:number, scaleY:number}`
Split the matrix into scale factors.
This method assumes that there is no skew in the matrix.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `!{scaleX:number, scaleY:number}`


* * *

<a name="Matrix-removedScaleMatrix"></a>

### matrix.removedScaleMatrix(scaleX, scaleY) ⇒ \![`Matrix`](#Matrix)
Returns a new matrix that contains only the translate and rotate components of the current matrix, with the given scale
factors stripped out. Must be passed the exact scale factors returned by [scaleFactors()](#Matrix-scaleFactors) for this
matrix, and this matrix must have no skew/shear component.

Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: \![`Matrix`](#Matrix) - The matrix without the passed scaling factors.  

| Param | Type | Description |
| --- | --- | --- |
| scaleX | `number` | horrizontal scale component to remove |
| scaleY | `number` | vertical scale component to remove |


* * *

<a name="Matrix-hasSkew"></a>

### matrix.hasSkew() ⇒ `boolean`

**Kind**: instance method of [`Matrix`](#Matrix)  
**Returns**: `boolean` - true, if the matrix includes any skew (shear)  

* * *
