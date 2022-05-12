import React from 'react'
import album from "../../images/items/album.png"



export const Album = () => {

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const onClickUrl = (url) => {
    return () => openInNewTab(url)
  }
  


  return (
    <div>
      <img id="album" className="item" src={album} onClick={onClickUrl('https://docs.google.com/document/d/1wqdqavEYfp331Di8XiqDX_Fl3cnocoII9l4SJQ-sfNI/edit?usp=sharing')}/>
    </div>
  )
}
