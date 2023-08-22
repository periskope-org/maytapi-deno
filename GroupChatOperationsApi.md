# .GroupChatOperationsApi

All URIs are relative to *https://api.maytapi.com/api/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx*

Method | HTTP request | Description
------------- | ------------- | -------------
[**phoneIdCreateGroupPost**](GroupChatOperationsApi.md#phoneIdCreateGroupPost) | **POST** /{phone_id}/createGroup | 
[**phoneIdGetGroupsConversationIdGet**](GroupChatOperationsApi.md#phoneIdGetGroupsConversationIdGet) | **GET** /{phone_id}/getGroups/{conversation_id} | 
[**phoneIdGetGroupsGet**](GroupChatOperationsApi.md#phoneIdGetGroupsGet) | **GET** /{phone_id}/getGroups | 
[**phoneIdGroupAddPost**](GroupChatOperationsApi.md#phoneIdGroupAddPost) | **POST** /{phone_id}/group/add | 
[**phoneIdGroupConfigPost**](GroupChatOperationsApi.md#phoneIdGroupConfigPost) | **POST** /{phone_id}/group/config | 
[**phoneIdGroupDemotePost**](GroupChatOperationsApi.md#phoneIdGroupDemotePost) | **POST** /{phone_id}/group/demote | 
[**phoneIdGroupPromotePost**](GroupChatOperationsApi.md#phoneIdGroupPromotePost) | **POST** /{phone_id}/group/promote | 
[**phoneIdGroupRemovePost**](GroupChatOperationsApi.md#phoneIdGroupRemovePost) | **POST** /{phone_id}/group/remove | 
[**phoneIdLeaveGroupPost**](GroupChatOperationsApi.md#phoneIdLeaveGroupPost) | **POST** /{phone_id}/leaveGroup | 
[**phoneIdSetProfileImagePost**](GroupChatOperationsApi.md#phoneIdSetProfileImagePost) | **POST** /{phone_id}/setProfileImage | 


# **phoneIdCreateGroupPost**
> PhoneIdCreateGroupPost200Response phoneIdCreateGroupPost(phoneIdCreateGroupPostRequest)

Sets the option for getting the acknowledge messages from the webhook to true or false.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdCreateGroupPostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdCreateGroupPostRequest | Acknowledge messages taking preference is indicated.
  phoneIdCreateGroupPostRequest: {
    name: "Group Title",
    numbers: [
      "905301234567",
    ],
  },
};

apiInstance.phoneIdCreateGroupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdCreateGroupPostRequest** | **PhoneIdCreateGroupPostRequest**| Acknowledge messages taking preference is indicated. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdCreateGroupPost200Response**

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

# **phoneIdGetGroupsConversationIdGet**
> PhoneIdCreateGroupPost200Response phoneIdGetGroupsConversationIdGet()

Get a conversation info.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGetGroupsConversationIdGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // string | Load conversations info.
  conversationId: "905301234567-1574073754@g.us",
  // boolean | Generate invite link for group. (optional)
  invite: true,
};

apiInstance.phoneIdGetGroupsConversationIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined
 **conversationId** | [**string**] | Load conversations info. | defaults to undefined
 **invite** | [**boolean**] | Generate invite link for group. | (optional) defaults to undefined


### Return type

**PhoneIdCreateGroupPost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the information of updated selected product. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGetGroupsGet**
> PhoneIdGetGroupsGet200Response phoneIdGetGroupsGet()

Get conversations list.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGetGroupsGetRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // boolean | Load participants for old conversations. (Max response limit:100) (optional)
  full: true,
  // boolean | Sort groups by id. (optional)
  sort: true,
  // boolean | Include invite links for groups. (Max response limit:50) (optional)
  invite: true,
  // number | Paging for groups. We suggest to use with **sort** option. (optional)
  page: 2,
};

apiInstance.phoneIdGetGroupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined
 **full** | [**boolean**] | Load participants for old conversations. (Max response limit:100) | (optional) defaults to undefined
 **sort** | [**boolean**] | Sort groups by id. | (optional) defaults to undefined
 **invite** | [**boolean**] | Include invite links for groups. (Max response limit:50) | (optional) defaults to undefined
 **page** | [**number**] | Paging for groups. We suggest to use with **sort** option. | (optional) defaults to undefined


### Return type

**PhoneIdGetGroupsGet200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the information of updated selected product. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGroupAddPost**
> PhoneIdSetProfileImagePost200Response phoneIdGroupAddPost(phoneIdGroupAddPostRequest)

Add a participant to a group conversation.  To learn conversation_id you can use /getGroups endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGroupAddPostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdGroupAddPostRequest | Group conversation id and number is required for the actions.
  phoneIdGroupAddPostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    number: "905301234567@c.us",
  },
};

apiInstance.phoneIdGroupAddPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdGroupAddPostRequest** | **PhoneIdGroupAddPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdSetProfileImagePost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGroupConfigPost**
> PhoneIdGroupConfigPost200Response phoneIdGroupConfigPost(phoneIdGroupConfigPostRequest)

Change config of a group conversation.  To learn conversation_id you can use /getGroups endpoint.  You can change who can edit group info(edit), can send message(send) and disappearing messages enabled(disappear).  For edit and send config you can use values \"admins\" or \"all\".  Disappear only accepts true/false values.  Config values are optional. If you want to only change a config you should only use that config\'s key in request body.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGroupConfigPostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdGroupConfigPostRequest | Group conversation id and number is required for the actions.
  phoneIdGroupConfigPostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    config: {
      edit: "all",
      send: "all",
      disappear: false,
    },
  },
};

apiInstance.phoneIdGroupConfigPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdGroupConfigPostRequest** | **PhoneIdGroupConfigPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdGroupConfigPost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGroupDemotePost**
> PhoneIdSetProfileImagePost200Response phoneIdGroupDemotePost(phoneIdGroupAddPostRequest)

Demote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGroupDemotePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdGroupAddPostRequest | Group conversation id and number is required for the actions.
  phoneIdGroupAddPostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    number: "905301234567@c.us",
  },
};

apiInstance.phoneIdGroupDemotePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdGroupAddPostRequest** | **PhoneIdGroupAddPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdSetProfileImagePost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGroupPromotePost**
> PhoneIdSetProfileImagePost200Response phoneIdGroupPromotePost(phoneIdGroupAddPostRequest)

Promote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGroupPromotePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdGroupAddPostRequest | Group conversation id and number is required for the actions.
  phoneIdGroupAddPostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    number: "905301234567@c.us",
  },
};

apiInstance.phoneIdGroupPromotePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdGroupAddPostRequest** | **PhoneIdGroupAddPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdSetProfileImagePost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdGroupRemovePost**
> PhoneIdSetProfileImagePost200Response phoneIdGroupRemovePost(phoneIdGroupAddPostRequest)

Remove a participant from a group conversation.  To learn conversation_id you can use /getGroups endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdGroupRemovePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdGroupAddPostRequest | Group conversation id and number is required for the actions.
  phoneIdGroupAddPostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    number: "905301234567@c.us",
  },
};

apiInstance.phoneIdGroupRemovePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdGroupAddPostRequest** | **PhoneIdGroupAddPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdSetProfileImagePost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdLeaveGroupPost**
> PhoneIdLeaveGroupPost200Response phoneIdLeaveGroupPost(phoneIdLeaveGroupPostRequest)

You can leave the group you want with the help of this endpoint.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdLeaveGroupPostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdLeaveGroupPostRequest | Group conversation id and number is required for the actions.
  phoneIdLeaveGroupPostRequest: {
    id: "905301234567-1574072436@g.us",
  },
};

apiInstance.phoneIdLeaveGroupPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdLeaveGroupPostRequest** | **PhoneIdLeaveGroupPostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdLeaveGroupPost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **phoneIdSetProfileImagePost**
> PhoneIdSetProfileImagePost200Response phoneIdSetProfileImagePost(phoneIdSetProfileImagePostRequest)

Change profile picture of a group conversation or yourself.  To change profile picture of yourself you need to leave the conversation_id blank.  You need to use square images for better view. We suggest 512x512 images.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GroupChatOperationsApi(configuration);

let body:.GroupChatOperationsApiPhoneIdSetProfileImagePostRequest = {
  // string | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
  phoneId: "12",
  // PhoneIdSetProfileImagePostRequest | Group conversation id and number is required for the actions.
  phoneIdSetProfileImagePostRequest: {
    conversationId: "905301234567-1574072436@g.us",
    image: "https://yourwebsite.com/picture.png",
  },
};

apiInstance.phoneIdSetProfileImagePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneIdSetProfileImagePostRequest** | **PhoneIdSetProfileImagePostRequest**| Group conversation id and number is required for the actions. |
 **phoneId** | [**string**] | ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***. | defaults to undefined


### Return type

**PhoneIdSetProfileImagePost200Response**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the success information about the action. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


