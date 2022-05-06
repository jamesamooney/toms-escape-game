import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import scoresRouter from "./routes/scores.js";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())  // not sure if needed but too scared to remove,
app.use(cors());

// set routes
app.use("/scores", scoresRouter);
// app.post('/scores', (req, res) => {
//   console.log(req.body)

//   res.status(201).send(req.body)
// })

const CONNECTION_URL = 'mongodb+srv://Abdul:Makers123@cluster0.gln4g.mongodb.net/myFirstDatabase?retryWrites=true&w=ma  jority';
const PORT = process.env.PORT || 3030;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))
  
  
