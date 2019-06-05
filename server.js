var express = require("express");
var path = require("path");
var mysql = require('mysql')
const {mysql_config}= require('./src/mysql.js')
var app = express();


// connection.connect((error) =>{
//     if (!!error){
//         console.log('Err')
//     }else{
//         console.log('Connected')
//         connection.query('SELECT * FROM account', (error, results, fields)=>{
//             if(error){
//                 console.log("error" + error)
//             }else
            
//             console.log(results)
//         })
//     }
// })

var HTTP_PORT = process.env.PORT || 3001


exports.connection = {

    query: async function (query,queryValues){
      return await pool.query(query,queryValues);
    },

    begin_transaction: async function(queriesWithValues){

      try{

        var connection = await pool.getConnection();
        console.log("acquired connection");

        await connection.beginTransaction();
        console.log("transaction started");

        const queryPromises = [];

        queriesWithValues.forEach((queryWithValues, index) => {
            queryPromises.push(connection.query(queryWithValues.query, queryWithValues.queryValues));
        });
        let results = await Promise.all(queryPromises);
        console.log("results",results);

        await connection.commit();
        await connection.release();

        return Promise.resolve(results);
      }
      catch(err){
        console.log("error",err);
        await connection.rollback();
        await connection.release();

        return Promise.reject(err);
      }

    },

    release_all_connections: async function(){

      await pool.end();
      console.log("all connections in the pool have ended")

    }
};

app.use(express.static("public"));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});