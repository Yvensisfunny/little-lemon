import React from 'react';
import logo from './images/Logo.370f832fad423c516d56.png'

const Nav = () => {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
 }

    return(
        <Nav className={`navbar ${menuOpen ? "open" : ""}`}>
         <a href='/' className="logo">
            <img src={logo} alt='logo'/>
         </a>

         {/*mobile navbar*/}
         <div className="menu-icon" onClick={toggleMenu}>
           <div className='bar'></div>
           <div className='bar'></div>
           <div className='bar'></div>
         </div>

         {/*nav items*/}
         <ul className={`nav;links ${menuOpen ? "visible" : ""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>About</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>Services</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>Menu</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>Reservations</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>Order Online</a>
            </li>
         </ul>
         <ul>
            <li>
                <a href='/'>Login</a>
            </li>
         </ul>
         </Nav>
    );
};

export default Nav;
