# ScrollableGroup

**Since:** XD 30

**Kind**: class

**Extends**: [SceneNode](/develop/reference/SceneNode)

ScrollableGroup nodes are content that users can interactively scroll around. Content is viewed through a [viewport](#scrollablegroup-viewport),
with everything else clipped. If a ScrollableGroup is set to only scroll on one axis, on the other axis the viewport is
automatically sized to exactly fit the bounds of the content so nothing is clipped.

The scroll distance range is defined by a _scrollable area_ rectangle which is the union of the viewport and the bounds of all
the content. This can include some blank space, if the content is initially positioned not filling the entire viewport.

## scrollingType

▸ **scrollingType**: `string`

The type of scrolling: one of ScrollableGroup.VERTICAL, HORIZONTAL and PANNING.
PANNING enables scrolling on both axes.

**Kind**: instance property of [ScrollableGroup](#scrollablegroup)

## viewport

▸ **viewport**: `{viewportWidth: number, offsetX: number}` | `{viewportHeight: number, offsetY: number}` | `{viewportWidth: number, offsetX: number, viewportHeight: number, offsetY: number}`

The viewport is a rectangle whose bounds are defined explicitly on scrolling axes and fit automatically to the
content on non-scrolling axes:

- On a scrolling axis, the bounds are specified in [local coordinates](/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/)
  using the `viewport` values specified here.
- On a non-scrolling axis, the bounds are automatically calculated to exactly fit the content (just like the blue
  selection rectangle seen when you select a plain Group).

For example, if scrollingType == VERTICAL, the top of the viewport is `viewport.offsetY` in the ScrollableGroup's
local coordinates, the bottom of the viewport is `viewport.offsetY + viewport.viewportHeight` in local coordinates,
and horizontally there is no viewport clipping -- the entire current [localBounds](#scenenode-localbounds) range is visible. The
`viewport` object will only contain `offsetY` and `viewportHeight` properties in this case.

**Kind**: instance property of [ScrollableGroup](#scrollablegroup)

