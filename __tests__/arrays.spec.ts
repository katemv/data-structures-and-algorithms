import { moveZeros, moveZerosWithCopy, moveZerosWithSplice } from "../arrays/283_moveZeros";
import { mergeSortedArrays, mergeSortedArraysLoop } from "../arrays/88_mergeSortedArrays";
import { maximumSubArray, maximumSubArrayBF } from "../arrays/53_maximumSubArray";
import { diagonalSum } from "../arrays/1572_matrix_diagonal_sum";
import { rotateArray } from "../arrays/189_rotate_array";
import { twoSum, twoSumMap } from "../arrays/1_twoSum";
import {
    containsDuplicate,
    containsDuplicateWithSet,
    containsDuplicateWithSetAndLoop
} from "../arrays/217_containsDuplicate";


describe("Merge sorted arrays", () => {
    it("should merge two arrays in the correct order using a loop", () => {
        expect(mergeSortedArraysLoop([0,3,4,31], [4,6,30])).toEqual([0,3,4,4,6,30,31]);
    });

    it("should merge two arrays in the correct order", () => {
        expect(mergeSortedArrays([0,3,4,31], [4,6,30])).toEqual([0,3,4,4,6,30,31]);
    });
});

describe("Two sum", () => {
    it("should return indices of the two numbers such that they add up to target", () => {
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
    });

    it("should return indices of the two numbers such that they add up to target", () => {
        expect(twoSum([3,3], 6)).toEqual([0,1]);
    });

    it("should return indices of the two numbers such that they add up to target", () => {
        expect(twoSum([2,11,7,15], 9)).toEqual([0,2]);
    });

    it("should return indices of the two numbers such that they add up to target", () => {
        expect(twoSumMap([2,11,7,15], 9)).toEqual([0,2]);
    });
});

describe("Maximum sub array", () => {
    it("should find the subarray with the largest sum, and return its sum", () => {
        expect(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });

    it("should find the subarray with the largest sum, and return its sum v2", () => {
        expect(maximumSubArrayBF([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });
});

describe("Move zeros", () => {
    it("should move all 0's to the end in-place", () => {
        expect(moveZeros([0,0,1,0,3,12])).toEqual([1,3,12,0,0,0]);
    });

    it("should move all 0's to the end in-place", () => {
        expect(moveZerosWithSplice([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    });

    it("should move all 0's to the end with copy", () => {
        expect(moveZerosWithCopy([0,0,1,0,3,12])).toEqual([1,3,12,0,0,0]);
    });
});

describe("Contains duplicate", () => {
    it("should find if a value appears twice or if every element is distinct", () => {
        expect(containsDuplicate([1,2,3,1])).toBe(true);
    });

    it("should find if a value appears twice or if every element is distinct:set", () => {
        expect(containsDuplicateWithSet([1,2,3,1])).toBe(true);
    });

    it("should find if a value appears twice or if every element is distinct:set", () => {
        expect(containsDuplicateWithSet([1,2,3,4])).toBe(false);
    });

    it("should find if a value appears twice or if every element is distinct:set&loop", () => {
        expect(containsDuplicateWithSetAndLoop([1,2,3,1])).toBe(true);
    });
});

describe("Rotate array", () => {
    it("should rotate the array to the right by k steps", () => {
        expect(rotateArray([1,2,3,4,5,6,7], 3)).toEqual([5,6,7,1,2,3,4]);
    });
});

describe("Diagonal sum", () => {
    it("should calculate the sum of diagonals in a square matrix", () => {
        expect(diagonalSum([[1,2,3],[4,5,6],[7,8,9]])).toBe(25);
    });
});
