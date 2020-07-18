import React from "react";
import styled from 'styled-components';

import Header from "components/Header";
import { FilterRegion } from "components/FilterRegion";
import { Search } from "components/Search";
import { useApiControls } from "hooks/useApiControls";

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