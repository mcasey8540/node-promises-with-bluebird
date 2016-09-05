var User = require = ('../models/user');

User.findOne({email: 'mike@mtcasey.com'}, function(error, foundUser){
  if(error){
    //handle error
  } else{
    //do something with result
  }
})