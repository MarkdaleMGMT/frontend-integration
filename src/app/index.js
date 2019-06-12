const express = require('express');
const path = require('path')
const app = express();

 app.use(express.static("public"));

//Redirect server request to index.html
app.get('/', function (req, res) {
  // res.send({msg: 'hello! Server is up and running'});
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// app.get('/dashboard', function (req, res) {
//   // res.send({msg: 'hello! Server is up and running'});
//   res.sendFile(path.join(__dirname, '../../build/index.html'));
// });

app.use('/frontend', require('./frontend'));

module.exports = {
  routes:app
}
