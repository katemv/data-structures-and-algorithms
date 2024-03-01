import { Nullable } from "../../utils/types";
import LinkedList, { Node } from "./linkedList";

/**
    * Removes the nth node from the end of a linked list.
    * @param list The linked list.
    * @param n The position of the node to remove from the end.
    * @returns The head of the modified linked list.
 */
export const removeNthFromEnd = <T>(list: LinkedList<T>, n: number): LinkedList<T> | null => {
    let currentNode: Nullable<Node<T>> = list.head;
    let prevNode: Nullable<Node<T>> = null;
    let length: number = 0;

    // Calculate the length of the linked list
    while (currentNode !== null) {
        currentNode = currentNode.next;
        length++;
    }

    // Reset currentNode to the head of the list
    currentNode = list.head;

    // Traverse the list to find the node before the one to be removed
    while (length - n) {
        prevNode = currentNode;
        currentNode = currentNode!.next;
        length--;
    }

    // Remove the node
    if (currentNode === list.head) {
        // If the node to be removed is the first node
        list.head = list.head!.next;
    } else {
        prevNode!.next = currentNode!.next;
    }

    return list;
};