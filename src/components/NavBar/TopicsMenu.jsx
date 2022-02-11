import { NavLink } from "./NavLink";
import { useState, useEffect } from "react";
import { getTopicsList } from "../../utils/api";

const TopicsMenu = () => {
	const [topicsList, setTopicsList] = useState([]);
	const [isErr, setIsErr] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    
	useEffect(() => {
        setIsLoading(true)
		getTopicsList()
			.then((res) => {
				setTopicsList(res);
                setIsLoading(false);
			})
			.catch(() => setIsErr(true));
	}, []);

	if (isErr) {
		return <p className="main-section, no-border--rounded">connection error...</p>;
	}


	return isloading? (<p className="main-section no-border--rounded">loading...</p>):(
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
