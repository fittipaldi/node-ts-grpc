import * as grpc from "@grpc/grpc-js";
import DemoRepository from "./repository/demoRepository";
import type {DemoResponse, DemosResponse} from "../../proto/demo/demo"

// Implement the gRPC service handlers
const demoService: any = {
    CreateDemo: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
        console.log("Received request:", call.request);

        const {name, email} = call.request;
        const demoData = DemoRepository.addDemo(name, email);

        const response: DemoResponse = {
            uuid: demoData.uuid,
            name: demoData.name,
            email: demoData.email,
            message: demoData.message,
        }

        callback(null, response);
    },

    GetDemos: (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>) => {
        const demos = DemoRepository.getDemos();

        const response: DemosResponse = {
            demos: demos,
        }

        callback(null, response);
    }
};

export default demoService;

