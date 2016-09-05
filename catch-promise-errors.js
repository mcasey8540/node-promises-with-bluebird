functionOne('parameterOne', function(error, result1){
  .then(function(result1){
    return functionTwo(result1);
  })
  ...//additional thenable statements
  .catch(function(err){
    //handle error
  }) 