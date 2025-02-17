import DemoRepository from '../../../../src/services/demo/repository/demoRepository';

describe('DemoRepository', () => {

    beforeEach(() => {
        // Clear the repository state before each test
        (DemoRepository as any).demos.clear();
    });

    test('should add a demo and return it', () => {
        const name = 'John Doe';
        const email = 'john@example.com';

        const newDemo = DemoRepository.addDemo(name, email);

        expect(newDemo).toHaveProperty('uuid');
        expect(newDemo.name).toBe(name);
        expect(newDemo.email).toBe(email);
        expect(newDemo.message).toBe('Demo created successfully!');
    });

    test('should return all demos', () => {
        DemoRepository.addDemo('John Doe', 'john@example.com');
        DemoRepository.addDemo('Jane Doe', 'jane@example.com');

        const demos = DemoRepository.getDemos();

        expect(demos).toHaveLength(2);
        expect(demos[0].name).toBe('John Doe');
        expect(demos[1].name).toBe('Jane Doe');
    });

    test('should generate unique UUID for each demo', () => {
        const demo1 = DemoRepository.addDemo('John Doe', 'john@example.com');
        const demo2 = DemoRepository.addDemo('Jane Doe', 'jane@example.com');

        expect(demo1.uuid).not.toBe(demo2.uuid);
    });
});
