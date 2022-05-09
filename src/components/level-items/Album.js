import React from 'react'
import { useContext } from "react"
import { AppContext } from "../../AppContext"
import album from "../../images/items/album.png"



export const Album = () => {


  return (
    <div>
      <img id="album" className="item" src={album} />
    </div>
  )
}
