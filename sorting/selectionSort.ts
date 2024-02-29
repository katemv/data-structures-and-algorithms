/**
    * Sorts an array using the selection sort algorithm.
    * @param array The array to be sorted.
    * @returns The sorted array.
    * Time: O(n^2)
    * Space: O(1)
 */

export const selectionSort = (array: number[]): number[] => {
    for (let j = 0; j < array.length; j++) {
        let smallestIndex = j;

        // Iterate over the unsorted part of the array to find the smallest element
        for (let i = j + 1; i < array.length; i++) {
            if (array[i] < array[smallestIndex]) {
                // Update index at which the smallest item is located
                smallestIndex = i;
            }
        }

        // Swap the smallest element with the current element at position j
        array[smallestIndex] = array[j];
        array[j] = array[smallestIndex];
    }

    return array;
}