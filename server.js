var express = require('express');
var app = express();

app.get("/dateconverter/:date", function(req, res){
    var date = req.params.date;
    var parsedDate = Date.parse(date);
    var dateConstructed = new Date(parsedDate);
    res.writeHead(200, {'Content-Type': 'text/json'});
    if(!isNaN(parsedDate)){
        var data = {
            "unix": parsedDate/1000,
            "natural": dateConstructed.toDateString()
        }
        data = JSON.stringify(data);
        res.end(data);
    } else{
        var data = {
            "unit": null,
            "natural": null
        };
        data = JSON.stringify(data);
        res.end(data);
    }
})
app.listen(process.env.PORT || 8080);