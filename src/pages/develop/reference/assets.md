# assets

Represents the document styles listed in the Assets panel. Styles can be added and removed manually by the user, so
there's no guarantee that these styles are currently used anywhere in the document's content.

**Since**: XD 15

## Enums

<dl>
<dt><a name="GradientType"></a> GradientType : </dt><dd>LINEAR, RADIAL - Type of gradient color element: linear gradient or radial gradient</dd>
</dl>

## Typedefs

### Typedef ColorAsset

Assets library entry representing a solid color.

| Property | Type    | Description                                                                                                         |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| name     | ?string | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets). |
| color    | Color  | Color of the asset                                                                                                  |

### Typedef GradientAsset

Assets library entry representing a linear or radial gradient.

| Property     | Type                                   | Description                                                                                                                                                                                                                       |
| ------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name         | ?string                                | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets).                                                                                                               |
| gradientType | GradientType                           | Either `GradientType.LINEAR` or `GradientType.RADIAL`                                                                                                                                                                             |
| colorStops   | Array.< {stop: number, color: Color} > | Array of color stops used in the gradient, where `stop` >= 0 and <= 1, and the values are strictly increasing. Same format as the `colorStops` property of a [LinearGradient](/develop/reference/LinearGradient/) object. |

### Typedef CharacterStyleAsset

Assets library entry representing a set of text character styles.

| Property | Type            | Description                                                                                                         |
| -------- | --------------- | ------------------------------------------------------------------------------------------------------------------- |
| name     | ?string         | Name of the Assets entry, if it is explicitly named. (The UI shows an auto-generated label for any unnamed assets). |
| style    | CharacterStyle | Object containing the style properties                                                                              |

### Typedef CharacterStyle

Character style properties. See documentation for the [Text](/develop/reference/Text) node type for more details.

When creating a new character style, all properties are mandatory except those with default values specified here. When deleting
an existing character style, always pass the exact object returned by [characterStyles.get()](#characterstylesget) (with all properties fully
specified) to avoid any ambiguity.

| Property      | Type     | Description                                                                                |
| ------------- | -------- | ------------------------------------------------------------------------------------------ |
| fontFamily    | string   | the font family                                                                            |
| fontStyle     | string   | the style of the font                                                                      |
| fontSize      | number   | the size of the font                                                                       |
| fill          | Color    | the Color of the font fill                                                                 |
| charSpacing   | number   | the character spacing                                                                      |
| lineSpacing   | number   | the line spacing                                                                           |
| underline     | boolean  | whether underline is turned on                                                             |
| strikethrough | ?boolean | (**Since**: XD 19) Default false; whether strikethrough is turned on                       |
| textTransform | ?string  | (**Since**: XD 19) Default "none"; one of "none", "uppercase", "lowercase", or "titlecase" |
| textScript    | ?string  | (**Since**: XD 20) Default "none"; one of "none", "superscript", or "subscript"            |

## colors

▸ **colors**

The collection of colors and gradients saved in this document's Assets library.

- [.colors](#module_assets-colors)
  - [.get()](#colorsget): `Array.<ColorAsset|GradientAsset>`
  - [.add(colorAssets)](#colorsadd): `number`
  - [.delete(colorAssets)](#colorsdelete): `number`

---
### colors.get()

▸ **colors.get**(): `Array.<ColorAsset|GradientAsset>`

Get a list of all color/gradient assets, in the order they appear in the Assets panel.

The list may contain a mix of solid Color assets and/or gradient assets.
If there are no color/gradient assets, an empty array is returned.

**Example**

```js
var assets = require("assets"),
  allColors = assets.colors.get();
```

**Kind**: static method of [colors](#module_assets-colors)

---
### colors.add()

▸ **colors.add**(`colorAssets`): `number`

Add color/gradient assets to the collection.  Returns the number of assets added (may be less than requested if duplicates already exist).

The list may contain a mix of solid Color assets and/or gradient assets. Items are not added if a duplicate
color/gradient already exists in the collection, _regardless of its name_.

| Param       | Type                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| colorAssets | `Color` &#124; `ColorAsset` &#124; `LinearGradient` &#124; `RadialGradient` &#124; `GradientAsset` &#124; `Array.<Color` &#124; `ColorAsset` &#124; `LinearGradient` &#124; `RadialGradient` &#124; `GradientAsset`> |

**Example**

```js
var assets = require("assets"),
  redColor = new Color("red"),
  blueColor = new Color("blue"),
  stops = [
    { stop: 0, color: redColor },
    { stop: 1, color: blueColor },
  ],
  numAdded = assets.colors.add([
    redColor,
    { name: "True Blue", color: blueColor },
    {
      name: "Red Blue Gradient",
      gradientType: assets.GradientType.LINEAR,
      colorStops: stops,
    },
  ]);
```

**Kind**: static method of [colors](#module_assets-colors)

---
### colors.delete()

▸ **colors.delete**(`colorAssets`): `number`

Delete color/gradient assets from the collection.  Returns the number of assets deleted (may be less than requested if some didn't exist).

The list may contain a mix of solid Color assets and/or gradient assets. Assets with the same color/gradient are
removed _even if their names differ_. Assets that already don't exist in the collection are silently ignored.
Typically you will pass asset objects returned from [get()](#colorsget) directly to this function.

| Param       | Type                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| colorAssets | `Color` &#124; `ColorAsset` &#124; `LinearGradient` &#124; `RadialGradient` &#124; `GradientAsset` &#124; `Array.<Color` &#124; `ColorAsset` &#124; `LinearGradient` &#124; `RadialGradient` &#124; `GradientAsset`> |

**Example**

```js
var assets = require("assets"),
  numDeleted = assets.colors.delete(new Color("red"));
```

**Kind**: static method of [colors](#module_assets-colors)

## characterStyles

▸ **characterStyles**

The collection of character styles saved in this document's Assets library.

- [.characterStyles](#module_assets-characterStyles)
  - [.get()](#characterstylesget): `Array.<CharacterStyleAsset>`
  - [.add(charStyleAssets)](#characterstylesadd): `number`
  - [.delete(charStyleAssets)](#characterstylesdelete): `number`

---
### characterStyles.get()

▸ **characterStyles.get**(): `Array.<CharacterStyleAsset>`

Get a list of all character style assets, in the order they appear in the Assets panel.

If there are no character style assets, an empty array is returned.

**Example**

```js
var assets = require("assets"),
  allCharacterStyles = assets.characterStyles.get();
```

**Kind**: static method of [characterStyles](#module_assets-characterStyles)

---
### characterStyles.add()

▸ **characterStyles.add**(`charStyleAssets`): `number`

Add one or more character style assets to the collection.  Returns the number of assets added (may be less than requested if duplicates already exist).

Items are not added if a duplicate character style already exists in the collection, _regardless of its name_.
All character style properties must be fully specified (no properties are optional).

| Param           | Type                                                       |
| --------------- | ---------------------------------------------------------- |
| charStyleAssets | `CharacterStyleAsset` &#124; `Array.<CharacterStyleAsset>` |

**Example**

```js
var assets = require("assets"),
  arialItalic = {
    fontFamily: "Arial",
    fontStyle: "Italic",
    fontSize: 12,
    fill: new Color("black"),
    charSpacing: 0,
    lineSpacing: 0,
    underline: false,
    strikethrough: false,
    textTransform: "uppercase",
  },
  linkTextStyle = {
    fontFamily: "Arial",
    fontStyle: "Regular",
    fontSize: 12,
    fill: new Color("blue"),
    charSpacing: 0,
    lineSpacing: 0,
    underline: false,
    // (leaves optional strikethrough, textTransform, & textScript properties at default values)
  },
  numAdded = assets.characterStyles.add([
    { style: arialItalic }, // No name provided: uses default name
    { style: linkTextStyle, name: "Link Text" },
  ]);
```

**Kind**: static method of [characterStyles](#module_assets-characterStyles)

---
### characterStyles.delete()

▸ **characterStyles.delete**(`charStyleAssets`): `number`

Delete one or more character style assets from the collection.  Returns the number of assets deleted (may be less than requested if some didn't exist).

Assets with the same character style are removed _even if their names differ_. Assets that already don't exist in the
collection are silently ignored. All character style properties must be fully specified (no properties are optional).

To avoid ambiguity, pass the exact asset objects returned from [get()](#characterstylesget) directly
to this function.

| Param           | Type                                                       |
| --------------- | ---------------------------------------------------------- |
| charStyleAssets | `CharacterStyleAsset` &#124; `Array.<CharacterStyleAsset>` |

**Example**

```js
// Delete all character style assets from the assets panel
var assets = require("assets"),
  allCharacterStyles = assets.characterStyles.get(),
  numDeleted = assets.characterStyles.delete(allCharacterStyles);
```

**Kind**: static method of [characterStyles](#module_assets-characterStyles)
