import React, { useContext, useCallback, } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import { FaMoon, FaRegMoon } from "react-icons/fa";

import {ThemeContext} from "contexts/ThemeContext";

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const DarkModeContainer = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	align-items: center;
`;

export default function Header() {
	const { theme, setTheme} = useContext(ThemeContext);

	const toggleDarkMode = useCallback(
		() => {
			const newTheme = theme === "light" ? "dark" : "light";
			setTheme(newTheme);
		},
		[theme, setTheme],
	)

	return (
		<HeaderContent>
			<Link to={'/'}>
				<h1>Where in the world?</h1>
			</Link>
			<DarkModeContainer onClick={toggleDarkMode}>
				{theme === "light" ? (
					<FaRegMoon size={20} />
				) : (
					<FaMoon size={20} />
				)}
				{"Dark Mode"}
			</DarkModeContainer>
		</HeaderContent>
	);
}
