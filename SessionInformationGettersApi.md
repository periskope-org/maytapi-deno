# .SessionInformationGettersApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdContactCidGet**](SessionInformationGettersApi.md#phoneIdContactCidGet) | **GET** /{phone_id}/contact/:cid | 
[**phoneIdContactsGet**](SessionInformationGettersApi.md#phoneIdContactsGet) | **GET** /{phone_id}/contacts | 
[**phoneIdQrCodeGet**](SessionInformationGettersApi.md#phoneIdQrCodeGet) | **GET** /{phone_id}/qrCode | 
[**phoneIdScreenGet**](SessionInformationGettersApi.md#phoneIdScreenGet) | **GET** /{phone_id}/screen | 
[**phoneIdStatusGet**](SessionInformationGettersApi.md#phoneIdStatusGet) | **GET** /{phone_id}/status | 


# **phoneIdContactCidGet**
> PhoneIdContactCidGet200Response phoneIdContactCidGet()

Returns the information of the number you specified in Whatsapp

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionInformationGettersApi(configuration);

let body:.SessionInformationGettersApiPhoneIdContactCidGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdContactCidGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdContactCidGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the information of the number you specified in Whatsapp |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdContactsGet**
> PhoneIdContactsGet200Response phoneIdContactsGet()

Returns the contacts in the current whatsapp instance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionInformationGettersApi(configuration);

let body:.SessionInformationGettersApiPhoneIdContactsGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdContactsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdContactsGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the contacts in the current whatsapp instance. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdQrCodeGet**
> void phoneIdQrCodeGet()

Returns the qrCode in the current session if there is one.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionInformationGettersApi(configuration);

let body:.SessionInformationGettersApiPhoneIdQrCodeGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdQrCodeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the screenshot of the qr code in the current session. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdScreenGet**
> void phoneIdScreenGet()

Returns the status of the current session.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionInformationGettersApi(configuration);

let body:.SessionInformationGettersApiPhoneIdScreenGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdScreenGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the screenshot of the screen in the current session. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdStatusGet**
> Status phoneIdStatusGet()

Returns the screenshot of the screen in the current session.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionInformationGettersApi(configuration);

let body:.SessionInformationGettersApiPhoneIdStatusGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdStatusGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**Status**

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


