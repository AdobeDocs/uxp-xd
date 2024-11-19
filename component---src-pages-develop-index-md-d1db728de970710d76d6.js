"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[3578],{50089:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return p},default:function(){return c}});var a=o(87462),n=o(45987),r=(o(15007),o(64983)),i=o(91515);const l=["components"],p={},s=(d="InlineAlert",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var d;const u={_frontmatter:p},m=i.Z;function c(e){let{components:t}=e,o=(0,n.Z)(e,l);return(0,r.mdx)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(s,{variant:"warning",slots:"header, text1, text2, text3",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Important Changes for XD Plugin Distribution in the Marketplace"),(0,r.mdx)("p",null,"We are no longer accepting ",(0,r.mdx)("i",null,"new")," plugins for Adobe XD in ",(0,r.mdx)("a",{parentName:"p",href:"http://exchange.adobe.com/creativecloud"},"our Marketplace"),". "),(0,r.mdx)("p",null,"Existing published plugins can continue to be managed and updated via the Developer Distribution portal. The UXP Developer Tool (UDT) will continue to support plugin development. "),(0,r.mdx)("p",null,"Visit the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/xd/uxp/faq/"},"FAQs")," page for more details and refer to ",(0,r.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/in/support/xd.html"},"this document")," for the overall plans for Adobe XD. "),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("br",null),(0,r.mdx)("h1",{id:"develop"},"Develop"),(0,r.mdx)("p",null,"XD plugins extend the capabilities of ",(0,r.mdx)("a",{parentName:"p",href:"https://www.adobe.com/products/xd.html"},"Adobe XD")," by adding new features to the app, automating workflows, connecting the app to external services, and more."),(0,r.mdx)("p",null,"On this page, we'll give you a quick overview of ",(0,r.mdx)("strong",{parentName:"p"},"what you can build")," and ",(0,r.mdx)("strong",{parentName:"p"},"how to get started"),"."),(0,r.mdx)("p",null,"From there, you can ",(0,r.mdx)("strong",{parentName:"p"},"choose your own adventure"),': build a "Hello, World" plugin in our ',(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start tutorial"),", follow our ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/tutorials/"},"tutorials"),", try code-complete ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/AdobeXD/plugin-samples"},"sample plugins"),", or browse the ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/develop/reference/how-to-read/"},"API references"),"."),(0,r.mdx)("p",null,"Oh, and be sure to ",(0,r.mdx)("a",{parentName:"p",href:"/uxp-xd/community/"},"join the developer community")," while you're here! We want you to say hi (we'll say hi back)."),(0,r.mdx)("p",null,"Now, let’s supercharge the future of design together with XD plugins!"),(0,r.mdx)("h2",{id:"what-can-you-build"},"What can you build?"),(0,r.mdx)("p",null,"Plugins can be ",(0,r.mdx)("strong",{parentName:"p"},"tools")," that help users create or automate their workflow, they can streamline collaboration by allowing users to ",(0,r.mdx)("strong",{parentName:"p"},"import")," and ",(0,r.mdx)("strong",{parentName:"p"},"export"),", and they can also provide users with external ",(0,r.mdx)("strong",{parentName:"p"},"information"),"."),(0,r.mdx)("p",null,"The XD plugin APIs enable you to build plugins for a number of use cases, to help you get started here are three points to think about."),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"The plugin workflow")," - Identify the user stories for your plugin"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Key plugin action")," - What are the key interactions for you plugin that would be valuable to your users"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Entry point and UI for your plugin in XD")," - consider the user's intention in XD when interacting with your plugin")),(0,r.mdx)("h3",{id:"users-workflow-in-xd"},"User's workflow in XD"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/5530d/users_workflow_plugins.webp 320w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/0c8fb/users_workflow_plugins.webp 640w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/94b1e/users_workflow_plugins.webp 1280w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/71c23/users_workflow_plugins.webp 1470w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/dd4a7/users_workflow_plugins.png 320w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/0f09e/users_workflow_plugins.png 640w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/bbbf7/users_workflow_plugins.png 1280w","/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/3d705/users_workflow_plugins.png 1470w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-xd/static/15eed077c930cf207fbbce6c9c4ae5bb/bbbf7/users_workflow_plugins.png",alt:"Example of a user's workflow with plugins",title:"Example of a user's workflow with plugins",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("p",null,"There are lots of ways to journey through the documentation on your way to building the next great XD plugin. If you're just getting started, we recommend following the left-hand navigation on this site from top to bottom (or until you're ready to plot your own course!), and then proceed through the top-level navigation from left to right."),(0,r.mdx)("p",null,"Here are some highlights you won't want to miss:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Get Started"),": To begin, try our ",(0,r.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/quick-start/"},"Quick Start tutorial"),", then follow along with ",(0,r.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/tutorials/"},"the API feature tutorials"),"."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"Go deep"),": Learn more about how to build an XD plugin by reading ",(0,r.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/plugin-development/"},"the plugin development 101")," and then dig into the ",(0,r.mdx)("a",{parentName:"li",href:"/uxp-xd/develop/reference/"},"API reference"),"."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"See code"),": If you prefer to learn from working code, we have a ",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/AdobeXD/Plugin-Samples"},"samples repo on GitHub")," for you to take a look at.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-index-md-d1db728de970710d76d6.js.map