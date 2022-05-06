import {Score} from "../models/score.js"

export const ScoresController = {
  Index: (req, res) => {
    const data = {
      name: "ARH",
      time: "1:00"
    }
    res.status(200).json(data)
  },

  Create: (req, res) => {
    // // we are gonna receive some data in req
    const data = {
      name: 'fake name',
      time: '1:00'
    }
    // // we want to create a Score object using model schema
    let score = new Score()
    score.name = req.body.name;
    score.time = req.body.time;
    // // // we want to save it to the mongo db
    score.save((err) => {
      if(err) {
        throw err;
      }
    })

    res.status(201).send(req.body)

  }
}