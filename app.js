
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var { engine } = require("express-handlebars");
var path = require("path")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", engine({
    extname: ".hbs",
    defaultLayout: false,
    partialsDir: path.join(__dirname, "views/partials")
}));
app.set("view engine", ".hbs");

app.get("/", function(req, res){
    res.render("home");
});
app.get("/contact", function(req, res){
    res.render("contact");
});

app.post("/contact", function(req, res, next){
    console.log("contact form posted");
    console.log(req.body);
res.render("contact", { message: "Thank you! Your message has been received."});
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Express started. Listening on port %s", port);