"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[52364],{16949:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return s}});var t=a(87462),l=a(63366),d=(a(15007),a(64983)),r=a(91515),m=["components"],o={},i={_frontmatter:o},p=r.Z;function s(e){var n=e.components,a=(0,l.Z)(e,m);return(0,d.mdx)(p,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"perpluginstorage"},"PerPluginStorage"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": interface\n",(0,d.mdx)("strong",{parentName:"p"},"Since"),": XD 29"),(0,d.mdx)("p",null,"Stores metadata accessible to multiple plugins, separated into silos by plugin ID. Your plugin can read & write the storage for its own plugin ID, but storage for other plugin IDs is ",(0,d.mdx)("em",{parentName:"p"},"read-only"),"."),(0,d.mdx)("p",null,"Each per-plugin storage silo is a collection of key-value pairs. Keys and values must both be strings."),(0,d.mdx)("p",null,(0,d.mdx)("em",{parentName:"p"},"Each")," scenenode has its own metadata storage, accessed via ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#sharedplugindata"},"SceneNode.sharedPluginData"),". To store general metadata that is not specific to one scenenode, use ",(0,d.mdx)("inlineCode",{parentName:"p"},"sharedPluginData")," on the ",(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/RootNode"},"document's scenegraph root"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'// This example shows how to save & retrieve rich JSON data in shared metadata storage.\n// See below for simpler examples of using individual APIs.\nconst PLUGIN_ID = "<your manifest\'s plugin ID here>";\n\nlet richObject = {\n  list: [2, 4, 6],\n  name: "Hello world",\n};\nnode.sharedPluginData.setItem(\n  PLUGIN_ID,\n  "richData",\n  JSON.stringify(richObject)\n);\n\n// Later on...\n// (This could be in a different plugin, if it passes the original plugin\'s ID here)\nlet jsonString = node.sharedPluginData.getItem(PLUGIN_ID, "richData");\nif (jsonString) {\n  // may be undefined\n  let richObjectCopy = JSON.parse(jsonString);\n  console.log(richObjectCopy.list.length); // 3\n}\n')),(0,d.mdx)("h2",{id:"getall"},"getAll()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getAll"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Object< string"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"Object<string"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"string> >")),(0,d.mdx)("p",null,"Returns a map where key is plugin ID and value is a nested map containing all the shared metadata for that plugin ID (i.e. the result of calling ",(0,d.mdx)("inlineCode",{parentName:"p"},"getForPluginId()")," with that ID)."),(0,d.mdx)("p",null,"This map is a clone of the stored metadata, so modifying it has no effect."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'let allSharedMetadata = node.sharedPluginData.getAll();\nconsole.log(\n  "Plugin A\'s \'foo\' value:",\n  allSharedMetadata["A"] && allSharedMetadata["A"].foo\n);\nconsole.log(\n  "All of plugin B\'s shared metadata on this node:",\n  allSharedMetadata["B"]\n);\nconsole.log(\n  "List of plugins storing shared metadata on this node:",\n  Object.keys(allSharedMetadata)\n);\n')),(0,d.mdx)("h2",{id:"getforpluginid"},"getForPluginId()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getForPluginId"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"pluginId"),"): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Object<string"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"string>")),(0,d.mdx)("p",null,"Returns a map of key-value string pairs containing all shared metadata stored on this node by the given plugin. May be an empty object (zero keys), but is never null."),(0,d.mdx)("p",null,"This map is a clone of the stored metadata, so modifying it has no effect."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Param"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pluginId"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string"))))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"const MY_PLUGIN_ID = \"<your manifest's plugin ID here>\";\nlet mySharedMetadata = node.sharedPluginData.getForPluginId(MY_PLUGIN_ID);\nconsole.log(\n  \"My shared 'foo' & 'bar' values:\",\n  mySharedMetadata.foo,\n  mySharedMetadata.bar\n);\n\nconsole.log(\n  \"Plugin B's shared 'foo' value:\",\n  node.sharedPluginData.getForPluginId(\"B\").foo\n);\n")),(0,d.mdx)("h2",{id:"keys"},"keys()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"keys"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"pluginId"),"): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Array<string>")),(0,d.mdx)("p",null,"Returns a list of all keys stored on this node by the given plugin. May be empty (length zero), but is never null."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Param"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pluginId"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string"))))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'console.log(\n  "All properties stored by plugin A on this node:",\n  node.sharedPluginData.keys("A")\n);\n')),(0,d.mdx)("h2",{id:"getitem"},"getItem()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getItem"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"pluginId"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"key"),"): ",(0,d.mdx)("inlineCode",{parentName:"p"},"?string")),(0,d.mdx)("p",null,"Returns the value stored under the given key on this node by the given plugin, or undefined if the plugin hasn't stored anything under the given key."),(0,d.mdx)("p",null,"Because metadata is stored separately per plugin, two plugins can store two different values under the same key."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Param"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pluginId"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"key"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string"))))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'// These are two different values, stored independently per plugin\nconsole.log(\n  "Plugin A\'s \'foo\' value:",\n  node.sharedPluginData.getItem("A", "foo")\n);\nconsole.log(\n  "Plugin B\'s \'foo\' value:",\n  node.sharedPluginData.getItem("B", "foo")\n);\n')),(0,d.mdx)("h2",{id:"setitem"},"setItem()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"setItem"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"pluginId"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"key"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"value"),")"),(0,d.mdx)("p",null,"Set a metadata key which can be read by any other plugin."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Param"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pluginId"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Must")," be equal to your plugin's ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"key"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null})),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"value"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")," or ",(0,d.mdx)("inlineCode",{parentName:"td"},"undefined")),(0,d.mdx)("td",{parentName:"tr",align:null},"If undefined, behaves as if you'd called ",(0,d.mdx)("inlineCode",{parentName:"td"},"removeItem()")," instead.")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'const MY_PLUGIN_ID = "<your manifest\'s plugin ID here>";\nnode.sharedPluginData.setItem(MY_PLUGIN_ID, "foo", "42");\n\nnode.sharedPluginData.setItem("other_plugin_id", "foo", "42");\n// ^ ERROR: other plugin\'s metadata is read-only\n\nconsole.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo")); // "42"\n')),(0,d.mdx)("h2",{id:"removeitem"},"removeItem()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"removeItem"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"pluginId"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"key"),")"),(0,d.mdx)("p",null,"Clears a shared metadata key stored by your plugin."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Param"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"pluginId"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("em",{parentName:"td"},"Must")," be equal to your plugin's ID.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"key"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"string")),(0,d.mdx)("td",{parentName:"tr",align:null}," ")))),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'const MY_PLUGIN_ID = "<your manifest\'s plugin ID here>";\nnode.sharedPluginData.setItem(MY_PLUGIN_ID, "foo", "42");\nconsole.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo")); // "42"\n\nnode.sharedPluginData.removeItem(MY_PLUGIN_ID, "foo");\nconsole.log(node.sharedPluginData.getItem(MY_PLUGIN_ID, "foo")); // undefined\n')),(0,d.mdx)("h2",{id:"tostring"},"toString()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"toString"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"string")),(0,d.mdx)("p",null,"Provided for convenience: you can ",(0,d.mdx)("inlineCode",{parentName:"p"},"console.log(node.sharedPluginData)")," to see the value of ",(0,d.mdx)("inlineCode",{parentName:"p"},"getAll()"),"."),(0,d.mdx)("h2",{id:"tojson"},"toJSON()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"toJSON"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Object")),(0,d.mdx)("p",null,"Provided for convenience: you can include a PerPluginStorage object inside data you are going to convert to JSON, even though it is not a plain JavaScript object. Returns the same value as ",(0,d.mdx)("inlineCode",{parentName:"p"},"getAll()"),"."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'let myData = {\n  foo: 42,\n  bar: "Some other data",\n  metadata: node.sharedPluginData,\n};\nlet jsonString = JSON.stringify(myData);\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-per-plugin-storage-md-e0ec186f7dc12f2c610f.js.map