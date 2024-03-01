/**
    * Sorts an array of numbers in non-decreasing order using the Merge Sort algorithm.
    * @param {number[]} array - The array to be sorted.
    * @returns {number[]} - The sorted array.
 */
export const mergeSort = (array: number[]): number[] => {
    // Base case: if the array has only one element, it's already sorted
    if (array.length === 1) {
        return array;
    }

    // Split an array into right and left
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

/**
    * Merges two sorted arrays into one sorted array.
    * @param {number[]} left - The left sorted array.
    * @param {number[]} right - The right sorted array.
    * @returns {number[]} - The merged sorted array.
 */
const merge = (left: number[], right: number[]): number[] => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and merge them into the result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements of the left and right arrays
    // (if any) into the result array
    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}