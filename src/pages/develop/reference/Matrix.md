# Matrix

**Kind**: class

## new Matrix()

▸ **new Matrix**(): [`Matrix`](#Matrix)

Creates a new transform matrix with the following structure:

```
| a c e |
| b d f |
| 0 0 1 |
```

Note: XD does not generally allow transform matrices with scale or shear (skew) components - only translate and rotate components are typically permitted.

If no arguments, creates a new identity matrix by default.

## setFrom()

▸ **setFrom**(otherMatrix)

Copies another matrix's values into this matrix.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param       | Type                  | Description                     |
| ----------- | --------------------- | ------------------------------- |
| otherMatrix | [`Matrix`](#Matrix) | The matrix to copy values from. |

## clone()

▸ **clone**(): [`Matrix`](#Matrix)

Returns a copy of the matrix

**Kind**: instance method of [`Matrix`](#Matrix)

## add()

▸ **add**(aOrMatrix, b, c, d, e, f): [`Matrix`](#Matrix)

Returns the current matrix after right multiply.

Multiplies a passed affine transform to the right: this \* M. The result effectively applies
the transform of the passed in matrix first, followed by the transform of this matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param     | Type      | Description                               |
| --------- | --------- | ----------------------------------------- |
| aOrMatrix | `number` &#124; [`Matrix`](#Matrix) | A Matrix or the `a` component of an affine transform. |
| b         | `?number` | The `b` component of an affine transform. |
| c         | `?number` | The `c` component of an affine transform. |
| d         | `?number` | The `d` component of an affine transform. |
| e         | `?number` | The `e` component of an affine transform. |
| f         | `?number` | The `f` component of an affine transform. |

## multLeft()

▸ **multLeft**(aOrMatrix, b, c, d, e, f): [`Matrix`](#Matrix)

Returns the current matrix after left multiply.

Multiplies a passed affine transform to the left: M \* this. The result effectively applies
the transform of this matrix first, followed by the transform of the passed in matrix second.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param     | Type      | Description                               |
| --------- | --------- | ----------------------------------------- |
| aOrMatrix | `number` &#124; [`Matrix`](#Matrix) | A Matrix or the `a` component of an affine transform. |
| b         | `?number` | The `b` component of an affine transform. |
| c         | `?number` | The `c` component of an affine transform. |
| d         | `?number` | The `d` component of an affine transform. |
| e         | `?number` | The `e` component of an affine transform. |
| f         | `?number` | The `f` component of an affine transform. |

## invert()

▸ **invert**(): [`Matrix`](#Matrix)

Returns an inverted version of the matrix. Returns a brand new matrix - does _not_ modify this matrix object.

**Kind**: instance method of [`Matrix`](#Matrix)

## translate()

▸ **translate**(tx, ty): [`Matrix`](#Matrix)

Applies translation _before_ the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type     | Description                |
| ----- | -------- | -------------------------- |
| tx    | `number` | horizontal offset distance |
| ty    | `number` | vertical offset distance   |

## matrix.scale()

▸ **scale**(sx, sy, cx, cy): [`Matrix`](#Matrix)

Applies scaling _before_ the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

Note: scale transforms are not generally permitted in XD.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type      | Description                                                                                                   |
| ----- | --------- | ------------------------------------------------------------------------------------------------------------- |
| sx    | `number`  | amount to be scaled, with `1` resulting in no change                                                          |
| sy    | `?number` | amount to scale along the vertical axis. (Otherwise `sx` applies to both axes.)                               |
| cx    | `?number` | horizontal origin point from which to scale (if unspecified, scales from the local coordinates' origin point) |
| cy    | `?number` | vertical origin point from which to scale                                                                     |

## matrix.rotate()

▸ **rotate**(angle, cx, cy): [`Matrix`](#Matrix)

Applies clockwise rotation _before_ the current transform of this matrix, as if using the [`add()`](#Matrix-add) method.
Modifies this matrix object and also returns it so calls can be chained.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type      | Description                                                                                                    |
| ----- | --------- | -------------------------------------------------------------------------------------------------------------- |
| angle | `number`  | angle of rotation, in degrees clockwise                                                                        |
| cx    | `?number` | horizontal origin point from which to rotate (if unspecified, scales from the local coordinates' origin point) |
| cy    | `?number` | vertical origin point from which to rotate                                                                     |

## x()

▸ **x**(x, y): `number`

Returns x coordinate of the given point after transformation described by this matrix. See also [Matrix.y](#Matrix-y) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type     |
| ----- | -------- |
| x     | `number` |
| y     | `number` |

## y()

▸ **y**(x, y): `number`

Returns y coordinate of the given point after transformation described by this matrix. See also [Matrix.x](#Matrix-x) and
[Matrix.transformPoint](#Matrix-transformPoint).

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type     |
| ----- | -------- |
| x     | `number` |
| y     | `number` |

## transformPoint()

▸ **transformPoint**(point): `{x:number, y:number}`

Returns x & y coordinates of the given point after transformation described by this matrix.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type                    |
| ----- | ----------------------- |
| point | `{x:number, y:number}` |

## transformRect()

▸ **transformRect**(rect): `{x:number, y:number, width:number, height:number}`

Transforms a rectangle using this matrix, returning the _axis-aligned_ bounds of the resulting rectangle. If this matrix has
rotation, then the result will have different width & height from the original rectangle, due to axis alignment. See
["Coordinate Spaces"](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/) for some illustrations of this.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param | Type                                                 |
| ----- | ---------------------------------------------------- |
| rect  | `{x:number, y:number, width:number, height:number}` |

## getTranslate()

▸ **getTranslate**(): `Array.<number>`

Returns the translation component of this matrix: [tx, ty]. Equals the `e` and `f` components of this matrix.

**Kind**: instance method of [`Matrix`](#Matrix)

## scaleFactors()

▸ **scaleFactors**(): `{scaleX:number, scaleY:number}`

Split the matrix into scale factors.
This method assumes that there is no skew in the matrix.

**Kind**: instance method of [`Matrix`](#Matrix)

## removedScaleMatrix()

▸ **removedScaleMatrix**(scaleX, scaleY): [`Matrix`](#Matrix)

Returns a new matrix that contains only the translate and rotate components of the current matrix, with the given scale
factors stripped out. Must be passed the exact scale factors returned by [scaleFactors()](#Matrix-scaleFactors) for this
matrix, and this matrix must have no skew/shear component.

Returns a brand new matrix, and does _not_ modify this matrix object.

**Kind**: instance method of [`Matrix`](#Matrix)

| Param  | Type     | Description                           |
| ------ | -------- | ------------------------------------- |
| scaleX | `number` | horrizontal scale component to remove |
| scaleY | `number` | vertical scale component to remove    |

## hasSkew()

▸ **hasSkew**(): `boolean`

Returns true if the matrix includes any skew (shear).

**Kind**: instance method of [`Matrix`](#Matrix)
