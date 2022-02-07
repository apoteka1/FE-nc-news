import "./Nav.css";
import { NavLink } from "./NavLink";

const Nav = () => {
	return (
		<div id="nav__main-block">
			<div id="nav__links-block">
				<NavLink path="/" text={<h1>NC News.</h1>} />
				<NavLink path="/" text="link 1" />
				<NavLink path="/" text="link 2" />
				<NavLink path="/" text="link 3" />
				<NavLink path="/" text="link 4" />
			</div>
		</div>
	);
};

export default Nav;
