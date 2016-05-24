var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('User', {name: String, roles: Array, age: Number});

User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
  if (err) {
    console.log(err);
  } else if (userObj) {
    console.log('Found:', userObj);

    //For demo purposes lets update the user on condition.
    if (userObj.age != 30) {
      //Some demo manipulation
      userObj.age += 30;

      //Lets save it
      userObj.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log('Updated', userObj);
        }
      });
    }
  } else {
    console.log('User not found!');
  }
});