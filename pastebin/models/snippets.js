import mongoose from "mongoose";
import shortid from "shortid";

const snippetSchema = new mongoose.Schema({
  snippetContent: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: shortid.generate,
  },
});

export const snippetSchema = mongoose.model("snippetSchema", snippetSchema);
