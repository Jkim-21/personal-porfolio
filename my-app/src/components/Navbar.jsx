import {useState} from 'react';
import {logo} from '../assets'


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const openMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <nav>
            <img 
                src = {logo} 
                className = "logo"
            />
            <ul id = "sidemenu">
                <li><a href = "#header">Home</a></li>
                <li><a href = "#about">About</a></li>
                <li><a href = "#portfolio">Portfolio</a></li>
                <li><a href = "#contact">Contact</a></li>
            </ul>
            <i 
                onClick = {closeMenu}
                className={`${isMenuOpen ? 'nav-open' : 'nav-closed'} fa-regular fa-circle-xmark`}
            ></i>
            <i
                onClick = {openMenu}
                className={`${isMenuOpen ? 'nav-open' : 'nav-closed'} fa-solid fa-bars`} 
            ></i>
        </nav>
    );
}

export default Navbar;