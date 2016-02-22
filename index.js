var express = require('express');
var moment = require('moment');

var app = express();

app.get('/:qs', function(req, res){
    var date = req.params.qs;
    var result = { unix: null, natural: null };
    
    if(!isNaN(Number(date))) {
        result.unix = date;
        result.natural = moment.unix(date).format('MMMM D, YYYY');
    }

    if(isNaN(Number(date)) && moment(date, 'MMMM D, YYYY').isValid()) {
        result.natural = date;
        result.unix = moment(date, 'MMMM D, YYYY').unix();
    }
    
    res.json(result);
});

app.listen(8080, function(err){
    if(err) {
        throw err;
    }
    console.log('Listening on port 8080');
});