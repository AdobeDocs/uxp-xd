(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{wi30:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a("wx14"),m=a("zLVn"),c=(a("q1tI"),a("7ljp")),o=a("ndZU"),d=(a("qKvR"),{}),r={_frontmatter:d},l=o.a;function s(e){var t=e.components,a=Object(m.a)(e,["components"]);return Object(c.mdx)(l,Object(n.a)({},r,a,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("h1",{id:"commands"},"commands"),Object(c.mdx)("p",null,"You can make structural changes to the scenegraph, and perform other complex operations, by programmatically invoking the same\ncommands as XD users have access to in the UI. Because structural changes have many nuanced rules and behaviors in XD, these calls\nfunction more like automating the UI than like low-level APIs."),Object(c.mdx)("p",null,"For example, these methods do not take arguments. Instead, set the ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/selection/"}),"selection")," to the objects you want the command to target, then\ninvoke the command. Commands may also change the selection when run - for example, ",Object(c.mdx)("inlineCode",{parentName:"p"},"group()")," selects the newly created Group node."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'let commands = require("commands");\nselection.items = [shape1, shape2, maskShape];\ncommands.createMaskGroup();\nconsole.log(selection.items); // [Group]\n')),Object(c.mdx)("h3",{id:"commandsgroup"},"commands.group()"),Object(c.mdx)("p",null,"Wraps the selected objects in a ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/scenegraph/#Group"}),"Group"),", leaving the Group selected afterward. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object >\nGroup")," in the UI."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let shape1 = new Rectangle();\n// ...configure Rectangle size & appearance...\nlet label = new Text();\n// ...configure Text content & appearance...\n\n// Add both nodes to the current edit context first\nselection.insertionParent.addChild(shape1);\nselection.insertionParent.addChild(label);\n\n// Select both shapes, then run the group() command\nselection.items = [shape1, label];\ncommands.group();\nlet group = selection.items[0]; // the new Group node is what's selected afterward\n")),Object(c.mdx)("h3",{id:"commandsungroup"},"commands.ungroup()"),Object(c.mdx)("p",null,"Ungroups any of the selected objects that are ungroupable containers (Group, SymbolInstance, RepeatGrid, etc.). Equivalent to\n",Object(c.mdx)("em",{parentName:"p"},"Object > Ungroup"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandscreatemaskgroup"},"commands.createMaskGroup()"),Object(c.mdx)("p",null,"Creates a masked ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/scenegraph/#Group"}),"Group")," from the selected objects, using the object that is highest in the z order as\nthe mask shape. The mask shape must be a leaf node or ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/scenegraph/#BooleanGroup"}),"Boolean Group"),". Equivalent to\n",Object(c.mdx)("em",{parentName:"p"},"Object > Mask With Shape"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Example")),Object(c.mdx)("pre",null,Object(c.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"let shape1 = new Rectangle(),\n  shape2 = new Ellipse();\n// ...configure shapes' size & appearance...\nlet maskShape = new Ellipse();\n// ...configure mask shape's size...\n\n// Create a Masked Group: add all nodes to the current edit context, select them, then run the createMaskGroup() command\nselection.insertionParent.addChild(shape1);\nselection.insertionParent.addChild(shape2);\nselection.insertionParent.addChild(maskShape); // added last: topmost in z order\nselection.items = [shape1, shape2, maskShape]; // order of selection array does not matter\ncommands.createMaskGroup();\nlet maskedGroup = selection.items[0];\n")),Object(c.mdx)("h3",{id:"commandsconverttopath"},"commands.convertToPath()"),Object(c.mdx)("p",null,"Converts each selected object to a ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/scenegraph/#Path"}),"Path")," with the exact same visual appearance. Only applies to leaf\nnodes and ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-xd/develop/reference/scenegraph/#BooleanGroup"}),"Boolean Groups"),". Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Path > Convert to Path"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsduplicate"},"commands.duplicate()"),Object(c.mdx)("p",null,"Duplicates all selected objects, leaving the duplicates selected afterward."),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"If the objects are artboards, the duplicates are positioned to not overlap any more artboards, and are placed at the top\nof the artboard z order."),Object(c.mdx)("li",{parentName:"ul"},"If normal objects, each duplicate is in the exact same position as the original, and just above it in the z order\n(duplicates of a multiple selection will not be contiguous in the z order if the originals were not).")),Object(c.mdx)("p",null,"Interactions triggered from the selected objects are only duplicated if the user is currently in the Prototype workspace.\nEquivalent to ",Object(c.mdx)("em",{parentName:"p"},"Edit > Duplicate"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsbringtofront"},"commands.bringToFront()"),Object(c.mdx)("p",null,"Brings selected objects to the front of the z order. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Arrange > Bring to Front"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsbringforward"},"commands.bringForward()"),Object(c.mdx)("p",null,"Brings each selected object one step closer to the front of the z order. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Arrange > Bring Forward"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandssendtoback"},"commands.sendToBack()"),Object(c.mdx)("p",null,"Sends selected objects to the back of the z order. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Arrange > Send to Back"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandssendbackward"},"commands.sendBackward()"),Object(c.mdx)("p",null,"Sends each selected object one step closer to the back of the z order. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Arrange > Send Backward"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsalignleft"},"commands.alignLeft()"),Object(c.mdx)("p",null,"Aligns all selected objects flush left. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Left"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsalignright"},"commands.alignRight()"),Object(c.mdx)("p",null,"Aligns all selected objects flush right. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Right"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsalignhorizontalcenter"},"commands.alignHorizontalCenter()"),Object(c.mdx)("p",null,"Aligns all selected objects along their horizontal centerlines. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Center (Horizontally)"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsaligntop"},"commands.alignTop()"),Object(c.mdx)("p",null,"Aligns all selected objects flush top. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Top"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsalignbottom"},"commands.alignBottom()"),Object(c.mdx)("p",null,"Aligns all selected objects flush bottom. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Bottom"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsalignverticalcenter"},"commands.alignVerticalCenter()"),Object(c.mdx)("p",null,"Aligns all selected objects along their vertical centerlines. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align > Center (Vertically)"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsdistributehorizontal"},"commands.distributeHorizontal()"),Object(c.mdx)("p",null,"Distributes all selected objects evenly along the X axis. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Distribute > Horizontally"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsdistributevertical"},"commands.distributeVertical()"),Object(c.mdx)("p",null,"Distributes all selected objects evenly along the Y axis. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Distribute > Vertically"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))),Object(c.mdx)("h3",{id:"commandsaligntopixelgrid"},"commands.alignToPixelGrid()"),Object(c.mdx)("p",null,"Shifts all selected objects and their content so they align crisply with the pixel grid. Equivalent to ",Object(c.mdx)("em",{parentName:"p"},"Object > Align to\nPixel Grid"),"."),Object(c.mdx)("p",null,Object(c.mdx)("strong",{parentName:"p"},"Kind"),": static method of ",Object(c.mdx)("a",Object(n.a)({parentName:"p"},{href:"#module_commands"}),Object(c.mdx)("inlineCode",{parentName:"a"},"commands"))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-commands-md-13dbfdeb72a59757b1e8.js.map