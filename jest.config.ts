import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: "ts-jest",
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": ["ts-jest", {
            tsconfig: "tsconfig.spec.json",
        }],
    },
    testRegex: "/.*\\.(test|spec)\\.tsx?$",
};

export default config;