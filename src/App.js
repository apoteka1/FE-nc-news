import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";

import { Nav, Home } from "./components/index";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
