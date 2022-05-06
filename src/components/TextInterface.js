export const TextInterface = ({logs}) => {

  return (
    <>
      {logs.map((log, index) =>  
      <p key={index}>{log}</p>
    )}
    </>


  )
}
