var express = require("express");
var path = require("path");
var mysql = require("mysql2")
const bodyParser = require('body-parser')
const { routes } = require('./src/app');
const { mysql_config } = require('./src/config')

var app = express();

//var { connection } = require('./src/app/util/mysql_connection')

var HTTP_PORT = process.env.PORT || 3001

app.use(express.static("build"));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
// // set CORS
// app.use(function(req, res, next) {
//     let origins = ['localhost']

//     if (req.headers.origin) {
//         for (let i = 0; i < origins.length; i++) {
//             let origin = origins[i]
//             if (req.headers.origin.indexOf(origin) > -1) {
//                 res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
//             }
//         }
//     }

//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, id, token, login_uuid')
//     next()
// });

// mount the routes
app.use(routes);


var connection = mysql.createConnection(mysql_config)

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

connection.query("SELECT * FROM user", (error,results)=>{
    if (error){
        console.log("error: " + error);
    }
    else{
        console.log("results: " + JSON.stringify(results));
    };
})


app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});