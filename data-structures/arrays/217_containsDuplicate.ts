/**
 * Checks whether an array contains any duplicate elements.
 * @param nums An array of numbers to check for duplicates.
 * @returns `true` if the array contains duplicates, otherwise `false`.
 */

export const containsDuplicate = (nums: number[]): boolean => {
    let map: { [key: string]: boolean } = {};

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            // Mark the current number as encountered in the map
            map[nums[i]] = true;
        } else {
            // If the current number is already present in the map, it's a duplicate, return true
            return true;
        }
    }

    // If the loop is over and no duplicates are found, return false
    return false;
}

export const containsDuplicateWithSet = (nums: number[]): boolean => {
    // This line creates a new Set named set and initializes it with the elements of the input array nums.
    // A Set is a collection of unique elements, meaning it automatically eliminates duplicates.
    const set = new Set<number>(nums);
    // The size property of a Set returns the number of distinct elements it contains.
    // If there are any duplicate elements in the input array, they will have been removed by the Set,
    // so the set.size will be less than the length of the original nums array.
    return (set.size < nums.length);
};

export const containsDuplicateWithSetAndLoop = (nums: number[]): boolean => {
    let set = new Set();

    for (let i= 0; i < nums.length; i++) {
        let item = nums[i];

        if (set.has(item)) {
            return true;
        }

        set.add(item);
    }
    return false;
};