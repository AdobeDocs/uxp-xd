"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[6362],{10437:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return c}});var o=t(87462),l=t(45987),i=(t(15007),t(64983)),r=t(91515);const a=["components"],p={},d={_frontmatter:p},s=r.Z;function c(e){let{components:n}=e,t=(0,l.Z)(e,a);return(0,i.mdx)(s,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"scrollablegroup"},"ScrollableGroup"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kind"),": class\n",(0,i.mdx)("strong",{parentName:"p"},"Extends"),": ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode"},"SceneNode"),"\n",(0,i.mdx)("strong",{parentName:"p"},"Since:")," XD 30"),(0,i.mdx)("p",null,"ScrollableGroup nodes are content that users can interactively scroll around. Content is viewed through a ",(0,i.mdx)("a",{parentName:"p",href:"#viewport"},"viewport"),",\nwith everything else clipped. If a ScrollableGroup is set to only scroll on one axis, on the other axis the viewport is\nautomatically sized to exactly fit the bounds of the content so nothing is clipped."),(0,i.mdx)("p",null,"The scroll distance range is defined by a ",(0,i.mdx)("em",{parentName:"p"},"scrollable area")," rectangle which is the union of the viewport and the bounds of all\nthe content. This can include some blank space, if the content is initially positioned not filling the entire viewport."),(0,i.mdx)("h2",{id:"scrollingtype"},"scrollingType"),(0,i.mdx)("p",null,"▸ ",(0,i.mdx)("strong",{parentName:"p"},"scrollingType"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"string")),(0,i.mdx)("p",null,"The type of scrolling: one of ScrollableGroup.VERTICAL, HORIZONTAL and PANNING.\nPANNING enables scrolling on both axes."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,i.mdx)("a",{parentName:"p",href:"#scrollablegroup"},"ScrollableGroup")),(0,i.mdx)("h2",{id:"viewport"},"viewport"),(0,i.mdx)("p",null,"▸ ",(0,i.mdx)("strong",{parentName:"p"},"viewport"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"{viewportWidth: number, offsetX: number}")," | ",(0,i.mdx)("inlineCode",{parentName:"p"},"{viewportHeight: number, offsetY: number}")," | ",(0,i.mdx)("inlineCode",{parentName:"p"},"{viewportWidth: number, offsetX: number, viewportHeight: number, offsetY: number}")),(0,i.mdx)("p",null,"The viewport is a rectangle whose bounds are defined explicitly on scrolling axes and fit automatically to the\ncontent on non-scrolling axes:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"On a scrolling axis, the bounds are specified in ",(0,i.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/"},"local coordinates"),"\nusing the ",(0,i.mdx)("inlineCode",{parentName:"li"},"viewport")," values specified here."),(0,i.mdx)("li",{parentName:"ul"},"On a non-scrolling axis, the bounds are automatically calculated to exactly fit the content (just like the blue\nselection rectangle seen when you select a plain Group).")),(0,i.mdx)("p",null,"For example, if scrollingType == VERTICAL, the top of the viewport is ",(0,i.mdx)("inlineCode",{parentName:"p"},"viewport.offsetY")," in the ScrollableGroup's\nlocal coordinates, the bottom of the viewport is ",(0,i.mdx)("inlineCode",{parentName:"p"},"viewport.offsetY + viewport.viewportHeight")," in local coordinates,\nand horizontally there is no viewport clipping -- the entire current ",(0,i.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/SceneNode/#localbounds"},"localBounds")," range is visible. The\n",(0,i.mdx)("inlineCode",{parentName:"p"},"viewport")," object will only contain ",(0,i.mdx)("inlineCode",{parentName:"p"},"offsetY")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"viewportHeight")," properties in this case."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,i.mdx)("a",{parentName:"p",href:"#scrollablegroup"},"ScrollableGroup")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-scrollable-group-md-7c001b790b119a946744.js.map