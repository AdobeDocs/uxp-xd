---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Folder structure

When you have the right structure for your XD plugin, it will look like this:

```
my-plugin-folder
├── main.js
└── manifest.json
```

## Your plugin files

Within the parent folder, you'll need _at minimum_ two files, with these _exact_ names:

1.  `manifest.json` is your plugin’s manifest.


    This file is where you include _facts_ about your plugin, such as its name, the menu item(s) it adds to XD, and so on. [Learn about the manifest here](/develop/plugin-development/plugin-structure/manifest/).

1.  `main.js` is your plugin’s code.


    This file contains your JavaScript code that implements the logic for your plugin. [Learn more about `main.js` here](/develop/plugin-development/plugin-structure/handlers/).

These two files go into your plugin's parent directory.

The `manifest.json` and `main.js` files stored in your plugin's parent directory are the bare minimum requirement for your plugin to work, but it's possible to have more JavaScript files if you want. You can learn about including further JavaScript files in our [JavaScript concepts section on using `require`](/develop/plugin-development/javascript-and-xd/javascript-support/#can-i-use-require).
