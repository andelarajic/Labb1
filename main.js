const express = require("express");
const app = express()
const path = require('path');
const public = path.join(__dirname, 'public');


app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.js'));
});

app.use('/', express.static(public));


//app.get("/about", (req, res) => {
  //  res.send("Testiramo")
//})

app.listen(4000)
