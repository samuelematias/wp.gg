module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'module:metro-react-native-babel-preset',
      ["@babel/preset-react", { runtime: "automatic" }], // this is so `import React from "react"` is not needed.
    ],
    plugins: [
      "react-native-reanimated/plugin", // has to be listed last according to the documentation. https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/#babel-plugin
      "inline-dotenv",
    ],
  };
};
