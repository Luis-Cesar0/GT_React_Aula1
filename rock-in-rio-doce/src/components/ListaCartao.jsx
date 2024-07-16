import Cartao from "./Cartao";

export default function  Listacartao({pessoas}){
    return(
        <>
        {
            pessoas.map(pessoa =>{
                <Cartao nome={pessoa.nome} img={pessoa.img} desc={pessoa.descricao}/>
            })
        }
        </>
    )
}