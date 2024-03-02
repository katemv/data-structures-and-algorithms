import { Node } from "../../utils/types";
import { Print } from "../../utils/print";

class Queue<T> extends Print<T> {
    private length: number;
    private last: Node<T>;

    constructor(value: T) {
        super();
        this.head = new Node(value);
        this.last = this.head;
        this.length = 1;
    }

    public getLength() {
        return this.length;
    }

    public peek() {
        return this.head;
    }

    public enqueue(value: T) {
        let newNode = new Node(value);
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
    }

    public dequeue() {
        if (this.head?.next) {
            this.head = this.head.next;
            this.length--;
        }
    }
}

export default Queue;

