# Text

**Kind**: class

**Extends**: [GraphicNode](/develop/reference/GraphicNode)

Text leaf node shape. Text can have a fill and/or stroke, but only a solid-color fill is allowed (gradient or image
fill will be rejected).

There are three types of Text nodes:

- **Point Text** - Expands to fit the full width of the text content. Only uses multiple lines if the text content contains hard line
  breaks ("\n").
- **Area Text** - Fixed width and height. Text is automatically wrapped (soft line wrapping) to fit the width. If it does not fit the
  height, any remaining text is clipped.

**Since**: XD 34

- **Auto-height Text** - Fixed width. Text is automatically wrapped (soft line wrapping) to fit the width. The height is expanded to match all the text lines.

**Since**: XD 34

Use [layoutBox](#text-layoutbox) to determine the type of a text node.

**Deprecated**: XD 34

Check whether [areaBox](#text-areabox) is null to determine if the type of a Text node.

Text bounds and layout work differently depending on the type of text:

- Point Text - The baseline is at y=0 in the node's local coordinate system. Horizontally, local x=0 is the _anchor point_ that the
  text grows from / shrinks toward when edited. This anchor depends on the justification: for example, if the text is centered, x=0 is
  the horizontal centerpoint of the text. The bounding box leaves enough space for descenders, uppercase letters, and accent marks,
  even if the current string does not contain any of those characters. This makes aligning text based on its bounds behave more
  consistently.

- Area Text / Auto-height text - The baseline is at a positive y value in local coordinates, and its local (0, 0) is the top left of _anchor point_ the areaBox. Text always flows to the right and down from this local origin regardless of justification.

## text

▸ **text**: `string`

**Default**: `" "` (a single space character)

The plaintext content of the node, including any hard line breaks but excluding soft line wrap breaks.

Setting text does not change styleRanges, so styles aligned with the old text's string indices will continue to be applied to
the new string's indices unless you explicitly change styleRanges as well.

**Kind**: instance property of [Text](#text)

## styleRanges

▸ **styleRanges**: `Array<{length:number, fontFamily:string, fontStyle:string, fontSize:number, fill:`[Color](#Color)`, charSpacing:number, underline:boolean, strikethrough:boolean, textTransform:string, textScript:string}>`

Array of text ranges and their character style settings. Each range covers a set number of characters in the text content. Ranges
are contiguous, with each one starting immediately after the previous one. Any characters past the end of the last range use the
same style as the last range.

When _setting_ styleRanges, any fields missing from a given range default to the existing values from the _last_ range in the old
value of styleRanges. The styleRanges _getter_ always returns fully realized range objects with all fields specified.

**Kind**: instance property of [Text](#text)

## fontFamily

▸ **fontFamily**: `string`

**Since**: XD 14

Set the font family across all style ranges, or get the font family of the last style range (font family of all the text
if one range covers all the text). Plugins should not assume any particular default value for fontFamily.

**Kind**: instance property of [Text](#text)

## fontStyle

▸ **fontStyle**: `string`

**Default**: non-italic normal weight style
**Since**: XD 14

Set the font style across all style ranges, or get the font style of the last style range (font style of all the text
if one range covers all the text).

**Kind**: instance property of [Text](#text)

## fontSize

▸ **fontSize**: `number` > 0

**Since**: XD 14

Font size in document pixels. Set the font size across all style ranges, or get the font size of the last style range
(font size of all the text if one range covers all the text). Plugins should not assume any particular default value for
fontSize.

**Kind**: instance property of [Text](#text)

## fill

▸ **fill**: ?[Color](#Color)

**Default**: `null`

Set the text color across all style ranges, or get the color of the last style range (color of all the text if one range
covers all the text). Unlike most other nodes, text only allows a solid color fill - gradients and image fills are not
supported.

**Kind**: instance property of [Text](#text)

## charSpacing

▸ **charSpacing**: `number`

**Default**: `0`
**Since**: XD 14

Character spacing in increments of 1/1000th of the fontSize, in addition to the font's default character kerning. May be
negative.

Set the character spacing across all style ranges, or get the character spacing of the last style range (character
spacing of all the text if one range covers all the text).

**Kind**: instance property of [Text](#text)

## underline

▸ **underline**: `boolean`

**Default**: `false`
**Since**: XD 14

Set underline across all style ranges, or get the underline of the last style range (underline of all the text if one
range covers all the text).

**Kind**: instance property of [Text](#text)

## strikethrough

▸ **strikethrough**: `boolean`

**Default**: `false`
**Since**: XD 19

Set strikethrough across all style ranges, or get the strikethrough of the last style range (strikethrough of all the text if one
range covers all the text).

**Kind**: instance property of [Text](#text)

## textTransform

▸ **textTransform**: `string`

**Default**: `"none"`
**Since**: XD 19

Set textTransform ("none", "uppercase", "lowercase", or "titlecase") across all style ranges, or get the textTransform of the last style range.

**Kind**: instance property of [Text](#text)

## textScript

▸ **textScript**: `string`

**Default**: `"none"`
**Since**: XD 20

Set textScript ("none" or "superscript" or "subscript") across all style ranges, or get the textScript of the last style range.

**Kind**: instance property of [Text](#text)

## flipY

▸ **flipY**: `boolean`

If true, the text is drawn upside down.

**Kind**: instance property of [Text](#text)

## textAlign

▸ **textAlign**: `string`

**Default**: `ALIGN_LEFT`

Horizontal alignment: Text.ALIGN_LEFT, ALIGN_CENTER, or ALIGN_RIGHT. This setting affects the layout of multiline text, and for point
text it also affects how the text is positioned relative to its anchor point (x=0 in local coordinates) and what direction the text
grows when edited by the user.

Changing textAlign on existing point text will cause it to shift horizontally. To change textAlign while keeping the text in a fixed
position, shift the text horizontally (moving its anchor point) to compensate:

**Example**

```js
let originalBounds = textNode.localBounds;
textNode.textAlign = newAlignValue;
let newBounds = textNode.localBounds;
textNode.moveInParentCoordinates(originalBounds.x - newBounds.x, 0);
```

**Kind**: instance property of [Text](#text)

## lineSpacing

▸ **lineSpacing**: `number` > 0, or 0 for default spacing

**Default**: `0`

Distance between baselines in multiline text, in document pixels. The special value 0 causes XD to use the default line spacing
defined by the font given the current font size & style.

This property is not automatically adjusted when fontSize changes, if line spacing is not set to 0, the line spacing will stay
fixed while the font size changes, shifting the spacing's proportional relationship to font size. If the value is 0, then the
rendered line spacing will change to match the new font size, since 0 means the spacing is dynamically calculated from the current
font settings.

**Kind**: instance property of [Text](#text)

## paragraphSpacing

▸ **paragraphSpacing**: `number` >= 0

**Default**: `0`
**Since**: XD 14

Additional distance between paragraphs, in document pixels, added to the lineSpacing amount (soft line breaks in area text are
separated only by lineSpacing, while hard line breaks are separated by lineSpacing + paragraphSpacing). Unlike lineSpacing, 0
is not a special value; it just means no added spacing.

Similar to lineSpacing, this property is not automatically adjusted when fontSize changes. The paragraph spacing amount will stay
fixed while the font size changes, shifting the spacing's proportional relationship to font size.

**Kind**: instance property of [Text](#text)

## areaBox

▸ **areaBox**: `?{width:number, height:number}`

**Deprecated**: XD 34 - Please use [layoutBox](#text-layoutbox) which supports all text types.

Null for point text and starting with XD 34 null for auto height text.
For area text, specifies the size of the rectangle within which text is wrapped and clipped.

Changing point text to area text or vice versa will change the origin / anchor point of the text, thus changing its localBounds,
but it will also automatically change the node's transform so its globalBounds and boundsInParent origins remain unchanged.

Changing area text to point text will also automatically insert hard line breaks ("\n") into the text to match the previous line
wrapping's appearance exactly.

**Kind**: instance property of [Text](#text)

## layoutBox

▸ **layoutBox**: `{type:string, ?width:number, ?height:number}`

**Since**: XD 34

Type: Text.POINT (for point text also referred as auto width), FIXED_HEIGHT (for area text also referred as fixed size) or AUTO_HEIGHT (for the new auto height text)

Width: number between 0-999999. This is ignored and can be omitted for Text.POINT

Height: number between 0-999999. This is ignored and can be omitted for Text.POINT and Text.AUTO_HEIGHT

Changing POINT text to FIXED_HEIGHT or AUTO_HEIGHT text or vice versa will change the origin / anchor point of the text, thus changing its localBounds, but it will also automatically change the node's transform so its `globalBounds` and `boundsInParent` origins remain unchanged.

Changing FIXED_HEIGHT or AUTO_HEIGHT text to POINT text will automatically insert hard line break ("\n") into the text to match the previous line wrapping's appearance exactly.

Changing from FIXED_HEIGHT to AUTO_HEIGHT text will automatically change the height of the bounds to match the height of the total text (can be a no-op).

Changing from AUTO_HEIGHT to FIXED_HEIGHT text will not change the bounds, transform or origin (no-op).

**Kind**: instance property of [Text](#text)

## clippedByArea

▸ **clippedByArea**: `boolean`

Always false for point text and, starting with XD 34, false for auto height text.
For area text, true if the text does not fit in the content box and its bottom is being clipped.

**Kind**: instance property of [Text](#text)
**Read only**: true

