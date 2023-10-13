/**
 * @fileoverview gRPC-Web generated client stub for GroupCon
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v4.24.4
// source: GroupCon.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.GroupCon = require('./GroupCon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GroupCon.GroupConSvcClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.GroupCon.GroupConSvcPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.EmptyGroupMessage,
 *   !proto.GroupCon.GroupCountryListMessage>}
 */
const methodDescriptor_GroupConSvc_GetEganowGroupCountryList = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetEganowGroupCountryList',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.EmptyGroupMessage,
  proto.GroupCon.GroupCountryListMessage,
  /**
   * @param {!proto.GroupCon.EmptyGroupMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.GroupCountryListMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.EmptyGroupMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.GroupCountryListMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.GroupCountryListMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getEganowGroupCountryList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetEganowGroupCountryList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetEganowGroupCountryList,
      callback);
};


/**
 * @param {!proto.GroupCon.EmptyGroupMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.GroupCountryListMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getEganowGroupCountryList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetEganowGroupCountryList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetEganowGroupCountryList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.GroupCountryCodeRequestMessage,
 *   !proto.GroupCon.GroupCategoryListMessage>}
 */
const methodDescriptor_GroupConSvc_GetGroupCategoryList = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetGroupCategoryList',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.GroupCountryCodeRequestMessage,
  proto.GroupCon.GroupCategoryListMessage,
  /**
   * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.GroupCategoryListMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.GroupCategoryListMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.GroupCategoryListMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getGroupCategoryList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetGroupCategoryList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetGroupCategoryList,
      callback);
};


/**
 * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.GroupCategoryListMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getGroupCategoryList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetGroupCategoryList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetGroupCategoryList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.GroupCountryCodeRequestMessage,
 *   !proto.GroupCon.ProjectTemplateListMessage>}
 */
const methodDescriptor_GroupConSvc_GetProjectTemplateList = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetProjectTemplateList',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.GroupCountryCodeRequestMessage,
  proto.GroupCon.ProjectTemplateListMessage,
  /**
   * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.ProjectTemplateListMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.ProjectTemplateListMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.ProjectTemplateListMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getProjectTemplateList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetProjectTemplateList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetProjectTemplateList,
      callback);
};


/**
 * @param {!proto.GroupCon.GroupCountryCodeRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.ProjectTemplateListMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getProjectTemplateList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/GetProjectTemplateList',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetProjectTemplateList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.NewGroupRequestMessage,
 *   !proto.GroupCon.SuccessGroupMessage>}
 */
const methodDescriptor_GroupConSvc_CreateNewGroup = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/CreateNewGroup',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.NewGroupRequestMessage,
  proto.GroupCon.SuccessGroupMessage,
  /**
   * @param {!proto.GroupCon.NewGroupRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.SuccessGroupMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.NewGroupRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.SuccessGroupMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.SuccessGroupMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.createNewGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/CreateNewGroup',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_CreateNewGroup,
      callback);
};


/**
 * @param {!proto.GroupCon.NewGroupRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.SuccessGroupMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.createNewGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/CreateNewGroup',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_CreateNewGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.InviteRequestMessage,
 *   !proto.GroupCon.SuccessGroupMessage>}
 */
const methodDescriptor_GroupConSvc_SendAnInvite = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/SendAnInvite',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.InviteRequestMessage,
  proto.GroupCon.SuccessGroupMessage,
  /**
   * @param {!proto.GroupCon.InviteRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.SuccessGroupMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.InviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.SuccessGroupMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.SuccessGroupMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.sendAnInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/SendAnInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_SendAnInvite,
      callback);
};


/**
 * @param {!proto.GroupCon.InviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.SuccessGroupMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.sendAnInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/SendAnInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_SendAnInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.EmptyGroupMessage,
 *   !proto.GroupCon.InviteListResponseMessage>}
 */
const methodDescriptor_GroupConSvc_GetInviteReceived = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetInviteReceived',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GroupCon.EmptyGroupMessage,
  proto.GroupCon.InviteListResponseMessage,
  /**
   * @param {!proto.GroupCon.EmptyGroupMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.InviteListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.EmptyGroupMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.InviteListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getInviteReceived =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetInviteReceived',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetInviteReceived);
};


/**
 * @param {!proto.GroupCon.EmptyGroupMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.InviteListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getInviteReceived =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetInviteReceived',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetInviteReceived);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.AcceptInviteRequestMessage,
 *   !proto.GroupCon.SuccessGroupMessage>}
 */
const methodDescriptor_GroupConSvc_AcceptInvite = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/AcceptInvite',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.AcceptInviteRequestMessage,
  proto.GroupCon.SuccessGroupMessage,
  /**
   * @param {!proto.GroupCon.AcceptInviteRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.SuccessGroupMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.AcceptInviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.SuccessGroupMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.SuccessGroupMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.acceptInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_AcceptInvite,
      callback);
};


/**
 * @param {!proto.GroupCon.AcceptInviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.SuccessGroupMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.acceptInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_AcceptInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.RejectInviteRequestMessage,
 *   !proto.GroupCon.SuccessGroupMessage>}
 */
const methodDescriptor_GroupConSvc_RejectInvite = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/RejectInvite',
  grpc.web.MethodType.UNARY,
  proto.GroupCon.RejectInviteRequestMessage,
  proto.GroupCon.SuccessGroupMessage,
  /**
   * @param {!proto.GroupCon.RejectInviteRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.SuccessGroupMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.RejectInviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GroupCon.SuccessGroupMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.SuccessGroupMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.rejectInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/GroupCon.GroupConSvc/RejectInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_RejectInvite,
      callback);
};


/**
 * @param {!proto.GroupCon.RejectInviteRequestMessage} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GroupCon.SuccessGroupMessage>}
 *     Promise that resolves to the response
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.rejectInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/GroupCon.GroupConSvc/RejectInvite',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_RejectInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.LanguageGroupRequestMessage,
 *   !proto.GroupCon.CustomerGroupListResponseMessage>}
 */
const methodDescriptor_GroupConSvc_GetAllActiveGroupsForACustomerInAllCountriesStream = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetAllActiveGroupsForACustomerInAllCountriesStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GroupCon.LanguageGroupRequestMessage,
  proto.GroupCon.CustomerGroupListResponseMessage,
  /**
   * @param {!proto.GroupCon.LanguageGroupRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.CustomerGroupListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.LanguageGroupRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.CustomerGroupListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getAllActiveGroupsForACustomerInAllCountriesStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetAllActiveGroupsForACustomerInAllCountriesStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetAllActiveGroupsForACustomerInAllCountriesStream);
};


/**
 * @param {!proto.GroupCon.LanguageGroupRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.CustomerGroupListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getAllActiveGroupsForACustomerInAllCountriesStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetAllActiveGroupsForACustomerInAllCountriesStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetAllActiveGroupsForACustomerInAllCountriesStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.ProjectOrGroupMembersRequestMessage,
 *   !proto.GroupCon.ProjectListResponseMessage>}
 */
const methodDescriptor_GroupConSvc_GetAllActiveProjectsForASelectedGroupInAllCountriesStream = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetAllActiveProjectsForASelectedGroupInAllCountriesStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GroupCon.ProjectOrGroupMembersRequestMessage,
  proto.GroupCon.ProjectListResponseMessage,
  /**
   * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.ProjectListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.ProjectListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getAllActiveProjectsForASelectedGroupInAllCountriesStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetAllActiveProjectsForASelectedGroupInAllCountriesStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetAllActiveProjectsForASelectedGroupInAllCountriesStream);
};


/**
 * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.ProjectListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getAllActiveProjectsForASelectedGroupInAllCountriesStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetAllActiveProjectsForASelectedGroupInAllCountriesStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetAllActiveProjectsForASelectedGroupInAllCountriesStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GroupCon.ProjectOrGroupMembersRequestMessage,
 *   !proto.GroupCon.GroupMembersListResponseMessage>}
 */
const methodDescriptor_GroupConSvc_GetGroupMembersStream = new grpc.web.MethodDescriptor(
  '/GroupCon.GroupConSvc/GetGroupMembersStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.GroupCon.ProjectOrGroupMembersRequestMessage,
  proto.GroupCon.GroupMembersListResponseMessage,
  /**
   * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GroupCon.GroupMembersListResponseMessage.deserializeBinary
);


/**
 * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.GroupMembersListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcClient.prototype.getGroupMembersStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetGroupMembersStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetGroupMembersStream);
};


/**
 * @param {!proto.GroupCon.ProjectOrGroupMembersRequestMessage} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.GroupCon.GroupMembersListResponseMessage>}
 *     The XHR Node Readable Stream
 */
proto.GroupCon.GroupConSvcPromiseClient.prototype.getGroupMembersStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/GroupCon.GroupConSvc/GetGroupMembersStream',
      request,
      metadata || {},
      methodDescriptor_GroupConSvc_GetGroupMembersStream);
};


module.exports = proto.GroupCon;

