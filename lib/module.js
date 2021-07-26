const path = require('path')
export default function (options) {
    const { nuxt } = this

    
    this.addPlugin({
        src: path.resolve(__dirname, 'plugins.js'),
        fileName: 'plugins.js',
        options
    })

}