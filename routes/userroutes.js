const express = require("express");

const {home,createUser,deleteUser,getUsers,editUser} = require("../controllers/usercontroller.js")


const router = express.Router();
router.get("/",home)

router.post('/createuser',createUser)
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id', deleteUser)
router.put('/edituser',editUser)
 module.exports = router








 