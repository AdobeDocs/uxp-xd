# SceneNodeList

**Kind**: class

Represents the children of a scenenode. Typically accessed via the [SceneNode.children](/develop/reference/SceneNode/#children) property.

This is _not an Array_, so you must use [.at(i)](#at) instead of `[i]` to access children by index. It has a
number of Array-like methods such as [forEach](#foreach) for convenience, however. For best performance, iterate
the list using these methods rather than repeatedly calling `at()`.

Items in this list are ordered from lowest z order to highest.

**Example**

```js
let node = ...;
console.log("Node has " + node.children.length + " children");
console.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!
node.children.forEach(function (childNode, i) {
    ...
});
```

**See**: [SceneNode.children](/develop/reference/SceneNode/#children)

## length

▸ **length**: `number`

Number of children in the list.

**Kind**: instance property of [SceneNodeList](#SceneNodeList)
**Read only**: true

## forEach()

▸ **forEach**(`callback`, `thisArg`)

Iterate all children in the list.

| Param    | Type                            | Description                                            |
| -------- | ------------------------------- | ------------------------------------------------------ |
| callback | `function(SceneNode, number)` | Callback, passed each child node and its index.        |
| thisArg  | `?Object`                       | Optional value for `this` when executing the callback. |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)

## forEachRight()

▸ **forEachRight**(`callback`, `thisArg`)

Iterate all children in the list, in reverse order (highest z order to lowest).

| Param    | Type                            | Description                                            |
| -------- | ------------------------------- | ------------------------------------------------------ |
| callback | `function(SceneNode, number)` | Callback, passed each child node and its index.        |
| thisArg  | `?Object`                       | Optional value for `this` when executing the callback. |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)

## filter()

▸ **filter**(`callback`, `thisArg`): `Array.<`[SceneNode](/develop/reference/SceneNode)`>`

Iterates all children and returns an array of just the children that passed the filter function's test.

| Param    | Type                                     | Description                                            |
| -------- | ---------------------------------------- | ------------------------------------------------------ |
| callback | `function(SceneNode, number): boolean` | Filter function, passed each child node and its index. |
| thisArg  | `?Object`                                | Optional value for `this` when executing the callback. |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)

## map()

▸ **map**(`callback`, `thisArg`): `Array.<*>`

Iterates all children and returns an array of the map function's result value for each child node.

| Param    | Type                               | Description                                            |
| -------- | ---------------------------------- | ------------------------------------------------------ |
| callback | `function(SceneNode, number): *` | Map function, passed each child node and its index.    |
| thisArg  | `?Object`                          | Optional value for `this` when executing the callback. |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)

## some()

▸ **some**(`callback`, `thisArg`): `boolean`

Iterates children until the test returns true for at least one child.  Returns true if the test function returned true for at least one child.

| Param    | Type                                     | Description                                            |
| -------- | ---------------------------------------- | ------------------------------------------------------ |
| callback | `function(SceneNode, number): boolean` | Test function, passed each child node and its index.   |
| thisArg  | `?Object`                                | Optional value for `this` when executing the callback. |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)

## at()

▸ **at**(`index`): [SceneNode](/develop/reference/SceneNode)

Returns the child node at the specified index in the list, or null if index is out of bounds.

Note: calling `at()` repeatedly (e.g. in a `for` loop) is not as fast as using SceneNodeList's iteration methods such as `forEach()`, `some()`, or `map()`.

| Param | Type     |
| ----- | -------- |
| index | `number` |

**Kind**: instance method of [SceneNodeList](#SceneNodeList)