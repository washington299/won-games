module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts(x)", "!src/pages/**/*.tsx", "!src/**/stories.tsx"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
};
