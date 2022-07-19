import React from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineUser,AiOutlineHeart } from 'react-icons/ai'
import Search from './../components/search/Search'
import Button from './../components/button/Button';
import './navigation.css'


function Navigation() {


  return (
    <nav className={`navigation mobile_navigation desktop_navigation `}>
      <div className="navigation_container container">
        <Link to="/" className="logo">Ecommerce</Link>
        <Search searchStyle="search_style" className="nav_icon"/>

        <div className="nav_right_components hidden">
          <div className="author_container">
            {/* <Button text="SigIn" signIn="signIn"/>  */}
            <AiOutlineUser size={20} className="nav_icon"/>
            <Button text="Sign Up" signUp="signUp" />
          </div>
           
          <AiOutlineHeart size={20} className="nav_icon"/>
          <FiShoppingCart size={20} className="nav_icon"/>
        </div>
        <GiHamburgerMenu className='hamburger' size={24}/>
      </div>
    </nav>
  )
}

export default Navigation