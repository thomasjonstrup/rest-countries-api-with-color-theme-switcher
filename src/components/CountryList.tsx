import React from "react";
import {Link} from 'react-router-dom'
import { Service } from "types/service";
import { Country } from "types/country";

import {CountryCardItem} from 'components/CountryCardItem';

import styled from "styled-components";

interface Props {
	service: Service<Country[]>;
	showDetails: Function;
}

/* const Grid = styled.div`
	display: grid;
	justify-content: space-between;
	grid-template-columns: auto auto;
	align-items: center;
`; */
const Grid = styled.div`
	display: grid;
	width: 100%;
	//grid-template-columns: repeat(4, 1fr);
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	gap: 2rem;
	grid-gap: 2rem;

	@media (max-width: 368px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const CountryCard = styled.div`
	position: relative;
	padding-bottom: 1rem;
	/* 	width: 15rem; */
	height: 100%;
	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	text-align: left;
	overflow: hidden;
`;

const CountryCardFlagContainer = styled.div`
	/* 	width: 15rem;
	height: 10rem; */
	overflow: hidden;
`;

const CountryCardInfo = styled.div`
	margin: 0.8rem 0.8rem 0.4rem;
`;

const CountryCardFlag = styled.img`
	display: block;
	height: 100%;
	width: 100%;
`;

export const CountryList: React.FC<Props> = ({ service, showDetails }) => {
	if (service.status === "loading") {
		return <h1>{"Loading..."}</h1>;
	}

	if (service.status !== "loaded") {
		return null;
	}

	return (
		<Grid>
			{service.payload && service.payload.length
				? service.payload.map((country: Country, index: number) => {
						return (
							<Link to={`/details/${country.alpha3Code}`}>
								<CountryCardItem
									country={country}
									key={index}
								/>
							</Link>
						);
				  })
				: null}
		</Grid>
	);
};
