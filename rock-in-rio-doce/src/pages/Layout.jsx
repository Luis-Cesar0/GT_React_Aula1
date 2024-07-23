import Footer from "../components/Footer";
import Header from "../components/Header";
import Rotas from "../routes/Rotas";
import { BrowserRouter } from "react-router-dom";
import { MeusContextoProvider } from "../contexto/MeuContexto";

export default function Layout(){
    return(
       <>

           <BrowserRouter>
                <MeusContextoProvider>
                    <Header/>
                        <Rotas/>
                    <Footer/>
                </MeusContextoProvider>
           </BrowserRouter>
       </>
    )
}