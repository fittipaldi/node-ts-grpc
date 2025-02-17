import {v4 as uuidv4} from "uuid";

interface Demo {
    uuid: string;
    name: string;
    email: string;
    message: string;
}

class DemoRepository {
    private demos: Map<string, Demo> = new Map();

    addDemo(name: string, email: string): Demo {
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

    getDemos(): Demo[] {
        return Array.from(this.demos.values());
    }
}

export default new DemoRepository();
