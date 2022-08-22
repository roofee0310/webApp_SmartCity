const json = require('./data.json');

module.exports = {
    entry: "./src/controller.js",
    output: {
        filename: "controller.bundle.js",
        publicPath: "/webApp_SmartCity/",
    },
    module: {
        rules: [{
            test: /\.json$/,
            use: 'json-loader'
        }]
    }
}