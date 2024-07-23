import { useState } from "react"


export default function Botao(){
    let [contagem ,setContagem] = useState(0)
    function contar (){
        setContagem(contagem + 1)
    }

    return(
        <>
            <h1>{contagem}</h1>
            <button onClick={contar}>Click paracontar</button>
        </>
    )
}