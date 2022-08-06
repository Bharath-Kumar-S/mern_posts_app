import express, { json } from "express";
import { userPosts } from "../models/userPosts.model.js";
import { user } from "../models/user.model.js";

const postsRoute = express.Router();

postsRoute.get("/", async (req, res) => {
  try {
    const posts = await userPosts.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

postsRoute.get("/:id", async (req, res) => {
  try {
    const post = await userPosts.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

postsRoute.post("/", async (req,res) => {
    try{
        const currentUserId = await user
          .findOne({ user: req.body.user })
          .select("_id");
          console.log(currentUserId);
        const post = await userPosts.create({
          ...req.body,
          userId: currentUserId._id,
        });
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
})

postsRoute.put("/:id", async (req,res) => {
    try {
        const post = await userPosts.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
})

postsRoute.delete("/:id", async (req, res) => {
  try {
    const post = await userPosts.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json({message: "Post deleted"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export const posts = postsRoute;