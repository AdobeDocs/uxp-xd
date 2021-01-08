---
title: Documentation-Adobe XD
description: Build UXP plugins for Adobe XD with HTML, CSS, and JavaScript. Automate workflows, build new features, and more.
---

<Hero slots="image, heading, text" background="rgb(64, 34, 138)"/>

![Hero image](./illustration.png)

# UXP for Adobe XD documentation

UXP (**U**nified E**x**tensibility **P**latform) lets you build plugins for XD and other Creative Cloud apps. Automate workflows, build new features, and connect to other software and services—all with HTML, CSS, and JavaScript.

<Resources slots="heading, links"/>

#### Resources

- [Develop: API documentation, code tutorials, and samples](/develop/)
- [Design: UX patterns, UI elements, and design guidelines](/design/)
- [Share: Submission checklist, packaging, and marketing](/distribution/)

## Overview

This documentation helps developers build UXP plugins for Adobe XD versions 35 and later. If you're building UXP plugins for earlier versions of XD, see the [Adobe XD Platform page](https://adobexdplatform.com).

UXP provides modern JavaScript, a curated selection of UI components, and a more streamlined workflow for plugin developers.

With UXP, you can develop:

- Direct Actions - headless plugins that interface with XD, the host OS, and the network, free of any UI.
- Modal Dialogs - plugins that implement one or more modal dialogs. Good for simple user interfaces that don't need to persist.
- Panels - full-featured panels that look like any other panel in XD. UXP panels can contain as complex a UI as you wish to develop. They can be resized, docked, opened and closed just like native XD panels. And with appropriate CSS constructs, your UXP panels can be theme-aware and change as the user switches UI themes in XD.

## Discover

<DiscoverBlock slots="heading, link, text"/>

### Get started

[Quick Start: Direct Action](/develop/tutorials/quick-start/)

With this Quick Start, you'll get a solid grasp of how to create your own XD plugin.

<DiscoverBlock slots="link, text"/>

[Quick Start: Panel](/develop/tutorials/quick-start-panel/)

Let’s walk through creating your first Adobe XD panel plugin together.

<DiscoverBlock slots="link, text"/>

[Quick Start: React](/develop/tutorials/quick-start-react/)

UXP supports many popular JavaScript frameworks. Let's build a panel-based plugin with React.

<DiscoverBlock slots="heading, link, text"/>

### Guides

[Designing plugins for XD](/design/)

These guidelines will help you define the best user experience for your plugin.

<DiscoverBlock slots="link, text"/>

[Develop](/develop/)

A quick overview of **what you can build** and **how to get started**.

<DiscoverBlock slots="link, text"/>

[UXP Developer Tool](guides/uxp-developer-tool/)

The UXP Developer Tool is a GUI app that helps you create, debug, and distribute plugins. It's an essential part of any UXP plugin workflow.

<DiscoverBlock slots="link, text"/>

[Sample Code](https://github.com/AdobeXD/plugin-samples)

Want to jump right in building a plugin? Check out these code samples and make immediate progress.

## API References

The APIs come in two parts: the methods and properties unique to Photoshop, and those exposed by UXP to all UXP-enabled Creative Cloud applications.

<DiscoverBlock slots="link, text"/>

[XD API](/reference/)

The API Reference for XD calls exposed through UXP.

<DiscoverBlock slots="link, text"/>

[UXP API](uxp/reference-js/)

The API Reference for UXP itself. Includes UI APIs (including HTML and CSS), file and network I/O, and more.

## Share

You've built the world's greatest plugin. What do you do now? This section explains how to package, distribute, and market your plugin.

<DiscoverBlock slots="link, text"/>

[Packaging Your Plugin](distribution/packaging-your-plugin/)

Packaging your UXP plugin is a breeze. In many cases, it's just one click away.

<DiscoverBlock slots="link, text"/>

[Options for Distribution](distribution/distribution-options/)

Did you build a plugin just for yourself, your friends, or your employer? Or do you want to distribute through the Creative Cloud Plugin Marketplace on millions of desktops? Read this section to help you decide.

<DiscoverBlock slots="link, text"/>

[Submission and Review](distribution/submission-checklist/)

Learn about the review process and associated timelines for Creative Cloud plugins and integrations, and follow our review submission checklist.

<DiscoverBlock slots="link, text"/>

[Marketing Your Plugin](distribution/marketing/)

Submitting your plugin is only half the battle. Now you have to tell people about it. Read this for some ideas on how to best market your plugin.

<Community />
