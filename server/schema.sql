CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  UNIQUE (username),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  text varchar(140),
  roomname varchar(140) NOT NULL,
  FOREIGN KEY (userid) REFERENCES users(id),
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(10) NOT NULL,
--   PRIMARY KEY (id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -uroot < server/schema.sql
 *  to create the database and the tables.*/

