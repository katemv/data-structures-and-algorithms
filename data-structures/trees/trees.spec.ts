import BinarySearchTree from "./binary-search-tree";
import { lookupNode, testTree, testTreeAfterDeletion, testTreeAfterInsertion } from "./testData";

describe("Binary Search Tree", () => {
    let tree = new BinarySearchTree<number>();

    beforeEach(() => {
        tree = new BinarySearchTree<number>();

        tree.insert(9);
        tree.insert(4);
        tree.insert(6);
        tree.insert(20);
        tree.insert(170);
        tree.insert(15);
        tree.insert(1);

    })

    it("should print values of the tree", () => {
        expect(tree.print()).toEqual(testTree);
    });

    it("should insert a new node into the tree", () => {
        tree.insert(11);
        expect(tree.print()).toEqual(testTreeAfterInsertion);
    });

    it("should remove a node from the tree", () => {
        tree.remove(1);
        expect(tree.print()).toEqual(testTreeAfterDeletion);
    });

    it("should return a node from the tree", () => {
        expect(tree.lookup(4)).toEqual(lookupNode);
    });
});
