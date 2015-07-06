/// <reference path="typings/node/node.d.ts"/>
module.exports = function () {
	
	var env = process.env.NODE_ENV || "dev",
		port = process.env.PORT || 3000,
		db = {
			development: {
				port: process.env.PORT || 27017,
				connectionString: "mongodb://localhost:27017/hunteru"
			},
			production: {
				port: process.env.PORT || 80,
				connectionString: "mongodb://localhost:27017/hunteru"
			}	
		},
		root = "./",
		src = root + "src/",
		server = src + "server/",
		client = src + "client/",
		clientApp = client + "app/",
		css = client + "css/",
		stylus = client + "styles/",
		nodeModules = root + "node_modules/",
		bowerComponents = root + "bower_components/",
		ignore = [nodeModules + "**/*.*", bowerComponents + "**/*.*"];

	var config = {
		env: env,
		port: port,
		db: db,
		root: root,
		src: src,
		server: server,
		nodeServer: server + "app.js",
		client: client,
		clientApp: clientApp,
		css: css,
		styles: stylus + "site.styl",
		index: client + "index.html",
		allJs: [
			client + "**/*.js",
			root + "/*.js",
			"!" + ignore
		],
		js: [
			client + "**/*.module.js",
			clientApp + "**/*.js",
			client + "**/*.js"
		],
		bower: {
			json: root + "bower.json",
			directory: bowerComponents,
			ignore: "../.."
		},
		browserReloadDelay: 1000
	};

	config.getWiredepDefaultOptions = function () {
		var options = {
			json: config.bower.json,
			directory: config.bower.directory,
			ignore: config.bower.ignore
		};

		return options;
	};

	return config;
};
