# Node.js & MySQL

This app is a storefront that allows the user to shop - similar to Amazon storefront.  Instead of shopping through a web broswer, the user uses the command-line on terminal to do their shopping. 

First off, on terminal navigate to the correct folder where the file is stored in. 
Then enter this command on the command-line:
`node bamazonCustomer.js`

A list of the store products show up.  Here the user can view the products information such as product's id, product's name, product's price, and product's aviable quantity.
![](images/initialAmount2.JPG)<br>

Then terminal will ask the user what product (by id) do they want and how many. The user can input the id and amount on the command-line.

### Tools Used 
The tools used in this application are node.js and mySQL.  Node.js is used to design the storefront user interface while mySQL is used as the database and stores information.  These tools are connected, once a user purchases something through the terminal, it will be update and show the remain quantity on mySQL (the database).<br>
On the image below, the user purchase one item from product id #10.  The remaining quantity is 61.
![](images/RemainingAmount.JPG)<br>
