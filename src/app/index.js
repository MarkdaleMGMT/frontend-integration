const express = require('express');
const path = require('path')
const app = express();

 app.use(express.static("build"));

app.get('/', function (req, res) {
  // res.send({msg: 'hello! Server is up and running'});
  res.sendFile(path.join(__dirname, '../../build/index.html'));
})

app.use('/frontend', require('./frontend'));

//catch all and redirect back to client routing
app.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../build/index.html'));
});


module.exports = {
  routes:app
}
