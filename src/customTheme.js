'use client';
import {createTheme} from "@mui/material";
import {DM_Serif_Display} from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const theme = createTheme({
    typography: {
        fontFamily: `${dmSerifDisplay.style.fontFamily}, Arial`,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    '@font-face': [dmSerifDisplay],
                },
            },
        },
    },
})