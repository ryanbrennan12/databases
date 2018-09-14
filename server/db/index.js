var Sequelize = require('sequelize');
var db = new Sequelize('rando', 'root', '');


var User = db.define('User', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  username: { type: Sequelize.STRING, unique: true, allowNull: false },

});

var Message = db.define('Message', {
  objectId: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
  text: { type: Sequelize.STRING },
  roomname: { type: Sequelize.STRING}
});
Message.belongsTo(User);

// db.sync();
module.exports = db;