const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test_aspect",
    password: "root"
});

connection.connect(function (err) {
    if (err) {
        return console.error('Error: ' + err.message);
    } else {
        console.log("Connection successfully");
    }
});

function quer(table, str_find) {
    //table1 меняется на запрошеннную таблицу !!!!!
    connection.query("SELECT * FROM " + table + " WHERE name = '" + str_find + "' || description = '" + str_find + "';" , function (err, results, fields) {
        if (err) {
            console.error("Error: " + err);
        } else {
            console.log(results);
            let res = new Object();
            res.data = new Object();
            for(i = 0; i = results.length && i<20; i++){
                res.data += results[i];
            }
            for(el in results){
                res.count += results[el];
            }
            console.log(res.count);
            console.log(res.data);
            }
        
    });
}



quer("table1", "two")
connection.end(function (err) {
    if (err) {
        return console.error("Error: " + err.message);
    } else {
        console.log("Connection close");
    }
});