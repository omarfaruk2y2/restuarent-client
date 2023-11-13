import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { HiMenu } from "react-icons/hi";
import { MdRestaurantMenu } from "react-icons/md";


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        <img className="w-auto h-auto" src={Logo} alt="Logo" />
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact US
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/dashboard"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/ourmenu"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Our Menu
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/ourshop"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Our Shop
                            </NavLink>
                        </li>
                    </ul>

                    <div className="nav-icon" onClick={handleClick}>
                        {
                            click ? <MdRestaurantMenu></MdRestaurantMenu> : <HiMenu></HiMenu>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;