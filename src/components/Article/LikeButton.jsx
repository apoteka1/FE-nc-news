import { useState } from "react";
import { editLikes } from "../../utils/api";

export const LikeButton = ({ likes, id }) => {
	const [likeChange, setlikeChange] = useState(0);
	const [toggle, setToggle] = useState(true);

	const changeLikes = (inc) => {
		setToggle(toggle => !toggle);
		setlikeChange((currChange) => currChange + inc);

		editLikes(id, inc).catch(() => {
			setlikeChange((currChange) => currChange - 1);
		});
	};

	return toggle ? (
		<span
			className="button text--pink"
			onClick={() =>{
				changeLikes(1);
			}}>
			<i className="fas fa-arrow-up"></i> {likes + likeChange}
		</span>
	) : (
		<span className="button text--purple" onClick={() => changeLikes(-1)}>
			<i className="fas fa-arrow-up"></i> {likes + likeChange}
		</span>
	);
};
