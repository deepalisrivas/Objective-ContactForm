'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
//   name: {
//     type: String,
//     required: 'Kindly enter the name of the task'
//   },
//   Created_date: {
//     type: Date,
//     default: Date.now
//   },
//   status: {
//     type: [{
//       type: String,
//       enum: ['pending', 'ongoing', 'completed']
//     }],
//     default: ['pending']
//   }
fName: String,
    lName: String,
    email: String,
    message: String,
    phone: Number
// });
// var User = mongoose.model('Tasks', TaskSchema, 'users');
// var User1 = new User({
//     fName: String,
//     lName: String,
//     email: String,
//     password: String,
//     phone: Number
//   })
  
//   User1.save(function(err, data) {
//     if(err) {
//       return console.log({status:1, result:err})
//     }
//     else {
//       res.send({status:1, result:data})
//     }
  })

module.exports = mongoose.model('Tasks', TaskSchema);