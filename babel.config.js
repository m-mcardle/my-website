// This is needed in order for Jest to work with babel properly
module.exports = {
  env: {
    test: {
      presets: ['@babel/preset-env']
    }
  }
}
