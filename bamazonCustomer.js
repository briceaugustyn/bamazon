var prompt = require('prompt');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon_db'

});


// Start the prompt 

prompt.start();
prompt.get(['would you like to "POST AN ITEM" or "BID ON AN ITEM?'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  answwer: ' + result[0]);
    //p1.test1()
    //p1.test()


});




connection.connect((error) => {
    if (error) throw error
    console.log('connected as ', connection.threadId)

    // connection.query(insert1, (error, response) => {
    //     if (error) throw error

    // }

    // )

    connection.query("select * from products ", (error, response) => {

        if (error) throw error
        console.log(response[1].product_name)
    })
    connection.end()
}


)