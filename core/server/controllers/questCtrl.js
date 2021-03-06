var Quest = require('../models/quest.model.js');

module.exports = {

    createQuest: function (req, res) {
        Quest.create(req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    readQuests: function (req, res) {
        Quest.find(req.query, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result)
        })
    },

    updateQuest: function (req, res) {
        Quest.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    },

    deleteQuest: function (req, res) {
        Quest.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(result);
        })
    }


};
