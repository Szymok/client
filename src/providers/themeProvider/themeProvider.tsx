import { FC, ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

interface IThemeProviderProps {
    children: ReactNode;
}

const theme = createTheme({})

const ThemeProvider: FC<IThemeProviderProps> = ({children}) => (
    <MuiThemeProvider theme={theme}><CssBaseline />{children}</MuiThemeProvider>
);

export default ThemeProvider;