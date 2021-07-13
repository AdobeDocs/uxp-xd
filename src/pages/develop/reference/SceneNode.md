# SceneNode

**Kind**: abstract class

Base class of all scenegraph nodes. Nodes will always be an instance of some _subclass_ of SceneNode.

## guid

▸ **guid**: `string`

Returns a unique identifier for this node that stays the same when the file is closed & reopened, or if the node is moved to a different part of the document. Cut-Paste will result in a new GUID, however.

The GUID is guaranteed unique _within_ the current document, but _other_ documents may contain the same GUID value. For example, if the user makes a copy of an XD file, both files will use the same GUIDs.

The GUID of the [root node](/develop/reference/RootNode) changes if the document is duplicated via Save As. See [application.activeDocument.guid](/develop/reference/application/#activedocument) for details.

Node objects can be destroyed and recreated during operations such as Undo/Redo, so if you need to store a reference to a node even between operations in the _same_ session, it's best to store the GUID and then retrieve the node later via [getNodeByGuid()](/develop/reference/scenegraph/#getnodebyguid).

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## parent

▸ **parent**: [SceneNode](#scenenode)

Returns the parent node. Null if this is the root node, or a freshly constructed node which has not been added to a parent yet.

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## children

▸ **children**: [SceneNodeList](/develop/reference/SceneNodeList)

Returns a list of this node's children. List is length 0 if the node has no children. The first child is lowest in the z order.

This list is _**not an Array**_, so you must use `at(i)` instead of `[i]` to access children by index. It has a number of Array-like
methods such as `forEach()` for convenience and improved performance, however.

The list is immutable. Use [removeFromParent](#removefromparent) and [addChild](/develop/reference/Group/#addchild) to add/remove child nodes.

**Example**

```js
let node = ...;
console.log("Node has " + node.children.length + " children");
console.log("First child: " + node.children.at(0));  // do not use `[0]` - it will not work!

node.children.forEach(function (childNode, i) {
    console.log("Child " + i + " is a " + childNode.constructor.name);
});
```

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## isInArtworkTree

▸ **isInArtworkTree**: `boolean`

True if the node's parent chain connects back to the document root node.

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## isContainer

▸ **isContainer**: `boolean`

True if this node is a type that could have children (e.g. an Artboard, Group, Boolean Group, etc.).

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## selected

▸ **selected**: `boolean`

True if this node is part of the current selection. To get a list of _all_ selected nodes or change which nodes are selected, use [selection](/develop/reference/selection/).

**See**: [selection](/develop/reference/selection/)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## visible

▸ **visible**: `boolean`

False if this node has been hidden by the user (eyeball toggle in Layers panel). If true, the node may still be invisible for other reasons: a parent or grandparent has visible=false, the node has opacity=0%, the node is clipped by a mask, etc.

**Kind**: instance property of [SceneNode](#scenenode)

## opacity

▸ **opacity**: `number` (0.0 - 1.0)

Node's opacity setting. The overall visual opacity seen in the document is determined by combining this value with the opacities of the node's entire parent chain, as well as the opacity settings of its fill/stroke properties if this is a leaf node.

**Kind**: instance property of [SceneNode](#scenenode)

## blendMode

▸ **blendMode**: `string`

**Default**: `BLEND_MODE_PASSTHROUGH`
**Since**: XD 27

Blend mode determines how a node is composited onto the content below it.

One of: `SceneNode.BLEND_MODE_PASSTHROUGH`, `BLEND_MODE_NORMAL`, `BLEND_MODE_MULTIPLY`, `BLEND_MODE_DARKEN`, `BLEND_MODE_COLOR_BURN`, `BLEND_MODE_LIGHTEN`, `BLEND_MODE_SCREEN`, `BLEND_MODE_COLOR_DODGE`, `BLEND_MODE_OVERLAY`, `BLEND_MODE_SOFT_LIGHT`,
`BLEND_MODE_HARD_LIGHT`, `BLEND_MODE_DIFFERENCE`, `BLEND_MODE_EXCLUSION`, `BLEND_MODE_HUE`, `BLEND_MODE_SATURATION`, `BLEND_MODE_COLOR`, `BLEND_MODE_LUMINOSITY`.

_Note:_ for leaf nodes (GraphicNode), the XD UI may show leaf nodes as blend mode "Normal" even when the underlying value is `BLEND_MODE_PASSTHROUGH`. This is because "Pass Through" and "Normal" are essentially equivalent for leaf nodes -- they only differ
in appearance when a node has children.

**Example**

```js
node.blendMode = scenegraph.SceneNode.BLEND_MODE_LUMINOSITY;
```

**Kind**: instance property of [SceneNode](#scenenode)

## transform

▸ **transform**: [Matrix](/develop/reference/Matrix/) | [Matrix3D](/develop/reference/Matrix3D/)

Affine transform matrix that converts from the node's _local coordinate space_ to its parent's coordinate space. The matrix never has
skew or scale components, and if this node is an Artboard the matrix never has rotation either. Rather than reading the raw matrix values
directly, it may be easier to use the [translation](#translation) and [rotation](#rotation) properties.

**Since**: XD 40 transform will return a [Matrix3D](/develop/reference/Matrix3D/) objects for 3D transformed nodes. Again, rather than reading the raw matrix values directly, it may be easier to use the [zDepth](#zdepth), [rotationX](#rotationx) and [rotationY](#rotationy) for 3D specific properties.

To move or resize a node, use the [translation](#translation) property or APIs like [placeInParentCoordinates()](#placeinparentcoordinates) or [rotateAround()](#rotatearound).
Setting the entire transform matrix directly is not allowed. To resize a node, use [resize()](#resize).

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

This getter returns a fresh Matrix each time, so its fields can be mutated by the caller without interfering with the node's state.

**See**

- [translation](#translation)
- [rotation](#rotation)
- [moveInParentCoordinates](#moveinparentcoordinates)
- [placeInParentCoordinates](#placeinparentcoordinates)
- [placeInParentCoordinates3D](#placeinparentcoordinates3d)
- [rotateAround](#rotatearound)
- [globalBounds](#globalbounds)
- [localBounds](#localbounds)
- [boundsInParent](#boundsinparent)
- [topLeftInParent](#topleftinparent)
- [zDepth](#zdepth)
- [rotationX](#rotationx)
- [rotationY](#rotationy)
- [placeInParentCoordinates3D](#placeinparentcoordinates3d)
- [moveZDepth](#movezdepth)
- [rotateXAround](#rotatexaround)
- [rotateYAround](#rotateyaround)
- [perspectiveCenterInParentCoordinates](#perspectivecenterinparentcoordinates)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## translation

▸ **translation**: `{x:number, y:number}`

The translate component of this node's [transform](#transform). Since translation is applied after any rotation in
the transform Matrix, translation occurs along the parent's X/Y axes, not the node's own local X/Y axes. This is equivalent to
the `e` & `f` fields in the transform Matrix.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**

- [moveInParentCoordinates](#moveinparentcoordinates)
- [placeInParentCoordinates](#placeinparentcoordinates)
- [topLeftInParent](#topleftinparent)

**Kind**: instance property of [SceneNode](#scenenode)

## rotation

▸ **rotation**: `number`

The rotation component of this node's [transform](#transform), in clockwise degrees.

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**: [rotateAround](#rotatearound)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## globalBounds

▸ **globalBounds**: [Bounds](/develop/reference/scenegraph/#typedef-bounds)

The node's _path bounds_ in document-global coordinate space (represented by a bounding box aligned with global X/Y axes). Path bounds match the selection outline seen in the XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**

- [globalDrawBounds](#globaldrawbounds)
- [localBounds](#localbounds)
- [boundsInParent](#boundsinparent)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## localBounds

▸ **localBounds**: [Bounds](/develop/reference/scenegraph/#typedef-bounds)

The node's _path bounds_ in its own local coordinate space. This coordinate space may be rotated and translated relative to the parent's coordinate space. Path bounds match the selection outline seen in XD, but exclude some visual parts of the node (outerstroke, drop shadow / blur, etc.).

The visual top-left of a node's path bounds is located at (localBounds.x, localBounds.y). This value is _not_ necessarily (0,0) in the local coordinate space: for example, a text node's baseline is at y=0 in local coordinates, so the top of the text has a negative y value.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**

- [globalBounds](#globalbounds)
- [boundsInParent](#boundsinparent)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## boundsInParent

▸ **boundsInParent**: [Bounds](/develop/reference/scenegraph/#typedef-bounds)

The node's _path bounds_ in its parent's coordinate space (represented by a bounding box aligned with the parent's X/Y axes - so if the node has rotation, the top-left of the node is not necessarily located at the top-left of boundsInParent). Path bounds match the selection outline seen in XD, but exclude some visual parts of the node (outer stroke, drop shadow / blur, etc.).

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**

- [globalBounds](#globalbounds)
- [localBounds](#localbounds)
- [topLeftInParent](#topleftinparent)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## topLeftInParent

▸ **topLeftInParent**: [Point](/develop/reference/scenegraph/#typedef-point)

The position of the node's upper-left corner (localBounds.x, localBounds.y) in its parent's coordinate space. If the node is
rotated, this is not the same as the top-left corner of boundsInParent.
This is a shortcut for `node.transform.transformPoint({x: node.localBounds.x, y: node.localBounds.y})`

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**

- [boundsInParent](#boundsinparent)
- [localBounds](#localbounds)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## localCenterPoint

▸ **localCenterPoint**: [Point](/develop/reference/scenegraph/#typedef-point)

The position of the node's centerpoint in its own local coordinate space. Useful as an argument to [rotateAround](#rotatearound).
This is a shortcut for `{x: localBounds.x + localBounds.width/2, y: localBounds.y + localBounds.height/2})`

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**: [localBounds](#localbounds)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## globalDrawBounds

▸ **globalDrawBounds**: [Bounds](/develop/reference/scenegraph/#typedef-bounds)

The node's _draw bounds_ in document-global coordinate space. Draw bounds are larger than the selection outline seen in XD, including outer stroke, drop shadow / blur, etc. - every visible pixel of the node is encompassed by these bounds. This matches the image dimensions if the node is exported as a PNG/JPEG bitmap.

For an overview of node bounding boxes & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**
- [globalBounds](#globalbounds)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## name

▸ **name**: `string`

Node name as seen in the Layers panel. Also used as filename during Export.

Setting this property will cause [hasDefaultName](#hasdefaultname) to become false.

**Kind**: instance property of [SceneNode](#scenenode)

## hasDefaultName

▸ **hasDefaultName**: `boolean`

True if [name](#name) is a generic, auto-generated string (e.g. "Rectangle 5"). False if name has been explicitly set.

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## locked

▸ **locked**: `boolean`

True if the node is locked, meaning it cannot normally be selected.

**Kind**: instance property of [SceneNode](#scenenode)

## markedForExport

▸ **markedForExport**: `boolean`

True if the node should be included in the output of _File > Export > Batch_ and other bulk-export workflows.

**Kind**: instance property of [SceneNode](#scenenode)

## fixedWhenScrolling

▸ **fixedWhenScrolling**: `?boolean`

**Since**: XD 19

True if the node stays in a fixed position while the Artboard's content is scrolling (when viewed in an interactive prototype).
_Only applicable for nodes whose immediate parent is an Artboard_ -- this does not apply to content inside a ScrollableGroup!

For other nodes, this property returns undefined and cannot be set. To determine whether those nodes scroll or remain
fixed, walk up the parent chain and check this property on the topmost ancestor in the Artboard.

**See**: [Artboard.viewportHeight](/develop/reference/Artboard/#viewportheight)

**Kind**: instance property of [SceneNode](#scenenode)

## triggeredInteractions

▸ **triggeredInteractions**: `Array<`[Interaction](/develop/reference/interactions/#typedef-interaction)`>`

**Since**: XD 19

Get all interactions that are triggered by this node in the document's interactive prototype. Each element in the array
is an [Interaction object](/develop/reference/interactions/#typedef-interaction) which describes a gesture/event plus the action it produces.

Note: If this node (or one of its ancestors) has `visible` = false, tap and drag interactions on it will not be triggered.

Currently, this API excludes some types of interactions: keypress/gamepad, scrolling, hover, component state transitions, or non-speech audio playback.

**Example**

```js
// Print all the interactions triggered by a node
node.triggeredInteractions.forEach((interaction) => {
  console.log(
    "Trigger: " +
      interaction.trigger.type +
      " -> Action: " +
      interaction.action.type
  );
});
```

**See**: [interactions.allInteractions](/develop/reference/interactions/#allinteractions)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## contentChildren

▸ **contentChildren**: [SceneNodeList](/develop/reference/SceneNodeList)

**Since**: XD 38

Returns a list of this node's children, skipping the background node when present. The list is z-index ordered, from lowest to highest. This list is _**not an Array**_, so you must use `at(i)` instead of `[i]` to access content children by index.

**Example**
```js
const node = ...; // supposing that this node has the Stack property enabled
console.log("Node has " + node.contentChildren.length + " stack cells");
console.log("First stack cell: " + node.contentChildren.at(0));  // do not use `[0]` - it will not work!

node.contentChildren.forEach(function (stackCell, i) {
    console.log("Stack cell " + i + " is a " + stackCell.constructor.name);
});
```

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## layout

▸ **layout**: LayoutProperties

**Since**: XD 38

Encapsulates all the Layout properties: Responsive Resize, Padding and Stacks. By design, the Stack property is conditioned by the presence of Padding property which, in turn, is conditioned by the presence of Responsive Resize property.

Object containing all layout properties for the node

| Param | Type | Description |
| --- | --- | --- |
| type | `String` | SceneNode.LAYOUT_NONE, LAYOUT_RESPONSIVE_RESIZE, LAYOUT_PADDING or LAYOUT_STACK depending on which layout properties are enabled |
| ?stack | `Object` | Included if layout type is LAYOUT_STACK |
| ?padding | `Object` | Included if layout type is LAYOUT_STACK or LAYOUT_PADDING |
| ?resizeConstraints | `Object` | Included if layout type is LAYOUT_STACK, LAYOUT_PADDING or LAYOUT_RESPONSIVE_RESIZE |


Object representing `layout.stack`

| Param | Type | Description |
| --- | --- | --- |
| orientation | `string` | SceneNode.STACK_HORIZONTAL or STACK_VERTICAL |
| spacings | `Array<Number>` or `Number` | a numbde if each cell is equidistant or an array of spaces between cells in order provided by [contentChildren](#contentchildren)  |


Object representing `layout.padding`

| Param | Type | Description |
| --- | --- | --- |
| background | [SceneNode](/develop/reference/SceneNode) or NULL | SceneNode used as the background or null if no background set |
| values | `Object` or `Number` | top, right, bottom, left are all numbers which determines each side padding amount. A single number represents the padding used by all four sides. |


Object representing `layout.resizeConstraints`

| Param | Type | Description |
| --- | --- | --- |
| type | `String` | SceneNode.RESPONSIVE_RESIZE_AUTO or RESPONSIVE_RESIZE_MANUAL |
| values | `Object` | top, right, bottom, left, width and height are all Boolean vaues set to true when enabled. |


In a `LayoutProperties` object:
- `SceneNode.layout.padding.background` is either a SceneNode, if the current SceneNode has a background, or null, otherwise
- `SceneNode.layout.padding.values` represents either a number, if all the padding values are equal, or an object with `top`, `right`, `bottom` and `left` attributes, otherwise
- `SceneNode.layout.stack.spacings` represents either a number, if the stack cells are equidistant, or an array of spaces between the stack cells, in the order mentioned by `SceneNode.contentChildren`,
otherwise; the `SceneNode.contentChildren`, being z-index ordered, contains the stack cells in the reverse order to the natural one, from the last cell in stack to the first one; so, in a Stack
with N non-background stack cells:
  - `SceneNode.layout.stack.spacings[i]` = the space between `SceneNode.contentChildren[i]` and `SceneNode.contentChildren[i + 1]` for i = 0, N - 1
  - To access the space coming before/after a stack cell, then the index of the desired stack cell must be searched in `SceneNode.contentChildren` and due to the z-index order:
    - after space = `SceneNode.layout.stack.spacings[index - 1]`
    - before space = `SceneNode.layout.stack.spacings[index]`

The setter expects a `PluginLayoutProperties` object which must contain the desired layout type:
- SceneNode.LAYOUT_NONE:
    - all the Layout properties will be disabled
    - any other attributes contained in the provided Object will be ignored
- SceneNode.LAYOUT_RESPONSIVE_RESIZE:
    - only the Responsive Resize layout-specific property will be enabled
    - the only attribute that will be taken into account from the provided Object is `resizeConstraints`; if this attribute:
        - is provided: if Responsive Resize is not enabled, this property is first enabled like switching its toggle from off to on in the Property Inspector; then the specified resize constraints are applied
        - is missing: if Responsive Resize is not enabled, this property is enabled like switching its toggle from off to on in the Property Inspector; otherwise nothing happens
- SceneNode.LAYOUT_PADDING:
    - the Responsive Resize and Padding layout-specific properties will be enabled
    - the attributes that will be taken into account from the provided Object are `resizeConstraints` and `padding`
    - for the `resizeConstraints` attribute, the behaviour is just the same as in the case of the SceneNode.LAYOUT_RESPONSIVE_RESIZE desired layout type
    - for the `padding` attribute:
        - is provided: if Padding is not enabled, this property is first enabled like checking its checkbox in the Property Inspector; then the specified padding values are applied
        - is missing: if Padding is not enabled, this property is enabled like checking its checkbox in the Property Inspector; otherwise nothing happens
- SceneNode.LAYOUT_STACK:
    - the Responsive Resize, Padding and Stack layout-specific properties will be enabled
    - the attributes that will be taken into account from the provided Object are `resizeConstraints`, `padding` and `stack`
    - for the `resizeConstraints` attribute, the behaviour is just the same as in the case of the SceneNode.LAYOUT_RESPONSIVE_RESIZE desired layout type
    - for `padding` and `stack` attributes:
        - if the `stack` attribute is provided, then:
            - Padding will be enabled (if it’s not), without computing a background and having all the padding values equal to 0; afterwards, the padding values will be updated with those specified, if the `padding` attribute is provided
            - Stack will be enabled (if it’s not), without clustering and reordering the stack cells - this can be called "manual stack mode"; then the orientation and spacings will be updated with those specified
        - if the `stack` attribute is missing, then:
            - Padding behaviour is just the same as in the case of the SceneNode.LAYOUT_PADDING desired layout type
            - Stack will be enabled (if it’s not) like checking its checkbox in the Property Inpector - this can be called "auto stack mode"

Getter Remarks:
- If `SceneNode.layout.type` is:
    - SceneNode.LAYOUT_NONE: there’s no Layout property enabled or available, hence the getter will return an Object containing only the `type` attribute
    - SceneNode.LAYOUT_RESPONSIVE_RESIZE: the only Layout-specific property available and enabled is Responsive Resize, hence the getter will return an Object containing the `type` and `resizeConstraints` attributes
    - SceneNode.LAYOUT_PADDING: Padding is enabled, so the object returned by the getter will contain the `type`, `resizeConstraints` and `padding` attributes
    - SceneNode.LAYOUT_STACK: Stack is enabled, so the object returned by the getter will contain the `type`, `resizeConstraints`, `padding` and `stack` attributes

Setter Remarks:
 - If `SceneNode.layout.resizeConstraints.type` is set to SceneNode.RESPONSIVE_RESIZE_AUTO, then the values of the resize pins are no longer required, so the
attribute `SceneNode.layout.resizeConstraints.values` is considered as read-only, being ignored if set
 - `SceneNode.layout.paddingbackground` is a read-only attribute, so it will be ignored if set. If you’d like to manipulate the
background, look for the `makeBackground()` and `replaceBackground()` methods.

**Kind**: instance property of [SceneNode](#scenenode)

## horizontalConstraints

▸ **horizontalConstraints**: `?{position:string, size:string}`

**Since**: XD 29

Horizontal dynamic-layout settings used with the Responsive Resize feature. Setting this only determines how the node is updated when its parent is resized -- it does not change the node's current size or position.

| Property                       | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| horizontalConstraints.position | string | Horizontal position anchoring, one of `SceneNode.FIXED_LEFT`, `FIXED_RIGHT`, `FIXED_BOTH` or `POSITION_PROPORTIONAL`.<br/><br/>`FIXED_BOTH` sets fixed left & right offsets, so it always implies `size: SIZE_RESIZES` (similar to setting both `left` & `right` in CSS).<br/><br/>`POSITION_PROPORTIONAL` holds node position at a fixed percentage of the parent's width -- the same positioning behavior you'd get if Responsive Resize is turned off entirely.                                                                            |
| horizontalConstraints.size     | string | Horizontal sizing behavior, either `SceneNode.SIZE_FIXED` or `SceneNode.SIZE_RESIZES`.<br/><br/>`SIZE_FIXED` cannot be used with `position: FIXED_BOTH`, since it is impossible to fix both left & right edges without resizing when the parent resizes.<br/><br/>`SIZE_RESIZES` can be used with any `position` setting. With `position: FIXED_BOTH`, the node's size always equals the parent's size minus the fixed left & right offsets. With other position settings, the node's size maintains a fixed percentage of the parent's size. |

Both fields _must_ be provided together when setting this property.

Returns undefined if node's parent is a container where Responsive Resize is unavailable:

- Certain containers such as RepeatGrid and the pasteboard (scenegraph root) do not support Responsive Resize.
- Container may have Responsive Resize layout explicitly turned off (see [dynamicLayout flag](/develop/reference/Group/#dynamiclayout)).

Attempting to set this property when Responsive Resize is unavailable results in an error.

Setting this property will cause [hasCustomConstraints](#hascustomconstraints) to become true.

**Example**

```js
let node = selection.items[0];
node.horizontalConstraints = {
  position: scenegraph.SceneNode.FIXED_LEFT,
  size: scenegraph.SceneNode.SIZE_FIXED,
};
```

**Kind**: instance property of [SceneNode](#scenenode)

## verticalConstraints

▸ **verticalConstraints**: `?{position:string, size:string}`

**Since**: XD 29

Vertical dynamic-layout settings used with the Responsive Resize feature. Setting this only determines how the node is updated when its parent is resized -- it does not change the node's current size or position.

| Property                     | Type   | Description                                                                                                                                                                                                      |
| ---------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| verticalConstraints.position | string | Vertical position anchoring, one of `SceneNode.FIXED_TOP`, `FIXED_BOTTOM`, `FIXED_BOTH` or `POSITION_PROPORTIONAL`.<br/><br/>For details, see [horizontalConstraints](#horizontalconstraints) above. |
| verticalConstraints.size     | string | Vertical sizing behavior, either `SceneNode.SIZE_FIXED` or `SceneNode.SIZE_RESIZES`.<br/><br/>For details, see [horizontalConstraints](#horizontalconstraints) above.                                |

Both fields _must_ be provided together when setting this property.

See [horizontalConstraints](#horizontalconstraints) above for other important notes.

**Example**

```js
let node = selection.items[0];
node.verticalConstraints = {
  position: scenegraph.SceneNode.FIXED_TOP,
  size: scenegraph.SceneNode.SIZE_RESIZES,
};
```

**Kind**: instance property of [SceneNode](#scenenode)

## hasCustomConstraints

▸ **hasCustomConstraints**: `boolean`

**Since**: XD 29

True if this node's Responsive Resize layout settings, which are normally automatically inferred by XD, have been overridden with specific desired values. Constraints on a node are either all overridden, or all automatic -- never mixed.

If false, each time the parent resizes XD will automatically guess the best layout settings to used based on the current size & position of this node within its parent. You can use the [horizontalConstraints](#horizontalconstraints) and [verticalConstraints](#verticalconstraints) getters to check what computed settings XD would use based on the node's current size & position.

Automatically becomes true any time you set `horizontalConstraints` or `verticalConstraints`. To reset to false, call [resetToAutoConstraints()](#resettoautoconstraints).

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true _(but is modified indirectly; see above)_

## resetToAutoConstraints()

▸ **resetToAutoConstraints**()

**Since**: XD 29

Erase any overridden Responsive Resize layout settings, restoring the default behavior where XD will automatically guess the best layout settings for this node the next time its parent is resized. This function does not change the node's _current_ size & position, however.

Calling this will cause [hasCustomConstraints](#hascustomconstraints) to become false.

**Kind**: instance method of [SceneNode](#scenenode)

## hasLinkedContent

▸ **hasLinkedContent**: `boolean`

True if the node's appearance comes from a link to an external resource, such as Creative Cloud Libraries or a
separate XD document (in the case of a Linked Component instance).

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## pluginData

▸ **pluginData**: `*`

**Since**: XD 14

Metadata specific to your plugin. Must be a value which can be converted to a JSON string, or undefined to clear the
stored metadata on this node.

Metadata is persisted with the document when it is saved. Duplicating a node (including across documents, via copy-paste)
will duplicate the metadata with it. If the node lies within a Component or Repeat Grid, all instances of the node will have
identical metadata (changes in one copy will automatically be synced to the other copy).

To store general metadata for the document overall, set pluginData on the [root](/develop/reference/RootNode) node of the scenegraph. Metadata on
the root node can be changed from _any_ edit context.

Metadata stored in pluginData cannot be accessed by other plugins -- each plugin has its own isolated storage. To share metadata
with other plugins, use [sharedPluginData](#sharedplugindata).

**Kind**: instance property of [SceneNode](#scenenode)

## sharedPluginData

▸ **sharedPluginData**: [PerPluginStorage](/develop/reference/PerPluginStorage/)

**Since**: XD 29

Metadata storage accessible by other plugins, separated into silos by plugin ID. Your plugin can read & write the storage for its own plugin ID,
but storage for other plugin IDs is _read-only_. This property returns a [PerPluginStorage API object](/develop/reference/PerPluginStorage/).

_Each_ scenenode has its own metadata storage. To store general metadata that is not specific to one scenenode, use `sharedPluginData` on the
[document's scenegraph root](/develop/reference/RootNode).

Metadata is persisted with the document when it is saved. See [pluginMetadata](#plugindata) for info on how metadata is duplicated when nodes are
copied or synced.

**Kind**: instance property of [SceneNode](#scenenode)

## removeFromParent()

▸ **removeFromParent**()

Remove this node from its parent, effectively deleting it from the document.

**Kind**: instance method of [SceneNode](#scenenode)

## moveInParentCoordinates()

▸ **moveInParentCoordinates**(`deltaX`, `deltaY`, ?`deltaZ`)

**Updated** XD 40

Move the node by the given number of pixels along the parent's X/Y axes (if this node has no rotation, this is identical to
moving the node along its own local X/Y axes). This is equivalent to modifying the value returned by 'translation' and then
setting it back.

The third parameter, deltaZ (optional), allows the movement of the object on Z axis.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

| Param   | Type     | Description                                     |
| ------- | -------- |-------------------------------------------------|
| deltaX  | `number` | Amount to move along X axis |
| deltaY  | `number` | Amount to move along Y axis |
| ?deltaZ | `number` | Optional: number of pixels to change depth with |

**See**
- [placeInParentCoordinates](#placeinparentcoordinates)
- [translation](#translation)

**Kind**: instance method of [SceneNode](#scenenode)

## placeInParentCoordinates()

▸ **placeInParentCoordinates**(`registrationPoint`, `parentPoint`)

Move the node so the given point in its local coordinates is placed at the given point in its parent's coordinates (taking into account
any rotation on this node, etc.).

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

| Param             | Type                | Description                                                                 |
| ----------------- | ------------------- | --------------------------------------------------------------------------- |
| registrationPoint | [Point](/develop/reference/scenegraph/#typedef-point) | Point in this node's local coordinate space to align with parentPoint       |
| parentPoint       | [Point](/develop/reference/scenegraph/#typedef-point) | Point in this node's parent's coordinate space to move registrationPoint to |

**Example**

```js
// Place this node's top-left corner at the centerpoint of its parent
let parentCenter = node.parent.localCenterPoint; // parent's center in parent's coordinates
let nodeBounds = node.localBounds; // node's bounds in its own local coordinates
let nodeTopLeft = { x: nodeBounds.x, y: nodeBounds.y }; // node's top left corner in its own local coordinates
node.placeInParentCoordinates(nodeTopLeft, parentCenter);
```

**Kind**: instance method of [SceneNode](#scenenode)

## placeInParentCoordinates3D()

▸ **placeInParentCoordinates3D**(`registrationPoint`, `parentPoint`)

**Since** XD 40

Move the node so the given point in its local coordinates is placed at the given point in its parent's coordinates (taking into account any rotation on this node, etc.).

If a 2D point is passed as parameter for either registrationPoint or parentPoint it will be treated as a 3D point with z = 0 (a point in node's plane).

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

| Param             | Type                  | Description                                                                          |
| ----------------- | --------------------- | ------------------------------------------------------------------------------------ |
| registrationPoint | [Point](/develop/reference/scenegraph/#typedef-point) | 2D or 3D point in this node's local coordinate space to align with parentPoint       |
| parentPoint       | [Point](/develop/reference/scenegraph/#typedef-point) | 2D or 3D point in this node's parent's coordinate space to move registrationPoint to |

**Example**

```js
// Place this node's top-left corner at the centerpoint of its parent, 100px deeper on Z axis
var parentCenter = node.parent.localCenterPoint;  // parent's center in parent's coordinates
var nodeBounds = node.localBounds;  // node's bounds in its own local coordinates
var nodeTopLeft = {x: nodeBounds.x, y: nodeBounds.y, z:100};  // node's top left corner in its own local coordinates
node.placeInParentCoordinates3D(nodeTopLeft, parentCenter);
```

**Kind**: instance method of [SceneNode](#scenenode)

## perspectiveCenterInParentCoordinates

▸ **perspectiveCenterInParentCoordinates**: [Point](/develop/reference/scenegraph/#typedef-point)

**Since** XD 40

The perspective center component of this node, in parent coordinates. It represents the point in canvas plane where the viewer eye is placed. The perspective center exists for the top level 3D transformed node in a hierarchy and it is null otherwise.

Example: Artboard1 contains a Group1 that contains a Group2 that contains Rectangle1 and Rectangle2. If Group1 is 2D, Group2 is 3D (e.g. rotated 30 deg on Y), Rectangle1 is 2D and Rectangle2 is 3D, the perspective center is set on Group2. For all the others elements the perspectiveCenterInParentCoordinates property is null.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**Kind**: instance property of [SceneNode](#scenenode)

## zDepth

▸ **zDepth**: `number`

**Since** XD 40

The zDepth component of this node's [transform](#transform). Since zDepth is applied after any rotation in the transform Matrix, zDepth occurs along the parent's Z axis, not the node's own local Z axis. This is equivalent to the `mz` field in the transform Matrix. zDepth is 0 for 2D nodes.

If portions of objects are placed at z greater than 800 (e.g. an unrotated shape with zDepth >= 800 or a 90 deg Y-rotated shape having width = 2000) rendering artifacts will appear.

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**:

- [moveZDepth](#movezdepth)
- [moveInParentCoordinates](#moveinparentcoordinates)
- [placeInParentCoordinates3D](#placeinparentcoordinates3d)
- [topLeftInParent](#topleftinparent)

**Kind**: instance property of [SceneNode](#scenenode)

## moveZDepth()

▸ **moveZDepth**(`deltaZ`)

**Since** XD 40

Move the node by the given number of pixels along the parent's Z axis (if this node has no 3D rotation, this is identical to moving the node along its own local Z axis).

| Param      | Type           |
| ---------- | ---------------|
| deltaZ     | `number`       |

For an overview of node positioning & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See**:
- [zDepth](#zdepth),
- [placeInParentCoordinates3D](#placeinparentcoordinates3d)
- [moveInParentCoordinates](#moveinparentcoordinates)

**Kind**: instance method of [SceneNode](#scenenode)

## rotateAround()

▸ **rotateAround**(`deltaAngle`, `rotationCenter`)

Rotate the node clockwise by the given number of degrees around the given point in the plugin's local coordinate space. If this node
already has nonzero rotation, this operation _adds_ to its existing angle.

| Param          | Type              | Description                                          |
| -------------- | ----------------- | ---------------------------------------------------- |
| deltaAngle     | `number`          | In degrees.                                          |
| rotationCenter | [Point](/develop/reference/scenegraph/#typedef-point) | Point to rotate around, in node's local coordinates. |

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**Example**

```js
// Rotate the node 45 degrees clockwise around its centerpoint
node.rotateAround(45, node.localCenterPoint);

// Ignoring the node's previous angle, set its rotation to exactly 180 degrees
let rotationDelta = 180 - node.rotation;
node.rotateAround(rotationDelta, node.localCenterPoint);
```

**See**: [rotation](#rotation)

**Kind**: instance method of [SceneNode](#scenenode)

## rotationX

▸ **rotationX**: `number`

**Since** XD 40

The rotation around X axis component of this node's [transform](#transform), in degrees. (A positive rotation on X means the upper side of the object is moving away from the viewer)

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See** [SceneNode](#rotatexaround)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## rotationY

▸ **rotationY**: `number`

**Since** XD 40

The rotation around Y axis component of this node's [SceneNode](#transform), in degrees. (A positive rotation on Y means the right side of the object is moving away from the viewer)

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See** [SceneNode](#rotateYAround)

**Kind**: instance property of [SceneNode](#scenenode)
**Read only**: true

## rotateXAround()

▸ **rotateXAround**(`deltaAngle`, `rotationCenter`)

**Since** XD 40

Rotate the node around X axis by the given number of degrees around the given point in the plugin's local coordinate space. If this node already has nonzero rotation on X axis, this operation _adds_ to its existing angle. The rotation around Z and the rotation around Y are left unmodified. The rotations around the 3D axes are applied in the following order: rotation around X axis is applied first, followed by rotation around Y and then rotation around Z (2D rotation)

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See** [rotationx](#rotationx)

| Param          | Type      | Description                                          |
| -------------- | --------- | ---------------------------------------------------- |
| deltaAngle     | `number`  | In degrees                                           |
| rotationCenter | [Point](/develop/reference/scenegraph/#typedef-point) | Point to rotate around, in node's local coordinates. |

**Example**

```js
// Rotate the node 30 degrees on X axis around its centerpoint
node.rotateXAround(30, node.localCenterPoint);

// Ignoring the node's previous angle, set its rotation to exactly 180 degrees on X axis
var rotationDelta = 180 - node.rotationX;
node.rotateXAround(rotationDelta, node.localCenterPoint);
```

**Kind**: instance method of [SceneNode](#scenenode)

## rotateYAround()

▸ **rotateYAround**(`deltaAngle`, `rotationCenter`)

**Since** XD 40

Rotate the node around Y axis by the given number of degrees around the given point in the plugin's local coordinate space. If this node already has nonzero rotation on Y axis, this operation _adds_ to its existing angle. The rotation around Z and the rotation around X are left unmodified. The rotations around the 3D axes are applied in the following order: rotation around X axis is applied first, followed by rotation around Y and then rotation around Z (2D rotation)

For an overview of node transforms & coordinate systems, see [Coordinate spaces](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/).

**See** [rotationy](#rotationy)

| Param          | Type      | Description                                          |
| -------------- | --------- | ---------------------------------------------------- |
| deltaAngle     | `number`  | In degrees                                           |
| rotationCenter | [Point](/develop/reference/scenegraph/#typedef-point) | Point to rotate around, in node's local coordinates. |

**Example**

```js
// Rotate the node 30 degrees on X axis around its centerpoint
node.rotateYAround(30, node.localCenterPoint);

// Ignoring the node's previous angle, set its rotation to exactly 180 degrees on Y axis
var rotationDelta = 180 - node.rotationY;
node.rotateYAround(rotationDelta, node.localCenterPoint);
```

**Kind**: instance method of [SceneNode](#scenenode)

## resize()

▸ **resize**(`width`, `height`)

Attempts to change `localBounds.width` & `height` to match the specified sizes. The result is not guaranteed to
match your requested size, since some nodes have limits on their ability to resize.

Note that _resizing_ is different from simply _rescaling_ the content:

- Styles like stroke weight and corner radius stay the same size, so the ratio of their size relative to the
  resized shape will change.
- If this node is a Group, resizing may invoke XD's Responsive Resize feature, which rearranges items using a
  fluid layout and may change only the _position_ (not size) of some children.
- Some content cannot be resized at all, or cannot stretch to change its aspect ratio.

Rescaling, by contrast, is the effect seen when you zoom in on the view in XD, or when you export a node at
a higher DPI multiplier.

_Note:_ Currenty this function does not respect the "aspect ratio lock" setting in XD's Properties panel. This
may be changed/fixed later.

| Param  | Type     |
| ------ | -------- |
| width  | `number` |
| height | `number` |

**Example**

```js
// Double the width of this node
let originalBounds = node.localBounds;
node.resize(originalBounds.width * 2, originalBounds.height);
```

**Kind**: instance method of [SceneNode](#scenenode)

## innerShadow

▸ **innerShadow**: [InnerShadow](/develop/reference/InnerShadow/)

**Since** XD 40

**Default**: `null`

The node's inner shadow, if any. If this property is null _or_ [innerShadow.visible](/develop/reference/InnerShadow) is false, no inner shadow is drawn. Artboard, Line and any container object like Group, ScrollableGroup, SymbolInstance and Repeat Grid don't support inner shadow.

To modify an existing inner shadow, always be sure to re-invoke the `innerShadow` setter rather than just changing the InnerShadow object's properties inline.See ["Properties with object values"](/develop/plugin-development/xd-concepts/properties-with-object-values/).

**Kind**: instance property of [SceneNode](#scenenode)
