import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../utils/error.js";

export const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  const hashPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "user not found"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "wrong credentials"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
     const { password: hashPassword, ...rest } = validUser._doc;
const expiry = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie("access_token", token, { httpOnly: true, expires: expiry })
      .status(200)
      .json(rest);
} catch (error) {
  next(error);
}



};
