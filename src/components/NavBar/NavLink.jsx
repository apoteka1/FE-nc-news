import { Link } from "react-router-dom";
export const NavLink = ({ path, text }) => {
	return (
		<div className="nav__link text--purple no-border--rounded background--white">
			<Link className="text--purple" to={path}>
				{text}
			</Link>
		</div>
	);
};
