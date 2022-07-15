import logo from './assets/img/logo.png'
import './navBar.css';





const link1 = 'Inicio'
const link2 = 'Comprar'
const link3 = 'Nosotros'
const titulo = 'Ecommerce'
const NavBar = (props) => {
    return(
        <div className='Navbar'>
            <div className='logoNavbar'>
                <img src={logo}></img>
                <h5>{titulo}</h5>
            </div>
            
            <ul>
                <li>{link1}</li>
                <li>{link2}</li>
                <li>{link3}</li>
            </ul>

            
        </div>

    );
}

export default NavBar;