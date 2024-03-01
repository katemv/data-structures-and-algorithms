/**
    * Function to rotate an array to the right by k steps.
    * @param nums The array of numbers to rotate.
    * @param k The number of steps to rotate the array.
    * @returns The rotated array.
 */
export const rotateArray = (nums: number[], k: number): number[] => {
    // Ensure k is within the length of the array
    k = k % nums.length;

    const fullRotatedArray = rotate(nums, 0, nums.length - 1);
    const rotatedSectionA = rotate(fullRotatedArray, 0, k - 1);

    return rotate(rotatedSectionA, k, nums.length - 1);
}


/**
    * Helper function to rotate a section of an array.
    * @param nums The array of numbers to rotate.
    * @param start The starting index of the section to rotate.
    * @param end The ending index of the section to rotate.
    * @returns The rotated array.
 */
const rotate = (nums: number[], start: number, end: number): number[] => {
    let left = start;
    let right = end;

    while (left < right) {
        let tempLeft = nums[left];

        nums[left] = nums[right];
        nums[right] = tempLeft;

        left++;
        right--;
    }

    return nums;
}
