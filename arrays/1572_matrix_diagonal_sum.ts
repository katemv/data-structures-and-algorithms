/**
 * Calculates the sum of diagonals in a square matrix.
 * @param mat The input square matrix.
 * @returns The sum of diagonals.
 */
export const diagonalSum = (mat: number[][]): number => {
    let sum = 0;

    for (let vertical = 0, horizontal = mat.length -1; vertical < mat.length; vertical++, horizontal--) {
        // Exclude the element in the center that belongs to both diagonals
        if (vertical !== horizontal) {
            sum += mat[vertical][horizontal];
        }

        sum += mat[vertical][vertical];
    }

    return sum;
}