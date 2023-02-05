import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
import Header from "./components/Header";
// import Home from './pages/Home';
import Customisation from './pages/Customisation';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Cart from './pages/Cart';
import Footer from "./components/Footer";


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
            <Header />
            <main style={{height: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main}}>
                <Customisation />
            </main>
            <Footer />
        </ThemeProvider>
    )
}

export default App;