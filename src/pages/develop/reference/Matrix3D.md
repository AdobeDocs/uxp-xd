# Matrix3D

**Kind**: class

## new Matrix3D(a, b, c, d, e, f, m20, m21, m02, m12, m22, z)

Creates a new transform matrix with the following structure:

```
|  a   c  m02  e |
|  b   d  m12  f |
| m20 m21 m22 mz |
|  0   0   0   1 |
```

Note: XD does not generally allow transform matrices with scale or shear (skew) components - only translate and rotate components are typically permitted.

If no arguments, creates a new identity matrix by default.

### matrix3D.setFrom(otherMatrix)

Copies another matrix's values into this matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)

| Param       | Type                                            | Description                     |
| ----------- | ----------------------------------------------- | ------------------------------- |
| otherMatrix | \![`Matrix`](#Matrix)|\![`Matrix3D`](#Matrix3D) | The matrix to copy values from. |

### matrix3D.clone()

Returns a copy of the matrix

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

### matrix3D.add(m1, m2) ⇒ \![`Matrix`](#Matrix) | \![`Matrix3D`](#Matrix3D)

Safely add a mixture of Matrix and Matrix3D without dropping the 3D part.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D) - the addition result which is Matrix if both were Matrix, and Matrix3D otherwise.

| Param   | Type                                            | Description        |
| ------- | ----------------------------------------------- | ------------------ |
| m1      | \![`Matrix`](#Matrix)|\![`Matrix3D`](#Matrix3D) | The first matrix.  |
| m2      | \![`Matrix`](#Matrix)|\![`Matrix3D`](#Matrix3D) | The second matrix. |

### matrix3D.invert() ⇒ \![`Matrix3D`](#Matrix3D)

Returns an inverted version of the matrix. Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

### matrix3D.translate(tx, ty, tz) ⇒ \![`Matrix3D`](#Matrix3D)

Applies translation _before_ the current transform of this matrix, as if using the [`add()`](#Matrix3D-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type     | Description                |
| ----- | -------- | -------------------------- |
| tx    | `number` | horizontal offset distance |
| ty    | `number` | vertical offset distance   |
| tz    | `number` | depth offset distance      |

### matrix3D.scale(scale, sy, sz) ⇒ \![`Matrix3D`](#Matrix3D)

Applies scaling _before_ the current transform of this matrix, as if using the [`add()`](#Matrix3D-add) method.
Modifies this matrix object and also returns it so calls can be chained.

Note: scale transforms are not generally permitted in XD.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description           |
| ----- | --------- | --------------------- |
| scale | `number`  |                       |
| sy    | `?number` |                       |
| sz    | `?number` |                       |

### matrix3D.rotate(a, x, y) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the Z axis (optionally, around a point) _before_ the current transform of this matrix, as if using the [`add()`](#Matrix3D-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description                       |
| ----- | --------- | --------------------------------- |
| a     | `number`  | angle of rotation                 |
| x     | `?number` | Point used as center of rotation. |
| y     | `?number` | Point used as center of rotation. |

### matrix3D.rotateX(a) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the X axis _before_ the current transform of this matrix, as if using the [`add()`](#Matrix3D-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description                       |
| ----- | --------- | --------------------------------- |
| a     | `number`  | angle of rotation                 |

### matrix3D.rotateY(a) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the Y axis _before_ the current transform of this matrix, as if using the [`add()`](#Matrix3D-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description                       |
| ----- | --------- | --------------------------------- |
| a     | `number`  | angle of rotation                 |


### matrix3D.x(x, y, z) ⇒ `number`

Returns x coordinate of the given point after transformation described by this matrix. See also [Matrix3D.transformPoint](#Matrix3D-transformPoint).

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `number`

| Param | Type     |
| ----- | -------- |
| x     | `number` |
| y     | `number` |
| z     | `?number` |

### matrix3D.y(x, y) ⇒ `number`

Returns y coordinate of the given point after transformation described by this matrix. See also [Matrix3D.transformPoint](#Matrix3D-transformPoint).

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `number`

| Param | Type     |
| ----- | -------- |
| x     | `number` |
| y     | `number` |
| z     | `?number` |

### matrix3D.z(x, y, z) ⇒ `number`

Returns z coordinate of the given point after transformation described by this matrix. See also [Matrix3D.transformPoint](#Matrix3D-transformPoint).

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `number`

| Param | Type     |
| ----- | -------- |
| x     | `number` |
| y     | `number` |
| z     | `?number` |

### matrix3D.transformPoint(point) ⇒ `!{x:number, y:number}`

Returns x & y coordinates of the given point after transformation described by this matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number}`

| Param | Type                    |
| ----- | ----------------------- |
| point | `!{x:number, y:number}` |

### matrix3D.transformPoint3D(point) ⇒ `!{x:number, y:number, z:number}`

Returns x ,y & z coordinates of the given point after transformation described by this matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number, z:number}`

| Param | Type                              |
| ----- | --------------------------------- |
| point | `!{x:number, y:number, z:number}` |

### matrix3D.transformRect(rect) ⇒ `!{x:number, y:number, width:number, height:number}`

Transforms a rectangle using this matrix, returning the _axis-aligned_ bounds of the resulting rectangle. If this matrix has
rotation, then the result will have different width & height from the original rectangle, due to axis alignment. See
["Coordinate Spaces"](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/) for some illustrations of this.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number, width:number, height:number}`

| Param | Type                                                 |
| ----- | ---------------------------------------------------- |
| rect  | `!{x:number, y:number, width:number, height:number}` |

### matrix3D.getTranslate() ⇒ `!Array.<number&gt;`

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!Array.<number&gt;` - The translation component of this matrix: [e, f, mz].

### matrix3D.hasSkew() ⇒ `boolean`

Check if the matrix will introduce any skew on the XY plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix includes any skew

### matrix3D.hasSkewXZ() ⇒ `boolean`

Check if the matrix will introduce any skew on the XZ plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix includes any skew

### matrix3D.hasSkewYZ() ⇒ `boolean`

Check if the matrix will introduce any skew on the YZ plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix includes any skew
