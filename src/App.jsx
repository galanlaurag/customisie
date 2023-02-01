import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
// import { ThemeProvider } from "styled-components";

// const theme = createTheme({
//     colors: {
//         powderWhite: "#FFFDF9",
//         persianGreen: "#06B49A",
//         lightBlue: "#AFDBD2",
//         onyx: "#36313D"
//     },
//     palette: {
//         primary: {
//             main: "#483"
//         }
//     },
//     fonts: ["sans-serif", "Roboto"],
//     fontSizes: {
//         small: "1em",
//         medium: "2em",
//         large: "3em"
//     }
// });

const theme = createTheme({
    palette: {
        primary: {
            main: '#4C4F6B',
        },
        secondary: {
            main: '#975E6F',
        },
        default: {
            main: '#98878F',
        },
        error: {
            main: '#9a1717',
        },
        fourth: {
            main: '#F4EBE6'
        },
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}

export default App;