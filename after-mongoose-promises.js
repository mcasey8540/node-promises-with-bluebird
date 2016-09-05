var User = require = ('../models/user');

User.findOneAsync({email: 'mike@mtcasey.com'}, function(error, foundUser){
  .then(function(foundUser){
    //do something with result 
  })
  .catch(function(error){
    //do something with error	
  })
})