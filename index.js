module.exports = {
  presets: [
    require("babel-preset-es2015"),
    require("babel-preset-react")
  ],
  plugins: [
    require("babel-plugin-add-module-exports"),
    require("babel-plugin-transform-class-properties"),
    require("babel-plugin-transform-object-rest-spread")
  ]
}

