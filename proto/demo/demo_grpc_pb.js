// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var demo_pb = require('./demo_pb.js');

function serialize_demo_DemoRequest(arg) {
  if (!(arg instanceof demo_pb.DemoRequest)) {
    throw new Error('Expected argument of type demo.DemoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_DemoRequest(buffer_arg) {
  return demo_pb.DemoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_DemoResponse(arg) {
  if (!(arg instanceof demo_pb.DemoResponse)) {
    throw new Error('Expected argument of type demo.DemoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_DemoResponse(buffer_arg) {
  return demo_pb.DemoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_DemosResponse(arg) {
  if (!(arg instanceof demo_pb.DemosResponse)) {
    throw new Error('Expected argument of type demo.DemosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_DemosResponse(buffer_arg) {
  return demo_pb.DemosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_Empty(arg) {
  if (!(arg instanceof demo_pb.Empty)) {
    throw new Error('Expected argument of type demo.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_Empty(buffer_arg) {
  return demo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var DemoServiceService = exports.DemoServiceService = {
  createDemo: {
    path: '/demo.DemoService/CreateDemo',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.DemoRequest,
    responseType: demo_pb.DemoResponse,
    requestSerialize: serialize_demo_DemoRequest,
    requestDeserialize: deserialize_demo_DemoRequest,
    responseSerialize: serialize_demo_DemoResponse,
    responseDeserialize: deserialize_demo_DemoResponse,
  },
  getDemos: {
    path: '/demo.DemoService/GetDemos',
    requestStream: false,
    responseStream: false,
    requestType: demo_pb.Empty,
    responseType: demo_pb.DemosResponse,
    requestSerialize: serialize_demo_Empty,
    requestDeserialize: deserialize_demo_Empty,
    responseSerialize: serialize_demo_DemosResponse,
    responseDeserialize: deserialize_demo_DemosResponse,
  },
};

exports.DemoServiceClient = grpc.makeGenericClientConstructor(DemoServiceService, 'DemoService');
