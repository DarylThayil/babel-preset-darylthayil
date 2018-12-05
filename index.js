module.exports = {
  presets: [
    require("@babel/preset-env"),
    require("@babel/preset-react")
  ],
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-class-properties")
  ]
}

