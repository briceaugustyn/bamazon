var prompt = require('prompt');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazon_db'

});


//console.log('HELLO WELCOME TO OUR BAMAZON DATABASE');
//console.log('HERE IS OUR PRODUCTS');


//Start the prompt 
prompt.start();


prompt.get(['would you like to see our database ?'], function (err, result) {
    console.log('Command-line input received:');
    console.log('  answwer: ' + result[0]);
    Display_database()
    //p1.test1()
    //p1.test()

});


// prompt.get(['would you like to "POST AN ITEM" or "BID ON AN ITEM?'], function (err, result) {
//     console.log('Command-line input received:');
//     console.log('  answwer: ' + result[0]);
   
//     //p1.test1()
//     //p1.test()

// });




function Display_database(){

    connection.connect((error) => {
        if (error) throw error
       
        connection.query("select item_id,product_name,price from products ", (error, result, fields) => {
            if (error) throw error
            console.log(result);
           // console.log(response[1].product_name)
        })
        connection.end()
    }
    
    
    )

}