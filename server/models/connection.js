 const mongoose = require('mongoose');

 mongoose.set('debug', true);
 mongoose.Promise = global.Promise;

 mongoose.connect(process.env.DATABASE, {
     useUnifiedTopology: true,
     useNewUrlParser: true,
     useCreateIndex: true
 })
 .then(() => {
     console.log('Connection to database successful!!');
 })
 .catch((err) => {
     console.log(err.message);
 });

const User = require('./user');
const Poll = require('./poll');

module.exports.User = User;
module.exports.Poll = Poll;
