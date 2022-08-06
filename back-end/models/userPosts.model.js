import mongoose from "mongoose";

const userPostModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  visiblity: {
    type: String,
    default: "all",
    enum: ["all", "none", "friends"],
  },
  user: {
    type: String,
    required: true,
  },
  userId: { type: String, required: true },
});

export const userPosts = mongoose.model("posts", userPostModel);
