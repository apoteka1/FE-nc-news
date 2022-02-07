import { Link } from "react-router-dom";
export const NavLink = ({ path, text }) => {
    return (
        <div className="nav__link">
            <Link to={path}>{text}</Link>
        </div>
    );
};