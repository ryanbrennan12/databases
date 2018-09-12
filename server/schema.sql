CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  objectId int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  text varchar(140),
  roomname varchar(140) NOT NULL,
  PRIMARY KEY (objectId)
);
  -- FOREIGN KEY (userid) REFERENCES users(id)

/* Create other tables and define schemas for them here! */
-- CREATE TABLE users (
--   id int(11) NOT NULL AUTO_INCREMENT,
--   username varchar(30) NOT NULL,
--   UNIQUE (username),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE rooms (
--   id int NOT NULL AUTO_INCREMENT,
--   roomname varchar(10) NOT NULL,
--   PRIMARY KEY (id)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -uroot < server/schema.sql
 *  to create the database and the tables.*/

