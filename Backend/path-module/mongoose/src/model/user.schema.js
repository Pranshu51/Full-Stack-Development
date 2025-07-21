import mongoose from 'mongoose';
 const userSchema = new monogoose.Schema({
  name: {
      type: String,
      required :[true, 'name is required'],
      maxLength : [50, "name should be less than 50 words"]
  },
  email: {
    type: string,
    unique : true
  },
  password: String,
  age : Number,
 })
  export default mongoose.model("user", userSchema);
  