import Score from "../models/score.js"

export const ScoresController = {
  Index: (req, res) => {
    Score.find((err, scores) => {
      if (err) {
        throw err;
      } 
      res.status(200).json(scores);
    }).sort({time: 1}).limit(10);
  },

  Create: (req, res) => {
    // // we are gonna receive some data in req
    const scoreData = req.body
    // // we want to create a Score object using model schema
    const score = new Score(scoreData)
    // // // we want to save it to the mongo db
    score.save((err) => {
      if(err) {
        throw err;
      }
    }),

    res.status(201).send(scoreData)
  }
}
