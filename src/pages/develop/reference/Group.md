# Group

**Kind**: class
**Extends**: [SceneNode](#scenenode)

Group nodes represent two types of simple containers in XD:

- Plain Groups, created by the _Object > Group_ command
- Masked Groups, created by the _Object > Mask With Shape_ command
  You can determine whether a group is masked by checking the `mask` property.

Groups and other containers cannot be created directly using scenenode constructors, since you can't add a populated Group to the
scenegraph (you can't add subtrees all at once) nor can you add an empty Group and then add children to it (can't add nodes outside
the scope of the current _edit context_). Instead, to create Groups and other nested structures, use [commands](/develop/reference/commands/).

Plain Groups (as well as some other node types, like SymbolInstances) can have dynamic layout features enabled such as padding and
stack layouts. These are sometimes referred to as Content-Aware Groups or Stack containers, but ultimately these appear in the API as
plain Group nodes. They do not carry the same edit-context restrictions as Masked Groups or other special node types.

In a Mask Group, the mask shape is included in the group's `children` list, at the top of the z order. It is not visible - only its
path outline is used, for clipping the group.

**Example**

```js
let commands = require("commands");

// Newly created shape nodes
let shape1 = ...,
    shape2 = ...;

// Add both nodes to the current edit context first
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);

// Select both shapes, then run the Group command
selection.items = [shape1, shape2];
commands.group();
let group = selection.items[0];  // selection has been set to the new Group node afterward
```

## addChild()

▸ **addChild**(node, index)

Adds a child node to this container node. You can only add leaf nodes this way; to create structured subtrees of content,
use [commands](/develop/reference/commands/).

| Param | Type         | Description                                                                                               |
| ----- | ------------ | --------------------------------------------------------------------------------------------------------- |
| node  | SceneNode | Child to add                                                                                              |
| index | `?number`    | Optional: index to insert child at. Child is appended to end of children list (top of z order) otherwise. |

**Kind**: instance method of [Group](#group) and other container nodes

## addChildAfter()

▸ **addChildAfter**(node, relativeTo)

Inserts a child node after the given reference node.

| Param      | Type         | Description                                              |
| ---------- | ------------ | -------------------------------------------------------- |
| node       | SceneNode | Child to add                                             |
| relativeTo | SceneNode | New child is added immediately after this existing child |

**Kind**: instance method of [Group](#group) and other container nodes

## addChildBefore()

▸ **addChildBefore**(node, relativeTo)

Inserts a child node before the given reference node.

| Param      | Type         | Description                                               |
| ---------- | ------------ | --------------------------------------------------------- |
| node       | SceneNode | Child to add                                              |
| relativeTo | SceneNode | New child is added immediately before this existing child |

**Kind**: instance method of [Group](#group) and other container nodes

## removeAllChildren()

▸ **removeAllChildren**()

Removes all children from this node. Equivalent to calling removeFromParent() on each child in turn, but faster.

**Kind**: instance method of [Group](#group) and other container nodes

## dynamicLayout

▸ **dynamicLayout**: ?boolean

**Since:** XD 29

If true, Responsive Resize is enabled, and this node's children will use an intelligent layout algorithm whenever this node is resized.

Returns undefined on node types that do not support Responsive Resize (such as RepeatGrid; see [horizontalConstraints](#scenenodehorizontalconstraints--positionstring-sizestring) docs for a
complete list). Attempting to set this property on such node types results in an error.

**See**:
- [horizontalConstraints](#scenenodehorizontalconstraints--positionstring-sizestring)
- [verticalConstraints](#scenenodeverticalconstraints--positionstring-sizestring)

**Kind**: instance property of [Group](#group)

## mask

▸ **mask**: ?[SceneNode](#scenenode)

The mask shape applied to this group, if any. This object is also present in the group's `children` list. Though it has no direct visual appearance of its own, the mask affects the entire group's appearance by clipping all its other content.

The `localBounds`, `globalBounds`, and `globalDrawBounds` of a Masked Group are based on the bounds of the mask shape alone, regardless of whether the content is larger than the mask or even if the content doesn't fill the mask area completely.

**Example**

```js
let group = ...;
console.log("Type of group is: " + (group.mask ? "Masked Group" : "Plain Group"));
```

To create a Masked Group, use [commands.createMaskGroup](/develop/reference/commands/#commandscreatemaskgroup) instead of [commands.group](/develop/reference/commands/#commandsgroup).

**Kind**: instance property of [Group](#group)
**Read only**: true
