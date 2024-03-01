import LinkedList from "./linkedList";
import { removeNthFromEnd } from "./19_remove_nth_node_from_end_of_list";

describe("LinkedList", () => {
    let myLinkedList = new LinkedList<number>(5);

    beforeEach(() => {
        myLinkedList = new LinkedList<number>(5);
        myLinkedList.append(10);
        myLinkedList.append(16);
        myLinkedList.append(1);
    })

    it("should print values of the list", () => {
        expect(myLinkedList.printList()).toEqual([5, 10, 16, 1]);
    });

    it("should append a value at the end of the list", () => {
        myLinkedList.append(99);
        expect(myLinkedList.printList()).toEqual([5, 10, 16, 1, 99]);
    });

    it("should prepend a value at the beginning of the list", () => {
        myLinkedList.prepend(99);
        expect(myLinkedList.printList()).toEqual([99, 5, 10, 16, 1]);
    });

    it("should insert a value at the given index", () => {
        myLinkedList.insert(2, 99);
        expect(myLinkedList.printList()).toEqual([5, 10, 99, 16, 1]);
    });

    it("should remove a value at the given index", () => {
        myLinkedList.remove(2);
        expect(myLinkedList.printList()).toEqual([5, 10, 1]);
    });

    it("should reverse the list", () => {
        expect(myLinkedList.reverse().printList()).toEqual([1,16,10,5]);
    });
});

describe("LinkedList Problems", () => {
    it("should remove Nth node from the end of the list", () => {
        const list = new LinkedList<number>(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        expect(removeNthFromEnd(list, 2)?.printList()).toEqual([1,2,3,5]);
    });
});
