import app from './app.js'
import mongoose from 'mongoose';
const port = 3000

//database connection-----------------------------------------------

//not a proffessional approach
//1. database connection may fail
//2. database is in another continent
// mongoose.connect('mongodb://<username>:<password>@127.0.0.1:27017/test');
// mongoose.connect('mongodb://127.0.0.1:27017/test');

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// BETTER APPROACH
(async () => {
  try{
    await mongoose.connect('dbstring')
    console.log('Database connected successfully');
    
    app.on("ERROR",(err)=> {
      console.log("error", err)
      throw err
    })
    const onlistenig = () => {
      console.log(`Example app listening on port ${port}`)
    }
    app.listen(port, onlistenig)
  } catch(err) {
    console.error("ERROR:", err)
    throw err
  }

})()
