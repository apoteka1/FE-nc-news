import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ReadingListContext } from "../../contexts";

const ArtCard = (props) => {
	const { readingList, setReadingList } = useContext(ReadingListContext);
	const { articleObj } = props;
	const { article_id, title, votes, author, created_at, comment_count, topic } =
		articleObj;
	const [date] = created_at.split("T");
	const [isOnRList, setIsOnRList] = useState(false);

	useEffect(() => {
		setIsOnRList(readingList.map((a) => a.article_id).includes(article_id));
	}, [readingList, article_id]);

	function AddToList(articleObj) {
		setReadingList((currList) => [...currList, articleObj]);
	}

	return (
		<div className="ArtCard__card no-border--rounded background--white">
			<p className="ArtCard__details no-border--rounded top" id="top">
				by {author} | {date} | {topic} | <i className="fas fa-arrow-up"></i>
				{votes} <i className="far fa-comment"></i>
				{comment_count}
			</p>
			<div className="no-decs  no-border--rounded">
				<Link
					className="art-card__title text--purple"
					to={`/articles/${article_id}`}
					article_id={article_id}>
					{title}
				</Link>
			</div>

			{!isOnRList ? (
				<p
					className="button ArtCard__details text--pink"
					onClick={() => AddToList(articleObj)}>
					<i className="far fa-bookmark"></i>
				</p>
			) : (
				<p className=" ArtCard__details text--pink">
					<i className="fa fa-bookmark"></i>
				</p>
			)}
		</div>
	);
};

export default ArtCard;
