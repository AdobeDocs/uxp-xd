# viewport

The `viewport` module represents the current UI view of the XD document's content.

**Example**

```js
// Pan viewport to bring the region x:100, y:200, width:50, height:50 into view
viewport.scrollIntoView(100, 200, 50, 50);

// Pan view to the first selected object
if (selection.items.length > 0) {
  viewport.scrollIntoView(selection.items[0]);
}

// Pan view to center the location x:100, y:200
viewport.scrollToCenter(100, 200);

// Zoom & pan to show entire region x:100, y:200, width:50, height:50
viewport.zoomToRect(100, 200, 50, 50);

console.log("Viewport at:", viewport.bounds); // e.g. "{ x:100, y:50, width:1400, height:900 }"
console.log("Zoom:", viewport.zoomFactor); // e.g. "0.66"
```

**Since**: XD 14

### viewport.scrollIntoView(node) | (x, y, width, height)

Smoothly pan the viewport to bring the entire given region into view. If the region is already fully in view, does
nothing. If the given region is too large to fit entirely in view, it is simply centered (zoom remains unchanged).

The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates.

**Kind**: static method of [`viewport`](#module_viewport)

**viewport.scrollIntoView(node) :**

| Param | Type       |
| ----- | ---------- |
| node  | !SceneNode |

**viewport.scrollIntoView(x, y, width, height) :**

| Param  | Type   |
| ------ | ------ |
| x      | number |
| y      | number |
| width  | number |
| height | number |

### viewport.scrollToCenter(x, y)

Smoothly pan the viewport to center on a specific point in the document's global coordinates. Even if the point is
already in view, the view pans until it is centered.

**Kind**: static method of [`viewport`](#module_viewport)

| Param | Type   |
| ----- | ------ |
| x     | number |
| y     | number |

### viewport.zoomToRect(node) | (x, y, width, height)

Zoom & pan the view as needed so the given region fills the viewport (with some padding). If the region is large, zooms
out as needed so it fits entirely in view. If the region is smaller, zooms _in_ so the region fills the entire viewport -
may zoom in past 100% to achieve this.

The region can be defined by passing a SceneNode, or by explicitly specifying a rectangle in global coordinates.

**Kind**: static method of [`viewport`](#module_viewport)

**viewport.zoomToRect(node) :**

| Param | Type       |
| ----- | ---------- |
| node  | !SceneNode |

**viewport.zoomToRect(x, y, width, height) :**

| Param  | Type   |
| ------ | ------ |
| x      | number |
| y      | number |
| width  | number |
| height | number |

### _viewport.bounds : `!{x:number, y:number, width:number, height:number}`_

The current viewport bounds expressed in [global coordinates](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**Kind**: static property of [`viewport`](#module_viewport)
**Read only**: true

### _viewport.zoomFactor : `number`_

The current viewport zoom factor (where 1.0 = 100% zoom, 0.5 = 50% zoom, etc.).

**Kind**: static property of [`viewport`](#module_viewport)
**Read only**: true
