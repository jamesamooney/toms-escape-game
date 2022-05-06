import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  name: String,
  time: String
});
export const Score = mongoose.model("Score", ScoreSchema);




