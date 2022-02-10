import "./Article.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../utils/api";
import Comments from "./Comments";
import { LikeButton } from "./LikeButton";
import { Link } from "react-router-dom";

const Article = () => {
	const [articleObj, setArticleObj] = useState({});
	const { article_id } = useParams();
	const [isOpen, setIsOpen] = useState(false); // comments section
	const [isLoading, setIsLoading] = useState(true);
	const [isErr, setIsErr] = useState(false);
	const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

	useEffect(() => {
		getArticle(article_id)
			.then((res) => {
				setArticleObj(res);
				setIsLoading(false);
			})
			.catch(() => setIsErr(true));
	}, [article_id]);

	const { title, body, votes, topic, author, created_at, comment_count } =
		articleObj;

	const [date, time] = created_at ? created_at.split("T") : ["", ""]; //FORMATTING TIMESTAMP - was having some absolutely crazi issues with using split+react! this was only solution

	if (isErr) {
		return <p>connection error...</p>;
	}

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className="main-section no-border--rounded">
			<div className="Article__body no-border--rounded">
				<p className="Article__title no-border--rounded">{title}</p>
				<p className="Article--spread no-border--rounded">
					By {author} | {date} {time.slice(0, 5)} |{" "}
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
						<i className="far fa-comment"></i> {comment_count}
					</a>
				</p>
				<p className="Article--alight-left no-border--rounded">{body}</p>
			</div>
			<div className="Article__comments">
				<Comments
					toggleOpen={toggleOpen}
					isOpen={isOpen}
					id={article_id}
				/>
			</div>
		</div>
	);
};

export default Article;
