var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      console.log('THIS IS MODEL USERNAME', username);
      dbConnection.query('INSERT INTO users(username) VALUES (?)', [username], 
        (err, results, fields) => {
          if (err) {
            console.log('I am an error: ', err);
            throw err;
          }
          console.log('Record inserted successfully');
          console.log('These are the results: ', results);
        });

      // dbConnection.query(SQLSTRING, values, callback);
    }
  }
};


