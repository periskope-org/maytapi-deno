// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PhoneIdPurgeQueueGet200Response } from '../models/PhoneIdPurgeQueueGet200Response.ts';
import { PhoneIdQueueGet200Response } from '../models/PhoneIdQueueGet200Response.ts';

/**
 * no description
 */
export class QueueOperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Clears phone\'s send message queue.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdPurgeQueueGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("QueueOperationsApi", "phoneIdPurgeQueueGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/purgeQueue'
            .replace('{' + 'phone_id' + '}', encodeURIComponent(String(phoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

    /**
     * Returns the queue info of the phone.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdQueueGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("QueueOperationsApi", "phoneIdQueueGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/queue'
            .replace('{' + 'phone_id' + '}', encodeURIComponent(String(phoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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

export class QueueOperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdPurgeQueueGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdPurgeQueueGet(response: ResponseContext): Promise<PhoneIdPurgeQueueGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdPurgeQueueGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdPurgeQueueGet200Response", ""
            ) as PhoneIdPurgeQueueGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdPurgeQueueGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdPurgeQueueGet200Response", ""
            ) as PhoneIdPurgeQueueGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdQueueGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdQueueGet(response: ResponseContext): Promise<PhoneIdQueueGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdQueueGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdQueueGet200Response", ""
            ) as PhoneIdQueueGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdQueueGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdQueueGet200Response", ""
            ) as PhoneIdQueueGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
