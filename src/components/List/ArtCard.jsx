import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ReadingListContext } from "../../contexts";

const ArtCard = (props) => {
	const { readingList, setReadingList } = useContext(ReadingListContext);
	const { articleObj } = props;
	const {
		article_id,
		title,
		votes,
		author,
		created_at,
		comment_count,
		topic,
	} = articleObj;
	const [date, time] = created_at.split("T");
	const [isOnRList, setIsOnRList] = useState(false);

	useEffect(() => {
		setIsOnRList(readingList.map((a) => a.article_id).includes(article_id));
	}, [readingList, article_id]);

	function AddToList(articleObj) {
		setReadingList((currList) => [...currList, articleObj]);
	}

	return (
		<div className="ArtCard__card no-border--rounded">
			<p className="ArtCard__details no-border--rounded">
				By {author} | {date} {time.slice(0, 5)} |&nbsp;{topic}
				&nbsp;|&nbsp;<i className="fas fa-arrow-up"></i> {votes}{" "}
				<i className="far fa-comment"></i> {comment_count}
			</p>
			<div className="no-decs  no-border--rounded">
				<Link
					className="art-card__title text--purple"
					to={`/articles/${article_id}`}
					article_id={article_id}>
					{title}
				</Link>
			</div>
			<p className="ArtCard__details no-border--rounded">
				{!isOnRList ? (
					<p className="button" onClick={() => AddToList(articleObj)}>
						{" "}
						add to reading list
					</p>
				) : (
					" added to reading list"
				)}
			</p>
		</div>
	);
};

export default ArtCard;
