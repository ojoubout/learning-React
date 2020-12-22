const path = require('path');

module.exports = {
    watchOptions: {
        poll: true
    },
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        contentBase: path.join(__dirname, 'public')
    }
      
}