---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---

# Network

# Network I/O

The Network I/O subsystem mimics the standards found on the web. The following API surfaces are available:

- Web Sockets
  - [XD Documentation](/develop/reference/uxp/class/WebSocket/)
  - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- XMLHttpRequest
  - [XD Documentation](/develop/reference/uxp/class/XMLHttpRequest/)
  - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- Fetch
  - [XD Documentation](/develop/reference/uxp/function/fetch/)
  - [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## Web Socket Support

The entire web socket API is supported, _except_ for extensions handling.

## XMLHttpRequest Support

Most of the XHR API surface is supported, including:

- Setting request headers
- Getting response headers
- Event handling
- Sending text and binary data
  - Text is expected to be UTF8 encoded.
  - Binary data must use `ArrayBuffer`, not `Blob`

Unsupported portions of the surface:

- `responseURL`
- Sending / receiving Blobs is not supported
- Synchronous XHR will throw an error

## Fetch Support

Fetch is polyfilled on top of the XHR implementation using https://github.com/github/fetch.
