"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[6321],{89164:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return r},default:function(){return u}});var a=t(87462),d=t(63366),i=(t(15007),t(64983)),l=t(91515),m=["components"],r={},o={_frontmatter:r},p=l.Z;function u(e){var n=e.components,t=(0,d.Z)(e,m);return(0,i.mdx)(p,(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"the-manifestjson-file-v3"},"The manifest.json file (v3)"),(0,i.mdx)("p",null,"The manifest is where you include metadata about your plugin. Simply put, the manifest is a list of facts about your plugin in the form of a JSON object. No executable code goes into your manifest."),(0,i.mdx)("p",null,"The manifest is located in your plugin's root folder and must be named ",(0,i.mdx)("inlineCode",{parentName:"p"},"manifest.json"),"."),(0,i.mdx)("h2",{id:"example-manifest"},"Example manifest"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "YOUR_ID_HERE",\n  "name": "Name of Your Plugin",\n  "version": "0.0.1",\n  "icons": [\n    { "width": 24, "height": 24, "path": "images/icon@1x.png" },\n    { "width": 48, "height": 48, "path": "images/icon@2x.png" }\n  ],\n  "host": {\n    "app": "XD",\n    "minVersion": "21.0"\n  },\n\n  "uiEntryPoints": [\n    {\n      "type": "menu",\n      "label": "Hello World Command",\n      "commandId": "helloCommand"\n    },\n    {\n      "type": "panel",\n      "label": "Hello World Panel",\n      "panelId": "helloPanel"\n    }\n  ]\n}\n')),(0,i.mdx)("p",null,"See the sections below to learn more about each key/value field. All fields are required unless otherwise noted below."),(0,i.mdx)("h2",{id:"top-level-metadata"},"Top-level metadata"),(0,i.mdx)("p",null,"The top level of the manifest JSON object contains high-level information about your plugin."),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("strong",{parentName:"p"},"Info"),'\nHere are the definitions of the keywords in the "Required" column:'),(0,i.mdx)("ul",{parentName:"blockquote"},(0,i.mdx)("li",{parentName:"ul"},"Develop - required field for XD to run the plugin. If excluded, XD won't load the plugin"),(0,i.mdx)("li",{parentName:"ul"},"Publish - required field for plugins to be submitted in the Adobe Developer Console and published in the Plugin Manager"))),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key path"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"),(0,i.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"id")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Unique identifier for your plugin. You can get your unique ID on the ",(0,i.mdx)("a",{parentName:"td",href:"https://console.adobe.io/projects"},"Adobe Developer Console"),"."),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"name")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"The name should be 3 - 45 characters. ",(0,i.mdx)("br",null)," ",(0,i.mdx)("strong",{parentName:"td"},"Note:")," We recommend your plugin name matches the ",(0,i.mdx)("em",{parentName:"td"},"project name")," you created when getting your plugin ID from the Adobe Developer Console."),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"version")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Version number of your plugin in ",(0,i.mdx)("inlineCode",{parentName:"td"},"x.y.z")," format. ",(0,i.mdx)("br",null),"Version must be three segments and each version component must be between ",(0,i.mdx)("inlineCode",{parentName:"td"},"0")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"99"),"."),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"icons")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"array<object>")),(0,i.mdx)("td",{parentName:"tr",align:null},"Icons displayed in XD's plugins panel. ",(0,i.mdx)("br",null)," PNG, JPG/JPEG formats are supported and the max file size for each icon is 1MB. ",(0,i.mdx)("br",null)," Two sizes are required - ",(0,i.mdx)("inlineCode",{parentName:"td"},"[24, 48]"),". ",(0,i.mdx)("br",null)," ",(0,i.mdx)("strong",{parentName:"td"},"Note:")," Icons for XD's Plugin Manager are uploaded directly via the Adobe Developer Console, not included within your plugin itself. See our ",(0,i.mdx)("a",{parentName:"td",href:"/uxp-xd/distribution/packaging-your-plugin/"},'"Publishing your plugin" guide')," to learn more."),(0,i.mdx)("td",{parentName:"tr",align:null},"Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"host.app")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Indicates that this is a plugin for Adobe XD (currently, the only valid value here is ",(0,i.mdx)("inlineCode",{parentName:"td"},'"XD"'),")."),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"host.minVersion")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Minimum required version of the host app (in ",(0,i.mdx)("inlineCode",{parentName:"td"},"x.y")," format) that can run this plugin. The lowest valid version for headless and modal plugins is ",(0,i.mdx)("inlineCode",{parentName:"td"},"13.0"),". The lowest valid version for panel plugins is ",(0,i.mdx)("inlineCode",{parentName:"td"},"21.0"),". ",(0,i.mdx)("br",null)," ",(0,i.mdx)("strong",{parentName:"td"},"Note:")," The version number must be two segments. Typically, you'll leave the minor segment set to ",(0,i.mdx)("inlineCode",{parentName:"td"},"0"),", e.g. ",(0,i.mdx)("inlineCode",{parentName:"td"},"16.0"),"."),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"host.maxVersion")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Maximum version of host app that can run this plugin. Same formatting as ",(0,i.mdx)("inlineCode",{parentName:"td"},"host.minVersion"),"."),(0,i.mdx)("td",{parentName:"tr",align:null},"Optional")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"uiEntryPoints")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"array<[MenuItemDefinition](#MenuItemDefinition)&gt;")),(0,i.mdx)("td",{parentName:"tr",align:null},"Describes the entries your plugin adds to the ",(0,i.mdx)("em",{parentName:"td"},"Plugins"),' menu & "plugin launchpad" sidebar in XD. See the next section for details.'),(0,i.mdx)("td",{parentName:"tr",align:null},"Develop / Publish")))),(0,i.mdx)("h2",{id:"ui-entry-points"},"UI entry points"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"uiEntryPoints")," field is an ",(0,i.mdx)("em",{parentName:"p"},"array")," of objects matching the MenuItemDefinition format specified below. These entries appear both in the ",(0,i.mdx)("em",{parentName:"p"},"Plugins"),' menu in the native menubar, and the "plugin launchpad" sidebar panel. See ',(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/menu-structure/"},"Plugin menu structure")," for details on how these entries are displayed."),(0,i.mdx)("p",null,"Each entry point specifies either ",(0,i.mdx)("inlineCode",{parentName:"p"},"commandId")," ",(0,i.mdx)("em",{parentName:"p"},"or")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"panelId"),", to create either a direct-action command or a panel show/hide command."),(0,i.mdx)("h3",{id:"menuitemdefinition"},"MenuItemDefinition"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"type")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Entry point type: either ",(0,i.mdx)("inlineCode",{parentName:"td"},'"menu"')," or ",(0,i.mdx)("inlineCode",{parentName:"td"},'"panel"'),".")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"label")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"?string")," or ",(0,i.mdx)("inlineCode",{parentName:"td"},"[LocaleMap](#menu-localization)")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"Required")," if multiple ",(0,i.mdx)("inlineCode",{parentName:"td"},"MenuItemDefinition")," objects defined; ",(0,i.mdx)("em",{parentName:"td"},"ignored")," if only one defined.",(0,i.mdx)("br",null),(0,i.mdx)("br",null)," Label for this menu item that the user will select to run your plugin. May be a single string ",(0,i.mdx)("em",{parentName:"td"},"or")," a dictionary of localized strings.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"Note: ",(0,i.mdx)("em",{parentName:"td"},"If you only have 1 ",(0,i.mdx)("inlineCode",{parentName:"em"},"commandId")," or ",(0,i.mdx)("inlineCode",{parentName:"em"},"panelId")),", the ",(0,i.mdx)("inlineCode",{parentName:"td"},"label")," value ",(0,i.mdx)("strong",{parentName:"td"},"must match")," the manifest's ",(0,i.mdx)("inlineCode",{parentName:"td"},"name"),' value. Additionally, the "Public plugin name" you submit via the Adobe Developer Console must match the manifest\'s ',(0,i.mdx)("inlineCode",{parentName:"td"},"name")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"label")," values.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"commandId")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Specify ",(0,i.mdx)("inlineCode",{parentName:"td"},"commandId")," to create a menu item that runs plugin code directly -- either a headless command, or a command with modal dialog UI. This identifier links the menu item to a ",(0,i.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#command"},(0,i.mdx)("em",{parentName:"a"},"handler function"))," in your plugin's JavaScript code. This identifier needs to be unique within your plugin.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"Note: Don't specify ",(0,i.mdx)("inlineCode",{parentName:"td"},"commandId")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"panelId")," at the same time.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"panelId")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"string")),(0,i.mdx)("td",{parentName:"tr",align:null},"Specify ",(0,i.mdx)("inlineCode",{parentName:"td"},"panelId")," to create a menu item that opens panel UI for your plugin. This identifier links the menu item to a ",(0,i.mdx)("a",{parentName:"td",href:"/uxp-xd/develop/plugin-development/plugin-structure/handlers/#panel"},(0,i.mdx)("em",{parentName:"a"},"panel definition object"))," in your plugin's JavaScript code. This identifier needs to be unique within your plugin.",(0,i.mdx)("br",null),(0,i.mdx)("br",null),"Note: Don't specify ",(0,i.mdx)("inlineCode",{parentName:"td"},"commandId")," and ",(0,i.mdx)("inlineCode",{parentName:"td"},"panelId")," at the same time.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"shortcut")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"Object")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"Optional."),' Object defining Mac and Windows keyboard shortcuts for this menu item. See "Keyboard shortcuts" below for details.')))),(0,i.mdx)("h3",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example:")," ",(0,i.mdx)("inlineCode",{parentName:"p"},'"shortcut": { "mac": "Cmd+Shift+P", "win": "Ctrl+Shift+P" }')),(0,i.mdx)("p",null,"Keyboard shortcuts are defined separately for each platform. Each definition is a string that follows this syntax:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"One or more modifier keys, in any order, each one followed by ",(0,i.mdx)("inlineCode",{parentName:"p"},'"+"')),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"Mac:")," modifiers may be ",(0,i.mdx)("inlineCode",{parentName:"li"},"Cmd"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"Ctrl"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"Opt")," / ",(0,i.mdx)("inlineCode",{parentName:"li"},"Alt"),", or ",(0,i.mdx)("inlineCode",{parentName:"li"},"Shift"),". Shortcut ",(0,i.mdx)("em",{parentName:"li"},"must")," contain at least one of ",(0,i.mdx)("inlineCode",{parentName:"li"},"Cmd")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"Ctrl"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("em",{parentName:"li"},"Win:")," modifiers may be ",(0,i.mdx)("inlineCode",{parentName:"li"},"Ctrl"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"Alt"),", or ",(0,i.mdx)("inlineCode",{parentName:"li"},"Shift"),". Shortcut ",(0,i.mdx)("em",{parentName:"li"},"must")," contain ",(0,i.mdx)("inlineCode",{parentName:"li"},"Ctrl"),"."))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A letter or number key."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Letters are case-insensitive (e.g. ",(0,i.mdx)("inlineCode",{parentName:"li"},'"Cmd+P"')," and ",(0,i.mdx)("inlineCode",{parentName:"li"},'"Cmd+p"')," mean the same thing and neither requires pressing Shift)."),(0,i.mdx)("li",{parentName:"ul"},"Other keys (including punctuation, arrow keys, or F1-F12) are currently ",(0,i.mdx)("em",{parentName:"li"},"not supported"),".")))),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("strong",{parentName:"p"},"Info"),"\nIf your shortcut collides with a built-in XD command ",(0,i.mdx)("em",{parentName:"p"},"or")," another plugin's shortcut, your shortcut will be ignored and you'll see a warning printed to the ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/debugging/#1-look-for-errors-in-the-developer-console"},"developer console"),".")),(0,i.mdx)("h2",{id:"menu-localization"},"Menu Localization"),(0,i.mdx)("p",null,"Plugin menu item labels or panel labels can be localized to match XD's current UI language setting. Other manifest fields such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," ",(0,i.mdx)("em",{parentName:"p"},"cannot be localized yet.")),(0,i.mdx)("p",null,"Localized labels are represented as an object containing multiple translations, instead of a single string value:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"label": {\n    "default": "Menu Label",\n    "fr": "Etiquette de Menu",\n    "de": "Menübezeichnung"\n}\n')),(0,i.mdx)("p",null,"A default string is always required. The language must be a two-letter code from ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1"),", ",(0,i.mdx)("em",{parentName:"p"},"not")," a hyphenated code such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"en-US"),". To avoid inconsistency with the rest of XD's built-in menu items, languages that aren't supported by XD are ignored."),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},(0,i.mdx)("strong",{parentName:"p"},"Info"),"\nYou can also localize strings that appear in your plugin's own dialog UI, by choosing which strings to use in your UI based on the value of ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/application/#module_application-appLanguage"},"application.appLanguage"),".")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-plugin-structure-manifest-v-3-md-3d208a2d4f13f2fe8e6f.js.map