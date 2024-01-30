import React ,{useState, useContext, createContext} from 'react';
import {LevelA} from './Level-A.jsx';
import {LevelB} from './Level-B.jsx';
import ProviderReplacer from './ProviderReplacer.jsx';


export default function App() {
   let numberApp=0;
   let experiment= "yeah";
  return (
   <>
   <ProviderReplacer>
<div className="bg-slate-800 flex text-white h-32 w-full rounded-lg items-center justify-center "> 
     <p>{numberApp}</p> 
     </div>
     <LevelA numberAppValue={numberApp} experimentValue={experiment}/>
     <LevelB numberAppValue={numberApp}/>
     </ProviderReplacer>
    </>
  )
}


