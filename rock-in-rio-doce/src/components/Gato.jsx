import { useEffect } from "react";

export default function Gato(){
    const [gato,setGato] = useEffect({})
    function handleClickButton(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => setGato(data[0]))
    }
    
    useEffect(()=> {
       handleClickButton()
    },[])

    return(
        <div>
            <img src={gato.url} alt="Gato" />
            <button onClick={handleClickButton}>Troca Gato</button>
        </div>
    )
}