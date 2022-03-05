import { useEffect, useState, useContext } from "react";
import { getComments, addComment, deleteComment } from "../../utils/api";
import { UserContext } from "../../contexts/User";
import { useNavigate } from "react-router-dom";

const CommentsList = (props) => {
	const { user } = useContext(UserContext);
	const [commentsList, setCommentsList] = useState([]);
	const { isOpen, toggleOpen, id } = props;
	const [currentComment, setCurrentComment] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isErr, setIsErr] = useState(false);
	const [isCommentErr, setIsCommentErr] = useState(false);
	const [isPostingComment, setIsPostingComment] = useState(false);
	const navigate = useNavigate();
    
	useEffect(() => {
		getComments(id)
			.then((res) => {
				setCommentsList(res);
				setIsLoading(false);
			})
			.catch(() => setIsErr(true));
	}, [id, isOpen]);

	const handleChange = (e) => {
		setCurrentComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsPostingComment(true);
		addComment(id, user.username, currentComment)
			.then((res) => {
				setCommentsList((curr) => [res, ...curr]);
				setCurrentComment("");
				setIsPostingComment(false);
			})
			.catch(() => setIsCommentErr(true));
	};

	const handleDelete = (id) => {
		setCommentsList((curr) => curr.filter((c) => c.comment_id !== id));
		deleteComment(id).catch(() => setIsCommentErr(true));
	};

	const formatComment = (commentObj) => {
		//refactor!!!!!!!!!!!

		const { comment_id, votes, created_at, author, body } = commentObj;
		const [date, time] = created_at.split("T");
		return (
			<div
				className="comment no-border--rounded background--white"
				key={comment_id}>
				<p className="Article--spread">
					by {author} | {date} {time.slice(0, 5)} |{" "}
					<i className="fas fa-arrow-up"></i> {votes}{" "}
					{author === user.username ? (
						<span
							className="Article--spread button text--pink delete"
							onClick={() => handleDelete(comment_id)}>
							delete
						</span>
					) : null}
				</p>
				<p>{body}</p>
			</div>
		);
	};

	if (isErr) {
		return <p className="main-section">connection error...</p>;
	}

	return isLoading ? (
		<p>loading comments...</p>
	) : (
		<div id="comments">
			<button
				className="Comments__button text--pink no-border--rounded background--white"
				onClick={toggleOpen}>
				{isOpen ? "hide comments " : "show comments"}
			</button>
			{isOpen ? (
				user.username ? (
					<form className="form" onSubmit={(e) => handleSubmit(e)}>
						<textarea
							rows="4"
							wrap="soft"
							maxLength="400"
							id="comments__input"
							className="text--pink"
							value={currentComment}
							onChange={(e) => handleChange(e)}
							required></textarea>
						<button
							className="Comments__button text--pink no-border--rounded background--white"
							type="submit">
							{isPostingComment ? "posting..." : "post"}
						</button>
					</form>
				) : (
					<p className="Article--spread text--pink button" onClick={()=>navigate('/profile')}>
						please log in or create an account to leave a comment...
					</p>
				)
			) : null}
			{isCommentErr ? <p>unable to update comments...</p> : null}
			{isOpen ? commentsList.map(formatComment) : null}
		</div>
	);
};

export default CommentsList;
