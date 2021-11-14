const express = require("express");
const os = require("os");

const app = express();

app.set('view engine', 'ejs');
app.get('/', function(request, response) {
    response.render('pages/index', {
        systemUptime: convertSecondsToDate(os.uptime()),
        remoteAddress: request.headers['x-forwarded-for'] || request.socket.remoteAddress,
        diskUsage: "0",
        networkIntensity: "0",
        loadAverage: os.loadavg()
    });
});

app.listen(5001, function () {
    console.log(`Express server listening on port 5001`);
});

function convertSecondsToDate(seconds) {
    var day = parseInt( seconds / (24 * 3600));
    seconds = seconds % (24 * 3600);
    var hour = parseInt(seconds / 3600);
    seconds %= 3600;
    var minutes = seconds / 60;

    return (`${day}d ${hour.toFixed()}h ${minutes.toFixed()}m`);
}