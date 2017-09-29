'use trict'
var mp3 = require('./mp3zing.js');
var fs = require('fs');

module.exports = (app) => {
    // Api get link zingmp3
    app.get('/mp3', (req, res) => {
        let url = req.query.url;
        let quality = req.query.q;
        mp3(url, quality, (err, uri) => {
            if (err) return console.log(err);
            res.send({
                url: uri.href
            })
        });
    })
}