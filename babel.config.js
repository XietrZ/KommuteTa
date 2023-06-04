module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv", // add react-native-dotenv
        {
          moduleName: "@env", // add @env
          path: "App/.env", // Add path
        },
      ],
    ],
  };
};
