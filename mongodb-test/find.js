var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {name: String, roles: Array, age: Number});

User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
  if (err) {
    console.log(err);
  } else if (userObj) {
    console.log('Found:', userObj);
  } else {
    console.log('User not found!');
  }
});