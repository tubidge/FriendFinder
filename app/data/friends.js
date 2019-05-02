var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'R0otsNh0ots9',
    database: 'friends_db'
});

connection.connect(function (err) {
    if (err) throw err;

});

function Friend(name, photo, scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores
};

Friend.prototype.getArr = function () {
    var scores = this.scores.split(", ");
    console.log(scores);
}


connection.query("SELECT * FROM friends", function (err, res) {
    if (err) throw err;
    var name = res[0].name;
    var photo = res[0].photo;
    var scores = res[0].scores;

    var friend = new Friend(name, photo, scores);
    friend.getArr();
})

// var friends = [{
//         name: "Randy",
//         photo: "https://vignette.wikia.nocookie.net/spsot/images/b/b9/Randy_Marsh_facebook_profile.png/revision/latest?cb=20141024175401",
//         scores: [5, 4, 2, 5, 1, 3, 5, 2, 4, 1]
//     },
//     {
//         name: "Gerald",
//         photo: "https://vignette.wikia.nocookie.net/spsot/images/e/e2/Gerald_Broflovski_facebook_profile.png/revision/latest?cb=20141118173207",
//         scores: [4, 3, 1, 3, 4, 5, 3, 4, 3, 2]
//     }
// ];

// module.exports = friends;