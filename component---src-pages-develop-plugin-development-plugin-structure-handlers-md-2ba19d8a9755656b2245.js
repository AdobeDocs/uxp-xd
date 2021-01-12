(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"0Fmo":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return d})),t.d(n,"default",(function(){return p}));var a=t("wx14"),o=t("zLVn"),l=(t("q1tI"),t("7ljp")),m=t("ndZU"),d=(t("qKvR"),{}),i={_frontmatter:d},c=m.a;function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.mdx)(c,Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",{id:"the-mainjs-file"},"The ",Object(l.mdx)("inlineCode",{parentName:"h1"},"main.js")," file"),Object(l.mdx)("p",null,"Every ",Object(l.mdx)("em",{parentName:"p"},"UI entry point")," you declare in ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/plugin-structure/manifest/"}),Object(l.mdx)("inlineCode",{parentName:"a"},"manifest.json"))," must be fulfilled by a definition exported from your ",Object(l.mdx)("inlineCode",{parentName:"p"},"main.js")," module."),Object(l.mdx)("p",null,Object(l.mdx)("em",{parentName:"p"},"Exporting")," happens by setting the value of ",Object(l.mdx)("inlineCode",{parentName:"p"},"module.exports"),":"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    commands: {\n        // definitions for each commandId in manifest go here\n    },\n    panels: {\n        // definitions for each panelId in manifest go here\n    },\n};\n")),Object(l.mdx)("p",null,"The details of what you need to export are different depending on the type of UI entry point. One plugin may use multiple types of UI entry points."),Object(l.mdx)("a",{name:"command"}),"## Direct-action commands (`commandId`)",Object(l.mdx)("p",null,Object(l.mdx)("inlineCode",{parentName:"p"},"exports.commands")," is a map linking each ",Object(l.mdx)("inlineCode",{parentName:"p"},"commandId")," from the manifest to a JS ",Object(l.mdx)("em",{parentName:"p"},"handler function")," in your code."),Object(l.mdx)("p",null,"Manifest:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "menu",\n        "label": "Hello World Command",\n        "commandId": "helloCommand"\n    }\n]\n')),Object(l.mdx)("p",null,"main.js:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function sayHello(selection, documentRoot) {\n    console.log("Hello, world!");\n}\n\nmodule.exports = {\n    commands: {\n        helloCommand: sayHello\n    }\n};\n')),Object(l.mdx)("p",null,"Notice how the exported map object makes the connection from manifest to code:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"commandId")," from the manifest, ",Object(l.mdx)("inlineCode",{parentName:"li"},"helloCommand"),", is the ",Object(l.mdx)("em",{parentName:"li"},"key")),Object(l.mdx)("li",{parentName:"ol"},"The handler function, ",Object(l.mdx)("inlineCode",{parentName:"li"},"sayHello"),", is the ",Object(l.mdx)("em",{parentName:"li"},"value")," that the key maps to")),Object(l.mdx)("p",null,"The handler is called each time the command is invoked, and XD passes it ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#contextual-arguments"}),"two arguments providing useful context"),". Your handler function can ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/dialogs/"}),"show UI in a dialog box")," and/or ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"}),"edit the XD document"),"."),Object(l.mdx)("a",{name:"panel"}),"## Panel UI (`panelId`)",Object(l.mdx)("p",null,Object(l.mdx)("inlineCode",{parentName:"p"},"exports.panels")," is a map linking each ",Object(l.mdx)("inlineCode",{parentName:"p"},"panelId")," from the manifest to a JS ",Object(l.mdx)("em",{parentName:"p"},"panel object")," in your code."),Object(l.mdx)("p",null,"Manifest:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"uiEntryPoints": [\n    {\n        "type": "panel",\n        "label": "Hello World Panel",\n        "panelId": "helloPanel"\n    }\n]\n')),Object(l.mdx)("p",null,"main.js:"),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function show(event) {\n    let dom = document.createElement("panel");\n    dom.innerHTML = `\n        <form method="dialog" id="main">\n        </form>\n    `;\n    event.node.appendChild(dom);\n}\n\nfunction hide(event) {\n    event.node.firstChild.remove();\n}\n\nfunction update(selection, documentRoot) {\n    // ...update panel DOM based on selection...\n}\n\nmodule.exports = {\n    panels: {\n        helloPanel: {\n            show,\n            hide,\n            update\n        }\n    }\n};\n')),Object(l.mdx)("p",null,"Notice how the exported map object makes the connection from manifest to code:"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"The ",Object(l.mdx)("inlineCode",{parentName:"li"},"panelId")," from the manifest, ",Object(l.mdx)("inlineCode",{parentName:"li"},"helloPanel"),", is the ",Object(l.mdx)("em",{parentName:"li"},"key")),Object(l.mdx)("li",{parentName:"ol"},"An object with three methods (",Object(l.mdx)("inlineCode",{parentName:"li"},"show()"),", ",Object(l.mdx)("inlineCode",{parentName:"li"},"hide()"),", and ",Object(l.mdx)("inlineCode",{parentName:"li"},"update()"),") is the ",Object(l.mdx)("em",{parentName:"li"},"value")," that the key maps to")),Object(l.mdx)("p",null,"The panel object implements this interface:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/panels/show/"}),Object(l.mdx)("inlineCode",{parentName:"a"},"show()")," (required)"),": called when your panel is made visible to the user. To populate the panel with UI elements, add DOM nodes to the ",Object(l.mdx)("inlineCode",{parentName:"p"},"event.node")," root node that is provided.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/panels/hide/"}),Object(l.mdx)("inlineCode",{parentName:"a"},"hide()")," (optional)"),": called when your panel is hidden/closed.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/reference/ui/panels/update/"}),Object(l.mdx)("inlineCode",{parentName:"a"},"update")," (optional)"),": called whenever panel UI content should be updated. This includes when the panel is is shown, when the selection changes, or when the selected objects are mutated (move, resize, fill color change, etc.). This function should execute quickly since it's triggered for essentially every user action in XD while your panel is open. XD passes ",Object(l.mdx)("inlineCode",{parentName:"p"},"update()")," ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"#contextual-arguments"}),"two arguments providing useful context"),"."))),Object(l.mdx)("p",null,"Typically, you'll attach UI event listeners to the DOM nodes in your panel, and these event listeners may ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/lifecycle/#edit-operations"}),"edit the XD document using an ",Object(l.mdx)("inlineCode",{parentName:"a"},"application.editDocument()")," operation"),"."),Object(l.mdx)("h2",{id:"contextual-arguments"},"Contextual arguments"),Object(l.mdx)("p",null,"The handler function for commands (",Object(l.mdx)("inlineCode",{parentName:"p"},"sayHello()")," above) and the ",Object(l.mdx)("inlineCode",{parentName:"p"},"update()")," function for panels are both called with two arguments that provide useful context about XD's current state:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"The current ",Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/reference/selection/"}),"selection state")),Object(l.mdx)("li",{parentName:"ul"},"The ",Object(l.mdx)("a",Object(a.a)({parentName:"li"},{href:"/uxp-xd/reference/scenegraph/#rootnode"}),"root node of the document's scenegraph"))),Object(l.mdx)("p",null,"The argument names ",Object(l.mdx)("inlineCode",{parentName:"p"},"selection")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"documentRoot")," seen in the code samples above are arbitrary, but you'll see this naming convention used throughout our documentation."),Object(l.mdx)("h2",{id:"accessing-app-apis"},"Accessing app APIs"),Object(l.mdx)("p",null,"XD calls ",Object(l.mdx)("em",{parentName:"p"},"into")," your plugin code via the above exports. To call into XD's APIs from your plugin code, see ",Object(l.mdx)("a",Object(a.a)({parentName:"p"},{href:"/uxp-xd/develop/plugin-development/xd-concepts/apis/"}),"Accessing APIs"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-plugin-structure-handlers-md-2ba19d8a9755656b2245.js.map