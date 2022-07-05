const express = require('express');
const path = require('path');
const app = express();
const webAppName = 'playadice-heroku-backoffice';

app.use(express.static(__dirname + `/dist/${webAppName}`));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        `/dist/${webAppName}/index.html`));
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening at http://localhost:${process.env.PORT || 5000}`)
});
