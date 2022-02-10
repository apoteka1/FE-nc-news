import { useEffect, useState, useContext } from "react";
import { getComments, addComment, deleteComment } from "../../utils/api";
import { UserContext } from "../../contexts/User";

const Comments = (props) => {
	const { user } = useContext(UserContext);
	const [commentsList, setCommentsList] = useState([]);
	const { isOpen, toggleOpen, id } = props;
	const [currentComment, setCurrentComment] = useState("");
    const [isLoading, setIsLoading] = useState(true);
	const [isErr, setIsErr] = useState(false);

	useEffect(() => {
		getComments(id).then((res) => {
			setCommentsList(res);
            setIsLoading(false)
		}).catch(()=>setIsErr(true))
	}, [id, isOpen]);

	const handleChange = (e) => {
		setCurrentComment(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addComment(id, user.username, currentComment).then((res) => {
			setCommentsList((curr) => [res, ...curr]);
		}).catch(()=>setIsErr(true));

		setCurrentComment("");
	};

    const handleDelete = (id)=>{
        setCommentsList((curr) => curr.filter((c)=> c.comment_id !== id))
        deleteComment(id).catch(()=>setIsErr(true));

    }

	const formatComment = (commentObj) => {
		const { comment_id, votes, created_at, author, body } = commentObj;
		const [date, time] = created_at.split("T");
		return (
			<div className="comment" key={comment_id}>
				<p className="Article--spread">
					by {author} | {date} {time.slice(0, 5)} |{" "}
					<i className="fas fa-arrow-up"></i> {votes} {" "}
					{author === user.username ? (
						<span className="Article--spread button delete" onClick={()=>handleDelete(comment_id)}>delete</span>
					) : null}
				</p>
				<p>{body}</p>
			</div>
		);
	};

    if (isErr) {
		return <p>connection error...</p>;
	}

	return isLoading? (<button className="Comments__button">loading comments...</button>):(
		<div id="comments">
			<button className="Comments__button" onClick={toggleOpen}>
				{isOpen ? "hide comments " : "show comments"}
			</button>
			{isOpen ? (
				<form className="form" onSubmit={(e) => handleSubmit(e)}>
					<textarea
                        rows="4"
                        wrap="soft" maxLength="400"
                        id="comments__input"
						value={currentComment}
						onChange={(e) => handleChange(e)}
                        required></textarea>
					<button className="Comments__button" type="submit">post</button>
				</form>
			) : null}
			{isOpen ? commentsList.map(formatComment) : null}
		</div>
	);
};

export default Comments;
