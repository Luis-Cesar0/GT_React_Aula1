import { Link } from "react-router-dom"

export default function Header(){
    return(<header>
        <>
            <h1>Sou o Header</h1>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/SobreNos'}>Sobre nós</Link></li>
                <li><Link to={'*'}>categorias</Link></li>
                
            </ul>
        </>
    </header>)
}