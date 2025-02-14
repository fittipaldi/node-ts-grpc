import {v4 as uuidv4} from 'uuid';
import * as grpc from "@grpc/grpc-js";

// Implement the gRPC service handlers
const demoService: any = {
    createDemo: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
        const {name, email} = call.request;
        const response = {
            uuid: uuidv4(),
            name,
            email,
            message: "Demo created successfully!",
        };
        console.log("Received request:", call.request);
        callback(null, response);
    },
};

export default demoService;

