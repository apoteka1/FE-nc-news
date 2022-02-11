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
		<div className="ArtCard__card no-border--rounded background--white">
			<p className="ArtCard__details no-border--rounded">
				by {author} | {date} {time.slice(0, 5)} |&nbsp;{topic}
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
			
				{!isOnRList ? (
					<p className="button ArtCard__details text--pink" onClick={() => AddToList(articleObj)}>
						{" "}
						add to reading list
					</p>
				) : (
					<p className=" ArtCard__details ">added to reading list</p>
				)}
			
		</div>
	);
};

export default ArtCard;
