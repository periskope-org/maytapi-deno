export * from '../models/AckSet.ts';
export * from '../models/AddPhoneBody.ts';
export * from '../models/BackupData.ts';
export * from '../models/BackupSuccess.ts';
export * from '../models/DeleteSuccess.ts';
export * from '../models/GroupData.ts';
export * from '../models/GroupDataConfig.ts';
export * from '../models/IncomingMessageType.ts';
export * from '../models/IncomingMessageUserData.ts';
export * from '../models/InfoMessage.ts';
export * from '../models/JustSuccess.ts';
export * from '../models/LocationMessage.ts';
export * from '../models/LogObj.ts';
export * from '../models/LogObjData.ts';
export * from '../models/LogsGet200Response.ts';
export * from '../models/LogsGet200ResponseData.ts';
export * from '../models/MediaMessage.ts';
export * from '../models/MentionMessage.ts';
export * from '../models/MessageData.ts';
export * from '../models/MessageQuotedData.ts';
export * from '../models/MessageQuotedDataAllOf.ts';
export * from '../models/MultiVcardMessage.ts';
export * from '../models/PhoneConfig.ts';
export * from '../models/PhoneIdCatalogGet200Response.ts';
export * from '../models/PhoneIdConfigPostRequest.ts';
export * from '../models/PhoneIdContactConversationIdGet200Response.ts';
export * from '../models/PhoneIdContactConversationIdGet200ResponseDataInner.ts';
export * from '../models/PhoneIdContactsGet200Response.ts';
export * from '../models/PhoneIdContactsGet200ResponseDataInner.ts';
export * from '../models/PhoneIdCreateGroupPost200Response.ts';
export * from '../models/PhoneIdCreateGroupPostRequest.ts';
export * from '../models/PhoneIdGetGroupsGet200Response.ts';
export * from '../models/PhoneIdGroupAddPostRequest.ts';
export * from '../models/PhoneIdGroupConfigPost200Response.ts';
export * from '../models/PhoneIdGroupConfigPostRequest.ts';
export * from '../models/PhoneIdGroupConfigPostRequestConfig.ts';
export * from '../models/PhoneIdLeaveGroupPost200Response.ts';
export * from '../models/PhoneIdLeaveGroupPostRequest.ts';
export * from '../models/PhoneIdPurgeQueueGet200Response.ts';
export * from '../models/PhoneIdQueueGet200Response.ts';
export * from '../models/PhoneIdQueueGet200ResponseStats.ts';
export * from '../models/PhoneIdRedeployGet200Response.ts';
export * from '../models/PhoneIdSendMessagePostRequest.ts';
export * from '../models/PhoneIdSetProfileImagePostRequest.ts';
export * from '../models/PhoneObj.ts';
export * from '../models/PhoneObjWithPid.ts';
export * from '../models/ProductData.ts';
export * from '../models/QueuePhone.ts';
export * from '../models/QueuesGet200Response.ts';
export * from '../models/SendMessageResponse.ts';
export * from '../models/SendMessageResponseData.ts';
export * from '../models/Status.ts';
export * from '../models/StatusEnum.ts';
export * from '../models/SubStatus.ts';
export * from '../models/SubStatusState.ts';
export * from '../models/TextMessage.ts';
export * from '../models/VcardData.ts';
export * from '../models/VcardMessage.ts';
export * from '../models/WebhookAckBody.ts';
export * from '../models/WebhookAckData.ts';
export * from '../models/WebhookLiveBody.ts';
export * from '../models/WebhookLiveBodyData.ts';
export * from '../models/WebhookStatusBody.ts';
export * from '../models/WebhookUrl.ts';

import { AckSet } from '../models/AckSet.ts';
import { AddPhoneBody } from '../models/AddPhoneBody.ts';
import { BackupData } from '../models/BackupData.ts';
import { BackupSuccess } from '../models/BackupSuccess.ts';
import { DeleteSuccess } from '../models/DeleteSuccess.ts';
import { GroupData } from '../models/GroupData.ts';
import { GroupDataConfig, GroupDataConfigEditEnum  , GroupDataConfigSendEnum    } from '../models/GroupDataConfig.ts';
import { IncomingMessageType } from '../models/IncomingMessageType.ts';
import { IncomingMessageUserData } from '../models/IncomingMessageUserData.ts';
import { InfoMessage  , InfoMessageSubtypeEnum    } from '../models/InfoMessage.ts';
import { JustSuccess } from '../models/JustSuccess.ts';
import { LocationMessage } from '../models/LocationMessage.ts';
import { LogObj     , LogObjTypeEnum    } from '../models/LogObj.ts';
import { LogObjData } from '../models/LogObjData.ts';
import { LogsGet200Response } from '../models/LogsGet200Response.ts';
import { LogsGet200ResponseData } from '../models/LogsGet200ResponseData.ts';
import { MediaMessage, MediaMessageTypeEnum         } from '../models/MediaMessage.ts';
import { MentionMessage } from '../models/MentionMessage.ts';
import { MessageData           , MessageDataSubtypeEnum    } from '../models/MessageData.ts';
import { MessageQuotedData           , MessageQuotedDataSubtypeEnum      } from '../models/MessageQuotedData.ts';
import { MessageQuotedDataAllOf } from '../models/MessageQuotedDataAllOf.ts';
import { MultiVcardMessage } from '../models/MultiVcardMessage.ts';
import { PhoneConfig } from '../models/PhoneConfig.ts';
import { PhoneIdCatalogGet200Response } from '../models/PhoneIdCatalogGet200Response.ts';
import { PhoneIdConfigPostRequest } from '../models/PhoneIdConfigPostRequest.ts';
import { PhoneIdContactConversationIdGet200Response } from '../models/PhoneIdContactConversationIdGet200Response.ts';
import { PhoneIdContactConversationIdGet200ResponseDataInner  , PhoneIdContactConversationIdGet200ResponseDataInnerTypeEnum    } from '../models/PhoneIdContactConversationIdGet200ResponseDataInner.ts';
import { PhoneIdContactsGet200Response } from '../models/PhoneIdContactsGet200Response.ts';
import { PhoneIdContactsGet200ResponseDataInner  , PhoneIdContactsGet200ResponseDataInnerTypeEnum   } from '../models/PhoneIdContactsGet200ResponseDataInner.ts';
import { PhoneIdCreateGroupPost200Response } from '../models/PhoneIdCreateGroupPost200Response.ts';
import { PhoneIdCreateGroupPostRequest } from '../models/PhoneIdCreateGroupPostRequest.ts';
import { PhoneIdGetGroupsGet200Response } from '../models/PhoneIdGetGroupsGet200Response.ts';
import { PhoneIdGroupAddPostRequest } from '../models/PhoneIdGroupAddPostRequest.ts';
import { PhoneIdGroupConfigPost200Response } from '../models/PhoneIdGroupConfigPost200Response.ts';
import { PhoneIdGroupConfigPostRequest } from '../models/PhoneIdGroupConfigPostRequest.ts';
import { PhoneIdGroupConfigPostRequestConfig, PhoneIdGroupConfigPostRequestConfigEditEnum  , PhoneIdGroupConfigPostRequestConfigSendEnum    } from '../models/PhoneIdGroupConfigPostRequestConfig.ts';
import { PhoneIdLeaveGroupPost200Response } from '../models/PhoneIdLeaveGroupPost200Response.ts';
import { PhoneIdLeaveGroupPostRequest } from '../models/PhoneIdLeaveGroupPostRequest.ts';
import { PhoneIdPurgeQueueGet200Response } from '../models/PhoneIdPurgeQueueGet200Response.ts';
import { PhoneIdQueueGet200Response } from '../models/PhoneIdQueueGet200Response.ts';
import { PhoneIdQueueGet200ResponseStats } from '../models/PhoneIdQueueGet200ResponseStats.ts';
import { PhoneIdRedeployGet200Response } from '../models/PhoneIdRedeployGet200Response.ts';
import { PhoneIdSendMessagePostRequest  , PhoneIdSendMessagePostRequestTypeEnum          } from '../models/PhoneIdSendMessagePostRequest.ts';
import { PhoneIdSetProfileImagePostRequest } from '../models/PhoneIdSetProfileImagePostRequest.ts';
import { PhoneObj    } from '../models/PhoneObj.ts';
import { PhoneObjWithPid } from '../models/PhoneObjWithPid.ts';
import { ProductData } from '../models/ProductData.ts';
import { QueuePhone    } from '../models/QueuePhone.ts';
import { QueuesGet200Response } from '../models/QueuesGet200Response.ts';
import { SendMessageResponse } from '../models/SendMessageResponse.ts';
import { SendMessageResponseData } from '../models/SendMessageResponseData.ts';
import { Status } from '../models/Status.ts';
import { StatusEnum } from '../models/StatusEnum.ts';
import { SubStatus } from '../models/SubStatus.ts';
import { SubStatusState } from '../models/SubStatusState.ts';
import { TextMessage } from '../models/TextMessage.ts';
import { VcardData } from '../models/VcardData.ts';
import { VcardMessage } from '../models/VcardMessage.ts';
import { WebhookAckBody } from '../models/WebhookAckBody.ts';
import { WebhookAckData, WebhookAckDataAckTypeEnum  , WebhookAckDataAckCodeEnum      } from '../models/WebhookAckData.ts';
import { WebhookLiveBody } from '../models/WebhookLiveBody.ts';
import { WebhookLiveBodyData, WebhookLiveBodyDataEventEnum   } from '../models/WebhookLiveBodyData.ts';
import { WebhookStatusBody     } from '../models/WebhookStatusBody.ts';
import { WebhookUrl } from '../models/WebhookUrl.ts';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "GroupDataConfigEditEnum",
    "GroupDataConfigSendEnum",
    "InfoMessageSubtypeEnum",
    "LogObjTypeEnum",
    "MediaMessageTypeEnum",
    "MessageDataSubtypeEnum",
    "MessageQuotedDataSubtypeEnum",
    "PhoneIdContactConversationIdGet200ResponseDataInnerTypeEnum",
    "PhoneIdContactsGet200ResponseDataInnerTypeEnum",
    "PhoneIdGroupConfigPostRequestConfigEditEnum",
    "PhoneIdGroupConfigPostRequestConfigSendEnum",
    "PhoneIdSendMessagePostRequestTypeEnum",
    "StatusEnum",
    "WebhookAckDataAckTypeEnum",
    "WebhookAckDataAckCodeEnum",
    "WebhookLiveBodyDataEventEnum",
]);

let typeMap: {[index: string]: any} = {
    "AckSet": AckSet,
    "AddPhoneBody": AddPhoneBody,
    "BackupData": BackupData,
    "BackupSuccess": BackupSuccess,
    "DeleteSuccess": DeleteSuccess,
    "GroupData": GroupData,
    "GroupDataConfig": GroupDataConfig,
    "IncomingMessageType": IncomingMessageType,
    "IncomingMessageUserData": IncomingMessageUserData,
    "InfoMessage": InfoMessage,
    "JustSuccess": JustSuccess,
    "LocationMessage": LocationMessage,
    "LogObj": LogObj,
    "LogObjData": LogObjData,
    "LogsGet200Response": LogsGet200Response,
    "LogsGet200ResponseData": LogsGet200ResponseData,
    "MediaMessage": MediaMessage,
    "MentionMessage": MentionMessage,
    "MessageData": MessageData,
    "MessageQuotedData": MessageQuotedData,
    "MessageQuotedDataAllOf": MessageQuotedDataAllOf,
    "MultiVcardMessage": MultiVcardMessage,
    "PhoneConfig": PhoneConfig,
    "PhoneIdCatalogGet200Response": PhoneIdCatalogGet200Response,
    "PhoneIdConfigPostRequest": PhoneIdConfigPostRequest,
    "PhoneIdContactConversationIdGet200Response": PhoneIdContactConversationIdGet200Response,
    "PhoneIdContactConversationIdGet200ResponseDataInner": PhoneIdContactConversationIdGet200ResponseDataInner,
    "PhoneIdContactsGet200Response": PhoneIdContactsGet200Response,
    "PhoneIdContactsGet200ResponseDataInner": PhoneIdContactsGet200ResponseDataInner,
    "PhoneIdCreateGroupPost200Response": PhoneIdCreateGroupPost200Response,
    "PhoneIdCreateGroupPostRequest": PhoneIdCreateGroupPostRequest,
    "PhoneIdGetGroupsGet200Response": PhoneIdGetGroupsGet200Response,
    "PhoneIdGroupAddPostRequest": PhoneIdGroupAddPostRequest,
    "PhoneIdGroupConfigPost200Response": PhoneIdGroupConfigPost200Response,
    "PhoneIdGroupConfigPostRequest": PhoneIdGroupConfigPostRequest,
    "PhoneIdGroupConfigPostRequestConfig": PhoneIdGroupConfigPostRequestConfig,
    "PhoneIdLeaveGroupPost200Response": PhoneIdLeaveGroupPost200Response,
    "PhoneIdLeaveGroupPostRequest": PhoneIdLeaveGroupPostRequest,
    "PhoneIdPurgeQueueGet200Response": PhoneIdPurgeQueueGet200Response,
    "PhoneIdQueueGet200Response": PhoneIdQueueGet200Response,
    "PhoneIdQueueGet200ResponseStats": PhoneIdQueueGet200ResponseStats,
    "PhoneIdRedeployGet200Response": PhoneIdRedeployGet200Response,
    "PhoneIdSendMessagePostRequest": PhoneIdSendMessagePostRequest,
    "PhoneIdSetProfileImagePostRequest": PhoneIdSetProfileImagePostRequest,
    "PhoneObj": PhoneObj,
    "PhoneObjWithPid": PhoneObjWithPid,
    "ProductData": ProductData,
    "QueuePhone": QueuePhone,
    "QueuesGet200Response": QueuesGet200Response,
    "SendMessageResponse": SendMessageResponse,
    "SendMessageResponseData": SendMessageResponseData,
    "Status": Status,
    "SubStatus": SubStatus,
    "SubStatusState": SubStatusState,
    "TextMessage": TextMessage,
    "VcardData": VcardData,
    "VcardMessage": VcardMessage,
    "WebhookAckBody": WebhookAckBody,
    "WebhookAckData": WebhookAckData,
    "WebhookLiveBody": WebhookLiveBody,
    "WebhookLiveBodyData": WebhookLiveBodyData,
    "WebhookStatusBody": WebhookStatusBody,
    "WebhookUrl": WebhookUrl,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
