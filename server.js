const path = require('path')
const express = require('express')

const data = require('./data/data.json');

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    app.get('/data/data.json', function(req, res) {
        res.json(data);
    });

    return app
  }
}
