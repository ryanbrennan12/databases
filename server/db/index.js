var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});
dbConnection.connect();

// dbConnection.query('INSERT INTO messages(userid, text, roomname) VALUES("444", "Hey I the first text", "newRoom")', 
//   (err, results, fields) => {
//     if (err) {
//       console.log('I am an error: ', err);
//       throw err;
//     }
//     console.log('Record inserted successfully');
//     console.log('These are the results: ', results);
//   });

// dbConnection.query('SELECT * FROM messages', 
//   (err, results, fields) => {
//     if (err) {
//       console.log('I am an error: ', err);
//       throw err;
//     }
//     console.log('These are the results: ', results);
//   });

exports.connection = dbConnection;