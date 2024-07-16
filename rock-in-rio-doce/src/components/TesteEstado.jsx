import { useState } from "react";


export default function TesteEstado(){
    let [cor,setCor] = useState('red')

    function mudarCor(cor){
        setCor(cor)
    }

    return(
        <div>
            <h1 style={{color: cor}}>Mudando a cor</h1>
            <button onClick={()=> mudarCor('green')}>Verde</button>
            <button onClick={()=> mudarCor('blue')}>Azul</button>
            <button onClick={()=> mudarCor('black')}>Preto</button>
        </div>
    )
}