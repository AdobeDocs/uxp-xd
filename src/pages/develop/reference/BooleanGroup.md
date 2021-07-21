# BooleanGroup

**Kind**: class
**Extends**: [GraphicNode](/develop/reference/GraphicNode)

BooleanGroup container node - although it has fill/stroke/etc. properties like a leaf shape node, it is a container
with children. Its visual appearance is determined by generating a path via a nondestructive boolean operation on all
its children's paths.

It is not currently possible for plugins to _create_ a new BooleanGroup node, aside from using [commands.duplicate()](/develop/reference/commands/#duplicate)
to clone existing BooleanGroups.

## pathOp

▸ **pathOp**: `string`

Which boolean operation is used to generate the path: BooleanGroup.PATH_OP_ADD, PATH_OP_SUBTRACT, PATH_OP_INTERSECT, or PATH_OP_EXCLUDE_OVERLAP.

**Kind**: instance property of [BooleanGroup](#booleangroup)
**Read only**: true

