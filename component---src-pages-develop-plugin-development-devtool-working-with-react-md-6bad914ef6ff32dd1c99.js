"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[11339],{17302:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return p}});var o=t(87462),i=t(63366),l=(t(15007),t(64983)),r=t(91515),a=["components"],d={},u={_frontmatter:d},s=r.Z;function p(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.mdx)(s,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"working-with-react"},"Working with React"),(0,l.mdx)("p",null,"When working with React, other frameworks, or bundlers like Webpack and Parcel, you'll need to understand how to effectively use them inside the developer tool. There are various options available to you, depending on your workflow needs."),(0,l.mdx)("h2",{id:"adding-a-plugin-to-the-workspace"},"Adding a plugin to the workspace"),(0,l.mdx)("p",null,"In this particular scenario, you'll essentially have ",(0,l.mdx)("em",{parentName:"p"},"two")," ",(0,l.mdx)("inlineCode",{parentName:"p"},"manifest.json")," files. One will be in your plugin's source code directory, and the other will be in your plugin's distribution directory."),(0,l.mdx)("p",null,"You can load either one of these, but you need to be aware of the differences."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Adding a plugin using the distribution ",(0,l.mdx)("inlineCode",{parentName:"li"},"manifest.json")," means that you're loading the plugin from the distribution folder entirely. If your plugin build steps involve removing and recreating the distribution folder, or cleaning all the files within the folder, your plugin may not reload correctly in the developer tool."),(0,l.mdx)("li",{parentName:"ul"},"Adding a plugin using the source ",(0,l.mdx)("inlineCode",{parentName:"li"},"manifest.json")," is the preferred option, but you'll also need to edit the plugin's options. Open ",(0,l.mdx)("strong",{parentName:"li"},"••• > Options"),", click ",(0,l.mdx)("strong",{parentName:"li"},"Advanced"),", and then enter the ",(0,l.mdx)("em",{parentName:"li"},"relative")," path (from the ",(0,l.mdx)("inlineCode",{parentName:"li"},"manifest.json")," file you selected) to your plugin's distribution folder. This will load the plugin in the same manner as the previous point, but any build steps that remove or recreate the distribution folder won't impact reloading the plugin in the developer tool.")),(0,l.mdx)("p",null,"Another important note is that if you're adding a plugin that uses a bundler or framework make sure you install its dependencies – for example, if you're downloading the sample plugins for Adobe XD, you'll need to run ",(0,l.mdx)("inlineCode",{parentName:"p"},"npm install")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"yarn install")," for those based on React. The Developer Tool will not do this for you."),(0,l.mdx)("h2",{id:"watching-your-plugin"},"Watching your plugin"),(0,l.mdx)("p",null,"When using bundlers or frameworks, you'll typically have a build step that watches your plugins for changes. The developer tool does not know about your build steps, so if you want the developer tool to reload automatically when changes are detected, you'll need to:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Run your ",(0,l.mdx)("inlineCode",{parentName:"li"},"watch")," build process in a terminal"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"••• > Watch")," the desired plugin from the Developer Tool")),(0,l.mdx)("p",null,"When your ",(0,l.mdx)("inlineCode",{parentName:"p"},"watch")," build process detects a change, it'll rebuild the plugin, and this will cause the Developer Tool to see the resulting build changes and reload the plugin in the host."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-devtool-working-with-react-md-6bad914ef6ff32dd1c99.js.map