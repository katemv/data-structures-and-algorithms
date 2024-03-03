import { Nullable, Node } from "../../utils/types";
import Print from "../../utils/print";

class LinkedList<T> extends Print<T>  {
    public tail: Node<T>;
    public length: number;

    constructor(value: T) {
        super();
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    public getHead() {
        return this.head;
    }

    // O(1)
    public append(value: T) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    // O(1)
    public prepend(value: T) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    // O(n)
    public insert(index: number, value: T) {
        const newNode = new Node(value);

        if (index >= this.length) {
            this.append(value);

            return this;
        }

        if (index === 0) {
            this.prepend(value);

            return this;
        }

        const leader = this.traverseToIndex(index - 1);
        newNode.next = leader!.next;
        leader!.next = newNode;
        this.length++;

        return this;
    }

    // O(n)
    public remove(index: number) {
        if (index === 0 && this.head!.next) {
            this.head = this.head!.next;
            this.length --;

            return this;
        }

        if (index >= this.length) {
            const newTail = this.traverseToIndex(this.length - 2);

            if (newTail !== null) {
                newTail.next = null
                this.tail = newTail;
                this.length --;
            }

            return this;
        }

        const leader = this.traverseToIndex(index - 1);
        leader!.next = leader!.next!.next;
        this.length --;

        return this;
    }

    // O(n)
    protected traverseToIndex(index: number): Nullable<Node<T>> {
        let currentNode: Nullable<Node<T>> = this.head;
        let counter = 0;

        while (counter !== index && currentNode) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    // 206. Reverse Linked List
    public reverse() {
        if (!this.head || !this.head.next) {
            return this;
        }

        let firstNode: Nullable<Node<T>> = this.head;
        // Update tail to point to the current head
        this.tail = this.head;
        let secondNode: Nullable<Node<T>> = firstNode.next;
        // Set the first node's next pointer to null
        firstNode.next = null;

        while (secondNode) {
            const temp = secondNode.next;
            // Reverse the pointer to point to the previous node
            secondNode.next = firstNode;

            // Move pointers forward
            firstNode = secondNode;
            secondNode = temp;
        }

        // Update the head of the list to point to the last node (which is now the first)
        this.head = firstNode;

        return this;
    }
}

export default LinkedList;
