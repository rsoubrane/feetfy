import React from "react";

//Page
import Home from "./pages/Home";
import MessageDetails from "./pages/MessageDetails";

//Router
import { BrowserRouter as Router, Route } from "react-router-dom";

//Component 
import Header from "./components/Header";

//Styles
import "./style/App.css";
import { GlobalContainer } from "./style/theme";

function App() {
	return (
		<GlobalContainer>
			<Header />
			<Router>
				<Route exact path='/' component={Home} />
				<Route exact path='/message/:messageId' component={MessageDetails} />
			</Router>
		</GlobalContainer>
	);
}

export default App;


