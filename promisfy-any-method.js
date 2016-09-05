var Promise = require('bluebird');

module.exports = function(){
  return new Promise(function(resolve, reject){
    functionOne(function(error, result){
      if (error) {
        reject(err);
      } else {
        resolve(result)
      }
    });
  });
}