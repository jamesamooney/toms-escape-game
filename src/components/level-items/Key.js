import key from "../../images/items/key.png"
import PouchKey from "../pouch-items/PouchKey"

export const Key = ( { setHasKeyOne, setPouchItems }) => {
  const grabKey = () => {
    
    setHasKeyOne(true)
    console.log('You got the key!')
    //setPouchItems([PouchKey])
    setPouchItems([<img src={key} style={{ height: '60px'}}/>])
  }
  return (
    <img className='key' onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}
