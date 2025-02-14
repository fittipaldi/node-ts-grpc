import * as protoLoader from "@grpc/proto-loader";
import * as grpc from "@grpc/grpc-js";
import path from "path";
import fs from "fs";

const PROTO_DIR = path.resolve(__dirname, ''); // Base proto directory

/**
 * Recursively fetches all .proto files in subdirectories.
 */
const getProtoFiles = (dir: string): string[] => {
    let protoFiles: string[] = [];
    fs.readdirSync(dir, {withFileTypes: true}).forEach((file) => {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            protoFiles = protoFiles.concat(getProtoFiles(filePath)); // Recurse into subdirectories
        } else if (file.isFile() && file.name.endsWith('.proto')) {
            protoFiles.push(filePath);
        }
    });

    return protoFiles;
};

/**
 * Loads all .proto files dynamically and returns an object containing all gRPC services.
 */
export const protoIndex = (): any => {
    const protoServices: Record<string, any> = {};

    const protoFiles = getProtoFiles(PROTO_DIR); // Get all .proto files recursively

    for (const protoFile of protoFiles) {
        const packageDefinition = protoLoader.loadSync(protoFile, {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
        });

        // Merge loaded services into the protoServices object
        const protoPackage = grpc.loadPackageDefinition(packageDefinition);
        Object.assign(protoServices, protoPackage);
    }

    return protoServices;
};
