import { createGlobalStyle, css } from "styled-components";

interface Props {
	theme: string;
}

export const GlobalStyles = createGlobalStyle(
			(props: Props) => css`
				:root {
					--dark-blue: hsl(209, 23%, 22%);
					--very-dark-blue: hsl(207, 26%, 17%);
					--very-dark-blue-light: hsl(200, 15%, 8%);
					--dark-gray: hsl(0, 0%, 52%);
					--very-light-gray: hsl(0, 0%, 98%);
					--white: hsl(0, 0%, 100%);
				}

				body {
					font-size: 12px;
					font-family: "Nunito Sans", sans-serif;
					background-color: ${props.theme === "light"
						? "var(--very-light-gray)"
						: "var(--very-dark-blue)"};
					color: ${props.theme === "light"
						? "var(--very-dark-blue-light)"
						: "var(--white)"};
					//transition: background 0.6s linear;
				}

				a {
					color: ${props.theme === "light"
						? "var(--very-dark-blue-light)"
						: "var(--white)"};
					text-decoration: none;
				}
			`
		);
