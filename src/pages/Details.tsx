import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Header from "components/Header";
import { FilterRegion } from "components/FilterRegion";
import { Search } from "components/Search";

import { ThemeProvider } from "contexts/ThemeContext";
import { usePostCountry } from "hooks/usePostCountry";
import { useApiControls } from "hooks/useApiControls";
import { CountryList } from "components/CountryList";
import { constructApiQuery } from "lib/constructApiQuery";
import { CountryCardItem } from "components/CountryCardItem";

interface Props {}

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

const searchByCode = (code: string) => {
	return constructApiQuery({ type: "code", query: code });
};

export const Details: React.FC<Props> = () => {
	let { id } = useParams();

	searchByCode(id);

	const homeService = usePostCountry(searchByCode(id));

	if(homeService.status === 'error') {
		return null;
	}

	if (!homeService.payload) {
		return null;
	}

	return <CountryCardItem country={homeService.payload} />;
};
