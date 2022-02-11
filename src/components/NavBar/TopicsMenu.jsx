import { NavLink } from "./NavLink";
import { useState, useEffect } from "react";
import { getTopicsList } from "../../utils/api";

const TopicsMenu = () => {
	const [topicsList, setTopicsList] = useState([]);
	const [isErr, setIsErr] = useState(false);
	useEffect(() => {
		getTopicsList()
			.then((res) => {
				setTopicsList(res);
			})
			.catch(() => setIsErr(true));
	}, []);

	if (isErr) {
		return <p className="main-section">connection error...</p>;
	}

	return (
		<div className="nav__main-block no-border--rounded background--pink">
			{topicsList.map((topic) => {
				const { slug } = topic;
				return (
					<NavLink
						path={`/articles/topics/${slug}`}
						text={slug}
						key={slug}
					/>
				);
			})}
		</div>
	);
};

export default TopicsMenu;
