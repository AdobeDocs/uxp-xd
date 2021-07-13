# Line

**Kind**: class
**Extends**: [GraphicNode](/develop/reference/GraphicNode)

Line leaf node shape. Lines have a stroke but no fill.

## start

▸ **start**: [Point](/develop/reference/scenegraph/#typedef-point)

Start point of the Line in local coordinate space. To change the start point, use [setStartEnd](#setstartend).

**Kind**: instance property of [Line](#line)
**Read only**: true

## end

▸ **end**: [Point](/develop/reference/scenegraph/#typedef-point)

Endpoint of the Line in local coordinate space. To change the endpoint, use [setStartEnd](#setstartend).

**Kind**: instance property of [Line](#line)
**Read only**: true

## setStartEnd()

▸ **setStartEnd**(`startX`, `startY`, `endX`, `endY`)

Set the start and end points of the Line in local coordinate space. The values may be normalized by this setter, shifting the node's
translation and counter-shifting the start/end points. So the start/end getters may return values different from the values you
passed this setter, even though the line's visual bounds and appearance are the same.

| Param  | Type     |
| ------ | -------- |
| startX | `number` |
| startY | `number` |
| endX   | `number` |
| endY   | `number` |

**Kind**: instance method of [Line](#line)
