const path = require('path');
const PATHS = {
    app: path.resolve(__dirname,'app'),
    build: path.resolve(__dirname,'build')
};
module.exports = {
    entry: {
       app: PATHS.app + "/app.js"
    },
    output: {
       path: PATHS.build,
       filename: 'bundle.js'
  },
  resolve:{
      alias:{
          'vue':'vue/dist/vue.min.js'
      }
  },
  module:{
      loaders:[
          {
            test:/\.css$/,
            loaders:['style-loader','css-loader']
          },
          {
            test: /\.png$/,
            loader: "url-loader?limit=100000"
          },
          {
            test: /\.jpg$/,
            loader: "file-loader"
         },
      ]
  }
  };