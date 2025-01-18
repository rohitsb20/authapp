
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res , next) => {

  const {name, email, password} = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({name, email, password: hashPassword});
  


  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
   
};
