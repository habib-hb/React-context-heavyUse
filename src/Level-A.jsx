import React , {useContext} from "react";
import {replaceProvider} from "./ProviderReplacer.jsx";
import { newImport } from "./ProviderReplacer.jsx";


export function LevelA(number){
    let newImportLocal= newImport +" Habib "; //imported variable from ProviderReplacer
    let universalNumber=parseInt(useContext(replaceProvider)) ;
    let numberA=parseInt(number.numberAppValue)+5;
    return(
        <div className="bg-slate-800 flex text-white h-32 w-full rounded-lg items-center justify-center "> 
        <p>{numberA + universalNumber + newImportLocal + number.experimentValue}</p> 
        </div>
    )
}