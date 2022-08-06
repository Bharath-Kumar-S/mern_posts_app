import express from "express";
import { user } from "../models/user.model.js";
import bcrypt from "bcrypt";
const userRoute = express.Router();

userRoute.get("/", async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userRoute.get("/:id", async (req, res) => {
  try {
    const user = await user.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

userRoute.post("/", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      ...req.body,
      password: hashedPassword,
    };

    const createdUser = await user.create(newUser);
    res.status(200).json(createdUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// userRoute.put("/:id", async (req, res) => {
//   try {
//     const user = await user.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

userRoute.delete("/:id", async (req, res) => {
  try {
    const user = await user.findByIdAndDelete(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default userRoute;
