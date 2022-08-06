import express from "express";
import mongoose from "mongoose";
import {posts} from "./routes/userPosts.route.js";
import user from "./routes/user.route.js"
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(5000,async () => {
    console.log('running on port ***');
    mongoose.connect("mongodb://localhost:27017/mern_be");
    const db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to DB"));
});

app.use('/posts', posts);

app.use("/users", user);