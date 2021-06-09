# Matrix3D

**Kind**: class

## new Matrix3D(a, b, c, d, e, f, m20, m21, m02, m12, m22, z)

Creates a new 3D transform matrix with the following structure:

```
|  a   c  m02  e |
|  b   d  m12  f |
| m20 m21 m22 mz |
|  0   0   0   1 |
```

### matrix3D.newFrom(m)

Create a new Matrix3D object starting from the given Matrix2D or Matrix3D parameter.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)    
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param    | Type                                            | Description          |
| -------- | ----------------------------------------------- | -------------------- |
| m        | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | The matrix to clone. |

### matrix3D.setFrom(otherMatrix)

Copies another matrix's values into this matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)

| Param       | Type                                            | Description                     |
| ----------- | ----------------------------------------------- | ------------------------------- |
| otherMatrix | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | The matrix to copy values from. |

### matrix3D.clone()

Clone the matrix

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

### matrix3D.add(m1, m2) ⇒ \![`Matrix`](/develop/reference/Matrix/) | \![`Matrix3D`](#Matrix3D)

Safely add a mixture of Matrix and Matrix3D without dropping the 3D part.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) - the addition result which is Matrix if both were Matrix, and Matrix3D otherwise.

| Param   | Type                                            | Description        |
| ------- | ----------------------------------------------- | ------------------ |
| m1      | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | The first matrix.  |
| m2      | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | The second matrix. |

### matrix3D.clear3D() ⇒ 

Clears the 3D components of this matrix. Functionally equivalent to converting to a 2D matrix and then back to a 3D one.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  

### matrix3D.strictHas3D() ⇒ `boolean`

Check if this matrix has 3D components. An efficient of checking if new Matrix3D().setFrom(this.toMatrix()) !== this

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `boolean` - true if we have 3D components in this matrix.

### matrix3D.has3D() ⇒ `boolean`

Check if this matrix has 3D components, with an epsilon.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `boolean` - true if we have 3D components in this matrix.


### matrix3D.set6(a, b, c, d, e, f) ⇒ 

Set the 2D components of this matrix and clear the 3D ones.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  

### matrix3D.setIdentity() ⇒ 

Set the identity matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  

### matrix3D.isIdentity() ⇒ `boolean`

Check if the matrix is the identity matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `boolean` - true if the matrix is the identity matrix.

### matrix3D.isInvertible() ⇒ `boolean`

Test if this matrix is invertible.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `boolean` - true if we can invert this matrix.


### matrix3D.invert() ⇒ \![`Matrix3D`](#Matrix3D)

Return the inverse of this matrix. The original matrix is not modified.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

### matrix3D.setConcat(a, b) ⇒ \![`Matrix3D`](#Matrix3D)

Set this matrix to the concatenation of A * B.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param  | Type                      | 
| ------ | ------------------------- |
| a      | \![`Matrix3D`](#Matrix3D) | 
| b      | \![`Matrix3D`](#Matrix3D) | 

### matrix3D.multRight(a, b, c, d, e, f) ⇒ \![`Matrix3D`](#Matrix3D)

Multiplies a passed affine transform to the right: this * M.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type                           | Description                                        |
| ----- | ------------------------------ | -------------------------------------------------- |
| a    | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | A Matrix or the a component of a affine transform. |
| b    | `?number`                       | The b component of a affine transform.             |
| c    | `?number`                       | The c component of a affine transform.             |
| d    | `?number`                       | The d component of a affine transform.             |
| e    | `?number`                       | The e component of a affine transform.             |
| f    | `?number`                       | The f component of a affine transform.             |

### matrix3D.multLeft(a, b, c, d, e, f) ⇒ \![`Matrix3D`](#Matrix3D)

Multiplies a passed affine transform to the left: this * M.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type                           | Description                                        |
| ----- | ------------------------------ | -------------------------------------------------- |
| a    | \![`Matrix`](/develop/reference/Matrix/)\|\![`Matrix3D`](#Matrix3D) | A Matrix or the a component of a affine transform. |
| b    | `?number`                       | The b component of a affine transform.             |
| c    | `?number`                       | The c component of a affine transform.             |
| d    | `?number`                       | The d component of a affine transform.             |
| e    | `?number`                       | The e component of a affine transform.             |
| f    | `?number`                       | The f component of a affine transform.             |

### matrix3D.translate(tx, ty, tz) ⇒ \![`Matrix3D`](#Matrix3D)

Translate the matrix

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type     | Description         |
| ----- | -------- | ------------------- |
| tx    | `number` | translate on X axis |
| ty    | `number` | translate on y axis |
| tz    | `number` | translate on z axis |

### matrix3D.translateLeft(tx, ty, tz) ⇒ \![`Matrix3D`](#Matrix3D)

Translate the matrix, but in global coordinates. Mathematically, this is the same thing as adding the delta directly to the translation column (last column) of the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type     |
| ----- | -------- |
| tx    | `number` |
| ty    | `number` |
| tz    | `number` |

### matrix3D.translateWithPoint(point) ⇒ \![`Matrix3D`](#Matrix3D)

translate with Point

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D) - the modified matrix.

| Param | Type                                                        | Description                                                                                       |
| ----- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| point | {{x: number, y: number}\|{x: number, y: number, z: number}} | the point reprezenting horizontal and vertical translation (and optionally z translation as well).|

### matrix3D.getTranslate() ⇒ \![Array](#Array)

Get the translate component of this matrix, as an array.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \!`Array`

### matrix3D.scale(scale, sy, sz) ⇒ \![`Matrix3D`](#Matrix3D)

Scale the matrix

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description                                                                 |
| ----- | --------- | --------------------------------------------------------------------------- |
| scale | `number`  | The scale value on X axis                                                   |
| sy    | `?number` | The scale value on Y axis; if undefined, the scale value will be used       |
| sz    | `?number` | The scale value on Z axis; if undefined, the matrix will not be scaled on Z |

### matrix3D.rotate(a, x, y) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the Z axis (optionally, around a point).

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description                                               |
| ----- | --------- | --------------------------------------------------------- |
| a     | `number`  | Angle in degrees                                          |
| x     | `?number` | The x coordinate of the point used as center of rotation. |
| y     | `?number` | The y coordinate of the point used as center of rotation. |

### matrix3D.rotateX(a) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the X axis.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description             |
| ----- | --------- | ----------------------- |
| a     | `number`  | Angle in degrees        |

### matrix3D.rotateY(a) ⇒ \![`Matrix3D`](#Matrix3D)

Rotate the matrix around the Y axis.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)

| Param | Type      | Description             |
| ----- | --------- | ----------------------- |
| a     | `number`  | Angle in degrees        |


### matrix3D.x(x, y, z) ⇒ `number`

Returns the x coordinate for a given point after transformation described by the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**See**: [Matrix3D.y](#Matrix3Dyx-y-z-⇒-number), [Matrix3D.z](#Matrix3Dzx-y-z-⇒-number)   
**Returns**: `number` - x coordinate of the transformed point

| Param | Type      | Description                         |
| ----- | --------- | ----------------------------------- |
| x     | `number`  | The x coordinate of the given point |
| y     | `number`  | The y coordinate of the given point |
| z     | `?number` | The z coordinate of the given point |

### matrix3D.y(x, y, z) ⇒ `number`

Returns the y coordinate for a given point after transformation described by the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**See**: [Matrix3D.x](#Matrix3Dxx-y-z-⇒-number), [Matrix3D.z](#Matrix3Dzx-y-z-⇒-number)   
**Returns**: `number` - y coordinate of the transformed point

| Param | Type      | Description                         |
| ----- | --------- | ----------------------------------- |
| x     | `number`  | The x coordinate of the given point |
| y     | `number`  | The y coordinate of the given point |
| z     | `?number` | The z coordinate of the given point |

### matrix3D.z(x, y, z) ⇒ `number`

Returns the z coordinate for a given point after transformation described by the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**See**: [Matrix3D.x](#Matrix3Dxx-y-z-⇒-number), [Matrix3D.y](#Matrix3Dyx-y-z-⇒-number)   
**Returns**: `number` - z coordinate of the transformed point

| Param | Type      | Description                         |
| ----- | --------- | ----------------------------------- |
| x     | `number`  | The x coordinate of the given point |
| y     | `number`  | The y coordinate of the given point |
| z     | `?number` | The z coordinate of the given point |

### matrix3D.transformPoint(point) ⇒ `!{x:number, y:number}`

Transforms a 2D point using the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number}` - transformed point 

| Param | Type                    |
| ----- | ----------------------- |
| point | `!{x:number, y:number}` |

### matrix3D.transformOrigin() ⇒ `!{x:number, y:number}`

Transform the point (0, 0).

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number}` - transformed point 

### matrix3D.transformPoint3D(point) ⇒ `!{x:number, y:number, z:number}`

Transforms a 3D point using the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number, z:number}` - transformed point

| Param | Type                              |
| ----- | --------------------------------- |
| point | `!{x:number, y:number, z:number}` |

### matrix3D.transformRect(rect) ⇒ `!{x:number, y:number, width:number, height:number}`

Transforms a rectangle using the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: `!{x:number, y:number, width:number, height:number}` - transformed rectangle

| Param | Type                                                 |
| ----- | ---------------------------------------------------- |
| rect  | `!{x:number, y:number, width:number, height:number}` |

### matrix3D.hasSkew() ⇒ `boolean`

Check if the matrix will introduce any skew on the XY plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix contains skew.

### matrix3D.hasSkewXZ() ⇒ `boolean`

Check if the matrix will introduce any skew on the XZ plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix contains skew.

### matrix3D.hasSkewYZ() ⇒ `boolean`

Check if the matrix will introduce any skew on the YZ plane.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if the matrix contains skew.

### matrix3D.isTranslationOnly() ⇒ `boolean`

Returns true if there are no scale, skew, or rotation values, and the matrix is all translation. (Although identity is still considered all translation.) This is equivalent to `this.strictEquals(new Matrix3D().translate(...this.getTranslate()))`

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true, if matrix represents only a translation

### matrix3D.getRotation() ⇒ `number`

Get the rotation of this matrix.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `number` - the rotation

### matrix3D.flip(flipInfo, width, height) ⇒ 

Performs a flip to the matrix according to the passed FlipInfo. If the width and height of an object on which the transform matrix would be applied is passed, the required translation is performed to keep the object in place.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  

| Param    | Type                             | Description                                                                                                    |
| -------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| flipInfo | {flipX: boolean, flipY: boolean} | flipX - Specifies if the object is flipped horizontally, FlipY - Specifies if the object is flipped vertically |
| width    | `?number`                        | The width of the node on which the matrix is to be applied                                                     |
| height   | `?number`                        | The height of the node on which the matrix is to be applied                                                    |

### matrix3D.equals(otherMatrix) ⇒ `boolean`

Compare a matrix for equality with a tolerance.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true if current matrix is identical upto ZERO_TOLERANCE with otherMatrix.

| Param       | Type                      | Description                 |
| ----------- | ------------------------- | --------------------------- |
| otherMatrix | \![`Matrix3D`](#Matrix3D) | the matrix to compare with. |

### matrix3D.strictEquals(otherMatrix) ⇒ `boolean`

Compare a matrix with strict equality / zero tolerance.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `boolean` - true if current matrix is identical

| Param       | Type                      | Description                 |
| ----------- | ------------------------- | --------------------------- |
| otherMatrix | \![`Matrix3D`](#Matrix3D) | the matrix to compare with. |

### matrix3D.toTransformString() ⇒ `string`

Returns transform string that represents given matrix.

**Kind**: instance method of [`3DMatrix`](#3DMatrix)  
**Returns**: `string` - the rotation

### matrix3D.roundToSinglePrecision() ⇒ \![`Matrix3D`](#Matrix3D)

Rounds all the values held inside the matrix to single point precision and return the matrix.

**Kind**: instance method of [`Matrix3D`](#Matrix3D)  
**Returns**: \![`Matrix3D`](#Matrix3D)
