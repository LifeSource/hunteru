var express = require("express"),
    bodyParser = require("body-parser"),
    config = require("../../config")();

var app = express();

// setup the database with seed data
require("./config/mongoose")(config);
var environment = config.env;

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
        app.use(express.static(config.build));
        app.use("/*", express.static(config.build + "index.html"));
        break;
    default:
        console.log("**** DEV ****");
        app.use(express.static(config.client));
        app.use(express.static(config.root));
        app.use("/*", express.static(config.index));
        break;
}

app.listen(config.port, function() {
    console.log("Server started, listening on port: " + config.port);
});
