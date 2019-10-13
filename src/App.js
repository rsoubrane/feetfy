import React from "react";

//Page
import Home from "./pages/Home";
import MessageDetails from "./pages/MessageDetails";

//Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//Styles
import "./style/App.css";

function App() {
	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route exact path='/message/:messageId' component={MessageDetails} />
		</Router>
	);
}

export default App;
