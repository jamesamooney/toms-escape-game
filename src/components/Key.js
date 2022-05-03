import key from "../images/items/key.png"

export const Key = ( { setHasKeyOne }) => {
  const grabKey = () => {
    setHasKeyOne(true)
    console.log('You got the key!')
  }
  return (
    <img onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}
