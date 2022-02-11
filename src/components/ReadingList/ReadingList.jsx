import "./ReadingList.css";
import { useContext } from "react";
import { ReadingListContext } from "../../contexts";
import "./ReadingList.css";
import ReadingListCard from "./ReadingListCard";

const ReadingList = () => {
	const { readingList, setReadingList } = useContext(ReadingListContext);

	const deleteArt = (id) => {
		setReadingList((currentList) => {
			return currentList.filter((x) => x.article_id !== id);
		});
	};

	return readingList.length > 0 ? (
		<div className="main-section no-border--rounded">
			{readingList.map((articleObj) => (
				<ReadingListCard
					className="no-border--rounded "
					key={articleObj.article_id}
					deleteArt={deleteArt}
					articleObj={articleObj}
				/>
			))}
		</div>
	) : (
		<div className="main-section no-border--rounded">
			Your reading list is empty...
		</div>
	);
};

export default ReadingList;
