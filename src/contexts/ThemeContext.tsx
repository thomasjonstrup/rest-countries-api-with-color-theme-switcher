import React, {createContext} from 'react';

import useLocalStorage from 'hooks/useLocalStorage';
import { GlobalStyles } from 'styles/GlobalStyles';

interface ConxtextProps {
	theme: string,
	setTheme: Function
}

export const ThemeContext = createContext<ConxtextProps>({
	theme: '',
	setTheme: () => null
});

interface Props {
	children: React.ReactNode
}

export function ThemeProvider(props: Props) : JSX.Element {
	const [theme, setTheme] = useLocalStorage('theme', 'light');

	return (
		<ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
			<GlobalStyles theme={theme} />
			{props.children}
		</ThemeContext.Provider>
	)
}