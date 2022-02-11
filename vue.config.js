const Dotenv = require('dotenv-webpack')
// import Dotenv from 'dotenv-webpack'

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