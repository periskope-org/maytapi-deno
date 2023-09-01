import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'

import { AckSet } from '../models/AckSet.ts';
import { AddPhoneBody } from '../models/AddPhoneBody.ts';
import { BackupData } from '../models/BackupData.ts';
import { BackupSuccess } from '../models/BackupSuccess.ts';
import { DeleteSuccess } from '../models/DeleteSuccess.ts';
import { GroupData } from '../models/GroupData.ts';
import { GroupDataConfig } from '../models/GroupDataConfig.ts';
import { IncomingMessageType } from '../models/IncomingMessageType.ts';
import { IncomingMessageUserData } from '../models/IncomingMessageUserData.ts';
import { InfoMessage } from '../models/InfoMessage.ts';
import { JustSuccess } from '../models/JustSuccess.ts';
import { LocationMessage } from '../models/LocationMessage.ts';
import { LogObj } from '../models/LogObj.ts';
import { LogObjData } from '../models/LogObjData.ts';
import { LogsGet200Response } from '../models/LogsGet200Response.ts';
import { LogsGet200ResponseData } from '../models/LogsGet200ResponseData.ts';
import { MediaMessage } from '../models/MediaMessage.ts';
import { MentionMessage } from '../models/MentionMessage.ts';
import { MessageData } from '../models/MessageData.ts';
import { MessageQuotedData } from '../models/MessageQuotedData.ts';
import { MessageQuotedDataAllOf } from '../models/MessageQuotedDataAllOf.ts';
import { MultiVcardMessage } from '../models/MultiVcardMessage.ts';
import { PhoneConfig } from '../models/PhoneConfig.ts';
import { PhoneIdCatalogGet200Response } from '../models/PhoneIdCatalogGet200Response.ts';
import { PhoneIdConfigPostRequest } from '../models/PhoneIdConfigPostRequest.ts';
import { PhoneIdContactConversationIdGet200Response } from '../models/PhoneIdContactConversationIdGet200Response.ts';
import { PhoneIdContactConversationIdGet200ResponseDataInner } from '../models/PhoneIdContactConversationIdGet200ResponseDataInner.ts';
import { PhoneIdContactsGet200Response } from '../models/PhoneIdContactsGet200Response.ts';
import { PhoneIdContactsGet200ResponseDataInner } from '../models/PhoneIdContactsGet200ResponseDataInner.ts';
import { PhoneIdCreateGroupPost200Response } from '../models/PhoneIdCreateGroupPost200Response.ts';
import { PhoneIdCreateGroupPostRequest } from '../models/PhoneIdCreateGroupPostRequest.ts';
import { PhoneIdGetGroupsGet200Response } from '../models/PhoneIdGetGroupsGet200Response.ts';
import { PhoneIdGroupAddPostRequest } from '../models/PhoneIdGroupAddPostRequest.ts';
import { PhoneIdGroupConfigPost200Response } from '../models/PhoneIdGroupConfigPost200Response.ts';
import { PhoneIdGroupConfigPostRequest } from '../models/PhoneIdGroupConfigPostRequest.ts';
import { PhoneIdGroupConfigPostRequestConfig } from '../models/PhoneIdGroupConfigPostRequestConfig.ts';
import { PhoneIdLeaveGroupPost200Response } from '../models/PhoneIdLeaveGroupPost200Response.ts';
import { PhoneIdLeaveGroupPostRequest } from '../models/PhoneIdLeaveGroupPostRequest.ts';
import { PhoneIdPurgeQueueGet200Response } from '../models/PhoneIdPurgeQueueGet200Response.ts';
import { PhoneIdQueueGet200Response } from '../models/PhoneIdQueueGet200Response.ts';
import { PhoneIdQueueGet200ResponseStats } from '../models/PhoneIdQueueGet200ResponseStats.ts';
import { PhoneIdRedeployGet200Response } from '../models/PhoneIdRedeployGet200Response.ts';
import { PhoneIdSendMessagePostRequest } from '../models/PhoneIdSendMessagePostRequest.ts';
import { PhoneIdSendMessagePostRequestMessage } from '../models/PhoneIdSendMessagePostRequestMessage.ts';
import { PhoneIdSetProfileImagePostRequest } from '../models/PhoneIdSetProfileImagePostRequest.ts';
import { PhoneObj } from '../models/PhoneObj.ts';
import { PhoneObjWithPid } from '../models/PhoneObjWithPid.ts';
import { ProductData } from '../models/ProductData.ts';
import { QueuePhone } from '../models/QueuePhone.ts';
import { QueuesGet200Response } from '../models/QueuesGet200Response.ts';
import { SendMessageResponse } from '../models/SendMessageResponse.ts';
import { SendMessageResponseData } from '../models/SendMessageResponseData.ts';
import { Status } from '../models/Status.ts';
import { StatusEnum } from '../models/StatusEnum.ts';
import { SubStatus } from '../models/SubStatus.ts';
import { TextMessage } from '../models/TextMessage.ts';
import { VcardData } from '../models/VcardData.ts';
import { VcardMessage } from '../models/VcardMessage.ts';
import { WebhookAckBody } from '../models/WebhookAckBody.ts';
import { WebhookAckData } from '../models/WebhookAckData.ts';
import { WebhookLiveBody } from '../models/WebhookLiveBody.ts';
import { WebhookLiveBodyData } from '../models/WebhookLiveBodyData.ts';
import { WebhookStatusBody } from '../models/WebhookStatusBody.ts';
import { WebhookUrl } from '../models/WebhookUrl.ts';

import { ObservableAccountInformationRetrievalApi } from "./ObservableAPI.ts";
import { AccountInformationRetrievalApiRequestFactory, AccountInformationRetrievalApiResponseProcessor} from "../apis/AccountInformationRetrievalApi.ts";

export interface AccountInformationRetrievalApiAddPhonePostRequest {
    /**
     * If a number is wanted to be specified by adding the phone, that number is given. Otherwise, the number will be updated in database, when qr-screen is passed later.
     * @type AddPhoneBody
     * @memberof AccountInformationRetrievalApiaddPhonePost
     */
    addPhoneBody?: AddPhoneBody
}

export interface AccountInformationRetrievalApiListPhonesGetRequest {
}

export interface AccountInformationRetrievalApiLogsGetRequest {
}

export interface AccountInformationRetrievalApiProductGetRequest {
}

export interface AccountInformationRetrievalApiQueuesGetRequest {
}

export interface AccountInformationRetrievalApiSetAckPreferencePostRequest {
    /**
     * Acknowledge messages taking preference is indicated.
     * @type AckSet
     * @memberof AccountInformationRetrievalApisetAckPreferencePost
     */
    ackSet: AckSet
}

export interface AccountInformationRetrievalApiSetWebhookPostRequest {
    /**
     * Webhook data is indicated.
     * @type WebhookUrl
     * @memberof AccountInformationRetrievalApisetWebhookPost
     */
    webhookUrl: WebhookUrl
}

export class ObjectAccountInformationRetrievalApi {
    private api: ObservableAccountInformationRetrievalApi

    public constructor(configuration: Configuration, requestFactory?: AccountInformationRetrievalApiRequestFactory, responseProcessor?: AccountInformationRetrievalApiResponseProcessor) {
        this.api = new ObservableAccountInformationRetrievalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a new phone to the product.
     * @param param the request object
     */
    public addPhonePost(param: AccountInformationRetrievalApiAddPhonePostRequest = {}, options?: Configuration): Promise<PhoneObjWithPid> {
        return this.api.addPhonePost(param.addPhoneBody,  options).toPromise();
    }

    /**
     * Returns information of all the phones registered to the given product.
     * @param param the request object
     */
    public listPhonesGet(param: AccountInformationRetrievalApiListPhonesGetRequest = {}, options?: Configuration): Promise<Array<PhoneObj>> {
        return this.api.listPhonesGet( options).toPromise();
    }

    /**
     * Returns logs of all the phones.
     * @param param the request object
     */
    public logsGet(param: AccountInformationRetrievalApiLogsGetRequest = {}, options?: Configuration): Promise<LogsGet200Response> {
        return this.api.logsGet( options).toPromise();
    }

    /**
     * Returns the information of the product with the given product id.
     * @param param the request object
     */
    public productGet(param: AccountInformationRetrievalApiProductGetRequest = {}, options?: Configuration): Promise<ProductData> {
        return this.api.productGet( options).toPromise();
    }

    /**
     * Returns information of all the phones registered to the given product with queue information.
     * @param param the request object
     */
    public queuesGet(param: AccountInformationRetrievalApiQueuesGetRequest = {}, options?: Configuration): Promise<QueuesGet200Response> {
        return this.api.queuesGet( options).toPromise();
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param param the request object
     */
    public setAckPreferencePost(param: AccountInformationRetrievalApiSetAckPreferencePostRequest, options?: Configuration): Promise<ProductData> {
        return this.api.setAckPreferencePost(param.ackSet,  options).toPromise();
    }

    /**
     * Sets a webhook address for the selected product. Webhook is used for delivering the incoming messages and acknowledge notifications of sent messages to the user. The notification formats that reaches to the webhook are as follows:
     * @param param the request object
     */
    public setWebhookPost(param: AccountInformationRetrievalApiSetWebhookPostRequest, options?: Configuration): Promise<ProductData> {
        return this.api.setWebhookPost(param.webhookUrl,  options).toPromise();
    }

}

import { ObservableBusinessCatalogBetaApi } from "./ObservableAPI.ts";
import { BusinessCatalogBetaApiRequestFactory, BusinessCatalogBetaApiResponseProcessor} from "../apis/BusinessCatalogBetaApi.ts";

export interface BusinessCatalogBetaApiPhoneIdCatalogGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof BusinessCatalogBetaApiphoneIdCatalogGet
     */
    phoneId: string
}

export class ObjectBusinessCatalogBetaApi {
    private api: ObservableBusinessCatalogBetaApi

    public constructor(configuration: Configuration, requestFactory?: BusinessCatalogBetaApiRequestFactory, responseProcessor?: BusinessCatalogBetaApiResponseProcessor) {
        this.api = new ObservableBusinessCatalogBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns catalog products info of the business profile. You only need productId to send products to users.
     * @param param the request object
     */
    public phoneIdCatalogGet(param: BusinessCatalogBetaApiPhoneIdCatalogGetRequest, options?: Configuration): Promise<PhoneIdCatalogGet200Response> {
        return this.api.phoneIdCatalogGet(param.phoneId,  options).toPromise();
    }

}

import { ObservableGroupChatOperationsApi } from "./ObservableAPI.ts";
import { GroupChatOperationsApiRequestFactory, GroupChatOperationsApiResponseProcessor} from "../apis/GroupChatOperationsApi.ts";

export interface GroupChatOperationsApiPhoneIdCreateGroupPostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdCreateGroupPost
     */
    phoneId: string
    /**
     * Acknowledge messages taking preference is indicated.
     * @type PhoneIdCreateGroupPostRequest
     * @memberof GroupChatOperationsApiphoneIdCreateGroupPost
     */
    phoneIdCreateGroupPostRequest: PhoneIdCreateGroupPostRequest
}

export interface GroupChatOperationsApiPhoneIdGetGroupsConversationIdGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGetGroupsConversationIdGet
     */
    phoneId: string
    /**
     * Load conversations info.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGetGroupsConversationIdGet
     */
    conversationId: string
    /**
     * Generate invite link for group.
     * @type boolean
     * @memberof GroupChatOperationsApiphoneIdGetGroupsConversationIdGet
     */
    invite?: boolean
}

export interface GroupChatOperationsApiPhoneIdGetGroupsGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGetGroupsGet
     */
    phoneId: string
    /**
     * Load participants for old conversations. (Max response limit:100)
     * @type boolean
     * @memberof GroupChatOperationsApiphoneIdGetGroupsGet
     */
    full?: boolean
    /**
     * Sort groups by id.
     * @type boolean
     * @memberof GroupChatOperationsApiphoneIdGetGroupsGet
     */
    sort?: boolean
    /**
     * Include invite links for groups. (Max response limit:50)
     * @type boolean
     * @memberof GroupChatOperationsApiphoneIdGetGroupsGet
     */
    invite?: boolean
    /**
     * Paging for groups. We suggest to use with **sort** option.
     * @type number
     * @memberof GroupChatOperationsApiphoneIdGetGroupsGet
     */
    page?: number
}

export interface GroupChatOperationsApiPhoneIdGroupAddPostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGroupAddPost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdGroupAddPostRequest
     * @memberof GroupChatOperationsApiphoneIdGroupAddPost
     */
    phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest
}

export interface GroupChatOperationsApiPhoneIdGroupConfigPostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGroupConfigPost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdGroupConfigPostRequest
     * @memberof GroupChatOperationsApiphoneIdGroupConfigPost
     */
    phoneIdGroupConfigPostRequest: PhoneIdGroupConfigPostRequest
}

export interface GroupChatOperationsApiPhoneIdGroupDemotePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGroupDemotePost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdGroupAddPostRequest
     * @memberof GroupChatOperationsApiphoneIdGroupDemotePost
     */
    phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest
}

export interface GroupChatOperationsApiPhoneIdGroupPromotePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGroupPromotePost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdGroupAddPostRequest
     * @memberof GroupChatOperationsApiphoneIdGroupPromotePost
     */
    phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest
}

export interface GroupChatOperationsApiPhoneIdGroupRemovePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdGroupRemovePost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdGroupAddPostRequest
     * @memberof GroupChatOperationsApiphoneIdGroupRemovePost
     */
    phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest
}

export interface GroupChatOperationsApiPhoneIdLeaveGroupPostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdLeaveGroupPost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdLeaveGroupPostRequest
     * @memberof GroupChatOperationsApiphoneIdLeaveGroupPost
     */
    phoneIdLeaveGroupPostRequest: PhoneIdLeaveGroupPostRequest
}

export interface GroupChatOperationsApiPhoneIdSetProfileImagePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof GroupChatOperationsApiphoneIdSetProfileImagePost
     */
    phoneId: string
    /**
     * Group conversation id and number is required for the actions.
     * @type PhoneIdSetProfileImagePostRequest
     * @memberof GroupChatOperationsApiphoneIdSetProfileImagePost
     */
    phoneIdSetProfileImagePostRequest: PhoneIdSetProfileImagePostRequest
}

export class ObjectGroupChatOperationsApi {
    private api: ObservableGroupChatOperationsApi

    public constructor(configuration: Configuration, requestFactory?: GroupChatOperationsApiRequestFactory, responseProcessor?: GroupChatOperationsApiResponseProcessor) {
        this.api = new ObservableGroupChatOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param param the request object
     */
    public phoneIdCreateGroupPost(param: GroupChatOperationsApiPhoneIdCreateGroupPostRequest, options?: Configuration): Promise<PhoneIdCreateGroupPost200Response> {
        return this.api.phoneIdCreateGroupPost(param.phoneId, param.phoneIdCreateGroupPostRequest,  options).toPromise();
    }

    /**
     * Get a conversation info.
     * @param param the request object
     */
    public phoneIdGetGroupsConversationIdGet(param: GroupChatOperationsApiPhoneIdGetGroupsConversationIdGetRequest, options?: Configuration): Promise<PhoneIdCreateGroupPost200Response> {
        return this.api.phoneIdGetGroupsConversationIdGet(param.phoneId, param.conversationId, param.invite,  options).toPromise();
    }

    /**
     * Get conversations list.
     * @param param the request object
     */
    public phoneIdGetGroupsGet(param: GroupChatOperationsApiPhoneIdGetGroupsGetRequest, options?: Configuration): Promise<PhoneIdGetGroupsGet200Response> {
        return this.api.phoneIdGetGroupsGet(param.phoneId, param.full, param.sort, param.invite, param.page,  options).toPromise();
    }

    /**
     * Add a participant to a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param param the request object
     */
    public phoneIdGroupAddPost(param: GroupChatOperationsApiPhoneIdGroupAddPostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdGroupAddPost(param.phoneId, param.phoneIdGroupAddPostRequest,  options).toPromise();
    }

    /**
     * Change config of a group conversation.  To learn conversation_id you can use /getGroups endpoint.  You can change who can edit group info(edit), can send message(send) and disappearing messages enabled(disappear).  For edit and send config you can use values \"admins\" or \"all\".  Disappear only accepts true/false values.  Config values are optional. If you want to only change a config you should only use that config\'s key in request body.
     * @param param the request object
     */
    public phoneIdGroupConfigPost(param: GroupChatOperationsApiPhoneIdGroupConfigPostRequest, options?: Configuration): Promise<PhoneIdGroupConfigPost200Response> {
        return this.api.phoneIdGroupConfigPost(param.phoneId, param.phoneIdGroupConfigPostRequest,  options).toPromise();
    }

    /**
     * Demote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param param the request object
     */
    public phoneIdGroupDemotePost(param: GroupChatOperationsApiPhoneIdGroupDemotePostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdGroupDemotePost(param.phoneId, param.phoneIdGroupAddPostRequest,  options).toPromise();
    }

    /**
     * Promote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param param the request object
     */
    public phoneIdGroupPromotePost(param: GroupChatOperationsApiPhoneIdGroupPromotePostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdGroupPromotePost(param.phoneId, param.phoneIdGroupAddPostRequest,  options).toPromise();
    }

    /**
     * Remove a participant from a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param param the request object
     */
    public phoneIdGroupRemovePost(param: GroupChatOperationsApiPhoneIdGroupRemovePostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdGroupRemovePost(param.phoneId, param.phoneIdGroupAddPostRequest,  options).toPromise();
    }

    /**
     * You can leave the group you want with the help of this endpoint.
     * @param param the request object
     */
    public phoneIdLeaveGroupPost(param: GroupChatOperationsApiPhoneIdLeaveGroupPostRequest, options?: Configuration): Promise<PhoneIdLeaveGroupPost200Response> {
        return this.api.phoneIdLeaveGroupPost(param.phoneId, param.phoneIdLeaveGroupPostRequest,  options).toPromise();
    }

    /**
     * Change profile picture of a group conversation or yourself.  To change profile picture of yourself you need to leave the conversation_id blank.  You need to use square images for better view. We suggest 512x512 images.
     * @param param the request object
     */
    public phoneIdSetProfileImagePost(param: GroupChatOperationsApiPhoneIdSetProfileImagePostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdSetProfileImagePost(param.phoneId, param.phoneIdSetProfileImagePostRequest,  options).toPromise();
    }

}

import { ObservableMessageSendingOperationsApi } from "./ObservableAPI.ts";
import { MessageSendingOperationsApiRequestFactory, MessageSendingOperationsApiResponseProcessor} from "../apis/MessageSendingOperationsApi.ts";

export interface MessageSendingOperationsApiPhoneIdSendMessagePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof MessageSendingOperationsApiphoneIdSendMessagePost
     */
    phoneId: string
    /**
     * - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\&quot;905301234567-1574073754@g.us\&quot;** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \&#39;Request body examples\&#39; section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints.
     * @type PhoneIdSendMessagePostRequest
     * @memberof MessageSendingOperationsApiphoneIdSendMessagePost
     */
    phoneIdSendMessagePostRequest: PhoneIdSendMessagePostRequest
}

export class ObjectMessageSendingOperationsApi {
    private api: ObservableMessageSendingOperationsApi

    public constructor(configuration: Configuration, requestFactory?: MessageSendingOperationsApiRequestFactory, responseProcessor?: MessageSendingOperationsApiResponseProcessor) {
        this.api = new ObservableMessageSendingOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used for sending message to a chat. A text, image, video, sound and document can be sent.  **This endpoint adds messages to your phone\'s sending queue. If your messages not delivering to phones please check your instance logs, queue endpoint or connection (/screen).**  **Curl example:** (You need to change product_id, phone_id and token[x-maytapi-key] with your product\'s values...) ```bash curl -X POST \\ \'https://api.maytapi.com/api/dc01968f-####-####-####-7cfcf51aa423/12/sendMessage\' \\   -H \'Content-Type: application/json\' \\   -H \'x-maytapi-key: b267697c-####-####-####-2435e812efc1\' \\   -d \'{  \"message\": \"http://placehold.it/180\",   \"text\": \"\",   \"to_number\": \"+905301111111\",   \"type\": \"media\" }\'
     * @param param the request object
     */
    public phoneIdSendMessagePost(param: MessageSendingOperationsApiPhoneIdSendMessagePostRequest, options?: Configuration): Promise<SendMessageResponse> {
        return this.api.phoneIdSendMessagePost(param.phoneId, param.phoneIdSendMessagePostRequest,  options).toPromise();
    }

}

import { ObservableQueueOperationsApi } from "./ObservableAPI.ts";
import { QueueOperationsApiRequestFactory, QueueOperationsApiResponseProcessor} from "../apis/QueueOperationsApi.ts";

export interface QueueOperationsApiPhoneIdPurgeQueueGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof QueueOperationsApiphoneIdPurgeQueueGet
     */
    phoneId: string
}

export interface QueueOperationsApiPhoneIdQueueGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof QueueOperationsApiphoneIdQueueGet
     */
    phoneId: string
}

export class ObjectQueueOperationsApi {
    private api: ObservableQueueOperationsApi

    public constructor(configuration: Configuration, requestFactory?: QueueOperationsApiRequestFactory, responseProcessor?: QueueOperationsApiResponseProcessor) {
        this.api = new ObservableQueueOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clears phone\'s send message queue.
     * @param param the request object
     */
    public phoneIdPurgeQueueGet(param: QueueOperationsApiPhoneIdPurgeQueueGetRequest, options?: Configuration): Promise<PhoneIdPurgeQueueGet200Response> {
        return this.api.phoneIdPurgeQueueGet(param.phoneId,  options).toPromise();
    }

    /**
     * Returns the queue info of the phone.
     * @param param the request object
     */
    public phoneIdQueueGet(param: QueueOperationsApiPhoneIdQueueGetRequest, options?: Configuration): Promise<PhoneIdQueueGet200Response> {
        return this.api.phoneIdQueueGet(param.phoneId,  options).toPromise();
    }

}

import { ObservableSessionControllingOperationsApi } from "./ObservableAPI.ts";
import { SessionControllingOperationsApiRequestFactory, SessionControllingOperationsApiResponseProcessor} from "../apis/SessionControllingOperationsApi.ts";

export interface SessionControllingOperationsApiPhoneIdBackupGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdBackupGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdConfigGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdConfigGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdConfigPostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdConfigPost
     */
    phoneId: string
    /**
     * With this api you can define webhook for individual phones.
     * @type PhoneIdConfigPostRequest
     * @memberof SessionControllingOperationsApiphoneIdConfigPost
     */
    phoneIdConfigPostRequest: PhoneIdConfigPostRequest
}

export interface SessionControllingOperationsApiPhoneIdDeleteGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdDeleteGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdFactoryresetGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdFactoryresetGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdLogoutGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdLogoutGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdRedeployGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdRedeployGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdRestartGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdRestartGet
     */
    phoneId: string
}

export interface SessionControllingOperationsApiPhoneIdRestorePostRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionControllingOperationsApiphoneIdRestorePost
     */
    phoneId: string
    /**
     * All the session restoring data needed.
     * @type BackupData
     * @memberof SessionControllingOperationsApiphoneIdRestorePost
     */
    backupData: BackupData
}

export class ObjectSessionControllingOperationsApi {
    private api: ObservableSessionControllingOperationsApi

    public constructor(configuration: Configuration, requestFactory?: SessionControllingOperationsApiRequestFactory, responseProcessor?: SessionControllingOperationsApiResponseProcessor) {
        this.api = new ObservableSessionControllingOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Backups the material needed for opening the same chat screen for the current phone number. This call is useful when the session and also the status of the session is active. The response information can be used to open the chat screen with the POST restore call. If logout is called after getting the backup information, the data obtained from there will not be valid anymore.
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param param the request object
     */
    public phoneIdBackupGet(param: SessionControllingOperationsApiPhoneIdBackupGetRequest, options?: Configuration): Promise<BackupSuccess> {
        return this.api.phoneIdBackupGet(param.phoneId,  options).toPromise();
    }

    /**
     * Get phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.
     * @param param the request object
     */
    public phoneIdConfigGet(param: SessionControllingOperationsApiPhoneIdConfigGetRequest, options?: Configuration): Promise<PhoneConfig> {
        return this.api.phoneIdConfigGet(param.phoneId,  options).toPromise();
    }

    /**
     * Set phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.  With this api you can define webhook for individual phones.
     * @param param the request object
     */
    public phoneIdConfigPost(param: SessionControllingOperationsApiPhoneIdConfigPostRequest, options?: Configuration): Promise<PhoneConfig> {
        return this.api.phoneIdConfigPost(param.phoneId, param.phoneIdConfigPostRequest,  options).toPromise();
    }

    /**
     * **[DEPRECATED please use /factoryreset]** Deletes the phone and closes the session of that number.
     * DEPRECATED please use /factoryreset
     * @param param the request object
     */
    public phoneIdDeleteGet(param: SessionControllingOperationsApiPhoneIdDeleteGetRequest, options?: Configuration): Promise<DeleteSuccess> {
        return this.api.phoneIdDeleteGet(param.phoneId,  options).toPromise();
    }

    /**
     * Factory resets everything about phone instance to a new created instance state. This is a replacement for delete/create a new phone.   Your phone instances can\'t be deleted anymore. This is implemented beacuse some of our customers were loosing their phone instance when their subscription(or trial) suspended. With the new system your phones would only set to disabled state and after you fix your subscription you can re-enable your phones either making a request(/screen etc.) to instance or from our control panel.
     * @param param the request object
     */
    public phoneIdFactoryresetGet(param: SessionControllingOperationsApiPhoneIdFactoryresetGetRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdFactoryresetGet(param.phoneId,  options).toPromise();
    }

    /**
     * Logouts the number from the current session and converts the screen to qr-code screen.
     * @param param the request object
     */
    public phoneIdLogoutGet(param: SessionControllingOperationsApiPhoneIdLogoutGetRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdLogoutGet(param.phoneId,  options).toPromise();
    }

    /**
     * Redeploys docker instance of your phone. If your phone having any unexpected problems you can use this endpoint to reboot the instance.
     * @param param the request object
     */
    public phoneIdRedeployGet(param: SessionControllingOperationsApiPhoneIdRedeployGetRequest, options?: Configuration): Promise<PhoneIdRedeployGet200Response> {
        return this.api.phoneIdRedeployGet(param.phoneId,  options).toPromise();
    }

    /**
     * **[DEPRECATED please use /redeploy]** Restarts the session by refreshing the page.
     * DEPRECATED please use /redeploy
     * @param param the request object
     */
    public phoneIdRestartGet(param: SessionControllingOperationsApiPhoneIdRestartGetRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdRestartGet(param.phoneId,  options).toPromise();
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Reloads the current session based on the reload data (can be obtained from ***POST backup***).
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param param the request object
     */
    public phoneIdRestorePost(param: SessionControllingOperationsApiPhoneIdRestorePostRequest, options?: Configuration): Promise<JustSuccess> {
        return this.api.phoneIdRestorePost(param.phoneId, param.backupData,  options).toPromise();
    }

}

import { ObservableSessionInformationGettersApi } from "./ObservableAPI.ts";
import { SessionInformationGettersApiRequestFactory, SessionInformationGettersApiResponseProcessor} from "../apis/SessionInformationGettersApi.ts";

export interface SessionInformationGettersApiPhoneIdContactConversationIdGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdContactConversationIdGet
     */
    phoneId: string
    /**
     * Load conversations info.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdContactConversationIdGet
     */
    conversationId: string
}

export interface SessionInformationGettersApiPhoneIdContactsGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdContactsGet
     */
    phoneId: string
}

export interface SessionInformationGettersApiPhoneIdQrCodeGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdQrCodeGet
     */
    phoneId: string
}

export interface SessionInformationGettersApiPhoneIdScreenGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdScreenGet
     */
    phoneId: string
}

export interface SessionInformationGettersApiPhoneIdStatusGetRequest {
    /**
     * ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @type string
     * @memberof SessionInformationGettersApiphoneIdStatusGet
     */
    phoneId: string
}

export class ObjectSessionInformationGettersApi {
    private api: ObservableSessionInformationGettersApi

    public constructor(configuration: Configuration, requestFactory?: SessionInformationGettersApiRequestFactory, responseProcessor?: SessionInformationGettersApiResponseProcessor) {
        this.api = new ObservableSessionInformationGettersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the information of the number you specified in Whatsapp
     * @param param the request object
     */
    public phoneIdContactConversationIdGet(param: SessionInformationGettersApiPhoneIdContactConversationIdGetRequest, options?: Configuration): Promise<PhoneIdContactConversationIdGet200Response> {
        return this.api.phoneIdContactConversationIdGet(param.phoneId, param.conversationId,  options).toPromise();
    }

    /**
     * Returns the contacts in the current whatsapp instance.
     * @param param the request object
     */
    public phoneIdContactsGet(param: SessionInformationGettersApiPhoneIdContactsGetRequest, options?: Configuration): Promise<PhoneIdContactsGet200Response> {
        return this.api.phoneIdContactsGet(param.phoneId,  options).toPromise();
    }

    /**
     * Returns the qrCode in the current session if there is one.
     * @param param the request object
     */
    public phoneIdQrCodeGet(param: SessionInformationGettersApiPhoneIdQrCodeGetRequest, options?: Configuration): Promise<void> {
        return this.api.phoneIdQrCodeGet(param.phoneId,  options).toPromise();
    }

    /**
     * Returns the status of the current session.
     * @param param the request object
     */
    public phoneIdScreenGet(param: SessionInformationGettersApiPhoneIdScreenGetRequest, options?: Configuration): Promise<void> {
        return this.api.phoneIdScreenGet(param.phoneId,  options).toPromise();
    }

    /**
     * Returns the screenshot of the screen in the current session.
     * @param param the request object
     */
    public phoneIdStatusGet(param: SessionInformationGettersApiPhoneIdStatusGetRequest, options?: Configuration): Promise<Status> {
        return this.api.phoneIdStatusGet(param.phoneId,  options).toPromise();
    }

}
