---
keywords:
  - Creative Cloud
  - API Documentation
  - UXP
  - Plugin
---


<a name="module-global-xmlhttprequest" id="module-global-xmlhttprequest"></a>

## XMLHttpRequest

* [~XMLHttpRequest](#module-global-xmlhttprequest)
    * [new XMLHttpRequest()](#new-module-global-xmlhttprequest-new)
    * [.responseURL](#module-global-xmlhttprequest-responseurl)
    * [.readyState](#module-global-xmlhttprequest-readystate)
    * [.responseText](#module-global-xmlhttprequest-responsetext)
    * [.responseXML](#module-global-xmlhttprequest-responsexml)
    * [.response](#module-global-xmlhttprequest-response)
    * [.status](#module-global-xmlhttprequest-status)
    * [.statusText](#module-global-xmlhttprequest-statustext)
    * [.timeout](#module-global-xmlhttprequest-timeout)
    * [.timeout](#module-global-xmlhttprequest-timeout)
    * [.responseType](#module-global-xmlhttprequest-responsetype)
    * [.responseType](#module-global-xmlhttprequest-responsetype)
    * [.withCredentials](#module-global-xmlhttprequest-withcredentials)
    * [.withCredentials](#module-global-xmlhttprequest-withcredentials)
    * [.upload](#module-global-xmlhttprequest-upload)
    * [.abort()](#module-global-xmlhttprequest-abort)
    * [.getAllResponseHeaders()](#module-global-xmlhttprequest-getallresponseheaders)
    * [.getResponseHeader(name)](#module-global-xmlhttprequest-getresponseheader)
    * [.open(method, url, [async], [user], [password])](#module-global-xmlhttprequest-open)
    * [.overrideMimeType(mimetype)](#module-global-xmlhttprequest-overridemimetype)
    * [.setRequestHeader(header, data)](#module-global-xmlhttprequest-setrequestheader)
    * [.send([data])](#module-global-xmlhttprequest-send)

<a name="new-module-global-xmlhttprequest-new" id="new-module-global-xmlhttprequest-new"></a>

### new XMLHttpRequest()
The constructor initializes an XMLHttpRequest. It must be called before any other method calls.

<a name="module-global-xmlhttprequest-responseurl" id="module-global-xmlhttprequest-responseurl"></a>

### xmlHttpRequest.responseURL
Unsupported

**Read only**

<a name="module-global-xmlhttprequest-readystate" id="module-global-xmlhttprequest-readystate"></a>

### xmlHttpRequest.readyState
Returns an unsigned short, the state of the request.

**Returns**: `int` - returns the state of the XMLHttpRequest client.

**Read only**

<a name="module-global-xmlhttprequest-responsetext" id="module-global-xmlhttprequest-responsetext"></a>

### xmlHttpRequest.responseText
Returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.

**Returns**: `string` - returns the received text response.

**Read only**

<a name="module-global-xmlhttprequest-responsexml" id="module-global-xmlhttprequest-responsexml"></a>

### xmlHttpRequest.responseXML
Returns the XML document that supports W3C DOM level2 specification.
The XML document is constructed with received bytes using XMLHttpRequest.

**Returns**: `object` - returns the XML document response.

**Throws**:

- [`DOMException`](#domexception) if responseType is not the empty string or "document".

**Read only**

<a name="module-global-xmlhttprequest-response" id="module-global-xmlhttprequest-response"></a>

### xmlHttpRequest.response
Returns the response from the server in the type specified by responseType.
Only valid after the load event fires.

**Returns**: `string` \| `ArrayBuffer` \| `Blob` \| `Object` - returns an ArrayBuffer, Blob, Document, JavaScript object, or a DOMString, depending on the value of;
XMLHttpRequest.responseType that contains the response entity body.

**Read only**

<a name="module-global-xmlhttprequest-status" id="module-global-xmlhttprequest-status"></a>

### xmlHttpRequest.status

**Returns**: `string` - returns the HTTP status code received from the server.

**Read only**

<a name="module-global-xmlhttprequest-statustext" id="module-global-xmlhttprequest-statustext"></a>

### xmlHttpRequest.statusText

**Returns**: `string` - returns the response's status message with regard to the HTTP status code received from the server.

**Read only**

<a name="module-global-xmlhttprequest-timeout" id="module-global-xmlhttprequest-timeout"></a>

### xmlHttpRequest.timeout
The number of milliseconds a request can take before automatically being terminated.
The default value is 0, which means there is no timeout.

<a name="module-global-xmlhttprequest-timeout" id="module-global-xmlhttprequest-timeout"></a>

### xmlHttpRequest.timeout
Terminates a request and a timeout event will be dispatched after the given time has passed.

**Throws**:

- [`DOMException`](#domexception) if called for synchronous request.

| Param | Type | Description |
| --- | --- | --- |
| value | `number` | number of milliseconds a request can take automatically being terminated. |

<a name="module-global-xmlhttprequest-responsetype" id="module-global-xmlhttprequest-responsetype"></a>

### xmlHttpRequest.responseType

**Returns**: `string` - returns a string taken from the XMLHttpRequestResponseType enum which specifies;
what type of data the response contains.

<a name="module-global-xmlhttprequest-responsetype" id="module-global-xmlhttprequest-responsetype"></a>

### xmlHttpRequest.responseType

| Param | Type | Description |
| --- | --- | --- |
| value | `string` | A string indicating the type of data contained in the response. This should be "arraybuffer", "blob", "document", "json" or "text". |

<a name="module-global-xmlhttprequest-withcredentials" id="module-global-xmlhttprequest-withcredentials"></a>

### xmlHttpRequest.withCredentials
Indicates whether to send cookies on a HTTP request.
When the value is set to true, XMLHttpRequest sends cookies. Otherwise, cookies are not sent.

<a name="module-global-xmlhttprequest-withcredentials" id="module-global-xmlhttprequest-withcredentials"></a>

### xmlHttpRequest.withCredentials

**Throws**:

- [`DOMException`](#domexception) when set if state is not unsent or opened.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | `Boolean` | `true` | whether to send cookies on a HTTP request. |

<a name="module-global-xmlhttprequest-upload" id="module-global-xmlhttprequest-upload"></a>

### xmlHttpRequest.upload
If XMLHttpRequest has data in the body to upload, upload related event will be notified via XMLHttpRequest.upload.

**Returns**: `XMLHttpRequestEventUpload` - returns XMLHttpRequestEventUpload object.

**Read only**

<a name="module-global-xmlhttprequest-abort" id="module-global-xmlhttprequest-abort"></a>

### xmlHttpRequest.abort()
Aborts the request if it has already been sent.

<a name="module-global-xmlhttprequest-getallresponseheaders" id="module-global-xmlhttprequest-getallresponseheaders"></a>

### xmlHttpRequest.getAllResponseHeaders()
Returns sorted and combined response’s header list.
Each header field is defined by a group of [lower cased name]": "[value]"\r\n". Combined value is separated by ", ".

**Returns**: `string` - returns response’s header list.

**Read only**

<a name="module-global-xmlhttprequest-getresponseheader" id="module-global-xmlhttprequest-getresponseheader"></a>

### xmlHttpRequest.getResponseHeader(name)
Returns the matching value of the given field name in response's header.
The search key value is case-insensitive

**Returns**: `string` - returns the value of the given name in response's header list.

**Read only**

| Param | Type | Description |
| --- | --- | --- |
| name | `string` | The name to search in response's header list. |

<a name="module-global-xmlhttprequest-open" id="module-global-xmlhttprequest-open"></a>

### xmlHttpRequest.open(method, url, [async], [user], [password])
Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest() instead.
Self-signed certificates are not currently supported for HTTPS connections.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| method | `string` |  | The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs. |
| url | `string` |  | A DOMString representing the URL to send the request to. |
| [async] | `boolean` | `true` | An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously.                               If this value is false, the send() method does not return until the response is received.                               If true, notification of a completed transaction is provided using event listeners.                               This must be true if the multipart attribute is true, or an exception will be thrown. |
| [user] | `string` | `null` | The optional user name to use for authentication purposes; by default, this is the null value. |
| [password] | `string` | `null` | The optional password to use for authentication purposes; by default, this is the null value. |

<a name="module-global-xmlhttprequest-overridemimetype" id="module-global-xmlhttprequest-overridemimetype"></a>

### xmlHttpRequest.overrideMimeType(mimetype)
Use a MIME type other than the one provided by the server when interpreting the data being transferred in a request.
If parsing the MIME type fails, "application/octet-stream" will be used to interpret the data.

**Throws**:

- [`DOMException`](#domexception) if state is loading or done

| Param | Type | Description |
| --- | --- | --- |
| mimetype | `string` | MIME type Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid. |

<a name="module-global-xmlhttprequest-setrequestheader" id="module-global-xmlhttprequest-setrequestheader"></a>

### xmlHttpRequest.setRequestHeader(header, data)
Sets the value of an HTTP request header. You must call setRequestHeader()after open(), but before send().

| Param | Type | Description |
| --- | --- | --- |
| header | `string` | The name of the header whose value is to be set. |
| data | `string` | The value to set as the body of the header. |

<a name="module-global-xmlhttprequest-send" id="module-global-xmlhttprequest-send"></a>

### xmlHttpRequest.send([data])
Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [data] | `\*` | `` | A body of data to be sent in the XHR request. This can be: A Document, in which case it is serialized before being sent. A BodyInit, which as per the Fetch spec can be a Blob, BufferSource, FormData, URLSearchParams, ReadableStream, or USVString object. If no value is specified for the body, a default value of null is used. The best way to send binary content (e.g. in file uploads) is by using an ArrayBufferView or Blob in conjunction with the send() method. There is a caveat for sending a FormData object. The files in the FormData object are being read after calling this method. To ensure uploading files as-is, the file contents or files shouldn't be changed until uploading files to the server is done. @see XMLHttpRequest.upload. If there is a problem during reading files, the XMLHttpRequest transaction initiated by this method can be aborted with an error event fired. |

