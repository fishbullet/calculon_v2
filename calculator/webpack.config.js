module.exports = {
  entry: './index.js', // Your appʼs entry point
  output: {
    publicPath: 'http://localhost:8080', 
    path: __dirname,
    filename: 'bundle.js' 
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
