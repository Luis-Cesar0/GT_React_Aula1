import Cartao from './components/Cartao'
import Botao from './components/Botao'
import TesteEstado from './components/TesteEstado'
import Layout from './pages/Layout'
import './App.css'



function App() {
  let pessoa = {
    nome: 'Ana',
    img: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
    descricao: 'Desenvolvedora fullStack'
  }

  
  return (
    <>
      <Layout/>
      {/* <h1>oi</h1>
      <TesteEstado/>
      <Botao/>
      <Cartao nome={pessoa.nome} img={pessoa.img} desc={pessoa.descricao}/> */}
     
    </>
  )
}

export default App
