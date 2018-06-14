//basics setup//
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const session = require('express-session')
const app = express();//create app
const multer = require('multer');

app.use(session({
  secret: 'FishSnaksSmileBacks',
  resave: false,
  saveUninitialized: true, 
  cookie: {maxAge: 60000 }
}))
app.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());

require("./server/config/routes.js")(app);

const taskController = {
    index: (request, response) => {
      Task.find({})
        .then(tasks => response.json(tasks))
        .catch(error => console.log(error));
  
    },
    create: (request, response) => {
  
      Task.create(request.body)
        .then(task => response.json(task))
        .catch(error => console.log(error));
  
    }
  };
app 
.get('/tasks', taskController.index)
.post('/tasks', taskController.create)
.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000, function() {//set server to 8000
    console.log("listening on port 8000");
})