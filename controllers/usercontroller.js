const User = require('../models/userModel.js')

exports.home = (req,res) => {
  res.send("hello world!!");
}

exports.createUser = async(req, res) => {
    // extract info
    try {
       const {name, email}  = req.body

       if(!name || !email){
        throw new Error("Name and email are required")
       }

       const userExists = await User.findOne({email})

       if (userExists) {
        throw new Error("User already exists")

       }

       const user = await User.create({
        name,
        email
       })

       res.status(201).json({
        success: true,
        message: "User created Successfully",
        user
       })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

exports.getUsers =async (req,res)=>{
  try{
    
    const users =await User.find({})
    res.status(200).json({
      success: true,
      message: "got user successfully",
      users

    })
    
  }
  catch (error){
      console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
             })

  }
}

exports.deleteUser = async(req, res) =>{
  try{
    const userId = req.params.id
    const user = await User.findByIdAndDelete(userId)
    res.status(200).json({
      success: true,
      message:"User deleted successfully"
    })
  }catch (error){
      console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
             })

}
}

exports.editUser = async (req,res) => {
  try{
  const user = await user.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json({
    success:true,
    message:"user updated successfully"
  })
} catch{
   console.log(error);
   res.status(400).json({
   success: false,
   message: error.message,
})

}

}

// exports.createUser = async(req, res) =>{
//   //extract info
//   try{
//     const {name, email } = req.body
    
//     const user = await User.create({
//       name,
//       email
//     })
// res.status(201).json({
//   success:true,
//   message:"user created successfully",
//   user
// })

//   }catch(error){
//     console.log(error)
//     res.status(400).json({
//   success:false,
//   message:error.messsage
// })

//   }
// }