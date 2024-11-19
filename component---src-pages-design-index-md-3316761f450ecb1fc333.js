"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[9386],{2241:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return m}});var a=t(87462),i=t(45987),s=(t(15007),t(64983)),p=t(91515);const r=["components"],l={},d=(o="InlineAlert",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)});var o;const u={_frontmatter:l},c=p.Z;function m(e){let{components:n}=e,t=(0,i.Z)(e,r);return(0,s.mdx)(c,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)(d,{variant:"warning",slots:"header, text1, text2, text3",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Important Changes for XD Plugin Distribution in the Marketplace"),(0,s.mdx)("p",null,"We are no longer accepting ",(0,s.mdx)("i",null,"new")," plugins for Adobe XD in ",(0,s.mdx)("a",{parentName:"p",href:"http://exchange.adobe.com/creativecloud"},"our Marketplace"),". "),(0,s.mdx)("p",null,"Existing published plugins can continue to be managed and updated via the Developer Distribution portal. The UXP Developer Tool (UDT) will continue to support plugin development. "),(0,s.mdx)("p",null,"Visit the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/xd/uxp/faq/"},"FAQs")," page for more details and refer to ",(0,s.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/in/support/xd.html"},"this document")," for the overall plans for Adobe XD. "),(0,s.mdx)("br",null),(0,s.mdx)("br",null),(0,s.mdx)("br",null),(0,s.mdx)("h1",{id:"designing-a-plugin-experience"},"Designing a plugin experience"),(0,s.mdx)("p",null,"These guidelines will help you define the best user experience for your plugin. Based on your users workflow and the plugin action, different UX and UI patterns should be considered as you create a plugin."),(0,s.mdx)("p",null,"Plugins can interact with the user at different levels, for example, some plugins will have quick actions which in some use cases won’t render UI, and some will include multiple actions that need UI. "),(0,s.mdx)("hr",null),(0,s.mdx)("h2",{id:"plugins-in-xd"},"Plugins in XD"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Learn more about the types of Adobe XD plugins you can build.")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/5530d/Design-xd-plugins-1.webp 320w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/0c8fb/Design-xd-plugins-1.webp 640w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/94b1e/Design-xd-plugins-1.webp 1280w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/0b34d/Design-xd-plugins-1.webp 1920w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/58bdf/Design-xd-plugins-1.webp 2340w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/dd4a7/Design-xd-plugins-1.png 320w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/0f09e/Design-xd-plugins-1.png 640w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/bbbf7/Design-xd-plugins-1.png 1280w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/ac7a9/Design-xd-plugins-1.png 1920w","/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/1e185/Design-xd-plugins-1.png 2340w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/f35c7fc58e4a3b0a25ffbe2e32588f25/bbbf7/Design-xd-plugins-1.png",alt:"Plugin entry points and UI",title:"Plugin entry points and UI",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},(0,s.mdx)("strong",{parentName:"th"},"Plugins Panel")),(0,s.mdx)("th",{parentName:"tr",align:null},(0,s.mdx)("strong",{parentName:"th"},"Modal Dialog")))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Non-Blocking UI - this surface is best used when the user should have access to the canvas while using the plugin."),(0,s.mdx)("td",{parentName:"tr",align:null},"Blocking UI - this surface is best used when the plugin needs to run an action and the user shouldn’t modify or change selection of objects on the canvas.")))),(0,s.mdx)("h2",{id:"ux-patterns"},"UX Patterns"),(0,s.mdx)("p",null,"User Experience patterns will provide guidence on how to interact with your plugin users within XD, this will highlight UX requirements and best practices."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"ux-patterns/"},"View UX Patterns")),(0,s.mdx)("h2",{id:"user-interface"},"User Interface"),(0,s.mdx)("p",null,"UI Resources will have information on UI components, examples and a sticker sheet you can use to build your plugin "),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"user-interface/"},"View User Interface")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-design-index-md-3316761f450ecb1fc333.js.map