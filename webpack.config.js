const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const getFileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const getCSSloader = (loader) => {
  const use = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ];

  if (loader) use.push(`${loader}-loader`);

  return use;
};

const getJSloader = () => {
  const use = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ];

  if (isDev) use.push('eslint-loader');

  return use;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
};

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "src"),
  entry: {
    index: ["@babel/polyfill","./index.js"]
  },
  output: {
    filename: getFileName("js"),
    path: path.resolve(__dirname, "dist")
  },
  devtool: isDev ? 'source-map' : '',
  devServer: {
    port: 4200,
    hot: isDev
  },
  optimization: optimization(),
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isDev
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: "assets/",
        to: "assets/"
      },
      {
        from: "images/",
        to: "images/"
      },
      {
        from: "fonts/",
        to: "fonts/"
      }
    ]),
    new MiniCssExtractPlugin({
      filename: getFileName("css")
    }),
    new StylelintWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCSSloader()
      },
      {
        test: /\.less$/,
        use: getCSSloader("less")
      },
      {
        test: /\.s[ac]ss$/,
        use: getCSSloader("sass")
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: getJSloader()
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  }
};