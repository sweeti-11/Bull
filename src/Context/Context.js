//context creation
// provider
//consumer lenghty remove
//useContext Hook
import React from "react";

const AppContext = React.createContext();

//to create a provider function

const AppProvider = ({children})=> {
    return(
        <AppContext.Provider value={"hello"}>
            {children}
        </AppContext.Provider>
    )
}


export {AppProvider,AppContext}