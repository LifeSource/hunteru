var express = require("express"),
    bodyParser = require("body-parser"),
    config = require("../../config")();
    
var path = {
    root: "./",
    build: "./build/",
    buildIndex: "./build/index.html",
    client: "./src/client/",
    index: "./src/client/index.html"
};

var port = process.env.PORT || 8000,
    environment = process.env.NODE_ENV || "dev";

var app = express();

// setup the database with seed data
require("./config/mongoose")(environment);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup RESTFUL api
var data = require("./api/data")();
var hunterRouter = require("./api/hunter.api")();

app.get("/api/nenTypes", data.getNenTypes);
app.get("/api/occupations", data.getOccupations);
app.use("/api/hunters/", hunterRouter);

switch (environment) {
    case "production":
        console.log("**** BUILD ****");
        app.use(express.static(path.build));
        app.use("/*", express.static(path.buildIndex));
        break;
    default:
        console.log("**** DEV ****");
        app.use(express.static(path.client));
        app.use(express.static(path.root));
        app.use("/*", express.static(path.index));
        break;
}

app.listen(port, function() {
    console.log("Server started, listening on port: " + port);
});
