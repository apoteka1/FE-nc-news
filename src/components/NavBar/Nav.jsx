import "./Nav.css";
import { NavLink } from "./NavLink";
import { useState } from "react";
import TopicsMenu from "./TopicsMenu";

const Nav = () => {
	const [showTopics, setShowTopics] = useState(false);
	const toggleTopics = () => {
		setShowTopics((state) => !state);
	};

	return (
		<div id="nav" className="no-border--rounded">
			<div className="nav__main-block no-border--rounded">
				<NavLink path="/" text={<h1>NC News.</h1>} />
				<div className="nav__links-block">
					<div
						onClick={() => toggleTopics()}
						className="nav__link no-border--rounded">
						<p className="text--purple">Topics</p>
					</div>
					<NavLink path="/reading-list" text="Reading List" />
				</div>
			</div>
			<div>{showTopics ? <TopicsMenu /> : null}</div>
		</div>
	);
};

export default Nav;
