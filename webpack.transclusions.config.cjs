const path = require("path");

module.exports = {
  mode: "development",
  context: __dirname,
  name: "uxp-transclusions",
  entry: "./scripts/uxp-transclusions-context.js",
  output: {
    path: path.resolve(__dirname, ".uxp-webpack-cache"),
    filename: "transclusions-bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".md", ".mdx"],
  },
  module: {
    rules: [
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-react"],
            },
          },
          {
            loader: "@mdx-js/loader",
          },
          {
            loader: path.resolve(__dirname, "scripts/strip-frontmatter-loader.cjs"),
          },
        ],
      },
    ],
  },
  stats: "errors-warnings",
};
