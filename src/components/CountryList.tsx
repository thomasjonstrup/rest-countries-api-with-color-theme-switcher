import React from "react";
import { Link } from "react-router-dom";
import { Service } from "types/service";
import { Country } from "types/country";

import { CountryCardItem } from "components/CountryCardItem";

import styled from "styled-components";

interface Props {
	service: Service<Country[]>;
	showDetails: Function;
}

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
							<Link
								to={`/details/${country.alpha3Code}`}
								key={index}
							>
								<CountryCardItem country={country} />
							</Link>
						);
				  })
				: null}
		</Grid>
	);
};
