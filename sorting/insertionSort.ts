/**
    * Sorts an array of numbers in non-decreasing order using the Insertion Sort algorithm.
    * @param array - The array to be sorted.
    * @returns The sorted array.
    * Time: O(n^2)
    * Space: O(1)
 */

export const insertionSort = (array: number[]): number[] => {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        // Move elements of array[0..i-1], that are greater than current,
        // to one position ahead of their current position
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        // Place the current element in its correct position
        array[j + 1] = current;
    }
    return array;
}