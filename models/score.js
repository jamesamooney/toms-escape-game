import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  name: String,
  time: Number
});

const Score = mongoose.model("Score", ScoreSchema);

export default Score;


