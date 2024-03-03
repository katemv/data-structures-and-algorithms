export const testTree = {
    value: 9,
    left: {
        value: 4,
        left: { value: 1, left: null, right: null },
        right: { value: 6, left: null, right: null }
    },
    right: {
        value: 20,
        left: { value: 15, left: null, right: null },
        right: { value: 170, left: null, right: null }
    }
};

export const testTreeAfterInsertion = {
    value: 9,
    left: {
        value: 4,
        left: { value: 1, left: null, right: null },
        right: { value: 6, left: null, right: null }
    },
    right: {
        value: 20,
        left: {
            value: 15,
            left: { value: 11, left: null, right: null },
            right: null
        },
        right: { value: 170, left: null, right: null }
    }
};

export const testTreeAfterDeletion = {
    value: 9,
    left: {
        value: 4,
        left: null,
        right: { value: 6, left: null, right: null }
    },
    right: {
        value: 20,
        left: { value: 15, left: null, right: null },
        right: { value: 170, left: null, right: null }
    }
};

export const lookupNode = {
    value: 4,
    left: { value: 1, left: null, right: null },
    right: { value: 6, left: null, right: null }
};
