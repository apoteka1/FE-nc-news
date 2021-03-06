
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Nav, List, Article, ReadingList, Profile, BadUrl } from "./components";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Nav />
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/articles/topics/:topic" element={<List />} />
					<Route path="/articles/:article_id" element={<Article />} />
					<Route path="/reading-list" element={<ReadingList />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/*" element={<BadUrl />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
