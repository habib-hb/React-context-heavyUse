import React, {useContext} from "react";
import {replaceProvider} from "./ProviderReplacer.jsx";
export function LevelB(number){
    let universalNumber=parseInt(useContext(replaceProvider)) ;
    let numberB=parseInt(number.numberAppValue)+ 10;
  
    return(
        <div className="bg-slate-800 flex text-white h-32 w-full rounded-lg items-center justify-center "> 
        <p>{numberB + universalNumber}</p> 
        </div>
      
    )
}



 