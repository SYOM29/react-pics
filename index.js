const express = require('express');
const keys = require('./config/keys');

const app = express();

require('./routes/search')(app);

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});