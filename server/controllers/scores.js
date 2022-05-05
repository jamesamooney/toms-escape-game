

export const ScoresController = {
  Index: (req, res) => {
    const data = {
      name: "ARH",
      time: "1:00"
    }
    res.status(200).json(data)
  } 
}