import React, {createContext} from 'react'

export const replaceProvider= createContext();
export const newImport= "I am ";
function ProviderReplacer({children}) {
  return (
    <replaceProvider.Provider value="100">
       
          {children}

    </replaceProvider.Provider>
  )
}

export default ProviderReplacer