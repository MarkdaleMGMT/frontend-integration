var express = require("express");
var path = require("path");
var mysql = require("mysql2")
const { mysql_config } = require('./src/config')

var app = express();

//var { connection } = require('./src/app/util/mysql_connection')

var HTTP_PORT = process.env.PORT || 3001

app.use(express.static("public"));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});


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