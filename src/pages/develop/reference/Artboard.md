---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Artboard

**Kind**: class
**Extends**: [GraphicNode](/develop/reference/GraphicNode)

Artboard container node. All Artboards must be children of the root node (they cannot be nested), and they must be placed _below_ all
pasteboard content in the z order.

Artboards can have a background fill, but the stroke, shadow, and blur settings are all ignored. Artboards cannot be locked or hidden,
or have opacity < 100%.

Generally, all nodes that overlap an Artboard are children of that artboard, and nodes that don't overlap any Artboard are children
of the root (pasteboard). XD ensures this automatically: if a node is modified in any way that changes whether it overlaps an
Artboard, its parent will automatically be changed accordingly after the edit operation finishes.

## width

▸ **width**: `number` > 0

**Kind**: instance property of [Artboard](#Artboard)

## height

▸ **height**: `number` > 0

For scrollable Artboards, this is the total height encompassing all content - not just the viewport size (i.e. screen height).

**See**: [viewportHeight](#viewportheight)

**Kind**: instance property of [Artboard](#Artboard)

## viewportHeight

▸ **viewportHeight**: `?number`

If Artboard is scrollable, this is the height of the viewport (e.g. mobile device screen size). Null if Artboard isn't scrollable.

**See**: [height](#height)

**Kind**: instance property of [Artboard](#Artboard)

## incomingInteractions

▸ **incomingInteractions**: `Array<{ triggerNode: `[SceneNode](/develop/reference/SceneNode)`, interactions: Array<`[Interaction](/develop/reference/interactions/#typedef-interaction)`> }>`

**Since**: XD 19

Get all interactions whose destination is this artboard (either navigating the entire view, i.e. a `"goToArtboard"` action, or
showing this artboard as an overlay, i.e. an `"overlay"` action). Each element in the array is an [Interaction object](/develop/reference/interactions/#typedef-interaction)
which describes a gesture/event plus the action it produces.

May include interactions that are impossible to trigger because the trigger node (or one of its ancestors) has `visible` = false.

Note: currently, this API excludes any applicable keyboard/gamepad interactions.

**See**: [SceneNode.triggeredInteractions](/develop/reference/SceneNode/#triggeredinteractions)

**See**: [interactions.allInteractions](/develop/reference/interactions/#allinteractions)

**Kind**: instance property of [Artboard](#Artboard)
**Read only**: true

## isHomeArtboard

▸ **isHomeArtboard**: `boolean`

**Deprecated**: XD 33 - Please use [flows](/develop/reference/interactions/#flows) which supports multple flows.

**Since**: XD 19

True if this is the starting Artboard seen when the interactive prototype is launched.

**Since**: XD 32

In case there are multiple interactive prototype experiences (flows), implying multiple home artboards, this API returns true only for the top-left artboard among all of those home artboards.

**See**: [interactions.homeArtboard](/develop/reference/interactions/#homeartboard)

**Kind**: instance property of [Artboard](#Artboard)
**Read only**: true
