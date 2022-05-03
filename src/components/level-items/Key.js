import key from "../../images/items/key.png"

export const Key = ( { setHasKeyOne, logs, setLogs }) => {
  const grabKey = () => {
    setHasKeyOne(true)
    setLogs([...logs, <p>You picked up the key, want to bet it opens that lovely door?</p>])
  }
  return (
    <img className='key' onClick={grabKey} src={key} style={{ height: '60px'}}/>
  )
}