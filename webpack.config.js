module.exports = {
  // ...other config

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
    ],
  },

  ignoreWarnings: [
    {
      module: /node_modules\/lucide-react/,
      message: /Failed to parse source map/,
    },
  ],
};
