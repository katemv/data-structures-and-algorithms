import LinkedList from "./linkedList";
import { removeNthFromEnd } from "./19_remove_nth_node_from_end_of_list";
import DoublyLinkedList from "./doublyLinkedList";

describe("LinkedList", () => {
    let myLinkedList: LinkedList<number>;

    beforeEach(() => {
        myLinkedList = new LinkedList<number>(5);
        myLinkedList.append(10);
        myLinkedList.append(16);
        myLinkedList.append(1);
    })

    it("should print values of the list", () => {
        expect(myLinkedList.print()).toEqual([5, 10, 16, 1]);
    });

    it("should append a value at the end of the list", () => {
        myLinkedList.append(99);
        expect(myLinkedList.print()).toEqual([5, 10, 16, 1, 99]);
    });

    it("should prepend a value at the beginning of the list", () => {
        myLinkedList.prepend(99);
        expect(myLinkedList.print()).toEqual([99, 5, 10, 16, 1]);
    });

    it("should insert a value at the given index", () => {
        myLinkedList.insert(2, 99);
        expect(myLinkedList.print()).toEqual([5, 10, 99, 16, 1]);
    });

    it("should remove a value at the given index", () => {
        myLinkedList.remove(2);
        expect(myLinkedList.print()).toEqual([5, 10, 1]);
    });

    it("should reverse the list", () => {
        expect(myLinkedList.reverse().print()).toEqual([1,16,10,5]);
    });
});

describe("DoublyLinkedList", () => {
    let doublyLinkedList: DoublyLinkedList<number>;

    beforeEach(() => {
        doublyLinkedList = new DoublyLinkedList<number>(5);
        doublyLinkedList.append(10);
        doublyLinkedList.append(16);
        doublyLinkedList.append(1);
    })

    it("should print values of the list", () => {
        expect(doublyLinkedList.print()).toEqual([5, 10, 16, 1]);
    });

    it("should append a value at the end of the list", () => {
        doublyLinkedList.append(99);
        expect(doublyLinkedList.print()).toEqual([5, 10, 16, 1, 99]);
    });

    it("should prepend a value at the beginning of the list", () => {
        doublyLinkedList.prepend(99);
        expect(doublyLinkedList.print()).toEqual([99, 5, 10, 16, 1]);
    });

    it("should insert a value at the given index", () => {
        doublyLinkedList.insert(2, 99);
        expect(doublyLinkedList.print()).toEqual([5, 10, 99, 16, 1]);
    });
});

describe("LinkedList Problems", () => {
    it("should remove Nth node from the end of the list", () => {
        const list = new LinkedList<number>(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        expect(removeNthFromEnd(list, 2)?.print()).toEqual([1,2,3,5]);
    });
});
