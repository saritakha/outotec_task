const express = require('express');
const mongoose = require('mongoose');
const Service = require('./model/Sevice.js')
const app = express();
const path = require('path');
var cors = require("cors");
const url = 'mongodb://admin:admin12@ds163835.mlab.com:63835/outotecdb';
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(cors());

app.get('/', (req,res) => {
    res.json('store data ');
})

app.get('/api/services', (req,res) => {
    Service.find({}).then(oneService => {
        res.json(oneService);
    })
})

app.post('/api/services', (req, res) => {
    Service.create({
      date: Date.now(),
      requestName: req.body.requestName,
      requestType: req.body.requestType,
      id: req.body.id ,
      description: req.body.description,
      priority: req.body.priority,
      status: req.body.status
    })
    .then(service => {
      res.json(service)
    });
  });

  mongoose.connect(url, {useNewUrlParser:true},function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });

app.listen(process.env.PORT || 5000);
console.log('server started');


// {
//   "requestName": "Sarita",
//    "RequestType": "audit",
//    "ID": 1,
//    "description":"sarita auditing",
//    "priority": "hello",
//    "status": "open"
// }
