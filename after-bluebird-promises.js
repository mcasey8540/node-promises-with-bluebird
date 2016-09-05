'use strict';

functionOne('parameterOne', function(error, result1){
  .then(function(result1){
  	return functionTwo(result1);
  })
  .then(function(result2){
  	return functionThree(result2);
  })
  .then(function(result3){
  	return functionFour(result3);
  })
  .catch(function(err){
  	//handle error
  })  