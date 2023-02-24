import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#9b66ce'
        },
        secondary: {
            main: '#e1b2ff'
        },
        tertiary: {
            main: '#4f1d64'
        },
        error: {
            main: red.A400
        }
    }
})