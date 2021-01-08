# ImageFill

**Kind**: class

ImageFill represents a bitmap (raster) image that can be used as the `fill` property of any shape node (but not Artboards).
The supported image encodings are: PNG, JPEG, and GIF.

**Example**

```js
// User picks an image file
const storage = require("uxp").storage;
const fs = storage.localFileSystem;
let imageFile = await fs.getFileForOpening({ types: storage.fileTypes.images });

// Create ImageFill for this image
const ImageFill = require("scenegraph").ImageFill;
let fill = new ImageFill(imageFile);

// Set fill of first selected item
selection.items[0].fill = fill;
```

## ImageFill()

| Param         | Type                            | Description                                                                                               |
| ------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------- |
| fileOrDataURI | `!uxp.storage.File` or `string` | File object pointing to an image file; or a string containing a `data:` URI with a base-64 encoded image. |

### imageFill.clone() ⇒ `!ImageFill`

Returns a new copy of this ImageFill.

**Kind**: instance method of [`ImageFill`](#ImageFill)
**Returns**: `!ImageFill`

### _imageFill.assetId : `string`_

**Since**: XD 29

A unique identifier for the image asset used by this ImageFill. May be shared by other ImageFills, including those with different cropping, size,
rotation, or mirroring. If identical images are imported into XD from separate sources, they may have different `assetId`s however.

**Kind**: instance property of [`ImageFill`](#ImageFill)

### _imageFill.scaleBehavior : `string`_

**Default**: `SCALE_COVER`

How the image is scaled when the aspect ratio of the shape does not match the aspect ratio of the image:

- ImageFill.SCALE_COVER - The image's aspect ratio is preserved and it is scaled to completely cover the area of the shape. This means on one axis the
  image's edges line up exactly with the edges of the shape, and on the other axis the image extends beyond the shape's bounds and is cropped. (Similar
  to `object-fit: cover` in CSS).
- ImageFill.SCALE_STRETCH - The image is stretched (distorting its aspect ratio) so its edges line up exactly with the edges of the shape. (Similar to
  `object-fit: fill` in CSS).

Image size and scaling are also affected by _cropping settings_, but these are not yet exposed to plugins.

**Kind**: instance property of [`ImageFill`](#ImageFill)

### _imageFill.naturalWidth : `number`_

Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [`ImageFill`](#ImageFill)
**Read only**: true

### _imageFill.naturalHeight : `number`_

Pixel dimensions of the underlying bitmap image data.

**Kind**: instance property of [`ImageFill`](#ImageFill)
**Read only**: true

### _imageFill.mimeType : `string`_

Format the image data was originally encoded in, such as `image/gif` or `image/jpeg`.

**Kind**: instance property of [`ImageFill`](#ImageFill)
**Read only**: true

### _imageFill.isLinkedContent : `boolean`_

True if the image comes from a link to an external resource, such as Creative Cloud Libraries.

**Kind**: instance property of [`ImageFill`](#ImageFill)
**Read only**: true
