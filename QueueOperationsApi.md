# .QueueOperationsApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdPurgeQueueGet**](QueueOperationsApi.md#phoneIdPurgeQueueGet) | **GET** /{phone_id}/purgeQueue | 
[**phoneIdQueueGet**](QueueOperationsApi.md#phoneIdQueueGet) | **GET** /{phone_id}/queue | 


# **phoneIdPurgeQueueGet**
> PhoneIdPurgeQueueGet200Response phoneIdPurgeQueueGet()

Clears phone\'s send message queue.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueOperationsApi(configuration);

let body:.QueueOperationsApiPhoneIdPurgeQueueGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdPurgeQueueGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdPurgeQueueGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Clears phone\&#39;s send message queue. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdQueueGet**
> PhoneIdQueueGet200Response phoneIdQueueGet()

Returns the queue info of the phone.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .QueueOperationsApi(configuration);

let body:.QueueOperationsApiPhoneIdQueueGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdQueueGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdQueueGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the queue info of the phone. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


