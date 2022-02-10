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
    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);

	useEffect(() => {
		getArticle(article_id).then((res) => {
			setArticleObj(res);
		});
	}, [article_id]);

	const { title, body, votes, topic, author, created_at, comment_count } =
		articleObj;

	const [date, time] = created_at ? created_at.split("T") : ["", ""]; //FORMATTING TIMESTAMP - was having some absolutely crazi issues with using split+react! this was only solution

	return (
		<div className="main-section">
			<div className="Article__body">
				<p className="Article__title">{title}</p>
				<p className="Article--spread">
					By {author} | {date} {time.slice(0, 5)} |{" "}
					<Link
						className="Article--spread button"
						to={`/articles/topics/${topic}`}>
						{topic}
					</Link>
					&nbsp;|&nbsp;
					<LikeButton likes={votes} id={article_id} />{" "}
					<a className="Article--spread button" onClick={toggleOpen} href="#comments">
						<i className="far fa-comment"></i>
						{comment_count}
					</a>
				</p>
				<p className="Article--alight-left">{body}</p>
			</div>
			<div className="Article__comments">
                
				<Comments toggleOpen={toggleOpen} isOpen={isOpen} id={article_id} />
			</div>
		</div>
	);
};

export default Article;
