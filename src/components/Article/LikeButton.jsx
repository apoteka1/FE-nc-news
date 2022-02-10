import { useState } from "react";
import { addLike } from "../../utils/api"

export const LikeButton = ({ likes, id }) => {
	const [likeChange, setlikeChange] = useState(0);
	const [toggle, setToggle] = useState(true);

	const giveLikes = () => {
		setToggle(false);
		setlikeChange((currChange) => currChange + 1);
		addLike(id).catch((err) => {
			console.log(err);
			setlikeChange((currChange) => currChange - 1);
		});
	};

	return toggle ? (
		<span  className="button"
			onClick={() => {
				giveLikes();
			}}>
			<i className="fas fa-arrow-up"></i> {likes + likeChange}+
		</span>
	) : (
		<span  className="button"><i className="fas fa-arrow-up"></i>{likes + likeChange}</span>
	);
};
