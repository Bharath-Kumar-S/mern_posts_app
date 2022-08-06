import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
    min: 5,
    max: 15,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true
  },
  location: {
    city: {
      type: String,
      required: true,
    },
    zip_code: {
      type: String,
      required: true,
    },
  },
});

export const user = mongoose.model("user",userModel); 