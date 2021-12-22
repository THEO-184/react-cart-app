import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Cart from "./cart";
function Index() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Cart />
				</Route>
			</Switch>
		</Router>
	);
}

export default Index;
