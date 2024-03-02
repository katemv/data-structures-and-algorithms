import { Node } from "../../utils/types";
import Print from "../../utils/print";

/**
    * Can be implemented with both Array and LinkedList
    * Arrays:
        * ++ cache locality (faster data access in memory)
        * -- dynamic resize, doubles capacity if needed
    * LinkedList:
        * ++ dynamic memory beneficial for longer lists
        * -- extra memory allocated for pointers
**/

class Stack<T> extends Print<T> {
    private length: number;

    constructor(value: T) {
        super();
        this.head = new Node(value);
        this.length = 1;
    }

    public peek() {
        if (this.head) {
            return this.head.value;
        }

        return null;
    }

    public push(value: T) {
        const temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
        this.length ++;
    }

    public pop() {
        if (this.head?.next) {
            this.head = this.head.next;
            this.length --;
        } else {
            this.head = null;
            this.length = 0;
        }
    }

    public isEmpty() {
        return this.length === 0;
    }
}

export default Stack;