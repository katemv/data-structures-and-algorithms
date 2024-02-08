export const mergeSortedArraysLoop = (array1: number[], array2: number[]): number[] => {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (array1[i] || array2[j]) {
        if (!array2[j] || array1[i] < array2[j]) {
            result.push(array1[i]);
            i++;
        } else {
            result.push(array2[j]);
            j++;
        }
    }

    return result;
}

export const mergeSortedArrays = (array1: number[], array2: number[]): number[] => {
    return [...array1, ...array2]
        .sort((a, b) => a - b);
}
