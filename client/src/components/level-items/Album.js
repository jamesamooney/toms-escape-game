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
      <img id="album" className="item" src={album} onClick={onClickUrl('https://soundcloud.com/user-962646384/sets/toms-escape?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing')}/>
    </div>
  )
}
