const path = require("path");

const postCssPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js",
  mode: "development",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "app"),
      watch: false, // Disable watching of static files to prevent full page reloads
    },
    watchFiles: ["app/**/*.html"],
    hot: true,
    port: 3000,
    host: "0.0.0.0", // Set the host to "0.0.0.0" to make the server accessible on the local network
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: { postcssOptions: { plugins: postCssPlugins } },
          },
        ],
      },
    ],
  },
};
