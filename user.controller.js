import User from "../model/user.modal.js";
import bcryptjs from "bcryptjs"

////////////signup functinality........................................
export const signup = async (req, res) => {
  try {
    const {fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    //hashing password.............................................
    const hashPassword= await bcryptjs.hash(password,10)
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
   await createdUser.save();
    res.status(201).json({ message: "User created succesfully" ,user:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email
    }});
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "internal server" });
  }
};
/////////login functionlity....................................................................

 export const login =  async(req,res)=>{
    try {
        const {email,password}=req.body
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password)
        if (!user || !isMatch) {
          return  res.status(400).json({message:"inavalid password"})    
        } else{
            res.status(200).json({message:"Login succesfully", user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error",error)
        
    }
 }
