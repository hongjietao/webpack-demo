const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    filename: "boundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
