import React from "react";
import "./App.css";
import { ThemeProvider } from "contexts/ThemeContext";
import { usePostCountry } from "hooks/usePostCountry";
import { useApiControls } from "hooks/useApiControls";
import { CountryList } from "components/CountryList";
import { PageLayout } from "pages/PageLayout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details } from "pages/Details";

function App() {
	const { apiQuery: apiQueryHome } = useApiControls();

	const homeService = usePostCountry(apiQueryHome);
	return (
		<ThemeProvider>
			<Router>
				<PageLayout>
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
