import { createContext, useState, useEffect } from "react";
import Data from "../services/Api";

export const ContextLiquidity = createContext();


export const LiquidityProvider = ({ children }) => {


    const [lp, setLp] = useState();


    useEffect(() => {


        if (!lp) {


            let api = new Data();

            api.getPool().then(response => {
                setLp(response)

            })
        }



    }, [])


    return (
        <ContextLiquidity.Provider value={[lp, setLp]}>{children}</ContextLiquidity.Provider>
    )



}