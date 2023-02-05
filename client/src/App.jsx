import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import Customisation from "./pages/Customisation";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

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
    const user = true;
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Header />
                <main style={{height: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main}}>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/customisation" element={<Customisation/>}/>
                        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login/>}/>
                        <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;