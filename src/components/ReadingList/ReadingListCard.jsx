import { Link } from "react-router-dom";
import { useContext } from "react";
import { ReadingListContext } from "../../contexts";

const ReadingListCard = (props) => {
	const { articleObj, deleteArt } = props;
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

	return (
		<div
			key={article_id + "reading-list"}
			className="ArtCard__card no-border--rounded background--white">
			<div className="no-decs">
				<Link
					className="text--purple"
					to={`/articles/${article_id}`}
					article_id={article_id}>
					{title}
				</Link>
			</div>

			<p className="ArtCard__details">
				By {author} | {date} {time.slice(0, 5)} |&nbsp;{topic}
				&nbsp;|&nbsp;<i className="fas fa-arrow-up"></i>
				{votes} <i className="far fa-comment"></i>
				{comment_count} |&nbsp;
				<i
					onClick={() => deleteArt(article_id)}
					className="fas fa-times button text--pink"></i>
			</p>
		</div>
	);
};

export default ReadingListCard;
