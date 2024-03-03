export type Nullable<T> = T | null;

export class Node<T> {
    public value: T;
    public next: Nullable<Node<T>>;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
export class TreeNode<T> {
    public value: T;
    public left: Nullable<TreeNode<T>>;
    public right: Nullable<TreeNode<T>>;
    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
