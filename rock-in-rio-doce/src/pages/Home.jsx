import { useContext } from "react"
import { MeuContexto } from "../contexto/MeuContexto"
import { useState } from "react"
import Formulario from "../components/Formulario"

export default function Home(){
    let {pessoas, setPessoas} = useContext(MeuContexto)
   
    return(
        
      <>
            <h1>HOME page</h1>
            <p>Ola,{pessoas[0].nome} tudo bem </p>
            <Formulario/>
      </>
    )
}