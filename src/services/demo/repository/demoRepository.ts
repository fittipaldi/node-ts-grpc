import {v4 as uuidv4} from "uuid";
import {DemoResponse, DemosResponse} from "../../../../proto/demo/demo";

interface Demo {
    uuid: string;
    name: string;
    email: string;
    message: string;
}

class DemoRepository {
    private demos: Map<string, Demo> = new Map();

    addDemo(name: string, email: string): DemoResponse {
        const uuid = uuidv4();
        const newDemo: Demo = {
            uuid,
            name,
            email,
            message: "Demo created successfully!",
        };
        this.demos.set(uuid, newDemo);
        return newDemo;
    }

    getDemos(): DemosResponse {
        const demos: DemosResponse = {demos: Array.from(this.demos.values())};
        return demos;
    }
}

export default new DemoRepository();
