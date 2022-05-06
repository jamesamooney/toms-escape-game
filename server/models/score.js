import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  name: String,
  time: String
});

const Score = mongoose.model("Score", ScoreSchema);

export default Score;


