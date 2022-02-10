//errors
//loading
//reading list 
//pagination
//login - user validation
//reducers
//refactor
//themes
//responsivity

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { Nav, List, Article, ReadingList, Profile } from "./components";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/articles/topics/:topic" element={<List />} />
					<Route path="/articles/:article_id" element={<Article />} />
					<Route path="/reading-list" element={<ReadingList />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
