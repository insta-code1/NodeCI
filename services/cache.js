const mongoose = require('mongoose');

const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.exec = function() {
  console.log('About to run query');
  
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name
  });

  console.log(key);

  return exec.apply(this, arguments);
}
