/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  //   testMatch: ["*/__test__/*.[jt]s?(x)"],
  testPathIgnorePatterns: ["node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

module.exports = config;
