"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[12920],{34170:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return o}});var n=t(87462),r=t(63366),m=(t(15007),t(64983)),d=t(91515),l=["components"],i={},p={_frontmatter:i},x=d.Z;function o(e){var a=e.components,t=(0,r.Z)(e,l);return(0,m.mdx)(x,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"matrix"},"Matrix"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": class"),(0,m.mdx)("h2",{id:"new-matrix"},"new Matrix()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"new Matrix"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"a"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"b"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"c"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"d"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"e"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"f"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Creates a new transform matrix with the following structure:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre"},"| a c e |\n| b d f |\n| 0 0 1 |\n")),(0,m.mdx)("p",null,"Note: XD does not generally allow transform matrices with scale or shear (skew) components - only translate and rotate components are typically permitted."),(0,m.mdx)("p",null,"If no arguments, creates a new identity matrix by default."),(0,m.mdx)("h2",{id:"setfrom"},"setFrom()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"setFrom"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"otherMatrix"),")"),(0,m.mdx)("p",null,"Copies another matrix's values into this matrix."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"otherMatrix"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"#Matrix"},"Matrix")),(0,m.mdx)("td",{parentName:"tr",align:null},"The matrix to copy values from.")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"clone"},"clone()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"clone"),"(): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Returns a copy of the matrix"),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"add"},"add()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"add"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"aOrMatrix"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"b"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"c"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"d"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"e"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"f"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Returns the current matrix after right multiply."),(0,m.mdx)("p",null,"Multiplies a passed affine transform to the right: this ","*"," M. The result effectively applies\nthe transform of the passed in matrix first, followed by the transform of this matrix second.\nModifies this matrix object and also returns it so calls can be chained."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"aOrMatrix"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,m.mdx)("a",{parentName:"td",href:"#Matrix"},"Matrix")),(0,m.mdx)("td",{parentName:"tr",align:null},"A Matrix or the ",(0,m.mdx)("inlineCode",{parentName:"td"},"a")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"b"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"b")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"c"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"c")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"d"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"d")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"e"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"e")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"f"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"f")," component of an affine transform.")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"multleft"},"multLeft()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"multLeft"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"aOrMatrix"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"b"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"c"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"d"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"e"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"f"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Returns the current matrix after left multiply."),(0,m.mdx)("p",null,"Multiplies a passed affine transform to the left: M ","*"," this. The result effectively applies\nthe transform of this matrix first, followed by the transform of the passed in matrix second.\nModifies this matrix object and also returns it so calls can be chained."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"aOrMatrix"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,m.mdx)("a",{parentName:"td",href:"#Matrix"},"Matrix")),(0,m.mdx)("td",{parentName:"tr",align:null},"A Matrix or the ",(0,m.mdx)("inlineCode",{parentName:"td"},"a")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"b"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"b")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"c"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"c")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"d"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"d")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"e"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"e")," component of an affine transform.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"f"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"The ",(0,m.mdx)("inlineCode",{parentName:"td"},"f")," component of an affine transform.")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"invert"},"invert()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"invert"),"(): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Returns an inverted version of the matrix. Returns a brand new matrix - does ",(0,m.mdx)("em",{parentName:"p"},"not")," modify this matrix object."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"translate"},"translate()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"translate"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"tx"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"ty"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Applies translation ",(0,m.mdx)("em",{parentName:"p"},"before")," the current transform of this matrix, as if using the ",(0,m.mdx)("a",{parentName:"p",href:"#add"},"add()")," method.\nModifies this matrix object and also returns it so calls can be chained."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"tx"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"horizontal offset distance")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"ty"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"vertical offset distance")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"scale"},"scale()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"scale"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"sx"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"sy"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"cx"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"cy"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Applies scaling ",(0,m.mdx)("em",{parentName:"p"},"before")," the current transform of this matrix, as if using the ",(0,m.mdx)("a",{parentName:"p",href:"#add"},"add()")," method.\nModifies this matrix object and also returns it so calls can be chained."),(0,m.mdx)("p",null,"Note: scale transforms are not generally permitted in XD."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sx"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"amount to be scaled, with ",(0,m.mdx)("inlineCode",{parentName:"td"},"1")," resulting in no change")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"sy"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"amount to scale along the vertical axis. (Otherwise ",(0,m.mdx)("inlineCode",{parentName:"td"},"sx")," applies to both axes.)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"cx"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"horizontal origin point from which to scale (if unspecified, scales from the local coordinates' origin point)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"cy"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"vertical origin point from which to scale")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"rotate"},"rotate()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"rotate"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"angle"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"cx"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"cy"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Applies clockwise rotation ",(0,m.mdx)("em",{parentName:"p"},"before")," the current transform of this matrix, as if using the ",(0,m.mdx)("a",{parentName:"p",href:"#add"},"add()")," method.\nModifies this matrix object and also returns it so calls can be chained."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"angle"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"angle of rotation, in degrees clockwise")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"cx"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"horizontal origin point from which to rotate (if unspecified, scales from the local coordinates' origin point)")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"cy"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"?number")),(0,m.mdx)("td",{parentName:"tr",align:null},"vertical origin point from which to rotate")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"x"},"x()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"x"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"x"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"y"),"): ",(0,m.mdx)("inlineCode",{parentName:"p"},"number")),(0,m.mdx)("p",null,"Returns x coordinate of the given point after transformation described by this matrix. See also ",(0,m.mdx)("a",{parentName:"p",href:"#y"},"Matrix.y")," and\n",(0,m.mdx)("a",{parentName:"p",href:"#transformpoint"},"Matrix.transformPoint"),"."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"x"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"y"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number"))))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"y"},"y()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"y"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"x"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"y"),"): ",(0,m.mdx)("inlineCode",{parentName:"p"},"number")),(0,m.mdx)("p",null,"Returns y coordinate of the given point after transformation described by this matrix. See also ",(0,m.mdx)("a",{parentName:"p",href:"#x"},"Matrix.x")," and\n",(0,m.mdx)("a",{parentName:"p",href:"#transformpoint"},"Matrix.transformPoint"),"."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"x"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"y"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number"))))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"transformpoint"},"transformPoint()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"transformPoint"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"point"),"): ",(0,m.mdx)("inlineCode",{parentName:"p"},"{x:number, y:number}")),(0,m.mdx)("p",null,"Returns x & y coordinates of the given point after transformation described by this matrix."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"point"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"{x:number, y:number}"))))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"transformrect"},"transformRect()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"transformRect"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"rect"),"): ",(0,m.mdx)("inlineCode",{parentName:"p"},"{x:number, y:number, width:number, height:number}")),(0,m.mdx)("p",null,"Transforms a rectangle using this matrix, returning the ",(0,m.mdx)("em",{parentName:"p"},"axis-aligned")," bounds of the resulting rectangle. If this matrix has\nrotation, then the result will have different width & height from the original rectangle, due to axis alignment. See\n",(0,m.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/plugin-development/xd-concepts/coordinate-spaces-and-units/"},'"Coordinate Spaces"')," for some illustrations of this."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"rect"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"{x:number, y:number, width:number, height:number}"))))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"gettranslate"},"getTranslate()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"getTranslate"),"(): ",(0,m.mdx)("inlineCode",{parentName:"p"},"Array.<number>")),(0,m.mdx)("p",null,"Returns the translation component of this matrix: ","[tx, ty]",". Equals the ",(0,m.mdx)("inlineCode",{parentName:"p"},"e")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"f")," components of this matrix."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"scalefactors"},"scaleFactors()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"scaleFactors"),"(): ",(0,m.mdx)("inlineCode",{parentName:"p"},"{scaleX:number, scaleY:number}")),(0,m.mdx)("p",null,"Split the matrix into scale factors.\nThis method assumes that there is no skew in the matrix."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"removedscalematrix"},"removedScaleMatrix()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"removedScaleMatrix"),"(",(0,m.mdx)("inlineCode",{parentName:"p"},"scaleX"),", ",(0,m.mdx)("inlineCode",{parentName:"p"},"scaleY"),"): ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("p",null,"Returns a new matrix that contains only the translate and rotate components of the current matrix, with the given scale\nfactors stripped out. Must be passed the exact scale factors returned by ",(0,m.mdx)("a",{parentName:"p",href:"#scalefactors"},"scaleFactors()")," for this\nmatrix, and this matrix must have no skew/shear component."),(0,m.mdx)("p",null,"Returns a brand new matrix, and does ",(0,m.mdx)("em",{parentName:"p"},"not")," modify this matrix object."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Param"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"scaleX"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"horrizontal scale component to remove")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"scaleY"),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"number")),(0,m.mdx)("td",{parentName:"tr",align:null},"vertical scale component to remove")))),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")),(0,m.mdx)("h2",{id:"hasskew"},"hasSkew()"),(0,m.mdx)("p",null,"▸ ",(0,m.mdx)("strong",{parentName:"p"},"hasSkew"),"(): ",(0,m.mdx)("inlineCode",{parentName:"p"},"boolean")),(0,m.mdx)("p",null,"Returns true if the matrix includes any skew (shear)."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Kind"),": instance method of ",(0,m.mdx)("a",{parentName:"p",href:"#Matrix"},"Matrix")))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-reference-matrix-md-b399078affb4b5c405b8.js.map