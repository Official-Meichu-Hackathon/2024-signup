module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust the path if your source directory is not "src"
  },
};
