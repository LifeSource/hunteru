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

app.use(express.static(config.client));
app.use(express.static(config.root));
app.use("/*", express.static(config.index));

app.listen(config.port, function () {
	console.log("Server started, listening on port: " + config.port);
});
