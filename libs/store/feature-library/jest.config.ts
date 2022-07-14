/* eslint-disable */
export default {
  displayName: "store-feature-library",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/store/feature-library",
};
