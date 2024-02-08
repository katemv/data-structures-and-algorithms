// Create a function that reverses a string
export const reverseString = (string: string): string => {
    return [...string] // convert a string to array
        .reverse() // reverse array
        .join(""); // convert back to string
}

export const reverseStringWithLoop = (string: string): string => {
    let result = [];

    for (let i = string.length - 1; i >= 0; i--) {
        result.push(string[i]);
    }

    return result.join("");
}
