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
    connection.query("SELECT * FROM " + table + " WHERE id >= 1;", function (err, results, fields) {
        if (err) {
            console.error("Error: " + err);
        } else {
            console.log(results);
            for(var el in results){
                if (results[el] == str_find){
                    console.log(results[el]);
                }
            }
            
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