module.exports = {

    entry: "./src/index.js",

    output: {
        path: __dirname,
        filename: "assets/js/bundle.js"
    },

    devtool: 'source-map',

    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },

    devServer: {
        contentBase: "./assets",
        hot: true
    },

}
