const http = require('http');
const express = require('express');
const app = express()

const hostname = 'localhost';
const port = 3001;

var mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.post('/tasks', function(req, res) {

  var fName = req.body.fName;
  var lName = req.body.lName;
  var email = req.body.email;
  var message = req.body.message;
  var phone = req.body.phone


  var TaskSchema = mongoose.Schema ({
    fName: String,
    lName: String,
    email: String,
    messgage: String,
    phone: Number
  })

  var User = mongoose.model('Taks', TaskSchema, 'users');
  var User1 = new User({
    fName: String,
    lName: String,
    email: String,
    messgage: String,
    phone: Number
  })
  
  User1.save(function(err, data) {
    if(err) {
      return console.log({status:1, result:err})
    }
    else {
      res.send({status:1, result:data})
    }
  })
  // console.log("---------------", req.body)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});