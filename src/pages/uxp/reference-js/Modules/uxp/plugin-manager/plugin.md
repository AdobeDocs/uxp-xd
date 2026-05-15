---
title: Plugin
description: Plugin object receveied in the PluginManager.getPlugins list, used for IPC
---



# Plugin
Plugin object receveied in the PluginManager.getPlugins list, used for IPC(Inter Plugin Communication)




## id ⇒ `String`
Get plugin id

**Returns**: `String`  




## version ⇒ `String`
Get plugin version

**Returns**: `String`  




## name ⇒ `String`
Get plugin name

**Returns**: `String`  




## manifest ⇒ `JSON`
Get plugin manifest

**Returns**: `JSON`  




## enabled ⇒ `Boolean`
Get plugin enabled/disabled state

**Returns**: `Boolean`  




## showPanel(panelId)
Show panel with the given ID. This api may be routed to the host app which can chose to disallow it. Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

Note: There isn't an API to hide a panel. Panels can be shown but can not be hid.

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| panelId | `String` | id of the panel to be shown |





## invokeCommand(commandId, ...params)
Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.
Used for commmunicating with other plugins (IPC : Inter Plugin Communication)

**Returns**: `Promise`  

| Param | Type | Description |
| --- | --- | --- |
| commandId | `String` | id of the command to be invoked |
| ...params |  | command arguments to be passed to invokeCommand |


  