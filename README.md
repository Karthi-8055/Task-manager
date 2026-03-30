Task Manager steps :

step 1 : database setup -> 
         i used mongoDB local database so install mongodb in your system. Than open cmd run "mongosh" to start shell.
         write the command "use Todo" to create a database that i used and keep running the shell don't close.

step 2 : VS code terminal setup ->
         install all required dependencies from terminal 
         "dependencies": {
            "ejs": "^5.0.1",
            "express": "^5.2.1",
            "method-override": "^3.0.0",
            "mongoosh": "^0.0.7",
            "node.js": "^0.0.1-security",
            "nodemon": "^3.1.14"
        }
        The command is "npm install <dependency name>" or "npm i <dependency name>"
        Start the server "nodemon index.js"

step 3 : Open browser go to "http://localhost:8000/main" you can able to see the main page.
         enter a new task name and click on "Add" button.
         To see all the stored tasks in db click on "All Tasks" button.
         You can also check the checkbox of task which is completed and can be deleted.
