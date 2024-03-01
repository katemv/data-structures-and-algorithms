import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";

const input = [99, 44, 6, 2, 1, 5, 63, 87, -1, 283, 4, 0];
const output = [-1, 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

describe("Sorting", () => {
    it("should sort the array using bubble sort", () => {
        expect(bubbleSort(input)).toEqual(output);
    });

    it("should sort the array using selection sort", () => {
        expect(selectionSort(input)).toEqual(output);
    });

    it("should sort the array using insertion sort", () => {
        expect(insertionSort(input)).toEqual(output);
    });

    it("should sort the array using merge sort", () => {
        expect(mergeSort(input)).toEqual(output);
    });
});
