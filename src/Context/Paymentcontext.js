import {  createContext, useState } from "react";

export const PaymentContext = createContext();
export const PaymentContextprovider= ({children})=>{
    const [pay,setPay] =useState(false);
    return(
        <PaymentContext.Provider value={{pay,setPay}} >
            {children}
        </PaymentContext.Provider>
    )

}
