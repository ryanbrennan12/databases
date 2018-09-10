var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          console.log('ERROR', err);
          throw err;
        }
        console.log('GET RESULTS', results);
        callback(results);
      });
    }, // a function which produces all the messages
    post: function (msg, callback) {
      console.log('DOUBLE CHECK MSG', msg);
      db.query('SELECT users.id FROM users WHERE users.username =?', [msg.username], (err, result) => {
        if (err) {
          console.log('ERROR IS', err);
          throw err;
        }
        console.log('THIS IS MESSAGES RESULT', result[0].id);
        db.query('INSERT INTO messages(userid, text, roomname) VALUES(?, ?, ?)', [result[0].id, msg.message, msg.roomname], (err, result) => {
          if (err) {
            console.log('INNER ERROR IS', err);
            throw err;
          }
          console.log('record inserted');
          callback();
        });
        
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      console.log('THIS IS MODEL USERNAME', username);
      db.query('INSERT IGNORE INTO users(username) VALUES (?)', [username], 
        (err, results, fields) => {
          if (err) {
            console.log('I am an error: ', err);
            throw err;
          }
          console.log('Record inserted successfully');
          console.log('These are the results: ', results);
          callback();
        });

      // dbConnection.query(SQLSTRING, values, callback);
    }
  }
};


