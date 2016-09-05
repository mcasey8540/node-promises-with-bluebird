var Promise = require('bluebird')
var mongoose = require('mongoose');
mongoose.Promise = Promise

// promisify mongoose
Promise.promisifyAll(mongoose);
