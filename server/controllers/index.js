var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((data)=>{
        res.json({'results': data});
        // data: [{}]
        // data: {results: [{}]}
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('this is the MESSAGES!!!!: ', req.body);
      var msg = req.body;
      models.messages.post(msg, () => {
        res.status(201).end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      var user = req.body.username;
      // console.log('this is the USERS: ', user);
      models.users.post(user, () => {
        // res.send('done!');
        // res.sendStatus(201);
        res.status(201).end();
      });
    }
  }
};

