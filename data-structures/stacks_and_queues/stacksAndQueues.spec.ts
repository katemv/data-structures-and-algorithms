import Stack from "./stack";

describe("Stack", () => {
    let myStack = new Stack<string>("google");

    beforeEach(() => {
        myStack = new Stack("google");
        myStack.push("udemy");
    })

    it("should print values of the stack", () => {
        expect(myStack.print()).toEqual(["udemy", "google"]);
    });

    it("should push a value at the top of the stack", () => {
        myStack.push("discord");
        expect(myStack.print()).toEqual(["discord", "udemy", "google"]);
    });

    it("should remove a value from the top of the list", () => {
        myStack.pop();
        expect(myStack.print()).toEqual(["google"]);
    });

    it("should return empty array after removal of the last item", () => {
        myStack.pop();
        myStack.pop();
        expect(myStack.print()).toEqual([]);
    });

    it("should return the top item", () => {
        expect(myStack.peek()).toBe("udemy");
    });

    it("should be able to see if the stack is empty", () => {
        myStack.pop();
        myStack.pop();
        expect(myStack.isEmpty()).toBe(true);
    });

    it("should be able to see if the stack is not empty", () => {
        expect(myStack.isEmpty()).toBe(false);
    });
});
