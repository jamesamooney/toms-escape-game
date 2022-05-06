import { Log } from "./level-items/Log"

export const TextInterface = ({ logs }) => {

  return (
    <>
      {logs.map((log, index) =>  
      <Log key={index} log={log} /> 
    )}
    </>
    


  )
}
