import { bubbleSort } from "../sorting/bubbleSort";

const input = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const output = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
describe("Sorting", () => {
    it("should sort the array using bubble sort", () => {
        expect(bubbleSort(input)).toEqual(output);
    });
});
