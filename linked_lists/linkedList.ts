import { Nullable } from "../utils/types";

export class Node<T> {
    public value: T;
    public next: Nullable<Node<T>>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    public head: Nullable<Node<T>>;
    private tail: Node<T>;
    private length: number;
    constructor(value: T) {
        this.head = {
            value,
            next: null
        };

        this.tail = this.head;
        this.length = 1;
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
    private traverseToIndex(index: number): Nullable<Node<T>> {
        let currentNode: Nullable<Node<T>> = this.head;
        let counter = 0;

        while (counter !== index && currentNode) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    public printList() {
        const array = [];

        let currentNode: Nullable<Node<T>> = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);

        return array;
    }
}

export default LinkedList;
