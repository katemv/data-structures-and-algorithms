import { Node } from "../../utils/types";
import LinkedList from "./linkedList";

class DoublyLinkedList<T> extends LinkedList<T>  {
    constructor(value: T) {
        super(value);
    }

    public getHead() {
        return this.head;
    }

    // O(1)
    public append(value: T) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    // O(1)
    public prepend(value: T) {
        const newNode = new Node(value);
        if (this.head) {
            newNode.next = this.head;
            this.head.previous = newNode;
        }

        this.head = newNode;
        this.length++;

        return this;
    }

    // O(n)
    public insert(index: number, value: T) {
        const newNode = new Node(value);
        newNode.previous = null;

        if (index >= this.length) {
            this.append(value);

            return this;
        }

        if (index === 0) {
            this.prepend(value);

            return this;
        }

        const leader = this.traverseToIndex(index - 1);
        const follower = leader!.next;
        leader!.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower!.previous = newNode;
        this.length++;

        return this;
    }
}

export default DoublyLinkedList;
