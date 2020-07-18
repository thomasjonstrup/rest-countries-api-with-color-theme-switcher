import React from "react";
import styled from 'styled-components';

import Header from "components/Header";
import { FilterRegion } from "components/FilterRegion";
import { Search } from "components/Search";

import { ThemeProvider } from "contexts/ThemeContext";
import { usePostCountry } from "hooks/usePostCountry";
import { useApiControls } from "hooks/useApiControls";
import { CountryList } from "components/CountryList";



interface Props {
	children: React.ReactNode
}

const Container = styled.div`
	padding: 2rem 2rem;
	/* margin: 0 auto; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const FilterWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	padding: 1rem 2rem;
`;


export const PageLayout: React.FC<Props> = ({ children }) => {
	const {
		apiQuery: apiQueryHome,
		searchByCountryName,
		searchByRegion
	} = useApiControls()

	return (
		<div>
			<Header />
			<FilterWrapper>
				<Search onChange={searchByCountryName} />
				<FilterRegion onSelect={searchByRegion} />
			</FilterWrapper>

			<Container>
				{children}
			</Container>
		</div>
	);
};