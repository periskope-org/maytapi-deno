# .SessionControllingOperationsApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdBackupGet**](SessionControllingOperationsApi.md#phoneIdBackupGet) | **GET** /{phone_id}/backup | DEPRECATED Multi-Device doesn\&#39;t support this feature.
[**phoneIdConfigGet**](SessionControllingOperationsApi.md#phoneIdConfigGet) | **GET** /{phone_id}/config | 
[**phoneIdConfigPost**](SessionControllingOperationsApi.md#phoneIdConfigPost) | **POST** /{phone_id}/config | 
[**phoneIdDeleteGet**](SessionControllingOperationsApi.md#phoneIdDeleteGet) | **GET** /{phone_id}/delete | DEPRECATED please use /factoryreset
[**phoneIdFactoryresetGet**](SessionControllingOperationsApi.md#phoneIdFactoryresetGet) | **GET** /{phone_id}/factoryreset | 
[**phoneIdLogoutGet**](SessionControllingOperationsApi.md#phoneIdLogoutGet) | **GET** /{phone_id}/logout | 
[**phoneIdRedeployGet**](SessionControllingOperationsApi.md#phoneIdRedeployGet) | **GET** /{phone_id}/redeploy | 
[**phoneIdRestartGet**](SessionControllingOperationsApi.md#phoneIdRestartGet) | **GET** /{phone_id}/restart | DEPRECATED please use /redeploy
[**phoneIdRestorePost**](SessionControllingOperationsApi.md#phoneIdRestorePost) | **POST** /{phone_id}/restore | DEPRECATED Multi-Device doesn\&#39;t support this feature.


# **phoneIdBackupGet**
> BackupSuccess phoneIdBackupGet()

**[DEPRECATED Multi-Device doesn\'t support this feature]** Backups the material needed for opening the same chat screen for the current phone number. This call is useful when the session and also the status of the session is active. The response information can be used to open the chat screen with the POST restore call. If logout is called after getting the backup information, the data obtained from there will not be valid anymore.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdBackupGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdBackupGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**BackupSuccess**

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

# **phoneIdConfigGet**
> PhoneConfig phoneIdConfigGet()

Get phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdConfigGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdConfigGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneConfig**

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

# **phoneIdConfigPost**
> PhoneConfig phoneIdConfigPost(phoneIdConfigPostRequest)

Set phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.  With this api you can define webhook for individual phones.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdConfigPostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdConfigPostRequest | With this api you can define webhook for individual phones.
  phoneIdConfigPostRequest: {
    webhook: "https://myserver.com/send/callback/here",
    ackDelivery: false,
  },
};

apiInstance.phoneIdConfigPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdConfigPostRequest** | **PhoneIdConfigPostRequest**| With this api you can define webhook for individual phones. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneConfig**

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

# **phoneIdDeleteGet**
> DeleteSuccess phoneIdDeleteGet()

**[DEPRECATED please use /factoryreset]** Deletes the phone and closes the session of that number.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdDeleteGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdDeleteGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**DeleteSuccess**

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

# **phoneIdFactoryresetGet**
> JustSuccess phoneIdFactoryresetGet()

Factory resets everything about phone instance to a new created instance state. This is a replacement for delete/create a new phone.   Your phone instances can\'t be deleted anymore. This is implemented beacuse some of our customers were loosing their phone instance when their subscription(or trial) suspended. With the new system your phones would only set to disabled state and after you fix your subscription you can re-enable your phones either making a request(/screen etc.) to instance or from our control panel.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdFactoryresetGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdFactoryresetGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**JustSuccess**

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

# **phoneIdLogoutGet**
> JustSuccess phoneIdLogoutGet()

Logouts the number from the current session and converts the screen to qr-code screen.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdLogoutGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdLogoutGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**JustSuccess**

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

# **phoneIdRedeployGet**
> PhoneIdRedeployGet200Response phoneIdRedeployGet()

Redeploys docker instance of your phone. If your phone having any unexpected problems you can use this endpoint to reboot the instance.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdRedeployGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdRedeployGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdRedeployGet200Response**

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

# **phoneIdRestartGet**
> JustSuccess phoneIdRestartGet()

**[DEPRECATED please use /redeploy]** Restarts the session by refreshing the page.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdRestartGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdRestartGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**JustSuccess**

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

# **phoneIdRestorePost**
> JustSuccess phoneIdRestorePost(backupData)

**[DEPRECATED Multi-Device doesn\'t support this feature]** Reloads the current session based on the reload data (can be obtained from ***POST backup***).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SessionControllingOperationsApi(configuration);

let body:.SessionControllingOperationsApiPhoneIdRestorePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // BackupData | All the session restoring data needed.
  backupData: {
    wABrowserId: "...",
    debugCursor: "...",
    whatsappMutex: "...",
    otherKeys: "(other values)",
  },
};

apiInstance.phoneIdRestorePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **backupData** | **BackupData**| All the session restoring data needed. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**JustSuccess**

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


