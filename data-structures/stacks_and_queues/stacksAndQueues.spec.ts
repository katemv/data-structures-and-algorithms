import Stack from "./stack";
import Queue from "./queue";

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

describe("Queue", () => {
    let myQueue = new Queue<string>("Joy");

    beforeEach(() => {
        myQueue = new Queue("Joy");
        myQueue.enqueue("Matt");
        myQueue.enqueue("Pavel");
    })

    it("should print values of the queue", () => {
        expect(myQueue.print()).toEqual(["Joy", "Matt", "Pavel"]);
    });

    it("should enqueue an item", () => {
        myQueue.enqueue("Samir");
        expect(myQueue.print()).toEqual(["Joy", "Matt", "Pavel", "Samir"]);
        expect(myQueue.getLength()).toBe(4);
        expect(myQueue.peek()?.value).toBe("Joy");
    });

    it("should dequeue an item", () => {
        myQueue.dequeue();
        expect(myQueue.print()).toEqual(["Matt", "Pavel"]);
        expect(myQueue.getLength()).toBe(2);
        expect(myQueue.peek()?.value).toBe("Matt");
    });

    it("should get length", () => {
        expect(myQueue.getLength()).toBe(3);
    });

    it("should get the first item in queue", () => {
        expect(myQueue.peek()?.value).toBe("Joy");
    });
});

