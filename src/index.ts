import "dotenv/config";
import * as grpc from "@grpc/grpc-js";
import {protoIndex} from "./proto";
import demoService from "./services/demo/demoService";
import {ReflectionService} from "@grpc/reflection";

const proto = protoIndex();
const port = process.env.PORT || 50051;

export const startServer = (): void => {
    try {
        const server = new grpc.Server();

        // Ensure services exist before adding them
        if (proto.demo?.DemoService) server.addService(proto.demo.DemoService.service, demoService as grpc.UntypedServiceImplementation);

        // Enable gRPC Reflection
        const reflection = new ReflectionService(proto.demo);
        reflection.addToServer(server);

        server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), (err, boundPort) => {
            if (err) {
                console.error("Error starting gRPC server:", err);
                return;
            }
            console.log(`gRPC server listening on port ${boundPort}`);
        });

    } catch (error) {
        console.error("Failed to start gRPC server:", error);
    }
};

startServer();
