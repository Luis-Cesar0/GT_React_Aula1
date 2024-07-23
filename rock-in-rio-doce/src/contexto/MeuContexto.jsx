import React from "react";
import { createContext,useState } from "react";

let MeuContexto = createContext()

function MeusContextoProvider({children}){
    let [pessoas, setPessoas] = useState(
        [
            {id:1, nome:'João',idade: 20},
            {id:2, nome:'Maria',idade: 20},
            {id:3, nome:'Luis',idade: 20},
            {id:4, nome:'Leo',idade: 20}
        ]
    );

    return(
        <MeuContexto.Provider value={{pessoas,setPessoas}}>
            {children}
        </MeuContexto.Provider>
    )
}
export {MeuContexto,MeusContextoProvider}