/**
 * Maytapi - WhatsApp API Documentation
 * This API deals with a chatting platform based on WhatsApp. The user can send and receive text and media messages through WhatsApp in private chats with the endpoints that are created for the user. Moreover, the current status and the screen of the session can be retrieved using these endpoints. With the account specific endpoints, user can get the product or registered phones information, edit and remove these.  **Example Projects:**  [Maytapi WhatsApp Api NodeJS Example](https://github.com/Maytapi/whatsapp-api-nodejs-example)  [Maytapi WhatsApp Api NodeJS Dialogflow Example](https://github.com/Maytapi/whatsapp-api-nodejs-dialogflow-example)  [Maytapi WhatsApp Api Python Example](https://github.com/Maytapi/whatsapp-api-python-example)  [Maytapi WhatsApp Api Python Dialogflow Example](https://github.com/Maytapi/whatsapp-api-python-dialogflow-example)  You need to send **\'x-maytapi-key\':\'YOUR_TOKEN\'** header with every request.  You can find your **product_id** and **token** at [https://console.maytapi.com/settings/token](https://console.maytapi.com/settings/token)   You can find **message examples** in /sendMessage documentation section [Screenshot](https://maytapi.com/images/sendmessage.png)  | Feature | Status| Description | |:-------------------------|:-----------:|--------------------------------| | Receive message | ✅ | You need to set your webhook with **_/setWebhook** endpoint. | | Receive media | ✅ | Image, Video, Docs/File, Audio, Location, vCard supported. | | Send Text Message | ✅ | Send message works with queue. Message id and success response states that message added to sending queue.<br />If your messages isn\'t sended check your instance status for connection/login problems.<br />You can also check **_/logs** endpoint or [Developer Logs Page](https://console.maytapi.com/developers/logs) for error messages if you are using wrong format you can find the error in here.<br /> You can also check your queue status in [Developer Webhook Page](https://console.maytapi.com/developers/webhook) or with **_/{phone_id}/queue** endpoint./  | | Send Media | ✅ | Image, Audio(ogg-file in opus codec), Video, Docs(pdf,docx,etc.) supported. | | Send vCard | ✅ | You can find the example in /sendMessage → Examples → vCard Message | | Send Contact | ✅ | You can find the example in /sendMessage → Examples → Contact Message | | Send Location | ✅ |You can find the example in /sendMessage → Examples → Location Message  | | Send Procuct | ✅ |You can find the example in /sendMessage → Examples → Product Message (**BETA**)<br />You need to create products from WhatsApp Business Phone App.<br />You can find Product Ids from new **_/catalog** endpoint. | | Forward Messages | ✅ | You can find the example in /sendMessage → Examples → Forward Message | | Reply to Messages | ✅ | You can find the example in /sendMessage → Examples → Reply Message | | Delete Messages | ✅ | You can find the example in /sendMessage → Examples → Delete Message | | Reaction Message |✅| You can find the example in /sendMessage → Examples → Reaction Message | | Edit Message |✅| You can find the example in /sendMessage → Examples → Edit Message | |Create Groups | ✅ | You can find the example in **_/{phone_id}/createGroup** | | Get groups | ✅ | You can find the example in **_/{phone_id}/getGroups** |  Mention Message for Groups | ✅ | You can find the example in /sendMessage → Examples → Group Mention Message | | Leave Group | ✅ | You can find the example in **_/leaveGroup** | | New Spam Filter | ✅ | We added a new spam/dupe filter for recurring messages in the same conversation. In a conversation, the last 3 unique messages can\'t be sent more than 3 times.<br />This feature is to ignore spam messages sent to the same user. Sending same message to different users is not filtered.<br />You can also ignore the filter by adding `\"skip_filter\":true` to messages. You can find an example for this in /sendMessage examples section. | | Listen to Read Receipts | ✅ | You need to enable this with **_/setAckPreference** endpoint. | | Webhook examples. | ✅ | You can find webhook examples in **Callbacks** tab of **_/setWebhook** endpoint definition. |
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@maytapi.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SendMessageResponseData } from '../models/SendMessageResponseData.ts';
import { HttpFile } from '../http/http.ts';

export class SendMessageResponse {
    'success'?: boolean;
    'data'?: SendMessageResponseData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "SendMessageResponseData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SendMessageResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

