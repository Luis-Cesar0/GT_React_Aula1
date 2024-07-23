import React, {useState} from "react";


export default function Formulario(){
    let [id ,setId] = useState(0)
    function handleId(event) {
      setId(event.target.value)
    }
    let [name ,setname] = useState(0)
    function handleName(event) {
      setId(event.target.value)
    }
    let [preco ,setPreco] = useState(0)
    function handlePreco(event) {
      setId(event.target.value)
    }

    function  cadastrorProduto(objProduto){
        fetch('url',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objProduto)
        })
        .then(reponse => reponse.json())
        .then(data => console.log(data))
        .catch(erro => console.log(erro))
        .finally(()=> location.reload())
        
    }
    return(
       <>
            // id nome e preco
            <form>
                <label htmlFor="id" >ID</label>
                <input type="number" id="id" name="id" onChange={(e)=> handleId(e)}/>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={(e)=> handleName(e)}/>
                <label htmlFor="preco">Preço</label>
                <input type="number" id="preco" name="preco" onChange={(e)=> handlePreco(e)}/>
            </form>
       </>
    )
}