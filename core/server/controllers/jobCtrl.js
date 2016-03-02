var Job = require('../models/job.model.js');

module.exports = {

    createJob: function (req, res) {
        Job.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    readJobs: function (req, res) {
        Job.find(req.query, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        });
    },

    readPublicAndPrivateJobs: function (req, res) {
        var jobs = {
            private: [],
            public: []
        };

        Job.find({_author: req.query._id, public: false}).exec(function (err, privateJobs) {
            if (err) {
                res.status(500).send(err)
            }
            jobs.private = privateJobs;
            Job.find({public: true, guilds: {$ne: {$in: req.body.guilds}}}).exec(function (err, publicJobs) {
                if (err) {
                    res.status(500).send(err)
                }
                jobs.public = publicJobs;
                res.status(200).send(jobs)
            })
            //in guilds, not containing ids from array on req.body.guilds.
        })
    },


    /* readJobsByGuild: function (req, res) {
     var jobs = [];

     for (var i = 0; i < req.body.guilds.length; i++) {
     Job.find({
     _guilds: req.body.guilds[i]
     }).exec(function(err, response) {
     console.log(response);
     if (jobs.length < 1) {
     for (var d = 0; d < response.length; d++) {
     jobs.push(response[d]);
     }
     } else {
     for (var e = 0; e < response.length; e++) {
     var flag = false;
     for (var j = 0; j < jobs.length; j++) {
     if (jobs[j]._id === response[e]._id) {
     flag = true;
     }
     }
     if (!flag) {
     jobs.push(response[i]);
     }
     }
     }
     });
     }

     res.send(jobs);
     },*/

    updateJob: function (req, res) {
        Job.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    deleteJob: function (req, res) {
        Job.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    }

};
