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
import { ObservableAccountInformationRetrievalApi } from './ObservableAPI.ts';

import { AccountInformationRetrievalApiRequestFactory, AccountInformationRetrievalApiResponseProcessor} from "../apis/AccountInformationRetrievalApi.ts";
export class PromiseAccountInformationRetrievalApi {
    private api: ObservableAccountInformationRetrievalApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInformationRetrievalApiRequestFactory,
        responseProcessor?: AccountInformationRetrievalApiResponseProcessor
    ) {
        this.api = new ObservableAccountInformationRetrievalApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Adds a new phone to the product.
     * @param addPhoneBody If a number is wanted to be specified by adding the phone, that number is given. Otherwise, the number will be updated in database, when qr-screen is passed later.
     */
    public addPhonePost(addPhoneBody?: AddPhoneBody, _options?: Configuration): Promise<PhoneObjWithPid> {
        const result = this.api.addPhonePost(addPhoneBody, _options);
        return result.toPromise();
    }

    /**
     * Returns information of all the phones registered to the given product.
     */
    public listPhonesGet(_options?: Configuration): Promise<Array<PhoneObj>> {
        const result = this.api.listPhonesGet(_options);
        return result.toPromise();
    }

    /**
     * Returns logs of all the phones.
     */
    public logsGet(_options?: Configuration): Promise<LogsGet200Response> {
        const result = this.api.logsGet(_options);
        return result.toPromise();
    }

    /**
     * Returns the information of the product with the given product id.
     */
    public productGet(_options?: Configuration): Promise<ProductData> {
        const result = this.api.productGet(_options);
        return result.toPromise();
    }

    /**
     * Returns information of all the phones registered to the given product with queue information.
     */
    public queuesGet(_options?: Configuration): Promise<QueuesGet200Response> {
        const result = this.api.queuesGet(_options);
        return result.toPromise();
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param ackSet Acknowledge messages taking preference is indicated.
     */
    public setAckPreferencePost(ackSet: AckSet, _options?: Configuration): Promise<ProductData> {
        const result = this.api.setAckPreferencePost(ackSet, _options);
        return result.toPromise();
    }

    /**
     * Sets a webhook address for the selected product. Webhook is used for delivering the incoming messages and acknowledge notifications of sent messages to the user. The notification formats that reaches to the webhook are as follows:
     * @param webhookUrl Webhook data is indicated.
     */
    public setWebhookPost(webhookUrl: WebhookUrl, _options?: Configuration): Promise<ProductData> {
        const result = this.api.setWebhookPost(webhookUrl, _options);
        return result.toPromise();
    }


}



import { ObservableBusinessCatalogBetaApi } from './ObservableAPI.ts';

import { BusinessCatalogBetaApiRequestFactory, BusinessCatalogBetaApiResponseProcessor} from "../apis/BusinessCatalogBetaApi.ts";
export class PromiseBusinessCatalogBetaApi {
    private api: ObservableBusinessCatalogBetaApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessCatalogBetaApiRequestFactory,
        responseProcessor?: BusinessCatalogBetaApiResponseProcessor
    ) {
        this.api = new ObservableBusinessCatalogBetaApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns catalog products info of the business profile. You only need productId to send products to users.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdCatalogGet(phoneId: string, _options?: Configuration): Promise<PhoneIdCatalogGet200Response> {
        const result = this.api.phoneIdCatalogGet(phoneId, _options);
        return result.toPromise();
    }


}



import { ObservableGroupChatOperationsApi } from './ObservableAPI.ts';

import { GroupChatOperationsApiRequestFactory, GroupChatOperationsApiResponseProcessor} from "../apis/GroupChatOperationsApi.ts";
export class PromiseGroupChatOperationsApi {
    private api: ObservableGroupChatOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupChatOperationsApiRequestFactory,
        responseProcessor?: GroupChatOperationsApiResponseProcessor
    ) {
        this.api = new ObservableGroupChatOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdCreateGroupPostRequest Acknowledge messages taking preference is indicated.
     */
    public phoneIdCreateGroupPost(phoneId: string, phoneIdCreateGroupPostRequest: PhoneIdCreateGroupPostRequest, _options?: Configuration): Promise<PhoneIdCreateGroupPost200Response> {
        const result = this.api.phoneIdCreateGroupPost(phoneId, phoneIdCreateGroupPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Get a conversation info.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param conversationId Load conversations info.
     * @param invite Generate invite link for group.
     */
    public phoneIdGetGroupsConversationIdGet(phoneId: string, conversationId: string, invite?: boolean, _options?: Configuration): Promise<PhoneIdCreateGroupPost200Response> {
        const result = this.api.phoneIdGetGroupsConversationIdGet(phoneId, conversationId, invite, _options);
        return result.toPromise();
    }

    /**
     * Get conversations list.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param full Load participants for old conversations. (Max response limit:100)
     * @param sort Sort groups by id.
     * @param invite Include invite links for groups. (Max response limit:50)
     * @param page Paging for groups. We suggest to use with **sort** option.
     */
    public phoneIdGetGroupsGet(phoneId: string, full?: boolean, sort?: boolean, invite?: boolean, page?: number, _options?: Configuration): Promise<PhoneIdGetGroupsGet200Response> {
        const result = this.api.phoneIdGetGroupsGet(phoneId, full, sort, invite, page, _options);
        return result.toPromise();
    }

    /**
     * Add a participant to a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupAddPost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdGroupAddPost(phoneId, phoneIdGroupAddPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Change config of a group conversation.  To learn conversation_id you can use /getGroups endpoint.  You can change who can edit group info(edit), can send message(send) and disappearing messages enabled(disappear).  For edit and send config you can use values \"admins\" or \"all\".  Disappear only accepts true/false values.  Config values are optional. If you want to only change a config you should only use that config\'s key in request body.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupConfigPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupConfigPost(phoneId: string, phoneIdGroupConfigPostRequest: PhoneIdGroupConfigPostRequest, _options?: Configuration): Promise<PhoneIdGroupConfigPost200Response> {
        const result = this.api.phoneIdGroupConfigPost(phoneId, phoneIdGroupConfigPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Demote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupDemotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdGroupDemotePost(phoneId, phoneIdGroupAddPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Promote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupPromotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdGroupPromotePost(phoneId, phoneIdGroupAddPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Remove a participant from a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupRemovePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdGroupRemovePost(phoneId, phoneIdGroupAddPostRequest, _options);
        return result.toPromise();
    }

    /**
     * You can leave the group you want with the help of this endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdLeaveGroupPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdLeaveGroupPost(phoneId: string, phoneIdLeaveGroupPostRequest: PhoneIdLeaveGroupPostRequest, _options?: Configuration): Promise<PhoneIdLeaveGroupPost200Response> {
        const result = this.api.phoneIdLeaveGroupPost(phoneId, phoneIdLeaveGroupPostRequest, _options);
        return result.toPromise();
    }

    /**
     * Change profile picture of a group conversation or yourself.  To change profile picture of yourself you need to leave the conversation_id blank.  You need to use square images for better view. We suggest 512x512 images.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdSetProfileImagePostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdSetProfileImagePost(phoneId: string, phoneIdSetProfileImagePostRequest: PhoneIdSetProfileImagePostRequest, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdSetProfileImagePost(phoneId, phoneIdSetProfileImagePostRequest, _options);
        return result.toPromise();
    }


}



import { ObservableMessageSendingOperationsApi } from './ObservableAPI.ts';

import { MessageSendingOperationsApiRequestFactory, MessageSendingOperationsApiResponseProcessor} from "../apis/MessageSendingOperationsApi.ts";
export class PromiseMessageSendingOperationsApi {
    private api: ObservableMessageSendingOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageSendingOperationsApiRequestFactory,
        responseProcessor?: MessageSendingOperationsApiResponseProcessor
    ) {
        this.api = new ObservableMessageSendingOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Used for sending message to a chat. A text, image, video, sound and document can be sent.  **This endpoint adds messages to your phone\'s sending queue. If your messages not delivering to phones please check your instance logs, queue endpoint or connection (/screen).**  **Curl example:** (You need to change product_id, phone_id and token[x-maytapi-key] with your product\'s values...) ```bash curl -X POST \\ \'https://api.maytapi.com/api/dc01968f-####-####-####-7cfcf51aa423/12/sendMessage\' \\   -H \'Content-Type: application/json\' \\   -H \'x-maytapi-key: b267697c-####-####-####-2435e812efc1\' \\   -d \'{  \"message\": \"http://placehold.it/180\",   \"text\": \"\",   \"to_number\": \"+905301111111\",   \"type\": \"media\" }\'
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdSendMessagePostRequest - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\&quot;905301234567-1574073754@g.us\&quot;** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \&#39;Request body examples\&#39; section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints.
     */
    public phoneIdSendMessagePost(phoneId: string, phoneIdSendMessagePostRequest: PhoneIdSendMessagePostRequest, _options?: Configuration): Promise<SendMessageResponse> {
        const result = this.api.phoneIdSendMessagePost(phoneId, phoneIdSendMessagePostRequest, _options);
        return result.toPromise();
    }


}



import { ObservableQueueOperationsApi } from './ObservableAPI.ts';

import { QueueOperationsApiRequestFactory, QueueOperationsApiResponseProcessor} from "../apis/QueueOperationsApi.ts";
export class PromiseQueueOperationsApi {
    private api: ObservableQueueOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: QueueOperationsApiRequestFactory,
        responseProcessor?: QueueOperationsApiResponseProcessor
    ) {
        this.api = new ObservableQueueOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Clears phone\'s send message queue.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdPurgeQueueGet(phoneId: string, _options?: Configuration): Promise<PhoneIdPurgeQueueGet200Response> {
        const result = this.api.phoneIdPurgeQueueGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Returns the queue info of the phone.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdQueueGet(phoneId: string, _options?: Configuration): Promise<PhoneIdQueueGet200Response> {
        const result = this.api.phoneIdQueueGet(phoneId, _options);
        return result.toPromise();
    }


}



import { ObservableSessionControllingOperationsApi } from './ObservableAPI.ts';

import { SessionControllingOperationsApiRequestFactory, SessionControllingOperationsApiResponseProcessor} from "../apis/SessionControllingOperationsApi.ts";
export class PromiseSessionControllingOperationsApi {
    private api: ObservableSessionControllingOperationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionControllingOperationsApiRequestFactory,
        responseProcessor?: SessionControllingOperationsApiResponseProcessor
    ) {
        this.api = new ObservableSessionControllingOperationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Backups the material needed for opening the same chat screen for the current phone number. This call is useful when the session and also the status of the session is active. The response information can be used to open the chat screen with the POST restore call. If logout is called after getting the backup information, the data obtained from there will not be valid anymore.
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdBackupGet(phoneId: string, _options?: Configuration): Promise<BackupSuccess> {
        const result = this.api.phoneIdBackupGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Get phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdConfigGet(phoneId: string, _options?: Configuration): Promise<PhoneConfig> {
        const result = this.api.phoneIdConfigGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Set phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.  With this api you can define webhook for individual phones.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdConfigPostRequest With this api you can define webhook for individual phones.
     */
    public phoneIdConfigPost(phoneId: string, phoneIdConfigPostRequest: PhoneIdConfigPostRequest, _options?: Configuration): Promise<PhoneConfig> {
        const result = this.api.phoneIdConfigPost(phoneId, phoneIdConfigPostRequest, _options);
        return result.toPromise();
    }

    /**
     * **[DEPRECATED please use /factoryreset]** Deletes the phone and closes the session of that number.
     * DEPRECATED please use /factoryreset
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdDeleteGet(phoneId: string, _options?: Configuration): Promise<DeleteSuccess> {
        const result = this.api.phoneIdDeleteGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Factory resets everything about phone instance to a new created instance state. This is a replacement for delete/create a new phone.   Your phone instances can\'t be deleted anymore. This is implemented beacuse some of our customers were loosing their phone instance when their subscription(or trial) suspended. With the new system your phones would only set to disabled state and after you fix your subscription you can re-enable your phones either making a request(/screen etc.) to instance or from our control panel.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdFactoryresetGet(phoneId: string, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdFactoryresetGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Logouts the number from the current session and converts the screen to qr-code screen.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdLogoutGet(phoneId: string, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdLogoutGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Redeploys docker instance of your phone. If your phone having any unexpected problems you can use this endpoint to reboot the instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdRedeployGet(phoneId: string, _options?: Configuration): Promise<PhoneIdRedeployGet200Response> {
        const result = this.api.phoneIdRedeployGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * **[DEPRECATED please use /redeploy]** Restarts the session by refreshing the page.
     * DEPRECATED please use /redeploy
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdRestartGet(phoneId: string, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdRestartGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Reloads the current session based on the reload data (can be obtained from ***POST backup***).
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param backupData All the session restoring data needed.
     */
    public phoneIdRestorePost(phoneId: string, backupData: BackupData, _options?: Configuration): Promise<JustSuccess> {
        const result = this.api.phoneIdRestorePost(phoneId, backupData, _options);
        return result.toPromise();
    }


}



import { ObservableSessionInformationGettersApi } from './ObservableAPI.ts';

import { SessionInformationGettersApiRequestFactory, SessionInformationGettersApiResponseProcessor} from "../apis/SessionInformationGettersApi.ts";
export class PromiseSessionInformationGettersApi {
    private api: ObservableSessionInformationGettersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionInformationGettersApiRequestFactory,
        responseProcessor?: SessionInformationGettersApiResponseProcessor
    ) {
        this.api = new ObservableSessionInformationGettersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns the information of the number you specified in Whatsapp
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param conversationId Load conversations info.
     */
    public phoneIdContactConversationIdGet(phoneId: string, conversationId: string, _options?: Configuration): Promise<PhoneIdContactConversationIdGet200Response> {
        const result = this.api.phoneIdContactConversationIdGet(phoneId, conversationId, _options);
        return result.toPromise();
    }

    /**
     * Returns the contacts in the current whatsapp instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdContactsGet(phoneId: string, _options?: Configuration): Promise<PhoneIdContactsGet200Response> {
        const result = this.api.phoneIdContactsGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Returns the qrCode in the current session if there is one.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdQrCodeGet(phoneId: string, _options?: Configuration): Promise<void> {
        const result = this.api.phoneIdQrCodeGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Returns the status of the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdScreenGet(phoneId: string, _options?: Configuration): Promise<void> {
        const result = this.api.phoneIdScreenGet(phoneId, _options);
        return result.toPromise();
    }

    /**
     * Returns the screenshot of the screen in the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdStatusGet(phoneId: string, _options?: Configuration): Promise<Status> {
        const result = this.api.phoneIdStatusGet(phoneId, _options);
        return result.toPromise();
    }


}



