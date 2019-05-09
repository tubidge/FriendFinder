var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // variable to hold the current user's total score, used for comparison with next function.
        var newTotalScore = 0;
        // array to hold each total score difference between existing friends and new user.
        // then we can determine which difference is the smallest,
        // and use that number's index to find it's user.
        var scoreDiffs = [];

        // creating the new user's total score for comparison use.
        for (var i = 0; i < req.body.scores.length; i++) {
            newTotalScore += parseInt(req.body.scores[i]);
        };
        req.body.totalScore = newTotalScore;
        console.log(req.body);
        // pushing the new user object to the friends data array.
        friends.push(req.body);

        // for loop to create score differences for each user comparison
        for (var i = 0; i < friends.length; i++) {
            console.log(`comparing friend: ${friends[i].name}`);
            var currComparison = friends[i].totalScore;
            if (newTotalScore > currComparison) {
                scoreDiffs.push(newTotalScore - currComparison);
            } else if (newTotalScore < currComparison) {
                scoreDiffs.push(currComparison - newTotalScore);
            }
            // else if (newTotalScore === currComparison) {
            //     console.log(`Friend ${friends[i].name} has the same score!`);
            // };
        };

        console.log(`Score Differences: ${scoreDiffs}`);
        // now determine which score diff is the lowest, find it's index, and return that friend.

    });

};