const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

require('./routes/search')(app);

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});