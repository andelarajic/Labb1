const express = require("express");
const app = express()
const path = require('path');
const public = path.join(__dirname, 'public');


app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(4000)
