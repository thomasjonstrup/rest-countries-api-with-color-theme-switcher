import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "contexts/ThemeContext";
import { usePostCountry } from "hooks/usePostCountry";
import { useApiControls } from "hooks/useApiControls";
import { CountryList } from "components/CountryList";
import { PageLayout } from "pages/PageLayout";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Details } from "pages/Details";


function App() {

	const {
		apiQuery: apiQueryHome,
		searchByCountryName,
		searchByRegion
	} = useApiControls()

const homeService = usePostCountry(apiQueryHome);
	return (
		<ThemeProvider>
			<Router>
				<PageLayout>
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route path="/details/:id">
							<Details />
						</Route>
						<Route path="/">
							<CountryList
								service={homeService}
								showDetails={() => console.log("test")}
							/>
						</Route>
					</Switch>
				</PageLayout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
