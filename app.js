const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

// app.get('*', function(req, res){
//   res.render('404');
// });

app.listen(PORT, () => console.log(`TVYE listening on ${ PORT }`));
