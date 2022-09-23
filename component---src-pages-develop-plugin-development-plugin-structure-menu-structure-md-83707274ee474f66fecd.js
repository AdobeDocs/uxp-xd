"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[919],{42448:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return s},default:function(){return r}});var l=a(87462),t=a(63366),i=(a(15007),a(64983)),m=a(91515),p=["components"],s={},o={_frontmatter:s},u=m.Z;function r(e){var n=e.components,a=(0,t.Z)(e,p);return(0,i.mdx)(u,(0,l.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"plugin-menu-structure"},"Plugin menu structure"),(0,i.mdx)("p",null,"In your ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"},"manifest.json"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"entryPoints"),' field is an array of objects including all UI entry points your plugin has available. All entries listed in this array appear both in the Plugins menu in the native menubar and the "plugin launchpad" sidebar panel. Let\'s learn how these items appear in XD.'),(0,i.mdx)("h2",{id:"top-level-name"},"Top level name"),(0,i.mdx)("p",null,"No matter how many items you have in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"entryPoints"),' array, XD will always use your plugin\'s name as the top level label for your plugin in the UI. For example, if you have "PLUGIN NAME" as your plugin name in your manifest.json file:'),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'"name": "PLUGIN NAME"\n')),(0,i.mdx)("p",null,'XD will display this as the top menu item in the native menubar and in the "plugin launchpad".'),(0,i.mdx)("h2",{id:"submenu-names"},"Submenu names"),(0,i.mdx)("p",null,"So where do the ",(0,i.mdx)("inlineCode",{parentName:"p"},"label"),"s you specify in ",(0,i.mdx)("inlineCode",{parentName:"p"},"entryPoints")," show up in XD? For example, if you have a plugin with one modal-dialog command and one panel:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'"entryPoints": [\n    {\n        "type": "command",\n        "id": "test",\n        "label": { "default": "This is a modal" }\n    },\n    {\n        "type": "panel",\n        "id": "enlargeRectangle",\n        "label": { "default": "this is a panel" }\n    }\n]\n')),(0,i.mdx)("p",null,"You will see those labels shown as ",(0,i.mdx)("em",{parentName:"p"},"submenu")," items under the plugin's name:"),(0,i.mdx)("h2",{id:"single-item-plugins"},"Single-item plugins"),(0,i.mdx)("p",null,"If your plugin has only ",(0,i.mdx)("strong",{parentName:"p"},"one")," item in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"entryPoints")," array, its ",(0,i.mdx)("inlineCode",{parentName:"p"},"label")," will be ignored. Instead of having a single submenu item nested under the plugin's name, XD will simply show the plugin's name itself as a directly actionable top-level menu item, which triggers the plugin's one entry point. For example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'"entryPoints": [\n    {\n        "type": "panel",\n        "id": "enlargeRectangle",\n        "label": { "default": "this is a panel (IGNORED)" }\n    }\n]\n')),(0,i.mdx)("p",null,"Since there is only one item in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"entryPoints")," array, XD will ignore the ",(0,i.mdx)("inlineCode",{parentName:"p"},"label")," and display the plugin's name as the top menu item."),(0,i.mdx)("p",null,"This exception is applied to prevent user confusion and to promote the most ideal user experience."))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-plugin-structure-menu-structure-md-83707274ee474f66fecd.js.map