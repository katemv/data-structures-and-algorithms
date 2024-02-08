/**
 * Finds the maximum sum of any contiguous subarray within the given array.
 * Uses Kadane's algorithm O(n) for efficient calculation.
 *
 * @param nums An array of numbers.
 * @returns The maximum sum of any contiguous subarray.
 */
export const maximumSubArray = (nums: number[]): any => {
    let maxSum = nums[0];
    let currentSum = nums[0];

    // Iterate through the array, starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum sum ending at the current index
        // It's either the current number itself or the sum of the previous subarray plus the current number
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maximum sum seen so far
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// O(n^2)
export const maximumSubArrayBF = (nums: number[]): any => {
    let maxSum = nums[0];

    for (let start = 0; start < nums.length; start++) {
        let currentSum = 0;

        for (let end = start; end < nums.length; end++) {
            currentSum += nums[end];
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}
