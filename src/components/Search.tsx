/* import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { ThemeContext } from "components/ThemeContext/ThemeContext";
import "./Search.css";

interface Props {
	onChange: Function;
}

export const Search: React.FC<Props> = ({ onChange }) => {
	const { colors } = useContext(ThemeContext);

	return (
		<div
			className="controls__search"
			style={{
				color: colors.inputColor,
				backgroundColor: colors.elementColor,
			}}
		>
			<SearchIcon />
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Search for a country..."
				onChange={({ target }) => onChange(target.value)}
				className="search__input"
			/>
		</div>
	);
};
 */

import React from 'react';
import {FaSearch} from "react-icons/fa";
import styled from 'styled-components'

interface Props {
	onChange: Function;
}

const SearchContainer = styled.div`
	height: 2rem;
	border-radius: 5px;
	border: none;
	margin: 1rem 0;
	box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const Search: React.FC<Props> = ({onChange}) => {
	return (
		<SearchContainer>
			<FaSearch size={20} />;
			<input type="text" onChange={({target}) => onChange(target.value)}/>
		</SearchContainer>
	);
}
