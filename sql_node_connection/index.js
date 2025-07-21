import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';


const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);
 const app = express();

 app.use(methodOverride("_method"));
 app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
 app.set("view engine", "ejs");
 app.set("views", Path.join(__dirname, "/views"));
 
// /* database acess karne ke 4 methods
// -->workbench
// -->mysql package ->node.js
// -->cli(command line initerface) mysqql -u root -p likhke

// for QUIT WRITE-->quit or ctrl+d
// -->using sql files--> file banake .sql extension ke sath likhke usko run karna
// */


const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// home route
   app.get('/', async (req, res) => {
  let q =  `select count(*) from users`;
  try {
  const [results] = await connection.query(q);
  let count = (results[0]["count(*)"]);
  res.render("home.ejs",{count});

} catch (err) {
  console.log(err);
  res.send("Some Error in db");
}
  
});

// show route
app.get("/user", async (req,res) =>{
  let q = `select * from users`;

  try {
  const [users] = await connection.query(q);

  // console.log(results);
  res.render("showusers.ejs",{users});
} catch (err) {
  console.log(err);
  res.send("Some Error in db");
}
});

// Edit ROute
app.get("/user/:id/edit", async (req, res) => {
  let { id } = req.params;
  console.log(id);
  let q = `SELECT * FROM users WHERE id = ?`;
  try {
    const [users] = await connection.query(q, [id]);
    res.render("edit.ejs", { users: users[0] }); // send the single user object
  } catch (err) {
    console.log(err);
    res.send("Some Error in db");
  }
});

// Update (DB)ROute
app.patch("/user/:id", async (req, res) => {
  // res.send("Update Route Hit");
  let { id } = req.params;
  let { password: fromPass, username: newUsername } = req.body;
  let q = `SELECT * FROM users WHERE id = ?`;
  try {
    const [users] = await connection.query(q, [id]);
     if (fromPass !== users[0].password) {
      return res.send("Password does not match");
    }else{
      let q2 = `UPDATE users SET username = ? WHERE id = ?`;
      const [result] = await connection.query(q2, [newUsername, id]);
      res.redirect("/user");
    }

    // res.render("edit.ejs", { users: users[0] }); // send the single user object
  } catch (err) {
    console.log(err);
    res.send("Some Error in db");
  }
});



app.listen("8080", () =>{
  console.log(`server is listening on port ${8080}`);
});

// let q = "SHOW TABLES";
// inserting new data into table
// let q = "INSERT INTO users (id, username, email, password) VALUES ?";
// let users = [
//   ["1235","123_newusers", "abrc@gmail.com", "password123"],
//   ["124","124_newuser", "def@gmail.com", "password124"]
// ];

// let getRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(), 
//     faker.internet.password(),
//   ];
// };




// console.log(getRandomUser()); 

// let data =[];
// for(let i=1; i<=100; i++){
//    data.push(getRandomUser()); /*100 fake ussers*/
// }


// // connection part 
// try {
//   const [results] = await connection.query(q, [data]);
//   console.log(results);
//   // console.log(results.length);
//   // console.log(results[0]);
//   // console.log(results[1]);

// } catch (err) {
//   console.log(err);
// }
//   connection.end();


 
















/*  mysql -u root -p
Enter password: ************
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 22
Server version: 8.0.42 MySQL Community Server - GPL

Copyright (c) 2000, 2025, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> SHOW DATABASES;
+--------------------+
| Database           |        
+--------------------+        
| first_app          |        
| information_schema |
| mysql              |        
| performance_schema |        
| sys                |        
+--------------------+        
5 rows in set (0.00 sec)      

mysql> USE first_app
Database changed
mysql> SHOW TABLES;
+---------------------+       
| Tables_in_first_app |
+---------------------+
| temp                |
+---------------------+
1 row in set (0.00 sec)

mysql> quit
Bye

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
terminal -2
PS C:\Users\DELL\OneDrive\Desktop\FULL STACK DEVELOPMENT\sql_node_connection>  node index.js
[dotenv@17.2.0] injecting env (4) from .env (tip: 🔐 prevent committing .env to code: https://dotenvx.com/precommit)
localhost root Jbjbjatw@123 first_app
[ { Tables_in_first_app: 'temp' } ]
[@faker-js/faker]: faker.internet.userName() is deprecated since v9.1.0 and will be removed in v10.0.0. Please use faker.internet.username() instead.
{
  _id: '6b33f0fb-ebf2-4fc9-8acf-ba10e9c10040',
  email: 'Vernie_Lesch11@yahoo.com',
  userName: 'Misty_McClure',
  password: 'xbXxBKInGOka0Xp'
}
PS C:\Users\DELL\OneDrive\Desktop\FULL STACK DEVELOPMENT\sql_node_connection>  node index.js
.internet.username() instead.
{
  _id: '9f36de2d-23fe-404e-ba86-3793721f07cc',
  email: 'Kristy_OConnell60@hotmail.com',
  userName: 'Alisa.Wintheiser75',
  password: 'XPagOw_mxPU07F0'
}
PS C:\Users\DELL\OneDrive\Desktop\FULL STACK DEVELOPMENT\sql_node_connection>  node index.js
{
  _id: '9c00be5a-0fea-4e54-9ef6-977ab13a646f',
  email: 'Quinten_Tromp98@yahoo.com',
  userName: 'Aylin55',
  password: '6hsxKbJ3EDIVNT9'
}
PS C:\Users\DELL\OneDrive\Desktop\FULL STACK DEVELOPMENT\sql_node_connection>




*/