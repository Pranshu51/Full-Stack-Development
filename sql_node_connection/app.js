

const express = require('express');
require('dotenv').config();
const cors = require("cors")//cross origin request ke lie

const connectToDb = require('./config/db.js')

const app = express();
//express middleware --> ye request send karne se pehle send kia jata hai ye ke tareeke ke check ints hote hai inka bana banya syntax available bhi hota h
app.use(express.json())//allow json data
app.use(express.urlencoded({extended:true}))//url decoed form me jata h to db me to orifginal form me hi chahiye data to enocded ka istemal karenge
app.use(cors())//idkr ander hum url bhi de skte h ki konse ouside resource ko aane dena h konse ko nhi ane dena


//init connection to db
connectToDb()
const userRoutes = require('./routes/userroutes.js')

app.use('/', userRoutes);

// export default app;
module.exports = app;


















// const express = require('express');
// require('dotenv').config();
// const cors = require("cors");

// const connectToDb = require('./config/db.js');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Connect to DB
// connectToDb();

// // Routes
// const userRoutes = require('./routes/userroutes.js');
// app.use('/api/users', userRoutes); // ✅ Now routes are under /api/users

// module.exports = app;
