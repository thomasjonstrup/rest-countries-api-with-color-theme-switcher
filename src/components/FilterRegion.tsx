import React, { useContext, useCallback } from "react";
import styled from 'styled-components'

interface Props {
	onSelect: Function
}

const Select = styled.select`
	height: 2rem;
	border-radius: 5px;
	border: none;
	margin: 1rem 0;
	box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const FilterRegion: React.FC<Props> = ({onSelect}) => {

	const handleChange = useCallback(
		({target}) => {
			onSelect(target.value)
		},
		[onSelect]
	)

	return (
		<Select name="region" id="region" onChange={handleChange}>
			<option value="Africa">Africa</option>
			<option value="Americas">Americas</option>
			<option value="Asia">Asia</option>
			<option value="Europe">Europe</option>
			<option value="Oceania">Oceania</option>
		</Select>
	);
}