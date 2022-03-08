import "./List.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesList } from "../../utils/api";
import ArtCard from "./ArtCard";

const List = () => {
	const { topic } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);
	const [query, setQuery] = useState({
		topic: topic,
		order: undefined,
		sort_by: undefined,
	});

	useEffect(() => {
		getArticlesList({ topic: topic })
			.then((res) => {
				setList(res);
				setError(null);
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
					<label htmlFor="sort_by">sort by </label>
					<select
						className="queries no-border--rounded text--purple background--white"
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
						className="queries no-border--rounded text--purple background--white"
						name="order"
						onChange={handleChange}>
						<option value="desc">desc</option>
						<option value="asc">asc</option>
					</select>
					<button
						className="queries no-border--rounded text--purple background--white"
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
