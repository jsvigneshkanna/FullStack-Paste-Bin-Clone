import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function (req, res) {
  // Creating new moongoose object and pushing to supabase
  const dbUrl = process.env.SUPABASE_URL;
  console.log("fafaf", dbUrl);
  res.status(200).json({ name: dbUrl });
}
