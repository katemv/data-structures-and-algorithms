import { Node, Nullable } from "./types";

abstract class Print<T> {
    protected head:Nullable<Node<T>> = null;

    public print() {
        const array = [];

        let currentNode: Nullable<Node<T>> = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
}

export default Print;
