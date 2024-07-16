import Cartao from './components/Cartao'
import './App.css'



function App() {
  let pessoa = {
    nome: 'Ana',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    descricao: 'Desenvolvedora fullStack'
  }
  
  return (
    <>
     <Cartao nome={pessoa.nome} img={pessoa.img} desc={pessoa.descricao}/>
    </>
  )
}

export default App
