import { NavLink } from "./NavLink";
import { useState, useEffect } from "react";
import { getTopicsList } from "../../utils/api";

const TopicsMenu = () => {
	const [topicsList, setTopicsList] = useState([]);

	useEffect(() => {
		getTopicsList().then((res) => {
			setTopicsList(res);
		});
	}, []);

	return (
		<div className="nav__main-block">
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
