# .BusinessCatalogBetaApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdCatalogGet**](BusinessCatalogBetaApi.md#phoneIdCatalogGet) | **GET** /{phone_id}/catalog | 


# **phoneIdCatalogGet**
> PhoneIdCatalogGet200Response phoneIdCatalogGet()

Returns catalog products info of the business profile. You only need productId to send products to users.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BusinessCatalogBetaApi(configuration);

let body:.BusinessCatalogBetaApiPhoneIdCatalogGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
};

apiInstance.phoneIdCatalogGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdCatalogGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns catalog products info of the business profile |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


