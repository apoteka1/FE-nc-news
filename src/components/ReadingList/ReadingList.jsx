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

	return (
		<div className="main-section">{readingList.map(articleObj => <ReadingListCard key={articleObj.article_id}deleteArt={deleteArt} articleObj={articleObj}/>)}</div>
	);
};

export default ReadingList;
