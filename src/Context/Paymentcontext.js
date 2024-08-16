import {  createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentContext = createContext();
export const PaymentContextProvider= ({children})=>{
    const [pay,setPay] =useState(false);
    const [total,setTotal] =useState(0);
    const [cart,setCart]=useState([]);
    const navigate = useNavigate();
    return(
        <PaymentContext.Provider value={{pay,setPay,total,setTotal,cart,setCart,navigate}} >
            {children}
        </PaymentContext.Provider>
    )

}
