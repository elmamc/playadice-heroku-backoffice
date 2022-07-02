const express = require('express');
const path = require('path');
const app = express();



app.get('/', function (req, res) {
    res.send("Hello World!");
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || 5000}`)
});
