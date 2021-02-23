import React from "react";
import { Country } from "types/country";

import styled from "styled-components";

interface Props {
	country: Country;
}

const CountryCard = styled.div`
	position: relative;
	padding-bottom: 1rem;
	/* 	width: 15rem; */
	height: 20rem;
	box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	text-align: left;
	overflow: hidden;
`;

const CountryCardInfo = styled.div`
	margin: 0.8rem 0.8rem 0.4rem;
`;

const CountryCardFlag = styled.img`
width: 100%;
    height: 50%;
    object-fit: cover;
    object-position: center;
`;

export const CountryCardItem: React.FC<Props> = ({ country }) => {
	return (
		<CountryCard>
			<CountryCardFlag
				src={country.flag}
				alt={`${country.name}'s flag`}
			/>
			<CountryCardInfo>
				<h2>{country.name}</h2>
				<p>{`Population: ${country.population}`}</p>
				<p>{`Region: ${country.region}`}</p>
				<p>{`Capital: ${country.capital}`}</p>
			</CountryCardInfo>
		</CountryCard>
	);
};
