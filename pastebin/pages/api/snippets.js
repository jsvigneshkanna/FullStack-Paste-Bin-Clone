// Imports required for SUpabase and Nanoid
import { nanoid } from "nanoid";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export default async function (req, res) {
  // Creating new moongoose object and pushing to supabase
  //   const dbUrl = process.env.SUPABASE_URL;
  //   console.log("fafaf", dbUrl);
  const dbKey = process.env.SUPABASE_KEY;
  const dbURL = process.env.SUPABASE_URL;
  const supabase = createClient(dbURL, dbKey);
  const { content: snippet } = req.body;
  const error = await saveData(supabase, snippet);
  console.log("checking", error);
  if (error) {
    res.status(500).json({ result: "fail", error: error });
  } else {
    res.status(200).json({ result: "success" });
  }
}

const saveData = async (supabase, snippet) => {
  const { data, error } = await supabase.from("sippets").insert([{ snippet: snippet }]);
  return error;
};
