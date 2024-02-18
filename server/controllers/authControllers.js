import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
/**
 * ? Signup Controller
 **/
export const handleSignUp = async (req, res) => {
  // spem
  try {
    const { email, fullName, country, password, birthDate, gender } = req.body;
    const body = req.body;
    for (const key in body) {
      if (!body[key]) {
        res.send({
          status: false,
          message: `Please Fill the ${key} field`,
        });
        return;
      }
    }
    if (password.trim().length < 8) {
      return res.status(400).send({
        status: false,
        message: `Password should be greater than 8 characters`,
      });
    }
    const find = await userModel.findOne({ email });
    if (find) {
      return res.status(400).send({
        status: false,
        message: `Email already existed`,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const maleProfilePic = "https://avatar.iran.liara.run/public/boy";
    const femaleProfilePic = "https://avatar.iran.liara.run/public/girl";
    const profilePic = gender === "male" ? maleProfilePic : femaleProfilePic;
    const newUser = await userModel.create({
      email,
      fullName,
      country,
      password: hashPassword,
      birthDate,
      gender,
      profilePic,
    });
    res.status(201).send({
      status: true,
      message: `User created Successfully`,
      user: {
        id: newUser?._id,
        email: newUser?.email,
        fullName: newUser?.fullName,
        country: newUser?.country,
        birthDate: newUser?.birthDate,
        gender: newUser?.gender,
        profilePic: newUser?.profilePic,
        createdAt: newUser?.createdAt,
        updatedAt: newUser?.updatedAt,
      },
    });
  } catch (err) {
    console.log("handleSignUp error ;", err);
    res.status(500).send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Login Controller
 **/
export const handleLoginUp = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Login Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
/**
 * ? Logout Controller
 **/
export const handleLogout = (req, res) => {
  try {
    res.send({
      status: true,
      message: "Logout Api",
    });
  } catch (err) {
    res.send({
      status: false,
      error: err,
    });
  }
};
