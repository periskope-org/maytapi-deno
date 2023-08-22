// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PhoneIdCatalogGet200Response } from '../models/PhoneIdCatalogGet200Response.ts';

/**
 * no description
 */
export class BusinessCatalogBetaApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns catalog products info of the business profile. You only need productId to send products to users.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdCatalogGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("BusinessCatalogBetaApi", "phoneIdCatalogGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/catalog'
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

export class BusinessCatalogBetaApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdCatalogGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdCatalogGet(response: ResponseContext): Promise<PhoneIdCatalogGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdCatalogGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCatalogGet200Response", ""
            ) as PhoneIdCatalogGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdCatalogGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCatalogGet200Response", ""
            ) as PhoneIdCatalogGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
