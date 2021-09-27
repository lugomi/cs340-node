// ./database/db-connector.js

// intance of mysql to be used in app
var mysql = require('mysql')

// create the connection pool using credentials
var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_lugomi',
    password        : '0125',
    database        : 'cs340_lugomi'
});


// export to app
module.exports.pool = pool;
