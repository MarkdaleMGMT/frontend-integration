const express = require('express');
const path = require('path')
const app = express();



//  app.get('/', (req, res) => {
//    res.send({msg: 'hello! Server is up and running'});
//  });

//app.use(express.static("build"));

//Redirect all server request to index.html
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../../build/index.html'));
// });

app.use('/frontend', require('./frontend'));




// the catch all route
// app.all('*', (req, res) => {
//   res.status(404).send({msg: 'not found'});
// });


module.exports = {
  routes:app
}
