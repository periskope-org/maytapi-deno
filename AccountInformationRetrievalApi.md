# .AccountInformationRetrievalApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPhonePost**](AccountInformationRetrievalApi.md#addPhonePost) | **POST** /addPhone | 
[**listPhonesGet**](AccountInformationRetrievalApi.md#listPhonesGet) | **GET** /listPhones | 
[**logsGet**](AccountInformationRetrievalApi.md#logsGet) | **GET** /logs | 
[**productGet**](AccountInformationRetrievalApi.md#productGet) | **GET** /product | 
[**queuesGet**](AccountInformationRetrievalApi.md#queuesGet) | **GET** /queues | 
[**setAckPreferencePost**](AccountInformationRetrievalApi.md#setAckPreferencePost) | **POST** /setAckPreference | 
[**setWebhookPost**](AccountInformationRetrievalApi.md#setWebhookPost) | **POST** /setWebhook | 


# **addPhonePost**
> PhoneObjWithPid addPhonePost()

Adds a new phone to the product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:.AccountInformationRetrievalApiAddPhonePostRequest = {
  // AddPhoneBody | If a number is wanted to be specified by adding the phone, that number is given. Otherwise, the number will be updated in database, when qr-screen is passed later. (optional)
  addPhoneBody: {
    number: "...",
  },
};

apiInstance.addPhonePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPhoneBody** | **AddPhoneBody**| If a number is wanted to be specified by adding the phone, that number is given. Otherwise, the number will be updated in database, when qr-screen is passed later. |


### Return type

**PhoneObjWithPid**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listPhonesGet**
> Array<PhoneObj> listPhonesGet()

Returns information of all the phones registered to the given product.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:any = {};

apiInstance.listPhonesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<PhoneObj>**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **logsGet**
> LogsGet200Response logsGet()

Returns logs of all the phones.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:any = {};

apiInstance.logsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **productGet**
> ProductData productGet()

Returns the information of the product with the given product id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:any = {};

apiInstance.productGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ProductData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **queuesGet**
> QueuesGet200Response queuesGet()

Returns information of all the phones registered to the given product with queue information.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:any = {};

apiInstance.queuesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**QueuesGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setAckPreferencePost**
> ProductData setAckPreferencePost(ackSet)

Sets the option for getting the acknowledge messages from the webhook to true or false.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:.AccountInformationRetrievalApiSetAckPreferencePostRequest = {
  // AckSet | Acknowledge messages taking preference is indicated.
  ackSet: {
    ackDelivery: true,
  },
};

apiInstance.setAckPreferencePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ackSet** | **AckSet**| Acknowledge messages taking preference is indicated. |


### Return type

**ProductData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the information of updated selected product. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **setWebhookPost**
> ProductData setWebhookPost(UNKNOWN_BASE_TYPE)

Sets a webhook address for the selected product. Webhook is used for delivering the incoming messages and acknowledge notifications of sent messages to the user. The notification formats that reaches to the webhook are as follows:

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountInformationRetrievalApi(configuration);

let body:.AccountInformationRetrievalApiSetWebhookPostRequest = {
  // UNKNOWN_BASE_TYPE | Webhook data is indicated.
  UNKNOWN_BASE_TYPE: {
    webhook: "https://myserver.com/send/callback/here",
  },
};

apiInstance.setWebhookPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | **UNKNOWN_BASE_TYPE**| Webhook data is indicated. |


### Return type

**ProductData**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the information of updated selected product. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


