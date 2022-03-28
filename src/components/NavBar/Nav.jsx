import "./Nav.css";
import { NavLink } from "./NavLink";

const Nav = () => {
	return (
		<div className="nav__main-block background--pink">
			<div className="nav__links-block">
				<NavLink path="/" image={<h1>NC News</h1>} />
			</div>
			<div className="nav__links-block">
				<NavLink
					path="/reading-list"
					image={<i className="fa fa-bookmark"></i>}
				/>
				<NavLink path="/profile" image={<i className="fas fa-user"></i>} />
			</div>
		</div>
	);
};

export default Nav;
