import "./Article.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";
import CommentsList from "./CommentsList";
import { LikeButton } from "./LikeButton";
import { Link } from "react-router-dom";

const Article = () => {
	const [articleObj, setArticleObj] = useState({});
	const { article_id } = useParams();
	const [isOpen, setIsOpen] = useState(false); // comments section
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

	useEffect(() => {
		getArticle(article_id)
			.then((res) => {
				setArticleObj(res);
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
	}, [article_id]);

	const { title, body, votes, topic, author, created_at, comment_count } =
		articleObj;

	const [date, time] = created_at ? created_at.split("T") : ["", ""]; //FORMATTING TIMESTAMP - some weird issues with using .split() +react, this was only solution.

	if (error) {
		return <p className="main-section no-border--rounded">{error}</p>;
	}

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className="main-section  Article__body no-border--rounded">
			<div >
				<p className="Article__title  background--white">{title}</p>
				<p className="Article--spread background--white">
					by {author} | {date} {time.slice(0, 5)} |{" "}
					<Link
						className="Article--spread text--pink"
						to={`/articles/topics/${topic}`}>
						{topic}
					</Link>
					&nbsp;|&nbsp;
					<LikeButton likes={votes} id={article_id} />{" "}
					<a
						className="Article--spread text--pink"
						onClick={toggleOpen}
						href="#comments">
						<i className="far fa-comment"></i>
						{comment_count}
					</a>
				</p>
				<p className="Article--alight-left background--white">{body}</p>
			</div>
			<div className="Article__comments">
				<CommentsList toggleOpen={toggleOpen} isOpen={isOpen} id={article_id} />
			</div>
		</div>
	);
};

export default Article;
