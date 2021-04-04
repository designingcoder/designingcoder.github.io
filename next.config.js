const path = require("path")

module.exports = {
  basePath: "/",
  assetPrefix: "/",
  target: "serverless",
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src")
    return config
  }
}
