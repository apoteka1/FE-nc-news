import "./List.css";
import ArtCard from "./ArtCard";
import { useEffect, useState } from "react";
import { getArticlesList, getTopicsList } from "../../utils/api";
import { useParams } from "react-router-dom";

const List = () => {
	const { topic } = useParams();
	const [topicsList, setTopicsList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);
	const [query, setQuery] = useState({
		topic: undefined,
		order: undefined,
		sort_by: undefined,
	});

	useEffect(() => {
		getArticlesList({ topic: topic })
			.then((res) => {
				setList(res);
				setError(null);
			})
			.then(() => getTopicsList())
			.then((res) => {
				setTopicsList(res);
				setIsLoading(false);
			})
			.catch((err) => {
				if (err.response && err.response.status === 404) {
					setError("not found");
				} else {
					setError("connection error");
				}
			});
	}, [topic]);

	const handleChange = (e) => {
		console.log(query);
		setQuery((currQuery) => {
			return { ...currQuery, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = () => {
		getArticlesList(query)
			.then((res) => {
				setList(res);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (error) {
		return <p className="main-section no-border--rounded">{error}</p>;
	} else {
		return isLoading ? (
			<p className="no-border--rounded">loading...</p>
		) : (
			<div className="main-section no-border--rounded">
				<span>
					<label htmlFor="topic">topic </label>
					<select
						className="queries button-select text--pink background--white"
						name="topic"
						onChange={handleChange}>
						<option value="">all</option>
						{topicsList.map((t) => {
							return (
								<option key={t.slug} value={t.slug}>
									{t.slug}
								</option>
							);
						})}
					</select>
					<label htmlFor="sort_by"> sort by </label>
					<select
						className="queries button-select text--pink background--white"
						name="sort_by"
						onChange={handleChange}>
						<option value="created_at">date posted</option>
						<option value="author">author</option>
						<option value="title">title</option>
						<option value="topic">topic</option>
						<option value="votes">votes</option>
						<option value="comment_count">comments</option>
					</select>
					<select
						className="queries button-select text--pink background--white"
						name="order"
						onChange={handleChange}>
						<option value="desc">desc</option>
						<option value="asc">asc</option>
					</select>
					<button
						className="queries button-select text--pink background--white"
						id="button"
						onClick={() => handleSubmit()}>
						go
					</button>
				</span>
				<div id="list">
					{list.map((art) => {
						return <ArtCard key={art.article_id} articleObj={art} />;
					})}
				</div>
			</div>
		);
	}
};

export default List;
