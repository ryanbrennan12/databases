var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT users.username, messages.objectId, messages.text, messages.roomname FROM messages LEFT JOIN users ON users.id=messages.userid;', (err, results) => {
        if (err) {
          console.log('ERROR', err);
          throw err;
        }
        // console.log('GET RESULTS', results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (msg, callback) {

      console.log('DOUBLE CHECK MSG', msg);
      // nested query
      // first query is going to get the userID from the user tables
      // second query is going to insert the msg to the messages tabled, using the userID from above
      // a function which can be used to insert a message into the database
      db.query('SELECT id FROM users WHERE username=?', [msg.username], (err, results) => {
        var userID = results[0].id;
        console.log('MESSAGE', msg.text);
        console.log('ROOMNAME', msg.roomname);
        if (err) {
          console.log('ERROR GETTING USERNAME', err);
          return;
        }
        db.query('INSERT INTO messages(userid, text, roomname) VALUES(?, ?, ?)', [userID, msg.text, msg.roomname], (err) => {
          if (err) {
            console.log('ERROR INSERTING MESSAGE', err);
          }
          callback();
        }); 
        
      });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      console.log('THIS IS MODEL USERNAME', username);
      db.query('INSERT IGNORE INTO users(username) VALUES (?)', [username], 
        (err, results) => {
          if (err) {
            console.log('I am an error: ', err);
            throw err;
          }
          console.log('Record inserted successfully');
          callback();
        });

      // dbConnection.query(SQLSTRING, values, callback);
    }
  }
};


