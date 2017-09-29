'use trict'
var request = require('request');
var queryString = require('query-string');

module.exports = (url, quality, Callback) => {
    let link = 'http://linksvip.net/download/zingmp3.php';
    let a = url.split('/');
    let id = a.slice(-1)[0].replace('.html','');
    let params = {
        q: quality,
        code: id
    }

    let options = {
        url: link + '?' + queryString.stringify(params),
        method: 'GET'
    }

    var r = request(options, function (e, response) {
        Callback(e,r.uri);
    })
}