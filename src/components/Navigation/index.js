import {Link} from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaChild } from "react-icons/fa";
import './navigation.scss'

const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='navigation__logo'>
            <Link to="/">
                <figure>
                    <img src="https://placehold.jp/100x50.png" alt="logo" />
                </figure>
            </Link>
        </div>

        <nav className='navigation__link'>
            <Link to="/about">Men</Link>
            <Link to="/about">Women</Link>
            <Link to="/about">Kids</Link>
        </nav>

        <nav className='navigation__link'>
            <Link to="/about">
                <FaSearch />
            </Link>
            <Link to="/about">
                <FaShoppingCart />
            </Link>
            <Link to="/about">
                <FaChild />
            </Link>
        </nav>
    </div>
  )
}

export default Navigation