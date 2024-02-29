/**
    * Sorts an array using the bubble sort algorithm.
    * @param array The array to be sorted.
    * @returns The sorted array.
 */
export const bubbleSort = (array: number[]): number[] => {
    // Iterate over the array from the end to the beginning
    for (let j = array.length; j >= 0; j--) {
        // Iterate over the array from the start to the end
        for (let i = 0; i < array.length; i++) {
            // Compare adjacent elements and swap them if they are in the wrong order
            if (array[i] > array[i + 1]) {
                // Store the current element temporarily
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }

    return array;
}