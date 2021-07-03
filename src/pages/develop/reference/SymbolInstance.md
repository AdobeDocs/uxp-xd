# SymbolInstance

**Kind**: class

**Extends**: [SceneNode](/develop/reference/SceneNode)

Container node representing one instance of a Component (previously known as "Symbols" in XD's UI). Changes made to the contents of a
SymbolInstance are treated in one of two ways:

- If [isMaster](#symbolinstance-ismaster) is **false**: The changes affect _only_ this one instance. This creates an "override":
  changes made to the corresponding part of the master later will no longer get synced to this particular instance.
- If [isMaster](#symbolinstance-ismaster) is **true**: The changes are automatically synced to all other other instances of the
  component - _except_ for instances where the affected nodes have instance-specific overrides. As a result, your plugin's batch
  of edits **may not be applied atomically** in some instances.

To elaborate: if your plugin command makes edits to more than one property or more than one node as part of a single gesture, and the
user invokes your plugin while editing a component master, other instances of the component may receive only a _partial application_
of your plugin's changes. In many cases this will feel like a natural consequence of the overrides the user has created, but if this
partial application of your plugin's intended changes feels too confusing in your use case, you may opt to warn users or disable some
of your plugin's functionality when `selection.editContext` is (or is inside of) a component with `isMaster` true.

Note that overrides vary somewhat in granularity. In some but not all cases, overriding one property may also prevent other properties
on the same node from receiving future updates from the master instance.

It is not currently possible for plugins to _create_ a new component definition or a new SymbolInstance node, aside from using
[commands.duplicate](/develop/reference/commands/#module_commands-duplicate) to clone existing SymbolInstances.

## symbolId

▸ **symbolId**: `string`

An identifier unique within this document that is shared by all instances of the same component.

**Kind**: instance property of [SymbolInstance](#symbolinstance)
**Read only**: true

## isMaster

▸ **isMaster**: `boolean`

True if this is the "master" instance of the component, which forms the template for all new instances. When the user edits the master,
those changes are synced to all other instances of the component (unless blocked by "overrides" -- [see discussion above](#symbolinstance)).

**Kind**: instance property of [SymbolInstance](#symbolinstance)
**Read only**: true
