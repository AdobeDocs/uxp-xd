"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[5499],{85298:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return s}});var a=t(87462),r=t(63366),d=(t(15007),t(64983)),i=t(91515),o=["components"],p={},m={_frontmatter:p},l=i.Z;function s(e){var n=e.components,t=(0,r.Z)(e,o);return(0,d.mdx)(l,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"lineargradient"},"LinearGradient"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": class"),(0,d.mdx)("p",null,"In a linear gradient, colors blend smoothly along a straight line, extending out perpendicularly from that line. The gradient fills the entire area of the shape it is\napplied to."),(0,d.mdx)("h2",{id:"new-lineargradient"},"new LinearGradient()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"new LinearGradient"),"(): ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("p",null,"Create a new LinearGradient instance."),(0,d.mdx)("h2",{id:"clone"},"clone()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"clone()"),": ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("p",null,"Returns a copy of this instance."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"colorstops"},"colorStops"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"colorStops"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"Array<{stop:number, color:"),(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/Color"},"Color"),(0,d.mdx)("inlineCode",{parentName:"p"},"}>")),(0,d.mdx)("p",null,"Array of objects representing each color and its position along the gradient line. The position (",(0,d.mdx)("inlineCode",{parentName:"p"},"stop")," value) is a number 0.0 - 1.0."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'let gradient = new LinearGradient();\ngradient.colorStops = [{ stop: 0, color: new Color("Red") },\n    { stop: 1, color: new Color("Blue") }];\nselection.items[0].fill = gradient;\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"startx"},"startX"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"startX"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"X position of the start of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.\nThe gradient line ",(0,d.mdx)("em",{parentName:"p"},"may")," start or end outside the object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"starty"},"startY"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"startY"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"Y position of the start of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.\nThe gradient line ",(0,d.mdx)("em",{parentName:"p"},"may")," start or end outside the object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"endx"},"endX"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"endX"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"X position of the end of the gradient line, as a multiple of the object's bounding box: X=0 indicates the left edge of the bounding box and X=1 indicates the right edge.\nThe gradient line ",(0,d.mdx)("em",{parentName:"p"},"may")," start or end outside the object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"endy"},"endY"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"endY"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"Y position of the end of the gradient line, as a multiple of the object's bounding box: Y=0 indicates the top edge of the bounding box and Y=1 indicates the bottom edge.\nThe gradient line ",(0,d.mdx)("em",{parentName:"p"},"may")," start or end outside the object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"getendpoints"},"getEndPoints()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getEndPoints()"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"Array<number>")),(0,d.mdx)("p",null,"Returns an array of ","[","startX, startY, endX, endY","]","."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"setendpoints"},"setEndPoints()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"setEndPoints"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"startX"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"startY"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"endX"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"endY"),")"),(0,d.mdx)("p",null,"Shorthand for setting all four start/endpoint properties."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")),(0,d.mdx)("h2",{id:"type"},"type"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"type"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"string")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Since"),": XD 42"),(0,d.mdx)("p",null,"String representing the type of the gradient, in this case linear gradient."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#LinearGradient"},"LinearGradient")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-linear-gradient-md-2994121d6d57e194fee6.js.map