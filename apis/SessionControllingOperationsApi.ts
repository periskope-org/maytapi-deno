// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { BackupData } from '../models/BackupData.ts';
import { BackupSuccess } from '../models/BackupSuccess.ts';
import { DeleteSuccess } from '../models/DeleteSuccess.ts';
import { JustSuccess } from '../models/JustSuccess.ts';
import { PhoneConfig } from '../models/PhoneConfig.ts';
import { PhoneIdConfigPostRequest } from '../models/PhoneIdConfigPostRequest.ts';
import { PhoneIdRedeployGet200Response } from '../models/PhoneIdRedeployGet200Response.ts';

/**
 * no description
 */
export class SessionControllingOperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Backups the material needed for opening the same chat screen for the current phone number. This call is useful when the session and also the status of the session is active. The response information can be used to open the chat screen with the POST restore call. If logout is called after getting the backup information, the data obtained from there will not be valid anymore.
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdBackupGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdBackupGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/backup'
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
     * Get phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdConfigGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdConfigGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/config'
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
     * Set phone specifig config for webhook and ack_delivery. If empty product webhook config would be used for delivery.  With this api you can define webhook for individual phones.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdConfigPostRequest With this api you can define webhook for individual phones.
     */
    public async phoneIdConfigPost(phoneId: string, phoneIdConfigPostRequest: PhoneIdConfigPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdConfigPost", "phoneId");
        }


        // verify required parameter 'phoneIdConfigPostRequest' is not null or undefined
        if (phoneIdConfigPostRequest === null || phoneIdConfigPostRequest === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdConfigPost", "phoneIdConfigPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/config'
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
            ObjectSerializer.serialize(phoneIdConfigPostRequest, "PhoneIdConfigPostRequest", ""),
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

    /**
     * **[DEPRECATED please use /factoryreset]** Deletes the phone and closes the session of that number.
     * DEPRECATED please use /factoryreset
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdDeleteGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdDeleteGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/delete'
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
     * Factory resets everything about phone instance to a new created instance state. This is a replacement for delete/create a new phone.   Your phone instances can\'t be deleted anymore. This is implemented beacuse some of our customers were loosing their phone instance when their subscription(or trial) suspended. With the new system your phones would only set to disabled state and after you fix your subscription you can re-enable your phones either making a request(/screen etc.) to instance or from our control panel.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdFactoryresetGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdFactoryresetGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/factoryreset'
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
     * Logouts the number from the current session and converts the screen to qr-code screen.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdLogoutGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdLogoutGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/logout'
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
     * Redeploys docker instance of your phone. If your phone having any unexpected problems you can use this endpoint to reboot the instance.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdRedeployGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdRedeployGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/redeploy'
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
     * **[DEPRECATED please use /redeploy]** Restarts the session by refreshing the page.
     * DEPRECATED please use /redeploy
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     */
    public async phoneIdRestartGet(phoneId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdRestartGet", "phoneId");
        }


        // Path Params
        const localVarPath = '/{phone_id}/restart'
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
     * **[DEPRECATED Multi-Device doesn\'t support this feature]** Reloads the current session based on the reload data (can be obtained from ***POST backup***).
     * DEPRECATED Multi-Device doesn\'t support this feature.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param backupData All the session restoring data needed.
     */
    public async phoneIdRestorePost(phoneId: string, backupData: BackupData, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdRestorePost", "phoneId");
        }


        // verify required parameter 'backupData' is not null or undefined
        if (backupData === null || backupData === undefined) {
            throw new RequiredError("SessionControllingOperationsApi", "phoneIdRestorePost", "backupData");
        }


        // Path Params
        const localVarPath = '/{phone_id}/restore'
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
            ObjectSerializer.serialize(backupData, "BackupData", ""),
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

export class SessionControllingOperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdBackupGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdBackupGet(response: ResponseContext): Promise<BackupSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BackupSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupSuccess", ""
            ) as BackupSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: BackupSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BackupSuccess", ""
            ) as BackupSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdConfigGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdConfigGet(response: ResponseContext): Promise<PhoneConfig > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneConfig", ""
            ) as PhoneConfig;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneConfig", ""
            ) as PhoneConfig;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdConfigPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdConfigPost(response: ResponseContext): Promise<PhoneConfig > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneConfig", ""
            ) as PhoneConfig;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneConfig = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneConfig", ""
            ) as PhoneConfig;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdDeleteGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdDeleteGet(response: ResponseContext): Promise<DeleteSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteSuccess", ""
            ) as DeleteSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteSuccess", ""
            ) as DeleteSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdFactoryresetGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdFactoryresetGet(response: ResponseContext): Promise<JustSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdLogoutGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdLogoutGet(response: ResponseContext): Promise<JustSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdRedeployGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdRedeployGet(response: ResponseContext): Promise<PhoneIdRedeployGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdRedeployGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdRedeployGet200Response", ""
            ) as PhoneIdRedeployGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdRedeployGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdRedeployGet200Response", ""
            ) as PhoneIdRedeployGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdRestartGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdRestartGet(response: ResponseContext): Promise<JustSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdRestorePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdRestorePost(response: ResponseContext): Promise<JustSuccess > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JustSuccess = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JustSuccess", ""
            ) as JustSuccess;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
