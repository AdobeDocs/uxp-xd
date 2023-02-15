---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---


# Distribution options

Once you have a packaged plugin, you're ready to distribute. You can make your plugin available to users through the Creative Cloud Plugin Marketplace or via direct distribution.

<SummaryBlock slots="heading, text, buttons" background="rgb(141, 52, 78)" />

## Distribute on Creative Cloud Plugin Marketplace

Use the Developer Distribution portal to submit your plugin to the Plugin Marketplace to reach a large number of users.
Users can download your plugin directly in the Creative Cloud desktop app.

- [Developer Distribution Documentation](https://developer.adobe.com/developer-distribution/creative-cloud/overview/)

## Direct distribution

Direct distribution lets you choose how to provide users with access to your plugin. Your website? Email? Cloud file share? It's up to you!

If you distribute a .XDX file, installation is as simple as one double-click.

<InlineAlert variant="help" slots="header, text1, text2, text3" />

Info

Note that attaching a .XDX file directly to an email might cause the email to get blocked.

Outlook fails silently; the message disappears into the void, without being delivered to the recipient. Gmail notifies the sender that the message will be blocked.

If you also have the same listing in the Plugin Manager, make sure the `name` field in the manifest matches the same field in the Plugin Manager listing. If there is a discrepancy, the name in the Plugin Manager will be used.



