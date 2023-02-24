import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { colorTheme } from './';


export const AgendaTheme = ( {children} ) => {
  return (
    <ThemeProvider theme={ colorTheme }>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}
