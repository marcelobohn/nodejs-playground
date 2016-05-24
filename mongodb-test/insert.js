var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {name: String, roles: Array, age: Number});

var user1 = new User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});
user1.name = user1.name.toUpperCase();
console.log(user1);
user1.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});