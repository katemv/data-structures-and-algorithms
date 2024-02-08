import { mergeSortedArrays, mergeSortedArraysLoop } from "../arrays/88_mergeSortedArrays";
import { twoSum, twoSumMap } from "../arrays/1_twoSum";
import { maximumSubArray, maximumSubArrayBF } from "../arrays/53_maximumSubArray";
import { moveZeros, moveZerosWithCopy, moveZerosWithSplice } from "../arrays/283_moveZeros";

describe("merge sorted arrays", () => {
    it("should merge two arrays in the correct order using a loop", () => {
        expect(mergeSortedArraysLoop([0,3,4,31], [4,6,30])).toEqual([0,3,4,4,6,30,31]);
    });

    it("should merge two arrays in the correct order", () => {
        expect(mergeSortedArrays([0,3,4,31], [4,6,30])).toEqual([0,3,4,4,6,30,31]);
    });
});

describe("two sum", () => {
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

describe("maximum sub array", () => {
    it("should find the subarray with the largest sum, and return its sum", () => {
        expect(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });

    it("should find the subarray with the largest sum, and return its sum", () => {
        expect(maximumSubArray([1])).toEqual(1);
    });

    it("should find the subarray with the largest sum, and return its sum", () => {
        expect(maximumSubArray([5,4,-1,7,8])).toEqual(23);
    });

    it("should find the subarray with the largest sum, and return its sum v2", () => {
        expect(maximumSubArrayBF([-2,1,-3,4,-1,2,1,-5,4])).toEqual(6);
    });
});

describe("move zeros", () => {
    it("should move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place", () => {
        expect(moveZeros([0,0,1,0,3,12])).toEqual([1,3,12,0,0,0]);
    });

    it("should move all 0's to the end of it while maintaining the relative order of the non-zero elements in-place", () => {
        expect(moveZerosWithSplice([0,1,0,3,12])).toEqual([1,3,12,0,0]);
    });

    it("should move all 0's to the end of it while maintaining the relative order of the non-zero elements with copy", () => {
        expect(moveZerosWithCopy([0,0,1,0,3,12])).toEqual([1,3,12,0,0,0]);
    });
});
