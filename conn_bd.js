//the code is written in NodeJS with the mysql2 library 

const mysql = require("mysql2");

// connection config 
const connection = {
    host: "localhost",
    user: "root",
    database: "test_aspect",
    password: "root"
};

var res = {
    data: [], //main object
    count: []
}

var msg; //msg

async function sqlReader(table, str_find) {
    if (table == '' || str_find == '') {
        console.error('sqlReader() error: The values thatare passed cannot be empty')    
    }else{

        const conn = mysql.createConnection(connection); //connecting to db
        

        conn.query("SELECT * FROM `" + table + "`", (err, result) => { //sql query
            if (err) {
                console.error(err); //checking for err
            } else {

                for (el in result) {
                    res.count[el] = result[el] //pass all lines to the res.count
                }
            }
        });

        //query based on data passed to the function  
        conn.query("SELECT * FROM `" + table + "` WHERE `name` LIKE '%" + str_find + "%' || `description` LIKE '%" + str_find + "%';", (err, results) => {
            if (err) {
                console.error("Error: " + err); //checking for err
            } else {
                //console.log(results);
                for (el in results) {
                    res.data[el] = results[el]; //pass result to the res.data
                }
                if (res.data.length > 19) { //cut off extra lines 
                    arr.slice(0, 19);
                }
                res.data.sort(); //Array sort

                dataLenght = res.data.length; //lenght res.data
                countLenght = res.count.length; //lenght res.count

                if (dataLenght == 0) {
                    msg = 'Записи не найдены'; //validation no records found
                    console.log(msg);
                } else if (dataLenght = countLenght || dataLenght < countLenght) {
                    msg = 'В результате ' + dataLenght + ' записей из ' + countLenght; //
                    console.log(msg);
                }

            }

        });

        conn.end(); //close the connection 
    }
}
sqlReader('table1', 'One') //run a function (table name, search str)