module.exports = {
    entry: "./ui/index.js",
    output: {
      filename: "bundle.js"
    },
    watch: true
},
module = {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'] 
        }
      }
    ]
  }
 