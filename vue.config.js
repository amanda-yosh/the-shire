const Dotenv = require('dotenv-webpack')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}