var express = require('express');
var app = express();

var router = require('./app/router');

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3001, () => {
    console.log('server listening on port 3001...');
})

router(app);