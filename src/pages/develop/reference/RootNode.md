# RootNode

**Kind**: class
**Extends**: [SceneNode](#scenenode)

Class representing the root node of the document. All Artboards are children of this node, as well as any pasteboard content that
does not lie within an Artboard. Artboards must be grouped contiguously at the bottom of this node's z order. The root node has no
visual appearance of its own.

## addChild()

▸ **addChild**(node, index)

Adds a child node to this container node. You can only add leaf nodes this way; to create structured subtrees of content,
use [commands](/develop/reference/commands/).

| Param | Type         | Description                                                                                               |
| ----- | ------------ | --------------------------------------------------------------------------------------------------------- |
| node  | SceneNode | Child to add                                                                                              |
| index | `?number`    | Optional: index to insert child at. Child is appended to end of children list (top of z order) otherwise. |

**Kind**: instance method of [RootNode](#rootnode) and other container nodes

## addChildAfter()

▸ **addChildAfter**(node, relativeTo)

Inserts a child node after the given reference node.

| Param      | Type         | Description                                              |
| ---------- | ------------ | -------------------------------------------------------- |
| node       | SceneNode | Child to add                                             |
| relativeTo | SceneNode | New child is added immediately after this existing child |

**Kind**: instance method of [RootNode](#rootnode) and other container nodes

## addChildBefore()

▸ **addChildBefore**(node, relativeTo)

Inserts a child node before the given reference node.

| Param      | Type         | Description                                               |
| ---------- | ------------ | --------------------------------------------------------- |
| node       | SceneNode | Child to add                                              |
| relativeTo | SceneNode | New child is added immediately before this existing child |

**Kind**: instance method of [RootNode](#rootnode) and other container nodes

## removeAllChildren()

▸ **removeAllChildren**()

Removes all children from this node. Equivalent to calling removeFromParent() on each child in turn, but faster.

**Kind**: instance method of [RootNode](#rootnode) and other container nodes
