var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);
        // move this totalScore function to survey.html
        var totalScore = 0;
        for (var i = 0; i < req.body.scores.length; i++) {
            totalScore += parseInt(req.body.scores[i]);
        };
        console.log(totalScore);
        friends.push(req.body);
        // create logic to compare new user to prior users.

    });
};