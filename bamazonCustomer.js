// inquirer for prompt
// mysql to connect to db
var mysql = require('mysql')
var inquirer = require('inquirer');

// connect to database
var connection = mysql.createConnection ({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});

// ensure that a connection is set up

connection.connect(function(err) {
  if (err) {
    console.log('make sure you are connected to mysql');
  }
  console.log('you are connected as id ' + connection.threadId);
});

// show initial inventory upon beginning
function showStore() {
  connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function(err, res) {
    // console.log('ed');
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity);
    }
  });
}

// asks what item_id you want to buy and how much stock_quantity
inquirer.prompt([
  {
    message: 'buy whatever your heart demands based on its id',
    type: 'input',
    name: 'choice'
  },
  // how much you want? - player must enter number lower than stock_quantity
  {
    message: 'how much of that would you like?',
    type: 'input',
    name: 'quantity'
  }
])
.then(answers => {
  
  // checks in database to compare stock_quantity to answers.quantity
  connection.query('SELECT * FROM products WHERE item_id = ?', answers.choice, function (error, results) {

    for (var i = 0; i < results.length; i++) {
      console.log(results[i].product_name + 'has a stock of' + results[i].stock_quantity);

      // creates baseline variable for potential purchases, will be altered if the purchase is successful
      var stock = results[i].stock_quantity;

      // ensures that we have enough of the desired product
      if (answers.quantity > results[i].stock_quantity) {
        console.log('too many');
      }

      // ensures that purchase goes through and deducts desired quantity from stock variable
      if (answers.quantity < results[i].stock_quantity) {
        console.log('okay, you can have this.');
        console.log('updating away! please stand by.');

        // updates stock based on successful purchase!!!
        stock = stock - answers.quantity;

        // provides accurate stock quantity for product based on the above successful purchase using UPDOOT
        connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [stock, answers.choice], function(error, results) {

          // console.log(results);

          for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            console.log(results[i].item_id);
            console.log(results[i].stock_quantity);
            console.log(stock);
            console.log(answers.choice);
          }

          // shows the updated inventory based on player's purchase
          connection.query('SELECT item_id, product_name, price, stock_quantity FROM products', function(err, res) {
            for (var i = 0; i < res.length; i++) {
              console.log(res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity);
            }
          });

        });
      // END IF STATEMENT
      }
    // END FOR LOOP
    }

   if (error) throw error;
  // END ANSWERS
  });
// END INQUIRER PROMPT
});

showStore();