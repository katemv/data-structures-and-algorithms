export type Nullable<T> = T | null;

export class Node<T> {
    public value: T;
    public next: Nullable<Node<T>>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
