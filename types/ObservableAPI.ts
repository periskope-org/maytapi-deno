import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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
import { PhoneIdContactCidGet200Response } from '../models/PhoneIdContactCidGet200Response.ts';
import { PhoneIdContactCidGet200ResponseDataInner } from '../models/PhoneIdContactCidGet200ResponseDataInner.ts';
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
import { PhoneIdSetProfileImagePost200Response } from '../models/PhoneIdSetProfileImagePost200Response.ts';
import { PhoneIdSetProfileImagePostRequest } from '../models/PhoneIdSetProfileImagePostRequest.ts';
import { PhoneObj } from '../models/PhoneObj.ts';
import { PhoneObjWithPid } from '../models/PhoneObjWithPid.ts';
import { ProductData } from '../models/ProductData.ts';
import { QueuePhone } from '../models/QueuePhone.ts';
import { QueuesGet200Response } from '../models/QueuesGet200Response.ts';
import { SendMessageBody } from '../models/SendMessageBody.ts';
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

import { AccountInformationRetrievalApiRequestFactory, AccountInformationRetrievalApiResponseProcessor} from "../apis/AccountInformationRetrievalApi.ts";
export class ObservableAccountInformationRetrievalApi {
    private requestFactory: AccountInformationRetrievalApiRequestFactory;
    private responseProcessor: AccountInformationRetrievalApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountInformationRetrievalApiRequestFactory,
        responseProcessor?: AccountInformationRetrievalApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountInformationRetrievalApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountInformationRetrievalApiResponseProcessor();
    }

    /**
     * Adds a new phone to the product.
     * @param addPhoneBody If a number is wanted to be specified by adding the phone, that number is given. Otherwise, the number will be updated in database, when qr-screen is passed later.
     */
    public addPhonePost(addPhoneBody?: AddPhoneBody, _options?: Configuration): Observable<PhoneObjWithPid> {
        const requestContextPromise = this.requestFactory.addPhonePost(addPhoneBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPhonePost(rsp)));
            }));
    }

    /**
     * Returns information of all the phones registered to the given product.
     */
    public listPhonesGet(_options?: Configuration): Observable<Array<PhoneObj>> {
        const requestContextPromise = this.requestFactory.listPhonesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPhonesGet(rsp)));
            }));
    }

    /**
     * Returns logs of all the phones.
     */
    public logsGet(_options?: Configuration): Observable<LogsGet200Response> {
        const requestContextPromise = this.requestFactory.logsGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logsGet(rsp)));
            }));
    }

    /**
     * Returns the information of the product with the given product id.
     */
    public productGet(_options?: Configuration): Observable<ProductData> {
        const requestContextPromise = this.requestFactory.productGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.productGet(rsp)));
            }));
    }

    /**
     * Returns information of all the phones registered to the given product with queue information.
     */
    public queuesGet(_options?: Configuration): Observable<QueuesGet200Response> {
        const requestContextPromise = this.requestFactory.queuesGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queuesGet(rsp)));
            }));
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param ackSet Acknowledge messages taking preference is indicated.
     */
    public setAckPreferencePost(ackSet: AckSet, _options?: Configuration): Observable<ProductData> {
        const requestContextPromise = this.requestFactory.setAckPreferencePost(ackSet, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAckPreferencePost(rsp)));
            }));
    }

    /**
     * Sets a webhook address for the selected product. Webhook is used for delivering the incoming messages and acknowledge notifications of sent messages to the user. The notification formats that reaches to the webhook are as follows:
     * @param UNKNOWN_BASE_TYPE Webhook data is indicated.
     */
    public setWebhookPost(UNKNOWN_BASE_TYPE: UNKNOWN_BASE_TYPE, _options?: Configuration): Observable<ProductData> {
        const requestContextPromise = this.requestFactory.setWebhookPost(UNKNOWN_BASE_TYPE, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setWebhookPost(rsp)));
            }));
    }

}

import { BusinessCatalogBetaApiRequestFactory, BusinessCatalogBetaApiResponseProcessor} from "../apis/BusinessCatalogBetaApi.ts";
export class ObservableBusinessCatalogBetaApi {
    private requestFactory: BusinessCatalogBetaApiRequestFactory;
    private responseProcessor: BusinessCatalogBetaApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BusinessCatalogBetaApiRequestFactory,
        responseProcessor?: BusinessCatalogBetaApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BusinessCatalogBetaApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BusinessCatalogBetaApiResponseProcessor();
    }

    /**
     * Returns catalog products info of the business profile. You only need productId to send products to users.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdCatalogGet(phoneId: string, _options?: Configuration): Observable<PhoneIdCatalogGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdCatalogGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdCatalogGet(rsp)));
            }));
    }

}

import { GroupChatOperationsApiRequestFactory, GroupChatOperationsApiResponseProcessor} from "../apis/GroupChatOperationsApi.ts";
export class ObservableGroupChatOperationsApi {
    private requestFactory: GroupChatOperationsApiRequestFactory;
    private responseProcessor: GroupChatOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupChatOperationsApiRequestFactory,
        responseProcessor?: GroupChatOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupChatOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupChatOperationsApiResponseProcessor();
    }

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdCreateGroupPostRequest Acknowledge messages taking preference is indicated.
     */
    public phoneIdCreateGroupPost(phoneId: string, phoneIdCreateGroupPostRequest: PhoneIdCreateGroupPostRequest, _options?: Configuration): Observable<PhoneIdCreateGroupPost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdCreateGroupPost(phoneId, phoneIdCreateGroupPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdCreateGroupPost(rsp)));
            }));
    }

    /**
     * Get a conversation info.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param conversationId Load conversations info.
     * @param invite Generate invite link for group.
     */
    public phoneIdGetGroupsConversationIdGet(phoneId: string, conversationId: string, invite?: boolean, _options?: Configuration): Observable<PhoneIdCreateGroupPost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGetGroupsConversationIdGet(phoneId, conversationId, invite, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGetGroupsConversationIdGet(rsp)));
            }));
    }

    /**
     * Get conversations list.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param full Load participants for old conversations. (Max response limit:100)
     * @param sort Sort groups by id.
     * @param invite Include invite links for groups. (Max response limit:50)
     * @param page Paging for groups. We suggest to use with **sort** option.
     */
    public phoneIdGetGroupsGet(phoneId: string, full?: boolean, sort?: boolean, invite?: boolean, page?: number, _options?: Configuration): Observable<PhoneIdGetGroupsGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGetGroupsGet(phoneId, full, sort, invite, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGetGroupsGet(rsp)));
            }));
    }

    /**
     * Add a participant to a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupAddPost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Observable<PhoneIdSetProfileImagePost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGroupAddPost(phoneId, phoneIdGroupAddPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGroupAddPost(rsp)));
            }));
    }

    /**
     * Change config of a group conversation.  To learn conversation_id you can use /getGroups endpoint.  You can change who can edit group info(edit), can send message(send) and disappearing messages enabled(disappear).  For edit and send config you can use values \"admins\" or \"all\".  Disappear only accepts true/false values.  Config values are optional. If you want to only change a config you should only use that config\'s key in request body.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupConfigPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupConfigPost(phoneId: string, phoneIdGroupConfigPostRequest: PhoneIdGroupConfigPostRequest, _options?: Configuration): Observable<PhoneIdGroupConfigPost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGroupConfigPost(phoneId, phoneIdGroupConfigPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGroupConfigPost(rsp)));
            }));
    }

    /**
     * Demote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupDemotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Observable<PhoneIdSetProfileImagePost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGroupDemotePost(phoneId, phoneIdGroupAddPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGroupDemotePost(rsp)));
            }));
    }

    /**
     * Promote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupPromotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Observable<PhoneIdSetProfileImagePost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGroupPromotePost(phoneId, phoneIdGroupAddPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGroupPromotePost(rsp)));
            }));
    }

    /**
     * Remove a participant from a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdGroupRemovePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Observable<PhoneIdSetProfileImagePost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdGroupRemovePost(phoneId, phoneIdGroupAddPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdGroupRemovePost(rsp)));
            }));
    }

    /**
     * You can leave the group you want with the help of this endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdLeaveGroupPostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdLeaveGroupPost(phoneId: string, phoneIdLeaveGroupPostRequest: PhoneIdLeaveGroupPostRequest, _options?: Configuration): Observable<PhoneIdLeaveGroupPost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdLeaveGroupPost(phoneId, phoneIdLeaveGroupPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdLeaveGroupPost(rsp)));
            }));
    }

    /**
     * Change profile picture of a group conversation or yourself.  To change profile picture of yourself you need to leave the conversation_id blank.  You need to use square images for better view. We suggest 512x512 images.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdSetProfileImagePostRequest Group conversation id and number is required for the actions.
     */
    public phoneIdSetProfileImagePost(phoneId: string, phoneIdSetProfileImagePostRequest: PhoneIdSetProfileImagePostRequest, _options?: Configuration): Observable<PhoneIdSetProfileImagePost200Response> {
        const requestContextPromise = this.requestFactory.phoneIdSetProfileImagePost(phoneId, phoneIdSetProfileImagePostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdSetProfileImagePost(rsp)));
            }));
    }

}

import { MessageSendingOperationsApiRequestFactory, MessageSendingOperationsApiResponseProcessor} from "../apis/MessageSendingOperationsApi.ts";
export class ObservableMessageSendingOperationsApi {
    private requestFactory: MessageSendingOperationsApiRequestFactory;
    private responseProcessor: MessageSendingOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessageSendingOperationsApiRequestFactory,
        responseProcessor?: MessageSendingOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessageSendingOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessageSendingOperationsApiResponseProcessor();
    }

    /**
     * Used for sending message to a chat. A text, image, video, sound and document can be sent.  **This endpoint adds messages to your phone\'s sending queue. If your messages not delivering to phones please check your instance logs, queue endpoint or connection (/screen).**  **Curl example:** (You need to change product_id, phone_id and token[x-maytapi-key] with your product\'s values...) ```bash curl -X POST \\ \'https://api.maytapi.com/api/dc01968f-####-####-####-7cfcf51aa423/12/sendMessage\' \\   -H \'Content-Type: application/json\' \\   -H \'x-maytapi-key: b267697c-####-####-####-2435e812efc1\' \\   -d \'{  \"message\": \"http://placehold.it/180\",   \"text\": \"\",   \"to_number\": \"+905301111111\",   \"type\": \"media\" }\'
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param sendMessageBody - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\&quot;905301234567-1574073754@g.us\&quot;** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \&#39;Request body examples\&#39; section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints.
     */
    public phoneIdSendMessagePost(phoneId: string, sendMessageBody: SendMessageBody, _options?: Configuration): Observable<SendMessageResponse> {
        const requestContextPromise = this.requestFactory.phoneIdSendMessagePost(phoneId, sendMessageBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdSendMessagePost(rsp)));
            }));
    }

}

import { QueueOperationsApiRequestFactory, QueueOperationsApiResponseProcessor} from "../apis/QueueOperationsApi.ts";
export class ObservableQueueOperationsApi {
    private requestFactory: QueueOperationsApiRequestFactory;
    private responseProcessor: QueueOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: QueueOperationsApiRequestFactory,
        responseProcessor?: QueueOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new QueueOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new QueueOperationsApiResponseProcessor();
    }

    /**
     * Clears phone\'s send message queue.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdPurgeQueueGet(phoneId: string, _options?: Configuration): Observable<PhoneIdPurgeQueueGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdPurgeQueueGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdPurgeQueueGet(rsp)));
            }));
    }

    /**
     * Returns the queue info of the phone.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdQueueGet(phoneId: string, _options?: Configuration): Observable<PhoneIdQueueGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdQueueGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdQueueGet(rsp)));
            }));
    }

}

import { SessionControllingOperationsApiRequestFactory, SessionControllingOperationsApiResponseProcessor} from "../apis/SessionControllingOperationsApi.ts";
export class ObservableSessionControllingOperationsApi {
    private requestFactory: SessionControllingOperationsApiRequestFactory;
    private responseProcessor: SessionControllingOperationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionControllingOperationsApiRequestFactory,
        responseProcessor?: SessionControllingOperationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionControllingOperationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionControllingOperationsApiResponseProcessor();
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Backups the material needed for opening the same chat screen for the current phone number. This call is useful when the session and also the status of the session is active. The response information can be used to open the chat screen with the POST restore call. If logout is called after getting the backup information, the data obtained from there will not be valid anymore.
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdBackupGet(phoneId: string, _options?: Configuration): Observable<BackupSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdBackupGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdBackupGet(rsp)));
            }));
    }

    /**
     * Get phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdConfigGet(phoneId: string, _options?: Configuration): Observable<PhoneConfig> {
        const requestContextPromise = this.requestFactory.phoneIdConfigGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdConfigGet(rsp)));
            }));
    }

    /**
     * Set phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.  With this api you can define webhook for individual phones.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdConfigPostRequest With this api you can define webhook for individual phones.
     */
    public phoneIdConfigPost(phoneId: string, phoneIdConfigPostRequest: PhoneIdConfigPostRequest, _options?: Configuration): Observable<PhoneConfig> {
        const requestContextPromise = this.requestFactory.phoneIdConfigPost(phoneId, phoneIdConfigPostRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdConfigPost(rsp)));
            }));
    }

    /**
     * **[DEPRECATED please use /factoryreset]** Deletes the phone and closes the session of that number.
     * DEPRECATED please use /factoryreset
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdDeleteGet(phoneId: string, _options?: Configuration): Observable<DeleteSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdDeleteGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdDeleteGet(rsp)));
            }));
    }

    /**
     * Factory resets everything about phone instance to a new created instance state. This is a replacement for delete/create a new phone.   Your phone instances can\'t be deleted anymore. This is implemented beacuse some of our customers were loosing their phone instance when their subscription(or trial) suspended. With the new system your phones would only set to disabled state and after you fix your subscription you can re-enable your phones either making a request(/screen etc.) to instance or from our control panel.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdFactoryresetGet(phoneId: string, _options?: Configuration): Observable<JustSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdFactoryresetGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdFactoryresetGet(rsp)));
            }));
    }

    /**
     * Logouts the number from the current session and converts the screen to qr-code screen.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdLogoutGet(phoneId: string, _options?: Configuration): Observable<JustSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdLogoutGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdLogoutGet(rsp)));
            }));
    }

    /**
     * Redeploys docker instance of your phone. If your phone having any unexpected problems you can use this endpoint to reboot the instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdRedeployGet(phoneId: string, _options?: Configuration): Observable<PhoneIdRedeployGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdRedeployGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdRedeployGet(rsp)));
            }));
    }

    /**
     * **[DEPRECATED please use /redeploy]** Restarts the session by refreshing the page.
     * DEPRECATED please use /redeploy
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdRestartGet(phoneId: string, _options?: Configuration): Observable<JustSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdRestartGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdRestartGet(rsp)));
            }));
    }

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Reloads the current session based on the reload data (can be obtained from ***POST backup***).
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param backupData All the session restoring data needed.
     */
    public phoneIdRestorePost(phoneId: string, backupData: BackupData, _options?: Configuration): Observable<JustSuccess> {
        const requestContextPromise = this.requestFactory.phoneIdRestorePost(phoneId, backupData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdRestorePost(rsp)));
            }));
    }

}

import { SessionInformationGettersApiRequestFactory, SessionInformationGettersApiResponseProcessor} from "../apis/SessionInformationGettersApi.ts";
export class ObservableSessionInformationGettersApi {
    private requestFactory: SessionInformationGettersApiRequestFactory;
    private responseProcessor: SessionInformationGettersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SessionInformationGettersApiRequestFactory,
        responseProcessor?: SessionInformationGettersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SessionInformationGettersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SessionInformationGettersApiResponseProcessor();
    }

    /**
     * Returns the information of the number you specified in Whatsapp
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdContactCidGet(phoneId: string, _options?: Configuration): Observable<PhoneIdContactCidGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdContactCidGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdContactCidGet(rsp)));
            }));
    }

    /**
     * Returns the contacts in the current whatsapp instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdContactsGet(phoneId: string, _options?: Configuration): Observable<PhoneIdContactsGet200Response> {
        const requestContextPromise = this.requestFactory.phoneIdContactsGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdContactsGet(rsp)));
            }));
    }

    /**
     * Returns the qrCode in the current session if there is one.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdQrCodeGet(phoneId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.phoneIdQrCodeGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdQrCodeGet(rsp)));
            }));
    }

    /**
     * Returns the status of the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdScreenGet(phoneId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.phoneIdScreenGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdScreenGet(rsp)));
            }));
    }

    /**
     * Returns the screenshot of the screen in the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public phoneIdStatusGet(phoneId: string, _options?: Configuration): Observable<Status> {
        const requestContextPromise = this.requestFactory.phoneIdStatusGet(phoneId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.phoneIdStatusGet(rsp)));
            }));
    }

}
