/**
 * Finds and returns the indices of the two numbers in the given array that add up to the target sum.
 * Uses a Map to efficiently store previously encountered numbers and their indices.
 *
 * @param nums An array of numbers.
 * @param target The target sum.
 * @returns An array containing the indices of the two numbers that sum up to the target.
 *          If no such pair is found, an empty array is returned.
 */

export const twoSumMap = (nums: number[], target: number): number[] => {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // If the complement of the current number exists in the Map, return the indices
        // of the current number and its complement
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            // Calculate the complement of the current number and store it in the Map along with its index
            let compliment = target - nums[i];
            map.set(compliment, i);
        }
    }

    return [];
};


export const twoSum = (nums: number[], target: number): number[] => {
   let indexes: { [key: string]: number } = {};

    // ALT: for (let [index, num] of nums.entries()) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (indexes[diff] != undefined) {
            return [indexes[diff], i];
        } else {
            indexes[nums[i]] = i;
        }
    }

    return [];
};
