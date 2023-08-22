// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PhoneIdContactCidGet200Response } from '../models/PhoneIdContactCidGet200Response.ts';
import { PhoneIdContactsGet200Response } from '../models/PhoneIdContactsGet200Response.ts';
import { Status } from '../models/Status.ts';

/**
 * no description
 */
export class SessionInformationGettersApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns the information of the number you specified in Whatsapp
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdContactCidGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionInformationGettersApi", "phoneIdContactCidGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/contact/:cid'
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
     * Returns the contacts in the current whatsapp instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdContactsGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionInformationGettersApi", "phoneIdContactsGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/contacts'
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
     * Returns the qrCode in the current session if there is one.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdQrCodeGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionInformationGettersApi", "phoneIdQrCodeGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/qrCode'
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
     * Returns the status of the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdScreenGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionInformationGettersApi", "phoneIdScreenGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/screen'
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
     * Returns the screenshot of the screen in the current session.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdStatusGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionInformationGettersApi", "phoneIdStatusGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/status'
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

export class SessionInformationGettersApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdContactCidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdContactCidGet(response: ResponseContext): Promise<PhoneIdContactCidGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdContactCidGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdContactCidGet200Response", ""
            ) as PhoneIdContactCidGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdContactCidGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdContactCidGet200Response", ""
            ) as PhoneIdContactCidGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdContactsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdContactsGet(response: ResponseContext): Promise<PhoneIdContactsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdContactsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdContactsGet200Response", ""
            ) as PhoneIdContactsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdContactsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdContactsGet200Response", ""
            ) as PhoneIdContactsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdQrCodeGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdQrCodeGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdScreenGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdScreenGet(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdStatusGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdStatusGet(response: ResponseContext): Promise<Status > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Status", ""
            ) as Status;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Status = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Status", ""
            ) as Status;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
