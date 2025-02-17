import demoService from "../../../src/services/demo/demoService";
import demoRepository from "../../../src/services/demo/repository/demoRepository"; // Import the real singleton
import type {DemosResponse} from "../../../src/proto/demo/demo";

jest.mock("../../../src/services/demo/repository/demoRepository"); // Mock the repository

describe("demoService", () => {
    let mockCall: any;
    let mockCallback: any;

    beforeEach(() => {
        jest.clearAllMocks(); // Reset all mocks before each test
        mockCall = {request: {}}; // Mock gRPC call request object
        mockCallback = jest.fn(); // Mock gRPC callback function
    });

    test("CreateDemo should add a new demo and return response", () => {
        const mockDemo = {
            uuid: "1234-5678",
            name: "John Doe",
            email: "john@example.com",
            message: "Demo created successfully!",
        };

        // Mock the repository method
        (demoRepository.addDemo as jest.Mock).mockReturnValue(mockDemo);

        // Set up the mock request
        mockCall.request = {name: "John Doe", email: "john@example.com"};

        demoService.CreateDemo(mockCall, mockCallback);

        expect(demoRepository.addDemo).toHaveBeenCalledWith("John Doe", "john@example.com");
        expect(mockCallback).toHaveBeenCalledWith(null, mockDemo);
    });

    test("GetDemos should return all stored demos", () => {
        const mockDemos = [
            {uuid: "1234", name: "Alice", email: "alice@example.com", message: "Demo 1"},
            {uuid: "5678", name: "Bob", email: "bob@example.com", message: "Demo 2"},
        ];

        (demoRepository.getDemos as jest.Mock).mockReturnValue(mockDemos);

        demoService.GetDemos(mockCall, mockCallback);

        const expectedResponse: DemosResponse = {demos: mockDemos};
        expect(demoRepository.getDemos).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(null, expectedResponse);
    });
});
