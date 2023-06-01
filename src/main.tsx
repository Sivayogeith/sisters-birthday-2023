import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.querySelector("body") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
