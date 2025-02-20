export function validateCreateDemoParams(name?: string, email?: string): string | null {
    if (!name) {
        return "The 'name' field is required.";
    }
    if (!email) {
        return "The 'email' field is required.";
    }
    return null; // No errors
}