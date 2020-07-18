import React from "react";
import { Service } from "types/service";
import { Country } from "types/country";

import styled from "styled-components";

interface Props {
	country: Country;
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
		width: 15rem;
	height: 10rem;
	overflow: hidden;
`;
const CountryCardFlagFigure = styled.figure`
	height: 100%;
	margin: 0;
`;

const CountryCardInfo = styled.div`
	margin: 0.8rem 0.8rem 0.4rem;
`;

const CountryCardFlag = styled.img`
	display: block;
	height: 100%;
	width: 100%;
`;

export const CountryCardItem: React.FC<Props> = ({ country }) => {
	return (
		<CountryCard>
			<CountryCardFlagContainer>
				<CountryCardFlagFigure>
					<CountryCardFlag
						src={country.flag}
						alt={`${country.name}'s flag`}
					/>
				</CountryCardFlagFigure>
			</CountryCardFlagContainer>
			<CountryCardInfo>
				<h2>{country.name}</h2>
				<p>{`Population: ${country.population}`}</p>
				<p>{`Region: ${country.region}`}</p>
				<p>{`Capital: ${country.capital}`}</p>
			</CountryCardInfo>
		</CountryCard>
	);
};