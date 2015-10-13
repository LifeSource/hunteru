var express = require("express"),
    config = require("../../config")();

var app = express();

// setup the database with seed data
require("./config/mongoose")(config);

// setup RESTFUL api
var hunterApi = require("./api/hunter.api")(app);
var data = require("./api/data")(app);

app.get("/api/nenTypes", data.getNenTypes);
app.get("/api/occupations", data.getOccupations);

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
