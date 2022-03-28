import { Link } from "react-router-dom";
export const NavLink = ({ path, image }) => {
	return (
		<div className="nav__link">
			<Link className="text--white" to={path}>
				{image}
			</Link>
		</div>
	);
};
