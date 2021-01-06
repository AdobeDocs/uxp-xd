<a name="SceneNodeList"></a>

## SceneNodeList
Represents the children of a scenenode. Typically accessed via the [SceneNode.children](/reference/scenegraph/#SceneNode-children) property.

This is _not an Array_, so you must use [`at(i)`](#SceneNodeList-at) instead of `[i]` to access children by index. It has a
number of Array-like methods such as [forEach](#SceneNodeList-forEach) for convenience, however. For best performance, iterate
the list using these methods rather than repeatedly calling `at()`.

Items in this list are ordered from lowest z order to highest.

**Kind**: class  

**Example**
```js
let node = ...;
console.log("Node has " + node.children.length + " children");
console.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!
node.children.forEach(function (childNode, i) {
    ...
});
```

**See**: [SceneNode.children](/reference/scenegraph/#SceneNode-children)  

* [SceneNodeList](#SceneNodeList)
    * [.length](#SceneNodeList-length) : `number`
    * [.forEach(callback, thisArg)](#SceneNodeList-forEach) ⇒ `void`
    * [.forEachRight(callback, thisArg)](#SceneNodeList-forEachRight) ⇒ `void`
    * [.filter(callback, thisArg)](#SceneNodeList-filter) ⇒ `Array.&lt;!SceneNode&gt;`
    * [.map(callback, thisArg)](#SceneNodeList-map) ⇒ `Array.&lt;\*&gt;`
    * [.some(callback, thisArg)](#SceneNodeList-some) ⇒ `boolean`
    * [.at()](#SceneNodeList-at) ⇒ `SceneNode`


* * *

<a name="SceneNodeList-length"></a>

### sceneNodeList.length : `number`
Number of children in the list.

**Kind**: instance property of [`SceneNodeList`](#SceneNodeList)  
**Read only**: true  

* * *

<a name="SceneNodeList-forEach"></a>

### sceneNodeList.forEach(callback, thisArg) ⇒ `void`
Iterate all children in the list.

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | `!function(!SceneNode, number)` | Callback, passed each child node and its index. |
| thisArg | `?Object` | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList-forEachRight"></a>

### sceneNodeList.forEachRight(callback, thisArg) ⇒ `void`
Iterate all children in the list, in reverse order (highest z order to lowest).

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | `!function(!SceneNode, number)` | Callback, passed each child node and its index. |
| thisArg | `?Object` | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList-filter"></a>

### sceneNodeList.filter(callback, thisArg) ⇒ `Array.&lt;!SceneNode&gt;`
Iterates all children and returns an array of just the children that passed the filter function's test.

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | `!function(!SceneNode, number): boolean` | Filter function, passed each child node and its index. |
| thisArg | `?Object` | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList-map"></a>

### sceneNodeList.map(callback, thisArg) ⇒ `Array.&lt;\*&gt;`
Iterates all children and returns an array of the map function's result value for each child node.

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  

| Param | Type | Description |
| --- | --- | --- |
| callback | `!function(!SceneNode, number): *` | Map function, passed each child node and its index. |
| thisArg | `?Object` | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList-some"></a>

### sceneNodeList.some(callback, thisArg) ⇒ `boolean`
Iterates children until the test returns true for at least one child.

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  
**Returns**: `boolean` - True if the test function returned true for at least one child.  

| Param | Type | Description |
| --- | --- | --- |
| callback | `!function(!SceneNode, number): boolean` | Test function, passed each child node and its index. |
| thisArg | `?Object` | Optional value for `this` when executing the callback. |


* * *

<a name="SceneNodeList-at"></a>

### sceneNodeList.at() ⇒ `SceneNode`
Note: calling `at()` repeatedly (e.g. in a `for` loop) is not as fast as using SceneNodeList's iteration methods such as `forEach()`,
`some()`, or `map()`.

**Kind**: instance method of [`SceneNodeList`](#SceneNodeList)  
**Returns**: `?SceneNode` - Child node at the specified index in the list, or null if index is out of bounds.  

| Param | Type |
| --- | --- |
| index | `number` |


* * *

