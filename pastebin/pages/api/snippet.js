// Imports required for SUpabase
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

export default async function (req, res) {
  console.log("api call");
  const dbKey = process.env.SUPABASE_KEY;
  const dbURL = process.env.SUPABASE_URL;
  const supabase = createClient(dbURL, dbKey);
  if (req.method === "POST") {
    const { content: snippet } = req.body;
    const error = await saveData(supabase, snippet);
    console.log("checking", error);
    if (error) {
      res.status(500).json({ result: "fail", error: error });
    } else {
      res.status(200).json({ result: "success" });
    }
  } else {
    const snippets = await getData(supabase);
    console.log("checking", snippets);
    if (snippets) {
      res.status(200).json({ result: "success", snippets: snippets });
    } else {
      res.status(500).json({ result: "fail" });
    }
  }
}

// Save Snippet from form to supabase
const saveData = async (supabase, snippet) => {
  const { data, error } = await supabase.from("snippets").insert([{ snippet: snippet }]);
  return error;
};

// Get all snippets from supabase
const getData = async (supabase) => {
  const { data, error } = await await supabase.from("snippets").select("snippet,slug");
  return data;
};
