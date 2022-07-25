import logo from './assets/img/logo.png';
import './css/navBar.css';
import CartWidget from './cartWidget.js';




const link1 = 'Inicio'
const link2 = 'Comprar'
const link3 = 'Nosotros'
const titulo = 'Ecommerce'



function NavBar () {
    return <>
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
                <CartWidget />
        </div>

    
   

    </>;

    
}

export default NavBar;