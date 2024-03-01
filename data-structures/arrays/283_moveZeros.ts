/**
 * Moves all occurrences of the number 0 to the end of the array while preserving the order of other elements.
 *
 * @param nums An array of numbers.
 * @returns A new array with all 0s moved to the end.
 */
export const moveZeros = (nums: number[]): number[] => {
    let writePointer = 0;

    for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
        const value = nums[readPointer];
        nums[readPointer] = 0; // to ensure trailing zeroes are maintained properly, we always assign 0 to the index we just read from

        // If the value is not zero, move it to the position indicated by writePointer
        if (value !== 0) {
            nums[writePointer] = value;
            writePointer ++;
        }
    }

    return nums;
}

export const moveZerosWithCopy = (nums: number[]): number[] => {
    const result = [];
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            result.push(nums[i]);
        } else {
            result.splice(j, 0, nums[i]);
            j++;
        }
    }

    return result;
}

export const moveZerosWithSplice = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
}
