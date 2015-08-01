var gulp = require("gulp"),
	del = require("del"),
	args = require("yargs").argv,
	browserSync = require("browser-sync"),
	$ = require("gulp-load-plugins")({ lazy: true });

var config = require("./config")();

gulp.task("default", $.taskListing);

gulp.task("lint", function () {

	return gulp.src(config.allJs)
			.pipe($.if(args.verbose, $.print()))
			.pipe($.plumber())
			.pipe($.jshint())
			.pipe($.jshint.reporter("jshint-stylish", { verbose: true }))
			.pipe($.jshint.reporter("fail"));
});

gulp.task("styles", ["clean-styles"], function () {
	log("*** Compiling Stylus -> CSS");
	return gulp.src(config.styles)
			.pipe($.plumber())
			.pipe($.stylus())
			.pipe(gulp.dest(config.css));
});

gulp.task("watch-styles", function () {
	gulp.watch(config.styles, ["styles"]);
});

gulp.task("clean-styles", function (done) {
	clean(config.css + "**/*.css", done);
});

gulp.task("wiredep", function () {
	log("*** Wiring up bower css, js and custom js files");

	var wiredep = require("wiredep").stream;
	var options = config.getWiredepDefaultOptions();

	return gulp.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js)))
		.pipe(gulp.dest(config.client));
});

gulp.task("inject", ["wiredep"], function () {
	log("*** Injecting custom css");

	return gulp.src(config.index)
			.pipe($.inject(gulp.src(config.css + "site.css")))
			.pipe(gulp.dest(config.client));
});

gulp.task("dev", ["inject"], function () {
	
	var options = {
		script: config.nodeServer,
		delayTime: 1,
		env: {
			"PORT": config.port,
			"NODE_ENV": config.env
		},
		watch: [
			config.server + "**/*.js"
		]
	};

	return $.nodemon(options)
			.on("start", ["lint"], function () {
				log("*** nodemon started");	
				startBrowserSync();
			})
			.on("restart", function (files) {
				log("*** nodemon restarted");
				log("*** Files changed: " + files);
				setTimeout(function() {
					browserSync.notify("Reloading now ...");
					browserSync.reload({ stream: false });
				}, config.browserReloadDelay);
			})
			.on("crash", function () {
				log("*** nodemon crashed unexpectedly");	
			})
			.on("exit", function () {
				log("*** nodemon exited successfully");
			});
});

// ------------------------------------------------------------

function startBrowserSync() {
	
	if (browserSync.active) {
		return;
	}

	gulp.watch(config.styles, ["styles"])
		.on("change", changedEvent);

	var options = {
		proxy: "localhost:" + config.port,
		port: 8000,
		files: [
			config.client + "**/*.*",
			"!" + config.css + "**/*.css"
		],
		ghostMode: {
			forms: true,
			location: false,
			clicks: true,
			scroll: true
		},
		injectChanges: true,
		notifyChanges: true,
		logChanges: true,
		logLevel: "debug",
		logPrefix: "hunteru",
		reloadDelay: 1000
	};

	browserSync(options);
}

function changedEvent(event) {
	log("*** File changed: " + event);
}

function clean(files, done) {
	del(files, done);
}

function log(msg) {
	if (typeof msg === "object") {
		for (var item in msg) {
			$.util.log($.util.colors.blue(msg[item]));
		}
	} else {
		$.util.log($.util.colors.blue(msg));
	}
}
