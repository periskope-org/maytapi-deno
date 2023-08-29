// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {JustSuccess, ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {canConsumeForm, isCodeInRange} from '../util.ts';
import {SecurityAuthentication} from '../auth/auth.ts';


import { PhoneIdCreateGroupPost200Response } from '../models/PhoneIdCreateGroupPost200Response.ts';
import { PhoneIdCreateGroupPostRequest } from '../models/PhoneIdCreateGroupPostRequest.ts';
import { PhoneIdGetGroupsGet200Response } from '../models/PhoneIdGetGroupsGet200Response.ts';
import { PhoneIdGroupAddPostRequest } from '../models/PhoneIdGroupAddPostRequest.ts';
import { PhoneIdGroupConfigPost200Response } from '../models/PhoneIdGroupConfigPost200Response.ts';
import { PhoneIdGroupConfigPostRequest } from '../models/PhoneIdGroupConfigPostRequest.ts';
import { PhoneIdLeaveGroupPost200Response } from '../models/PhoneIdLeaveGroupPost200Response.ts';
import { PhoneIdLeaveGroupPostRequest } from '../models/PhoneIdLeaveGroupPostRequest.ts';
import { PhoneIdSetProfileImagePost200Response } from '../models/PhoneIdSetProfileImagePost200Response.ts';
import { PhoneIdSetProfileImagePostRequest } from '../models/PhoneIdSetProfileImagePostRequest.ts';

/**
 * no description
 */
export class GroupChatOperationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Sets the option for getting the acknowledge messages from the webhook to true or false.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdCreateGroupPostRequest Acknowledge messages taking preference is indicated.
     */
    public async phoneIdCreateGroupPost(phoneId: string, phoneIdCreateGroupPostRequest: PhoneIdCreateGroupPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdCreateGroupPost", "phoneId");
        }


        // verify required parameter 'phoneIdCreateGroupPostRequest' is not null or undefined
        if (phoneIdCreateGroupPostRequest === null || phoneIdCreateGroupPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdCreateGroupPost", "phoneIdCreateGroupPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/createGroup'
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
            ObjectSerializer.serialize(phoneIdCreateGroupPostRequest, "PhoneIdCreateGroupPostRequest", ""),
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
     * Get a conversation info.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param conversationId Load conversations info.
     * @param invite Generate invite link for group.
     */
    public async phoneIdGetGroupsConversationIdGet(phoneId: string, conversationId: string, invite?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGetGroupsConversationIdGet", "phoneId");
        }


        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGetGroupsConversationIdGet", "conversationId");
        }



        // Path Params
        const localVarPath = '/{phone_id}/getGroups/{conversation_id}'
            .replace('{' + 'phone_id' + '}', encodeURIComponent(String(phoneId)))
            .replace('{' + 'conversation_id' + '}', encodeURIComponent(String(conversationId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (invite !== undefined) {
            requestContext.setQueryParam("invite", ObjectSerializer.serialize(invite, "boolean", ""));
        }


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
     * Get conversations list.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param full Load participants for old conversations. (Max response limit:100)
     * @param sort Sort groups by id.
     * @param invite Include invite links for groups. (Max response limit:50)
     * @param page Paging for groups. We suggest to use with **sort** option.
     */
    public async phoneIdGetGroupsGet(phoneId: string, full?: boolean, sort?: boolean, invite?: boolean, page?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGetGroupsGet", "phoneId");
        }






        // Path Params
        const localVarPath = '/{phone_id}/getGroups'
            .replace('{' + 'phone_id' + '}', encodeURIComponent(String(phoneId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (full !== undefined) {
            requestContext.setQueryParam("full", ObjectSerializer.serialize(full, "boolean", ""));
        }

        // Query Params
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "boolean", ""));
        }

        // Query Params
        if (invite !== undefined) {
            requestContext.setQueryParam("invite", ObjectSerializer.serialize(invite, "boolean", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }


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
     * Add a participant to a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdGroupAddPost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupAddPost", "phoneId");
        }


        // verify required parameter 'phoneIdGroupAddPostRequest' is not null or undefined
        if (phoneIdGroupAddPostRequest === null || phoneIdGroupAddPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupAddPost", "phoneIdGroupAddPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/group/add'
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
            ObjectSerializer.serialize(phoneIdGroupAddPostRequest, "PhoneIdGroupAddPostRequest", ""),
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
     * Change config of a group conversation.  To learn conversation_id you can use /getGroups endpoint.  You can change who can edit group info(edit), can send message(send) and disappearing messages enabled(disappear).  For edit and send config you can use values \"admins\" or \"all\".  Disappear only accepts true/false values.  Config values are optional. If you want to only change a config you should only use that config\'s key in request body.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupConfigPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdGroupConfigPost(phoneId: string, phoneIdGroupConfigPostRequest: PhoneIdGroupConfigPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupConfigPost", "phoneId");
        }


        // verify required parameter 'phoneIdGroupConfigPostRequest' is not null or undefined
        if (phoneIdGroupConfigPostRequest === null || phoneIdGroupConfigPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupConfigPost", "phoneIdGroupConfigPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/group/config'
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
            ObjectSerializer.serialize(phoneIdGroupConfigPostRequest, "PhoneIdGroupConfigPostRequest", ""),
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
     * Demote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdGroupDemotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupDemotePost", "phoneId");
        }


        // verify required parameter 'phoneIdGroupAddPostRequest' is not null or undefined
        if (phoneIdGroupAddPostRequest === null || phoneIdGroupAddPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupDemotePost", "phoneIdGroupAddPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/group/demote'
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
            ObjectSerializer.serialize(phoneIdGroupAddPostRequest, "PhoneIdGroupAddPostRequest", ""),
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
     * Promote a participant in a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdGroupPromotePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupPromotePost", "phoneId");
        }


        // verify required parameter 'phoneIdGroupAddPostRequest' is not null or undefined
        if (phoneIdGroupAddPostRequest === null || phoneIdGroupAddPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupPromotePost", "phoneIdGroupAddPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/group/promote'
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
            ObjectSerializer.serialize(phoneIdGroupAddPostRequest, "PhoneIdGroupAddPostRequest", ""),
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
     * Remove a participant from a group conversation.  To learn conversation_id you can use /getGroups endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdGroupAddPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdGroupRemovePost(phoneId: string, phoneIdGroupAddPostRequest: PhoneIdGroupAddPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupRemovePost", "phoneId");
        }


        // verify required parameter 'phoneIdGroupAddPostRequest' is not null or undefined
        if (phoneIdGroupAddPostRequest === null || phoneIdGroupAddPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdGroupRemovePost", "phoneIdGroupAddPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/group/remove'
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
            ObjectSerializer.serialize(phoneIdGroupAddPostRequest, "PhoneIdGroupAddPostRequest", ""),
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
     * You can leave the group you want with the help of this endpoint.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdLeaveGroupPostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdLeaveGroupPost(phoneId: string, phoneIdLeaveGroupPostRequest: PhoneIdLeaveGroupPostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdLeaveGroupPost", "phoneId");
        }


        // verify required parameter 'phoneIdLeaveGroupPostRequest' is not null or undefined
        if (phoneIdLeaveGroupPostRequest === null || phoneIdLeaveGroupPostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdLeaveGroupPost", "phoneIdLeaveGroupPostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/leaveGroup'
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
            ObjectSerializer.serialize(phoneIdLeaveGroupPostRequest, "PhoneIdLeaveGroupPostRequest", ""),
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
     * Change profile picture of a group conversation or yourself.  To change profile picture of yourself you need to leave the conversation_id blank.  You need to use square images for better view. We suggest 512x512 images.
     * @param phoneId ID of the phone registered to the product, assigned by the database automatically. Can be obtained by calling ***GET listPhones***.
     * @param phoneIdSetProfileImagePostRequest Group conversation id and number is required for the actions.
     */
    public async phoneIdSetProfileImagePost(phoneId: string, phoneIdSetProfileImagePostRequest: PhoneIdSetProfileImagePostRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'phoneId' is not null or undefined
        if (phoneId === null || phoneId === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdSetProfileImagePost", "phoneId");
        }


        // verify required parameter 'phoneIdSetProfileImagePostRequest' is not null or undefined
        if (phoneIdSetProfileImagePostRequest === null || phoneIdSetProfileImagePostRequest === undefined) {
            throw new RequiredError("GroupChatOperationsApi", "phoneIdSetProfileImagePost", "phoneIdSetProfileImagePostRequest");
        }


        // Path Params
        const localVarPath = '/{phone_id}/setProfileImage'
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
            ObjectSerializer.serialize(phoneIdSetProfileImagePostRequest, "PhoneIdSetProfileImagePostRequest", ""),
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

export class GroupChatOperationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdCreateGroupPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdCreateGroupPost(response: ResponseContext): Promise<PhoneIdCreateGroupPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdCreateGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCreateGroupPost200Response", ""
            ) as PhoneIdCreateGroupPost200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdCreateGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCreateGroupPost200Response", ""
            ) as PhoneIdCreateGroupPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdGetGroupsConversationIdGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGetGroupsConversationIdGet(response: ResponseContext): Promise<PhoneIdCreateGroupPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdCreateGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCreateGroupPost200Response", ""
            ) as PhoneIdCreateGroupPost200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdCreateGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdCreateGroupPost200Response", ""
            ) as PhoneIdCreateGroupPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdGetGroupsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGetGroupsGet(response: ResponseContext): Promise<PhoneIdGetGroupsGet200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdGetGroupsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdGetGroupsGet200Response", ""
            ) as PhoneIdGetGroupsGet200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdGetGroupsGet200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdGetGroupsGet200Response", ""
            ) as PhoneIdGetGroupsGet200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdGroupAddPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGroupAddPost(response: ResponseContext): Promise<JustSuccess > {
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
     * @params response Response returned by the server for a request to phoneIdGroupConfigPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGroupConfigPost(response: ResponseContext): Promise<PhoneIdGroupConfigPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdGroupConfigPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdGroupConfigPost200Response", ""
            ) as PhoneIdGroupConfigPost200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdGroupConfigPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdGroupConfigPost200Response", ""
            ) as PhoneIdGroupConfigPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdGroupDemotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGroupDemotePost(response: ResponseContext): Promise<JustSuccess > {
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
     * @params response Response returned by the server for a request to phoneIdGroupPromotePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGroupPromotePost(response: ResponseContext): Promise<JustSuccess > {
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
     * @params response Response returned by the server for a request to phoneIdGroupRemovePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdGroupRemovePost(response: ResponseContext): Promise<JustSuccess > {
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
     * @params response Response returned by the server for a request to phoneIdLeaveGroupPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdLeaveGroupPost(response: ResponseContext): Promise<PhoneIdLeaveGroupPost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdLeaveGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdLeaveGroupPost200Response", ""
            ) as PhoneIdLeaveGroupPost200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdLeaveGroupPost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdLeaveGroupPost200Response", ""
            ) as PhoneIdLeaveGroupPost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to phoneIdSetProfileImagePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async phoneIdSetProfileImagePost(response: ResponseContext): Promise<PhoneIdSetProfileImagePost200Response > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneIdSetProfileImagePost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdSetProfileImagePost200Response", ""
            ) as PhoneIdSetProfileImagePost200Response;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneIdSetProfileImagePost200Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneIdSetProfileImagePost200Response", ""
            ) as PhoneIdSetProfileImagePost200Response;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
