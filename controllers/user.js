import { User } from "../models/user.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({
        success: false,
        message: "This user is Allready exist.",
      });
    }
    const haspsassword = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: haspsassword,
    });
    return res.status(201).json({
      success: true,
      message: "User register successfull.",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required.",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Invalid email!",
      });
    }
    const isPasswordMatch =await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Invalid Password!",
      });
    }
    return res.status(201).json({
      success: true,
      message: "Login successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
