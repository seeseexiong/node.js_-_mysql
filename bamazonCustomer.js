//Dependencies are mysql and inquirer
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);
  afterConnection();
});

function showProducts() {
    connection.query("SELECT * FROM productsTable", function(err, res) {
        if (err) throw err;    
        for (let record in res) {
            let products = res[record]

            console.log(
                "\nProduct ID: ", products.itemId + "\n",
                "Name: ", products.productName + "\n", 
                "Price: ", products.price + "\n",
                "Qauntity: ", products.stockQuantity + "\n",
                "======="
            )        
        }
    });
}
showProducts();

function inquirePrompt(){
    inquirer.prompt([
  
       // Ask what the user wants to buy and how many.
        {
          message: "What is the id of the product you would like to buy?",
          name: "userItem_id",
        },{
            message: "How many would like to buy?",
            name: "userQuantity",
        }
    ]).then(function(answers) {
      
        connection.query("SELECT * FROM productsTable WHERE itemId ="+ answers.userItem_id, function(err, res) {
          if (err) throw err;
          //check if store has enough of the product to meet the customer's request
          else if (answers.userQuantity <= res[0].stockQuantity) {
      
            var newQuantity = res[0].stockQuantity - answers.userQuantity;
            var cost = answers.userQuantity * res[0].price;
            console.log("New quantity: " + newQuantity);
            
      
            connection.query(
              "UPDATE productsTable SET ? WHERE ?",
              [ {stockQuantity: newQuantity},
                {itemId: answers.userItem_id}],
              function(err, res) {
              if (err) throw err;
              
              console.log("The cost of your order is $" + cost);
              
              })
            }
            //if store don't have enough of the product to meet the customer's request then tell them how much we have in stock
            else {
              console.log("Insufficient quantity. We have only "+ res[0].stockQuantity +" item(s) of this product in stock.");
              console.log(res[0].stockQuantity);
              
            }
            connection.end();
           })
        })
  };
  inquirePrompt();
  

  //============================================================================

function afterConnection() {
  connection.query("SELECT * FROM productsTable", function(err, res) {
    if (err) throw err;
    //console.log(res);
  });
}