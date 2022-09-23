"use strict";(self.webpackChunkuxp_xd=self.webpackChunkuxp_xd||[]).push([[90567],{13753:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return u}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),l=n(91515),r=["components"],s={},d={_frontmatter:s},m=l.Z;function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"50-user-interface"},"5.0 User Interface"),(0,o.mdx)("p",null,"Not all plugins will require any user interface, but many will need to at least render error messages and such. Be sure to review the guidelines in this section to ensure that you’re providing a good user experience in your user interfaces."),(0,o.mdx)("h2",{id:"51-insertion-points"},"5.1 Insertion Points"),(0,o.mdx)("p",null,"Use the correct insertion point for your user interface. Right now, this means that your plugin’s UI must be rendered within a Modal Dialog."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.1.1) Render error messages using modal dialogs."),(0,o.mdx)("li",{parentName:"ul"},"(5.1.2) Render configuration options using modal dialogs."),(0,o.mdx)("li",{parentName:"ul"},"(5.1.3) Avoid displaying “success” messages at all, unless your plugin’s success is not visible to the user."),(0,o.mdx)("li",{parentName:"ul"},"(5.1.4) Render validation messages inline — don’t display another dialog.")),(0,o.mdx)("h2",{id:"52-modal-dialog-etiquette"},"5.2 Modal Dialog Etiquette"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.2.1) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Always"))," provide at least one button that can close the dialog without performing an action. Your user can always press ",(0,o.mdx)("strong",{parentName:"li"},"ESC"),", but not all users are familiar with keyboard shortcuts."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.2) Buttons that close the dialog (whether the intent is to cancel or start an operation, called ",(0,o.mdx)("strong",{parentName:"li"},"dismissive buttons"),") should always be visible in the dialog without scrolling."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.3) Dismissive buttons should be in the lower right corner of the dialog."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.4) Dismissive buttons should respect platform-specific button order. For “Cancel/Submit”-style button arrangements, this is handled automatically.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"On Windows, the order of buttons is “Submit”, then “Cancel”"),(0,o.mdx)("li",{parentName:"ul"},"On macOS, the order of buttons is “Cancel”, then “Submit”"))),(0,o.mdx)("li",{parentName:"ul"},"(5.2.5) Don’t show more than one dialog at once. The only exception to this rule is if your dialog needs to trigger a file or folder picker."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.6) Don’t show multiple dialogs in sequence for wizard-like flows. Use one dialog and dynamically update the content."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.7) ",(0,o.mdx)("strong",{parentName:"li"},"ENTER")," will submit your dialog — ensure that the response to this is ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"never"))," ",(0,o.mdx)("em",{parentName:"li"},"destructive"),"."),(0,o.mdx)("li",{parentName:"ul"},"(5.2.8) Reuse dialogs instead of recreating them.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"There are some exceptions here, such as error/success messages."))),(0,o.mdx)("li",{parentName:"ul"},"(5.2.9) Validate user input before dismissal. Don’t display a second dialog indicating validation failures.")),(0,o.mdx)("h2",{id:"53-alerts"},"5.3 Alerts"),(0,o.mdx)("p",null,"Alerts are currently handled using modal dialogs, and as such, are extremely invasive to the user’s workflow. Use them sparingly and only when necessary."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.3.1) Error conditions from which the plugin can’t recover should always be presented to the user in human-readable language. ",(0,o.mdx)("em",{parentName:"li"},"Plugins should")," ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"never"))," ",(0,o.mdx)("em",{parentName:"li"},"fail silently!")),(0,o.mdx)("li",{parentName:"ul"},"(5.3.2) Success conditions ",(0,o.mdx)("em",{parentName:"li"},"should not be displayed")," unless there is no other obvious indication of success."),(0,o.mdx)("li",{parentName:"ul"},"(5.3.3) Alerts should ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"never"))," trigger destructive actions if ",(0,o.mdx)("strong",{parentName:"li"},"ENTER")," or ",(0,o.mdx)("strong",{parentName:"li"},"ESC")," is pressed, since the user may have reacted out of instinct instead of fully processing the intent of the alert."),(0,o.mdx)("li",{parentName:"ul"},"(5.3.4) Keep alerts short and sweet, but don’t delve into “programmer-speak”."),(0,o.mdx)("li",{parentName:"ul"},"(5.3.5) Provide options and steps the user can take in the event of an error condition.")),(0,o.mdx)("h2",{id:"54-pill-buttons"},"5.4 Pill Buttons"),(0,o.mdx)("p",null,"Pill buttons are interactive, clickable buttons within your plugin’s user interface. These can have a variety of styles, including:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"cta")," — call to action (there should only ever be one present; see 5.4.1)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"primary")," — primary (default)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"secondary")," — secondary buttons"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"warning")," — used to indicate destructive actions")),(0,o.mdx)("p",null,"Buttons can also have a border (default) or be quiet (less visually intrusive)."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.4.1) There should ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"never"))," be more than one ",(0,o.mdx)("inlineCode",{parentName:"li"},"cta")," button in a dialog at once time."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.2) The ",(0,o.mdx)("inlineCode",{parentName:"li"},"cta")," button should ",(0,o.mdx)("em",{parentName:"li"},"usually")," be the default action (if ",(0,o.mdx)("strong",{parentName:"li"},"ENTER")," is pressed)."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.3) A ",(0,o.mdx)("inlineCode",{parentName:"li"},"warning")," button must ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"never"))," ","*",(0,o.mdx)("strong",{parentName:"li"},"*","be triggered if "),"ENTER","*","*"," is pressed."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.4) Use quiet buttons sparingly. The lack of border makes it more difficult for the user to recognize the button as a button."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.5) Don’t overuse buttons. The number of buttons on your dialog should be kept to a minimum."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.6) Use meaningful button labels. Avoid labels like “Yes”, “No”, “OK”, especially when it isn’t obvious to what those labels refer to. Instead use labels like “Don’t save”, “Export selection”, etc."),(0,o.mdx)("li",{parentName:"ul"},"(5.4.7) Buttons in the footer should respect the platform’s button order. “Cancel/Submit” button order is handled automatically. (See 5.2.4)")),(0,o.mdx)("h2",{id:"55-action-buttons"},"5.5 Action Buttons"),(0,o.mdx)("p",null,"Action buttons are icon or text buttons that are used to trigger actions within the plugin’s UI. They are ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("em",{parentName:"strong"},"never"))," used to dismiss a dialog. Use cases include a button that triggers a search for stock photos, a button that adds an item to a list, adding or removing tags, and more."),(0,o.mdx)("p",null,"Action buttons come in two flavors: standard (default, with a border) and quiet (no border)."),(0,o.mdx)("p",null,"Action buttons can also be used to indicate a selected view or option — for example, two action buttons could be used to indicate if the user is viewing data in grid mode or list mode."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.5.1) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Never"))," use action buttons to dismiss a dialog. Use pill buttons instead."),(0,o.mdx)("li",{parentName:"ul"},"(5.5.2) Action button images should be 14x14 points. Any other size may not be aligned correctly.")),(0,o.mdx)("h2",{id:"56-text-fields"},"5.6 Text Fields"),(0,o.mdx)("p",null,"Text fields are a great way to get user input and change the behavior of your plugin based on user feedback. There are two types of text fields: ",(0,o.mdx)("em",{parentName:"p"},"single-line")," and ",(0,o.mdx)("em",{parentName:"p"},"multi-line.")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.6.1) Don’t use single-line text fields for paragraph-type data entry."),(0,o.mdx)("li",{parentName:"ul"},"(5.6.2) Don’t use multi-line text fields for short text entry."),(0,o.mdx)("li",{parentName:"ul"},"(5.6.3) Text fields should be large enough to view the typical amount of data without scrolling."),(0,o.mdx)("li",{parentName:"ul"},"(5.6.4) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Never"))," listen for ",(0,o.mdx)("strong",{parentName:"li"},"ENTER")," and use it to advance the user’s focus. Allow the user to ",(0,o.mdx)("strong",{parentName:"li"},"TAB")," instead."),(0,o.mdx)("li",{parentName:"ul"},"(5.6.5) Text field labels should be to the left or top of the text field itself.")),(0,o.mdx)("h2",{id:"57-checkboxes"},"5.7 Checkboxes"),(0,o.mdx)("p",null,"Checkboxes are a great way to provide on/off options to the user."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.7.1) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Never"))," use checkboxes to trigger actions or dismiss dialogs."),(0,o.mdx)("li",{parentName:"ul"},"(5.7.2) Checkbox labels should be rendered to the right of the checkbox itself."),(0,o.mdx)("li",{parentName:"ul"},"(5.7.3) Checkbox groups should be clearly indicated with layout"),(0,o.mdx)("li",{parentName:"ul"},"(5.7.4) Checkboxes must ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"always"))," be changeable using their associated label")),(0,o.mdx)("h2",{id:"58-dropdowns"},"5.8 Dropdowns"),(0,o.mdx)("p",null,"Dropdowns provide a way for the user to select one item form a list of many using a compact form."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.8.1) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Never"))," use dropdowns to trigger additional actions or dismiss dialogs."),(0,o.mdx)("li",{parentName:"ul"},"(5.8.2) Keep lists short; don't use dropdowns when other controls (like sliders or text fields) would be more appropriate.")),(0,o.mdx)("h2",{id:"59-sliders"},"5.9 Sliders"),(0,o.mdx)("p",null,"Sliders provide a way for the user to specify a numeric value by indicating the value on a ranged control."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.9.1) Use sliders where appropriate. If there are only a few options, you might consider using a dropdown instead. If the range is very wide, it might be easier for the user if the control was a text field instead."),(0,o.mdx)("li",{parentName:"ul"},"(5.9.2) Don't use sliders to indicate progress."),(0,o.mdx)("li",{parentName:"ul"},"(5.9.3) When using sliders, you should provide some other mechanism for input."),(0,o.mdx)("li",{parentName:"ul"},"(5.9.4) ",(0,o.mdx)("strong",{parentName:"li"},(0,o.mdx)("em",{parentName:"strong"},"Always"))," display the slider value in some way, so that the user doesn't have to guess at the value of the slider.")),(0,o.mdx)("h2",{id:"510-images"},"5.10 Images"),(0,o.mdx)("p",null,"Images should be as crisp as possible for the user’s display. The runtime environment will typically try to select the best option if there are “@1x”, “@2x”, “@3x” options available locally, however this does not necessarily apply to remote images."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.10.1) Ensure icons are provided in 1x and 2x resolutions (at least)"),(0,o.mdx)("li",{parentName:"ul"},"(5.10.2) Icons for use in action buttons should be 14x14 points."),(0,o.mdx)("li",{parentName:"ul"},"(5.10.3) Avoid rescaling large images (this can cause poor performance)"),(0,o.mdx)("li",{parentName:"ul"},"(5.10.4) Avoid using images in lieu of other more suitable elements")),(0,o.mdx)("h2",{id:"511-links"},"5.11 Links"),(0,o.mdx)("p",null,"Links can be used to launch web pages in the user's system browser."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.11.1) Don't link to malicious content."),(0,o.mdx)("li",{parentName:"ul"},"(5.11.2) Prefer secure websites.")),(0,o.mdx)("h2",{id:"512-layout"},"5.12 Layout"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.12.1) Don’t rely on the size of the default elements when creating your layout. Instead, your layout should be responsive."),(0,o.mdx)("li",{parentName:"ul"},"(5.12.2) Don’t assume that a modal dialog will be as wide or high as you expect. Design your layout responsively."),(0,o.mdx)("li",{parentName:"ul"},"(5.12.3) If your layout is complex and takes more than a few milliseconds to build, consider deferring some of the layout until after you show your UI."),(0,o.mdx)("li",{parentName:"ul"},"(5.12.4) Respect the layout conventions of the platform. On Windows, layout is on a 16px grid. On macOS, it is on a 12px grid. However, you should refrain from hard-coding these units, as the grid sizes may change in the future.")),(0,o.mdx)("h2",{id:"513-menus"},"5.13 Menus"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.13.1) Menu items should be short and succinct. If menu items are too long, they will be truncated."),(0,o.mdx)("li",{parentName:"ul"},"(5.13.2) Menu items should use “…” whenever the operation will require additional information from the user.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"Good: “Insert stock photo…” (if a dialog of stock photos will appear, requiring further interaction)"),(0,o.mdx)("li",{parentName:"ul"},"Good: “Mirror selection” (no further options required)"),(0,o.mdx)("li",{parentName:"ul"},"Bad: “Mirror selection…” (if no further options required)"))),(0,o.mdx)("li",{parentName:"ul"},"(5.13.3) Menu items should clearly identify the action."),(0,o.mdx)("li",{parentName:"ul"},"(5.13.4) When plugins provide multiple actions, consider using submenus."),(0,o.mdx)("li",{parentName:"ul"},"(5.13.5) Menu items that trigger an action should generally be action-oriented. For example:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},'Good: "Insert stock photo..."'),(0,o.mdx)("li",{parentName:"ul"},'Good: "Export selected artboards..."'))),(0,o.mdx)("li",{parentName:"ul"},"(5.13.6) When using submenus, the parent menu should be easily identified with the plugin itself. Unless there is a compelling reason otherwise, your parent menu and plugin name in the Plugin Manager should match."),(0,o.mdx)("li",{parentName:"ul"},"(5.13.7) When using submenus, never use ellipses in the parent menu title.")),(0,o.mdx)("h2",{id:"514-onboarding"},"5.14 Onboarding"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"(5.14.1) Plugins should provide sufficient onboarding guidance for users who may be unfamiliar with the expected use."),(0,o.mdx)("li",{parentName:"ul"},"(5.14.2) Consider linking to a help or support page in your plugin's error messages."),(0,o.mdx)("li",{parentName:"ul"},"(5.14.3) Consider using animated GIFs to explain how to use the plugin."),(0,o.mdx)("li",{parentName:"ul"},'(5.14.4) Consider having an "About" menu item (if your plugin uses submenus or has UI).')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-develop-plugin-development-devbestpractices-5-ui-md-67bc03ff966ee590879b.js.map