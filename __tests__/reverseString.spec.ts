import { reverseString, reverseStringWithLoop } from "../index";

describe("reverse string", () => {
    it('should reverse a string', () => {
        expect(reverseString("Hello world!")).toBe("!dlrow olleH");
    });

    it('should reverse a string using a loop', () => {
        expect(reverseStringWithLoop("Hello world!")).toBe("!dlrow olleH");
    });
});
