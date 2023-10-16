# .MessageSendingOperationsApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdSendMessagePost**](MessageSendingOperationsApi.md#phoneIdSendMessagePost) | **POST** /{phone_id}/sendMessage | 


# **phoneIdSendMessagePost**
> SendMessageResponse phoneIdSendMessagePost(phoneIdSendMessagePostRequest)

Used for sending message to a chat. A text, image, video, sound and document can be sent.  **This endpoint adds messages to your phone\'s sending queue. If your messages not delivering to phones please check your instance logs, queue endpoint or connection (/screen).**  **Curl example:** (You need to change product_id, phone_id and token[x-maytapi-key] with your product\'s values...) ```bash curl -X POST \\ \'https://api.maytapi.com/api/dc01968f-####-####-####-7cfcf51aa423/12/sendMessage\' \\   -H \'Content-Type: application/json\' \\   -H \'x-maytapi-key: b267697c-####-####-####-2435e812efc1\' \\   -d \'{  \"message\": \"http://placehold.it/180\",   \"text\": \"\",   \"to_number\": \"+905301111111\",   \"type\": \"media\" }\'

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MessageSendingOperationsApi(configuration);

let body:.MessageSendingOperationsApiPhoneIdSendMessagePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdSendMessagePostRequest | - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\"905301234567-1574073754@g.us\"** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \'Request body examples\' section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints.
  phoneIdSendMessagePostRequest: {
    toNumber: "905301234567",
    message: "Message Text",
    type: "text",
    text: "Message Caption (optional)",
    filename: "demo.txt",
    skipFilter: true,
    forwardCaption: true,
    replyTo: "50d8b950-a67f-11eb-91cc-d97af631df95",
    latitude: 41.0082,
    longitude: 28.9784,
  },
};

apiInstance.phoneIdSendMessagePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdSendMessagePostRequest** | **PhoneIdSendMessagePostRequest**| - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\&quot;905301234567-1574073754@g.us\&quot;** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \&#39;Request body examples\&#39; section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**SendMessageResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the id of the chat and the id of the message. You can use message id to track acknowledgement status. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


