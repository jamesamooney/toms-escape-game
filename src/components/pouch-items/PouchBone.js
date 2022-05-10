import bone from "../../images/items/bone.png"
import { AppContext } from "../../AppContext"
import { useContext } from "react"

import React from 'react'

export const PouchBone = () => {
  const { isTrapLaid, setIsTrapLaid } = useContext(AppContext)

  return isTrapLaid ?
    (<></>)
    :
    (<img className="item" id="pouch-bone" src={bone} style={{ height: '30px'}} />)
}