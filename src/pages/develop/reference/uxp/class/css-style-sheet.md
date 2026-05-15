---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
title: Css Style Sheet
description: Represents a CSS style sheet
---




## CSSStyleSheet

**Extends**: [`StyleSheet`](#stylesheet)

**Category**: browser, cssom

**See**: [https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet)

* [CSSStyleSheet](#CSSStyleSheet)
    * [new CSSStyleSheet()](#new-cssstylesheet-new)
    * [.cssRules](#CSSStyleSheet+cssRules) : [`CSSRuleList`](#cssrulelist)
    * [.rules](#CSSStyleSheet+rules) : [`CSSRuleList`](#cssrulelist)
    * [.href](#stylesheet-href) : `DOMString`
    * [.type](#stylesheet-type) : `DOMString`
    * [.insertRule(rule, [index])](#cssstylesheet-insertrule)
    * [.deleteRule(index)](#cssstylesheet-deleterule)



### new CSSStyleSheet()
Represents a CSS style sheet



### cssStyleSheet.cssRules : [`CSSRuleList`](#cssrulelist)
Return the list of CSS Rules

**Read only**



### cssStyleSheet.rules : [`CSSRuleList`](#cssrulelist)
Return the list of CSS Rules

**Read only**



### cssStyleSheet.href : `DOMString`

**Read only**



### cssStyleSheet.type : `DOMString`

**Default**: `undefined`

**Read only**



### cssStyleSheet.insertRule(rule, [index])
Insert a CSS Rule at the specified index.

| Param | Type | Default |
| --- | --- | --- |
| rule | `\*` |  |
| \[index] | `number` | `0` |



### cssStyleSheet.deleteRule(index)
Delete the rule at the specified index

| Param | Type |
| --- | --- |
| index | `\*` |

