import { PouchContext } from "../PouchContext";
import { useContext } from "react";

export const Pouch = () => {
   const { pouch } = useContext(PouchContext)
   return pouch
 }
