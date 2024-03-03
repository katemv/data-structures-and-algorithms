import { Nullable, TreeNode } from "../../utils/types";

class BinarySearchTree<T> {
    private root: Nullable<TreeNode<T>>;
    constructor() {
        this.root = null;
    }

    public insert(value: T) {
        const newNode = new TreeNode<T>(value)
        if (!this.root) {
            this.root = newNode;
        } else {
            this.traverseInsert(this.root, value);
        }
    }

    public lookup(value: T) {
        if (!this.root) {
            return null;
        } else {
            return this.traverseLookup(this.root, value);
        }
    }

    public remove(value: T) {
        if (!this.root) {
            return false;
        }

        let currentNode: Nullable<TreeNode<T>> = this.root;
        let parentNode = null;

        while(currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                // There is a match

                if (currentNode.right === null) {
                // Option 1: No right child
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        if (currentNode.value < parentNode.value) {
                            // if parent > current value, make current left a child of parent
                            parentNode.left = currentNode.left;
                        } else if (currentNode.value > parentNode.value) {
                            // if parent < current value, make left child a right child of parent
                            parentNode.right = currentNode.left;
                        }
                    }

                } else if (currentNode.right.left === null) {
                    // Option 2: Right child which doesn't have a left child
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        if (currentNode.value < parentNode.value) {
                            // if parent > current value, make right child of the left the parent
                            parentNode.left = currentNode.right;
                        } else if (currentNode.value > parentNode.value) {
                            // if parent < current value, make right child a right child of the parent
                            parentNode.right = currentNode.right;
                        }
                    }
                } else {
                    // Option 3: Right child that has a left child
                    // find the right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;

                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }

                return true;
            }
        }
    }

    public print(): any {
        if (this.root) {
            return this.traverse(this.root);
        }

        return null;
    }

    private traverseLookup(node: Nullable<TreeNode<T>>, value: T): Nullable<TreeNode<T>> {
        if (node) {
            if (node?.value === value) {
                return node;
            }

            if (node.value > value) {
                return this.traverseLookup(node.left, value);
            } else {
                return this.traverseLookup(node.right, value);
            }

        }

        return null;
    }

    private traverseInsert (node: Nullable<TreeNode<T>>, value: T): void  {
        if (node) {
            if (node.value > value) {
                if (node.left === null) {
                    node.left = new TreeNode(value);
                } else {
                    this.traverseInsert(node.left, value);
                }
            } else {
                if (node.right === null) {
                    node.right = new TreeNode(value);
                } else {
                    this.traverseInsert(node.right, value);
                }
            }
        }
    }

    private traverse(node: Nullable<TreeNode<T>>): Nullable<TreeNode<T>> {
        if (node) {
            const tree: TreeNode<T> = { value: node.value, left: null, right: null };
            tree.left = node.left === null ? null : this.traverse(node.left);
            tree.right = node.right === null ? null : this.traverse(node.right);

            return tree;
        }

        return null;
    }
}

export default BinarySearchTree;
