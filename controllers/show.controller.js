const request = require('request');

module.exports = {
    getAllShows
}

function getAllShows(req, res) {
    request('http://124.41.240.154:9803/api/nowshowinginfo', (error, response, body) => {
        if (error) {
            console.log(error);
            res.send("Something went Wrong");
        } else {
            res.json(JSON.parse(body));
        }
    });
}