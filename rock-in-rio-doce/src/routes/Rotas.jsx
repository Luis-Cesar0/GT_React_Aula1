import {Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import SobreNos from '../pages/SobreNos'
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada'

export default function Rotas(){
   return(
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SobreNos' element={<SobreNos/>}/>
        <Route path='*' element={<PaginaNaoEncontrada/>}/>
    </Routes>
    )
}