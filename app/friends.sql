CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(40) NOT NULL,
    photo VARCHAR(300) NOT NULL,
    scores VARCHAR(60) NOT NULL,
    primary key (id)
);

INSERT INTO friends (name, photo, scores)
VALUES ("Randy", "https://vignette.wikia.nocookie.net/spsot/images/b/b9/Randy_Marsh_facebook_profile.png/revision/latest?cb=20141024175401", "5, 4, 2, 5, 1, 3, 5, 2, 4, 1");
INSERT INTO friends (name, photo, scores)
VALUES ("Gerald", "https://vignette.wikia.nocookie.net/spsot/images/e/e2/Gerald_Broflovski_facebook_profile.png/revision/latest?cb=20141118173207", "4, 3, 4, 5, 2, 4, 3, 1, 2, 5");
