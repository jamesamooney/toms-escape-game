import { AppContext } from "../AppContext";
import { useContext } from "react";

export const Pouch = () => {
   const { pouch } = useContext(AppContext)
   return pouch
 }
