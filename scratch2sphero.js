var handler = function(req, res){
    var parsed = req.url.split("/");
    if (parsed[1] == 'setRGB') {
        console.log('color command');
        bot.setRGBLED(parsed[2], parsed[3], parsed[4]);
    } else if (parsed[1] == 'roll') {
        console.log('roll command');
        bot.roll(parsed[2], parsed[3]/100);
    }
    res.writeHead(200);
    res.end('foo');
}

var app = require('http').createServer(handler).listen(11235);
var sphere = require('node-sphero');
var bot = new sphero.Sphero();
bot.setBackLED(1);
