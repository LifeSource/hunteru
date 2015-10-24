module.exports = function() {

    var Hunter = require("../models/hunter");

    var controller = {
        use: use,
        get: get,
        post: post,
        put: put,
        patch: patch,
        remove: remove,
        query: query
    };

    return controller;

    function query(req, res) {
        Hunter.find()
            .exec(function(err, hunters) {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.json(hunters);
                }
            });
    }

    function use(req, res, next) {

        Hunter.findById(req.params.id, function(err, hunter) {
            if (err) {
                res.status(500).send(err);
            } else if (hunter) {
                req.hunter = hunter;
                next();
            } else {
                res.status(404).send("No hunter found!");
            }
        });
    }

    function get(req, res) {
        res.json(req.hunter);
    }

    function post(req, res) {
        var hunter = new Hunter(req.body);

         hunter.save(function(err, hunter) {
             if (err) {
                 res.status(500).send(err);
             } else {
                 res.status(201).send(hunter);
             }
         });
    }

    function put(req, res) {
        req.hunter.name = req.body.name;
        req.hunter.age = req.body.age;
        req.hunter.gender = req.body.gender;
        req.hunter.nen = req.body.nen;
        req.hunter.occupation = req.body.occupation;
        req.hunter.abilities = req.body.abilities;

        req.hunter.save(function (err, hunter) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(req.hunter);
            }
        });
    }

    function patch(req, res) {
        if (req.body._id) {
            delete req.body._id;
        }

        for (var p in req.body) {
            req.hunter[p] = req.body[p];
        }

        req.hunter.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(req.hunter);
            }
        });
    }

    function remove(req, res) {
        req.hunter.remove(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(204).send("Removed");
            }
        });
    }
};
