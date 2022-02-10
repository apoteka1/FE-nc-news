import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider, ReadingListProvider } from "./contexts";

ReactDOM.render(
	<ReadingListProvider>
		<UserProvider>
			<App />
		</UserProvider>
	</ReadingListProvider>,
	document.getElementById("root")
);
