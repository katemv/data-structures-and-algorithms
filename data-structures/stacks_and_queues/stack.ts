import { Nullable, Node } from "../../utils/types";

/**
    * Can be implemented with both Array and LinkedList
    * Arrays:
        * ++ cache locality (faster data access in memory)
        * -- dynamic resize, doubles capacity if needed
    * LinkedList:
        * ++ dynamic memory beneficial for longer lists
        * -- extra memory allocated for pointers
**/

class Stack<T> {
    private top: Nullable<Node<T>>;
    private length: number;

    constructor(value: T) {
        this.top = new Node(value);
        this.length = 0;
    }

    public peek() {
        if (this.top) {
            return this.top.value;
        }

        return null;
    }

    public push(value: T) {
        const temp = this.top;
        this.top = new Node(value);
        this.top.next = temp;
        this.length ++;
    }

    public pop() {
        if (this.top?.next) {
            this.top = this.top.next;
            this.length --;
        } else {
            this.top = null;
            this.length = 0;
        }
    }

    public isEmpty() {
        return this.length === 0;
    }

    public print() {
        const array = [];

        let currentNode: Nullable<Node<T>> = this.top;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

export default Stack;