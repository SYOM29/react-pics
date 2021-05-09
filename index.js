const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

require('./routes/search')(app);
require('./routes/topics')(app);

app.use(express.static(path.join(__dirname, 'client/build')));

const PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port)
});