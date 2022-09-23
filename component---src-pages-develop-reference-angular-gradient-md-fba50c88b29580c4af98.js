"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[59416],{15708:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return i},default:function(){return s}});var a=t(87462),r=t(63366),d=(t(15007),t(64983)),o=t(91515),p=["components"],i={},m={_frontmatter:i},l=o.Z;function s(e){var n=e.components,t=(0,r.Z)(e,p);return(0,d.mdx)(l,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"angulargradient"},"AngularGradient"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": class\n",(0,d.mdx)("strong",{parentName:"p"},"Since"),": XD 42"),(0,d.mdx)("p",null,'In an angular (also known as "conical") gradient, colors blend together in a sweeping pattern around a shape from the center of a circle. The gradient fills the entire area of the shape it is applied to.'),(0,d.mdx)("h2",{id:"new-angulargradient"},"new AngularGradient()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"new AngularGradient"),"(): ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("p",null,"Create a new AngularGradient instance."),(0,d.mdx)("h2",{id:"clone"},"clone()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"clone"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"AngularGradient")),(0,d.mdx)("p",null,"Returns a copy of this instance."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"colorstops"},"colorStops"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"colorStops"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"Array<{stop:number, color:"),(0,d.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/Color"},"Color"),(0,d.mdx)("inlineCode",{parentName:"p"},"}>")),(0,d.mdx)("p",null,"Array of objects representing each color and its position along the gradient circle. The position (",(0,d.mdx)("inlineCode",{parentName:"p"},"stop")," value) is a number 0.0 - 1.0."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},'let gradient = new AngularGradient();\ngradient.colorStops = [{ stop: 0, color: new Color("Red") },\n    { stop: 1, color: new Color("Blue") }];\nselection.items[0].fill = gradient;\n')),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"startx"},"startX"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"startX"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"X position of the center of the gradient circle, as a multiple of the object's\nbounding box: X=0 indicates the left edge of the bounding box and X=1\nindicates the right edge. The gradient circle center may start or end outside\nthe object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"starty"},"startY"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"startY"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"Y position of the center of the gradient circle, as a multiple of the object's\nbounding box: Y=0 indicates the top edge of the bounding box and Y=1\nindicates the bottom edge. The gradient circle center may start or end outside\nthe object's bounding box, so values may be < 0 or > 1."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"getendpoints"},"getEndPoints()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"getEndPoints"),"(): ",(0,d.mdx)("inlineCode",{parentName:"p"},"Array<number>")),(0,d.mdx)("p",null,"Returns an array of ","[","startX, startY, endX, endY","]","."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"setendpoints"},"setEndPoints()"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"setEndPoints"),"(",(0,d.mdx)("inlineCode",{parentName:"p"},"startX"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"startY"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"endX"),", ",(0,d.mdx)("inlineCode",{parentName:"p"},"endY"),")"),(0,d.mdx)("p",null,"Method for setting all four start/endpoint properties. ",(0,d.mdx)("em",{parentName:"p"},"(endX, endY)")," point is the end of the gradient circle radius."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"rotation"},"rotation"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"rotation"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"number")),(0,d.mdx)("p",null,"Rotation of the gradient in degrees."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")),(0,d.mdx)("h2",{id:"type"},"type"),(0,d.mdx)("p",null,"▸ ",(0,d.mdx)("strong",{parentName:"p"},"type"),": ",(0,d.mdx)("inlineCode",{parentName:"p"},"string")),(0,d.mdx)("p",null,"String representing the type of the gradient, in this case angular gradient."),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Kind"),": instance property of ",(0,d.mdx)("a",{parentName:"p",href:"#AngularGradient"},"AngularGradient")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-angular-gradient-md-fba50c88b29580c4af98.js.map