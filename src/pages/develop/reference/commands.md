# commands

You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same
commands as XD users have access to in the UI. Because structural changes have many nuanced rules and behaviors in XD, these calls
function more like automating the UI than like low-level APIs.

For example, these methods do not take arguments. Instead, set the [selection](/develop/reference/selection/) to the objects you want the command to target, then
invoke the command. Commands may also change the selection when run - for example, `group()` selects the newly created Group node.

**Example**

```js
let commands = require("commands");
selection.items = [shape1, shape2, maskShape];
commands.createMaskGroup();
console.log(selection.items); // [Group]
```

### commands.group()

Wraps the selected objects in a [Group](/develop/reference/scenegraph/#group), leaving the Group selected afterward. Equivalent to _Object >
Group_ in the UI.

**Kind**: static method of [`commands`](#module_commands)

**Example**

```js
let shape1 = new Rectangle();
// ...configure Rectangle size & appearance...
let label = new Text();
// ...configure Text content & appearance...

// Add both nodes to the current edit context first
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(label);

// Select both shapes, then run the group() command
selection.items = [shape1, label];
commands.group();
let group = selection.items[0]; // the new Group node is what's selected afterward
```

### commands.ungroup()

Ungroups any of the selected objects that are ungroupable containers (Group, SymbolInstance, RepeatGrid, etc.). Equivalent to
_Object > Ungroup_.

**Kind**: static method of [`commands`](#module_commands)

### commands.createMaskGroup()

Creates a masked [Group](/develop/reference/scenegraph/#group) from the selected objects, using the object that is highest in the z order as
the mask shape. The mask shape must be a leaf node or [Boolean Group](/develop/reference/scenegraph/#booleangroup). Equivalent to
_Object > Mask With Shape_.

**Kind**: static method of [`commands`](#module_commands)

**Example**

```js
let shape1 = new Rectangle(),
  shape2 = new Ellipse();
// ...configure shapes' size & appearance...
let maskShape = new Ellipse();
// ...configure mask shape's size...

// Create a Masked Group: add all nodes to the current edit context, select them, then run the createMaskGroup() command
selection.insertionParent.addChild(shape1);
selection.insertionParent.addChild(shape2);
selection.insertionParent.addChild(maskShape); // added last: topmost in z order
selection.items = [shape1, shape2, maskShape]; // order of selection array does not matter
commands.createMaskGroup();
let maskedGroup = selection.items[0];
```

### commands.convertToPath()

Converts each selected object to a [Path](/develop/reference/scenegraph/#path) with the exact same visual appearance. Only applies to leaf
nodes and [Boolean Groups](/develop/reference/scenegraph/#booleangroup). Equivalent to _Object > Path > Convert to Path_.

**Kind**: static method of [`commands`](#module_commands)

### commands.outlineStroke()

**Since**: XD 42

Converts each selected object's stroke to a [Path](/develop/reference/scenegraph/#path) with the exact same visual appearance.
Only applies to leaf nodes, [Groups](/develop/reference/scenegraph/#group) and [Boolean Groups](/develop/reference/scenegraph/#booleangroup).
Equivalent to _Object > Path > Outline Stroke_.

**Example**
```js
const commands = require("commands");

// Newly created shape nodes.
let shape1 = ...,
    shape2 = ...;

// Select both shapes, then run the Outline Stroke command.
selection.items = [shape1, shape2];
commands.outlineStroke();
console.log(selection.items);  // [shape1, outline1, shape2, outline2]
```

**Kind**: static method of [`commands`](#module_commands)

### commands.duplicate()

Duplicates all selected objects, leaving the duplicates selected afterward.

- If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top
  of the artboard z order.
- If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order
  (duplicates of a multiple selection will not be contiguous in the z order if the originals were not).

Interactions triggered from the selected objects are only duplicated if the user is currently in the Prototype workspace.
Equivalent to _Edit > Duplicate_.

**Kind**: static method of [`commands`](#module_commands)

### commands.bringToFront()

Brings selected objects to the front of the z order. Equivalent to _Object > Arrange > Bring to Front_.

**Kind**: static method of [`commands`](#module_commands)

### commands.bringForward()

Brings each selected object one step closer to the front of the z order. Equivalent to _Object > Arrange > Bring Forward_.

**Kind**: static method of [`commands`](#module_commands)

### commands.sendToBack()

Sends selected objects to the back of the z order. Equivalent to _Object > Arrange > Send to Back_.

**Kind**: static method of [`commands`](#module_commands)

### commands.sendBackward()

Sends each selected object one step closer to the back of the z order. Equivalent to _Object > Arrange > Send Backward_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignLeft()

Aligns all selected objects flush left. Equivalent to _Object > Align > Left_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignRight()

Aligns all selected objects flush right. Equivalent to _Object > Align > Right_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignHorizontalCenter()

Aligns all selected objects along their horizontal centerlines. Equivalent to _Object > Align > Center (Horizontally)_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignTop()

Aligns all selected objects flush top. Equivalent to _Object > Align > Top_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignBottom()

Aligns all selected objects flush bottom. Equivalent to _Object > Align > Bottom_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignVerticalCenter()

Aligns all selected objects along their vertical centerlines. Equivalent to _Object > Align > Center (Vertically)_.

**Kind**: static method of [`commands`](#module_commands)

### commands.distributeHorizontal()

Distributes all selected objects evenly along the X axis. Equivalent to _Object > Distribute > Horizontally_.

**Kind**: static method of [`commands`](#module_commands)

### commands.distributeVertical()

Distributes all selected objects evenly along the Y axis. Equivalent to _Object > Distribute > Vertically_.

**Kind**: static method of [`commands`](#module_commands)

### commands.alignToPixelGrid()

Shifts all selected objects and their content so they align crisply with the pixel grid. Equivalent to _Object > Align to
Pixel Grid_.

**Kind**: static method of [`commands`](#module_commands)

### commands.makeBackground()

Makes a stack background
Equivalent to _Object > Make Background_, which is available when selecting a single SceneNode that simultaneously meets the following conditions:
- is a stack cell
- is a valid background candidate
- belongs to a Stack that has no background
- the Stack contains at least two stack cells

For the example below, see [layout](/develop/reference/scenegraph/#scenenodelayout--layoutproperties) for examples of creating Stack without background.

**Example**
```js
const stack = ...;
// suppose this node is a Stack containing at least two stack cells
if (stack.layout.type === scenegraph.SceneNode.LAYOUT_STACK && stack.contentChildren.length > 1) {
    // assume the first stack cell is a valid background candidate
    const futureBackground = stack.contentChildren.at(0);

   // suppose the Stack has no background
   if (!stack.layout.padding.background) {
        console.log(stack.layout.padding.background); // prints `null`
        selection.items = [futureBackground];
        commands.makeBackground();
        console.log(stack.layout.padding.background.name); // prints the name of the "featureBackground" node
    }
}
```

**Kind**: static method of [`commands`](#module_commands)

### commands.replaceBackground()

Replaces a stack background
Equivalent to _Object > Replace Background_, which is available when selecting a single SceneNode that simultaneously meets the following conditions:
- is a stack cell
- is a valid background candidate
- belongs to a Stack that has a background, which is different from the selected stack cell
- the Stack contains at least two stack cells

For the example below, see [layout](/develop/reference/scenegraph/#SceneNode-layout) for examples of creating Stack without background.

**Example**
```js
const stack = ...;
// suppose this node is a Stack containing at least two stack cells
if (stack.layout.type === scenegraph.SceneNode.LAYOUT_STACK && stack.contentChildren.length > 1) {
    // assume the first stack cell is a valid background candidate
    const futureBackground = stack.contentChildren.at(0);

    // suppose the Stack contains a background, which is different from the selected one
    if (stack.layout.padding.background && featureBackground.guid !== stack.layout.padding.background.guid) {
        console.log(stack.layout.padding.background.name); // prints the name of the actual background node
        selection.items = [futureBackground];
        commands.replaceBackground();
        console.log(stack.layout.padding.background.name); // prints the name of the "featureBackground" node
    }
}
```

**Kind**: static method of [`commands`](#module_commands)
