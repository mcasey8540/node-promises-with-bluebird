'use strict';

functionOne('parameterOne', function(error, result1){
  if (error){
    //handle error
  } else {
    //do something with the result
    functionTwo(result1, function(error, result2){
      if (error) {
        //handle error
      } else {
        //do something with the result
        functionThree(result2, function(error, result3){
          if(error) {
            // handle error
          } else {
            functionFour(result3, function(error, result4){
              if(error) {
                // handle error
              } else {
                // do something with the result..
              }
            });
          }
        });
      }
    });
  }
});