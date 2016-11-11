module.exports = {
    context: __dirname + '/app',
    devtool: "inline-sourcemap",
    entry: "./app.module.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.min.js"
    },
    module:{
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel',
              exclude:/node_modules/,
              query:{
                  presets: ['es2015']
              }
          },
          {
              test: /\.html$/,
              loader: 'raw',
              exclud: /node_modules/
          }
      ]
    }
};