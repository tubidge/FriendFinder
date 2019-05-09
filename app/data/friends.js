// var mysql = require("mysql");

// var connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: 'R0otsNh0ots9',
//     database: 'friends_db'
// });

// connection.connect(function (err) {
//     if (err) throw err;

// });

// function Friend(name, photo, scores) {
//     this.name = name;
//     this.photo = photo;
//     this.scores = scores
// };

// Friend.prototype.getArr = function () {
//     var scores = this.scores.split(", ");
// }


// connection.query("SELECT * FROM friends", function (err, res) {
//     if (err) throw err;
//     var name;
//     var photo;
//     var scores;
//     for (var i = 0; i < res.length; i++) {
//         name = res[i].name;
//         photo = res[i].photo;
//         scores = res[i].scores;
//     };

//     var friend = new Friend(name, photo, scores);
//     friend.getArr();

//     for (var i = 0; i < res.length; i++) {
//         friends.push(friend);
//     };
// });

var friends = [{
        name: "Randy",
        photo: "https://vignette.wikia.nocookie.net/spsot/images/b/b9/Randy_Marsh_facebook_profile.png/revision/latest?cb=20141024175401",
        scores: [5, 4, 2, 5, 1, 3, 5, 2, 4, 1],
        totalScore: 32
    },
    {
        name: "Gerald",
        photo: "https://vignette.wikia.nocookie.net/spsot/images/e/e2/Gerald_Broflovski_facebook_profile.png/revision/latest?cb=20141118173207",
        scores: [4, 3, 1, 3, 4, 5, 1, 4, 3, 2],
        totalScore: 30
    },
    {
        name: "Sheila",
        photo: "https://vignette.wikia.nocookie.net/spsot/images/7/7d/Sheila_friend_icon.png/revision/latest?cb=20140425143321",
        scores: [4, 3, 1, 3, 4, 5, 1, 4, 1, 2],
        totalScore: 28
    },
    {
        name: "Sharon",
        photo: "https://vignette.wikia.nocookie.net/spsot/images/6/6d/Sharon_Marsh_facebook_profile.png/revision/latest?cb=20141118210612",
        scores: [4, 3, 5, 3, 4, 5, 5, 4, 1, 2],
        totalScore: 36
    }
];

module.exports = friends;