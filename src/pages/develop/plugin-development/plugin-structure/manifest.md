# The manifest.json file (v4)

The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest.

The manifest is located in your plugin's root folder and must be named `manifest.json`.

> **Note**
>
> There are _two_ versions of the manifest that you can use. Version 3 is described [here](../manifest-v3/). Note that while version 3 is still acceptable for now, it will be deprecated in the future.

## Example manifest

```json
{
  "manifestVersion": 4,
  "id": "YOUR_ID_HERE",
  "name": "Name of Your Plugin",
  "version": "0.0.1",
  "main": "main.js",
  "host": {
    "app": "XD",
    "minVersion": "36.0.0"
  },
  "entrypoints": [
    {
      "type": "command",
      "id": "commandFn",
      "label": { "default": "Show A Dialog" }
    },
    {
      "type": "panel",
      "id": "panelName",
      "label": { "default": "Panel Name" }
    }
  ],
  "icons": [
    { "width": 48, "height": 48, "path": "icons/plugin.png", 
      "scale": [ 1, 2 ], "theme": [ "all" ], "species": [ "pluginList" ] }
  ]
}
```

See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below.

## Top-level metadata

The top level of the manifest JSON object contains high-level information about your plugin.

> **Info**
>
> Here are the definitions of the keywords in the "Required" column:
>
> - Develop - required field for XD to run the plugin. If excluded, XD won't load the plugin
> - Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager

| Key path          | Type                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                        | Required          |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `manifestVersion` | `number` | The version of the manifest. For new XD plugins, this should be `4` or higher. Version `3` is allowed, but will be deprecated. | Develop / Publish |
| `id`              | `string`                                              | Unique identifier for your plugin. You can get your unique ID on the [Adobe Developer Console](https://console.adobe.io/projects).                                                                                                                                                                                                                                                                                 | Develop / Publish |
| `name`            | `string`                                              | The name should be 3 - 45 characters. <br/> **Note:** We recommend your plugin name matches the _project name_ you created when getting your plugin ID from the Adobe Developer Console.                                                                                                                                                                                                                           | Develop / Publish |
| `version`         | `string`                                              | Version number of your plugin in `x.y.z` format. <br/>Version must be three segments and each version component must be between `0` and `99`.                                                                                                                                                                                                                                                                      | Develop / Publish |
| `main`   | `string` | Path to the your plugin initialization code. This can be a JavaScript file or an HTML file. | Optional (defaults to `main.js`) |
| `icons`           | `array<IconDefinition>`                                       | Icons displayed in XD's plugins panel. <br/> PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. <br/> Two sizes are required - 24px and 48px. <br/> **Note:** Icons for XD's Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our ["Publishing your plugin" guide](/distribution/packaging-your-plugin/) to learn more. | Publish           |
| `host`            | `array<HostDefinition>`                                       | Describes the supported applications that can be used with this plugin. This can include the type of application, the minimum required version, or the maximum version of the host app that the plugin supports.  | Develop / Publish |
| `entryPoints` | `array<EntryPointDefinition>`| Describes the entries your plugin adds to the _Plugins_ menu & plugin panel. See the next section for details. | Develop / Publish |

## Icons

Icons are not required during development, but *must be provided* when distributing through the Plugin Marketplace.
The `icons` field is an array of a `IconDefinition`s.

### IconDefinition

Key | Type | Description
----|------|----------------
`width` | `number` | Width in logical pixels. For XD, use `24` or `48`.
`height` | `number` | Height in logical pixels. For XD, use `24` or `48`.
`path` | `string` | Path to the icon (relative to the plugin root)
`scale` | `number[]` | Array of scales provided. For example, `[1, 2]` means that there is a `@1x` and `@2x` version of the icon specified at the `path`. (Densities can be specified by adding `@1x` or `@2x` before the icon's extension. Note that the _filename_ in the _path_ key does not include a density specifier.)
`theme` | `string[]` | Array of themes this icon supports. XD doesn't yet support themes, so you can remove this key, or you can use `all`. (Default is `all`).
`species` | `string[]` | Identifies the type of icon and where it would make sense to display it. The default is `generic`, meaning that XD is free to use this icon anywhere. For XD panels, you should generally use `pluginList` -- this tells XD that the icon is suitable for display in the Plugins Panel.

## Hosts

The `host` field is an _array_ of objects matching the `HostDefinition` format specified below. These entries allow your plugin to be ran on multiple apps such as Adobe XD or Photoshop. Optionally, the field can contain a HostDefinition instead of a full array if only one type of app is being supported.

### HostDefinition

Key | Type | Description | Required
----|------|-------------| --------
`app` | `string` | Indicates that this is a plugin for Adobe XD (currently, the only valid values here are `"XD"` and `"PS"`). | Develop / Publish
`minVersion` | `string` | Minimum required version of the host app (in `x.y` format) that can run this plugin. The lowest valid version for manifest V4 plugins is version `36.0`. <br/> **Note:** The version number must be at least two segments. Typically, you'll leave the minor segment set to `0`, e.g. `16.0`. | Develop / Publish
`maxVersion` | `string` | Maximum version of host app that can run this plugin. Same formatting as `host.minVersion`. | Optional

## Entry Points

The `entryPoints` field is an _array_ of objects matching the `EntryPointDefinition` format specified below. These entries appear both in the _Plugins_ menu in the native menubar, and the "plugin launchpad" sidebar panel. See [Plugin menu structure](/develop/plugin-development/plugin-structure/menu-structure/) for details on how these entries are displayed.

Each entry point specifies a `type`, to create either a direct-action command or a panel show/hide command.

### EntryPointDefinition

Key | Type | Description
----|------|------------
`type` | `string` | Entry point type: either `"command"` or `"panel"`.
`id`   | `string` | Unique identifier for the entry point. This `id` will also be mapped to entrypoints defined in your plugin code.
`label` | `string` | Label for this menu item that the user will select to run your plugin. May be a single string _or_ a dictionary of localized strings. <br/><br/>Note: _If you only have 1 `commandId` or `panelId`_, the `label` value **must match** the manifest's `name` value. Additionally, the "Public plugin name" you submit via the Adobe Developer Console must match the manifest's `name` and `label` values.                                                                                                                 
`shortcut` | `Object` | _Optional._ <br/><br/> Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details. Only valid for `command` entry points.

### Keyboard shortcuts

**Example:** `"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }`

Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:

- One or more modifier keys, in any order, each one followed by `"+"`

  - _Mac:_ modifiers may be `Cmd`, `Ctrl`, `Opt` / `Alt`, or `Shift`. Shortcut _must_ contain at least one of `Cmd` or `Ctrl`.
  - _Win:_ modifiers may be `Ctrl`, `Alt`, or `Shift`. Shortcut _must_ contain `Ctrl`.

- A letter or number key.
  - Letters are case-insensitive (e.g. `"Cmd+P"` and `"Cmd+p"` mean the same thing and neither requires pressing Shift).
  - Other keys (including punctuation, arrow keys, or F1-F12) are currently _not supported_.

> **Info**
> If your shortcut collides with a built-in XD command _or_ another plugin's shortcut, your shortcut will be ignored and you'll see a warning printed to the [developer console](/develop/tutorials/debugging/#1-look-for-errors-in-the-developer-console).

## Menu Localization

Plugin menu item labels or panel labels can be localized to match XD's current UI language setting. Other manifest fields such as `name` _cannot be localized yet._

Localized labels are represented as an object containing multiple translations, instead of a single string value:

```json
"label": {
    "default": "Menu Label",
    "fr": "Etiquette de Menu",
    "de": "Menübezeichnung"
}
```

A default string is always required. The language must be a two-letter code from [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), _not_ a hyphenated code such as `en-US`. To avoid inconsistency with the rest of XD's built-in menu items, languages that aren't supported by XD are ignored.

> **Info**
> You can also localize strings that appear in your plugin's own dialog UI, by choosing which strings to use in your UI based on the value of [application.appLanguage](/develop/reference/application/#module_application-appLanguage).
