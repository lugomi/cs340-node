// app.js


// Setup, where vars are defined
var express = require('express');
var app     = express();
var db      = require('./database/db-connector');
PORT        = 31313;


// Routes for the webapp
app.get('/', function(req, res) {
    q1 = 'DROP TABLE IF EXISTS diagnostic;';
    q2 = 'CREATE TABLE diagnostic(id INT PRIMARY KEY AUTO_INCREMENT, text VARCHAR(255) NOT NULL);';
    q3 = 'INSERT INTO diagnostic (text) VALUES ("MySQL is working!")';
    q4 = 'SELECT * FROM diagnostic;';

    // executes every query in an async manner
    // we want each query to finish before the next starts
    
    // DROP TABLE
    db.pool.query(q1, function(err, results, fields){
    
        // CREATE TABLE
        db.pool.query(q2, function(err, results, fields){
        
            // INSERT INTO
            db.pool.query(q3, function(err, results, fields){

                // SELECT *
                db.pool.query(q4, function(err, results, fields){
                
                    // send the results to browser
                    let base = "<h1>MySQL Results:</h1>";
                    res.send(base + JSON.stringify(results));
                });
            });
        });
    }); 
});

// Listener
app.listen(PORT, function(){
    console.log('IT WORKS on http://localhost:' + PORT + '; disconnect with Ctrl-C.')
});
