import { useContext } from "react";
import { DataContext} from '../Context/DataContext'
import React from 'react'
import Navbar from './Navbar.css'
import { Link } from 'react-router-dom'
import TotalItems from '../components/CartContent/TotalItems'


 Navbar = () => {
  const {cart} = useContext(DataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>
      <h1 className='navbar-logo'> RollerShop</h1>
      <Link  className='quad' to={"/cart"}>🛒
      {cart.length > 0 ? <TotalItems /> : null}
      <TotalItems />
      </Link>
      
     
      </nav>
    </div>
)
}

export default Navbar;