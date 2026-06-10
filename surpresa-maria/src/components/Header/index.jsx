import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header(){
    return(
        <header>
            <div>
                <Link to="/" className="header-logo">
                    Feito para você ❤️
                </Link>
            </div>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/galeria">Galeria</NavLink>
                <NavLink to="/cartinhas">Cartinhas</NavLink>
            </nav>
            
        </header>
    )
}