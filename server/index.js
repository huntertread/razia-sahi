const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));

const port = 3003;
app.listen(port, () => {console.log(`app is listening on port: ${port}`)});

module.exports = app;