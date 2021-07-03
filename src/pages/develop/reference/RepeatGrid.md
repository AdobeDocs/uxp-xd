# RepeatGrid

**Kind**: class

**Extends**: [SceneNode](/develop/reference/SceneNode)

Repeat Grid container node containing multiple grid cells, each one a child Group. Changes within one cell are automatically synced
to all the other cells - with certain exceptions, called "overrides." A Repeat Grid also defines a rectangular clipping mask which
determines how may cells are visible (new cells are automatically generated as needed if the Repeat Grid is resized larger).

Each grid cell is a Group that is an immediate child of the RepeatGrid. These groups are automatically created and destroyed as
needed when the RepeatGrid is resized.

It is not currently possible for plugins to _create_ a new RepeatGrid node, aside from using [commands.duplicate](/develop/reference/commands/#duplicate)
to clone existing RepeatGrids.

## width

▸ **width**: `number`

Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped.

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## height

▸ **height**: `number`

Defines size of the RepeatGrid. Cells are created and destroyed as necessary to fill the current size. Cells that only partially fit will be clipped.

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## numColumns

▸ **numColumns**: `number`

Number of grid columns

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## numRows

▸ **numRows**: `number`

Number of grid rows

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## paddingX

▸ **paddingX**: `number`

Horizontal spacing between grid cells/columns

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## paddingY

▸ **paddingY**: `number`

Vertical spacing between grid cells/rows

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## cellSize

▸ **cellSize**: `{width: number, height: number}`

The size of each grid cell. The size of each cell's content can vary slightly due to text overrides; the cell size is always set to the width of the widest cell content and the height of the tallest cell content.

**Kind**: instance property of [RepeatGrid](#repeatgrid)

## attachTextDataSeries()

▸ **attachTextDataSeries**(textNode, textValues)

Attach a sequence of text values to the instances of a given text node across all the cells of a Repeat Grid. The sequence is
repeated as necessary to cover all the grid cells. This is a persistent data binding, so if the Repeat Grid is resized _later_
to increase the number of grid cells, items from this sequence will be used to fill the text values of the new cells.

You can call this API from either of _two different edit contexts_:

- Edit context where the RepeatGrid node is in scope (where properties of the RepeatGrid node itself could be edited) - e.g.
  when the RepeatGrid is selected
- Edit context where textNode is in scope (where properties of the textNode could be edited) - e.g. when textNode is selected
  or when the user has otherwise drilled down into the grid cell containing it.

| Param      | Type            | Description                                                                                                                                                                                                                         |
| ---------- | ----------------| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| textNode   | `Text`          | A Text node exemplar that would be in scope for editing if the current edit context was one of this RepeatGrid's cells. The data series will be bound to this text node and all corresponding copies of it in the other grid cells. |
| textValues | `Array<string>` | Array of one or more strings. Empty strings are ignored.                                                                                                                                                                            |

**Kind**: instance method of [RepeatGrid](#repeatgrid)

## attachImageDataSeries()

▸ **attachImageDataSeries**(shapeNode, images)

Attach a sequence of image fills to the instances of a given shape node across all the cells of a Repeat Grid. The sequence is
repeated as necessary to cover all the grid cells. This is a persistent data binding, so if the Repeat Grid is resized _later_
to increase the number of grid cells, items from this sequence will be used to set the image fill in the new cells.

You can call this API from either of _two different edit contexts_:

- Edit context where the RepeatGrid node is in scope (where properties of the RepeatGrid node itself could be edited) - e.g.
  when the RepeatGrid is selected
- Edit context where shapeNode is in scope (where properties of the shapeNode could be edited) - e.g. when shapeNode is selected
  or when the user has otherwise drilled down into the grid cell containing it.

| Param     | Type               | Description                                                                                                                                                                                                                                                                                                            |
| --------- | -------------------| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shapeNode | `GraphicNode`      | A shape node exemplar that would be in scope for editing if the current edit context was one of this RepeatGrid's cells. The image series will be bound to this node and all corresponding copies of it in the other grid cells. Must be a node type that supports image fills (e.g. Rectangle, but not Text or Line). |
| images    | `Array<ImageFill>` | Array of one or more ImageFills.                                                                                                                                                                                                                                                                                       |

**Kind**: instance method of [RepeatGrid](#repeatgrid)