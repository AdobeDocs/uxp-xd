<a name="Shadow"></a>

## Shadow
**Kind**: class

* [Shadow](#Shadow)
    * [new Shadow(x, y, blur, color, visible)](#new_Shadow_new)
    * [.x](#Shadow-x) : `number`
    * [.y](#Shadow-y) : `number`
    * [.blur](#Shadow-blur) : `number`
    * [.color](#Shadow-color) : `!Color`
    * [.visible](#Shadow-visible) : `boolean`


* * *

<a name="new_Shadow_new"></a>

## new Shadow(x, y, blur, color, visible)
Creates a drop shadow style object with the given properties.

The `visible` argument is optional and defaults to true.

| Param | Type |
| --- | --- |
| x | `number` | 
| y | `number` | 
| blur | `number` | 
| color | `\![Color](Color/)` | 
| visible | `?boolean` |


* * *

<a name="Shadow-x"></a>

### *shadow.x : `number`*
X offset of the shadow relative to the shape it is attached to, in _global coordinates_ (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [`Shadow`](#Shadow)  


* * *

<a name="Shadow-y"></a>

### *shadow.y : `number`*
Y offset of the shadow relative to the shape it is attached to, in _global coordinates_  (i.e. independent of the shape's rotation or any
parent's rotation). May be negative.

**Kind**: instance property of [`Shadow`](#Shadow)  


* * *

<a name="Shadow-blur"></a>

### *shadow.blur : `number`* &gt;= 0

**Kind**: instance property of [`Shadow`](#Shadow) 


* * *

<a name="Shadow-color"></a>

### *shadow.color : `\![Color](Color/)`*

**Kind**: instance property of [`Shadow`](#Shadow) 


* * *

<a name="Shadow-visible"></a>

### *shadow.visible : `boolean`*
If false, the shadow is not rendered. The user can toggle this via a checkbox in the Properties panel.

**Kind**: instance property of [`Shadow`](#Shadow) 
