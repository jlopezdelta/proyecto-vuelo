import "./navbar.css"
import CartWidget from "../CartWidget";
import 'boxicons'
import { Link } from "react-router-dom";

function NavBar (props){
    return(
        <header>
            <nav className="nav">
                <ul className="navList">
                    <li>
                        <Link to="/"><h1 className="Title"><i className="bi bi-airplane"></i></h1></Link>
                    </li>
                    <li>
                        <Link to="/category/Europa">Europa</Link>
                    </li>
                    <li>
                        <Link to="/category/Asia">Asia</Link>
                    </li>
                    <li>
                        <Link to="/category/America">America</Link>
                    </li>
                    <li>
                        <Link to="/cart"><CartWidget/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}

export default NavBar;