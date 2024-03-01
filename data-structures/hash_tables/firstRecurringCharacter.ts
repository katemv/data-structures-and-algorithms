export const findFirstRecurringCharacter = (arr: number[]): number | undefined => {
    const map: { [key: number]: boolean } = {};

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = true;
        }

        else return arr[i];
    }

    return undefined;
}