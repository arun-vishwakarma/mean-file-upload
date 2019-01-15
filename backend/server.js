const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const upload = require('./router/upload');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));
 
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
   // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'POST');
   // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  //res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});

app.use('/api',upload);
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});
