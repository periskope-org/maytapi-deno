// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PhoneIdSendMessagePostRequest } from '../models/PhoneIdSendMessagePostRequest.ts';
import { SendMessageResponse } from '../models/SendMessageResponse.ts';

/**
 * no description
 */
export class MessageSendingOperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Used for sending message to a chat. A text, image, video, sound and document can be sent.  **This endpoint adds messages to your phone\'s sending queue. If your messages not delivering to phones please check your instance logs, queue endpoint or connection (/screen).**  **Curl example:** (You need to change product_id, phone_id and token[x-maytapi-key] with your product\'s values...) ```bash curl -X POST \\ \'https://api.maytapi.com/api/dc01968f-####-####-####-7cfcf51aa423/12/sendMessage\' \\   -H \'Content-Type: application/json\' \\   -H \'x-maytapi-key: b267697c-####-####-####-2435e812efc1\' \\   -d \'{  \"message\": \"http://placehold.it/180\",   \"text\": \"\",   \"to_number\": \"+905301111111\",   \"type\": \"media\" }\'
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdSendMessagePostRequest - to_number should start with country code without any special characters. - For group conversations you need to pass group.id to to_number. Ex: **\&quot;905301234567-1574073754@g.us\&quot;** - If the message to be sent is just a text message, it can be put directly to ***message*** parameter in the body  - **For media and group message examples please look at \&#39;Request body examples\&#39; section below.** - For Product messages you need to create your products from WhatsApp Business Phone app and find your product id with **_/catalog** endpoints.
     */
    public async phoneIdSendMessagePost(phoneId: string, phoneIdSendMessagePostRequest: PhoneIdSendMessagePostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("MessageSendingOperationsApi", "phoneIdSendMessagePost", "phoneId");
        }


        // verify required parameter 'phoneIdSendMessagePostRequest' is not null or undefined
        if (phoneIdSendMessagePostRequest === null || phoneIdSendMessagePostRequest === undefined) {
            throw new RequiredError("MessageSendingOperationsApi", "phoneIdSendMessagePost", "phoneIdSendMessagePostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/sendMessage'
            .replace('{' + 'phone_id' + '}', encodeURIComponent(String(phoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(phoneIdSendMessagePostRequest, "PhoneIdSendMessagePostRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class MessageSendingOperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdSendMessagePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdSendMessagePost(response: ResponseContext): Promise<SendMessageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendMessageResponse", ""
            ) as SendMessageResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendMessageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendMessageResponse", ""
            ) as SendMessageResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
