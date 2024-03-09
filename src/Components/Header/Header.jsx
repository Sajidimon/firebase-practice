import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="navigation">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;