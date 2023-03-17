import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import Customisation from "./pages/Customisation";
import Product from "./pages/Product";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import MyAccount from "./pages/MyAccount";

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
    const user = useSelector(state => state.user.currentUser);
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <Header />
                    <Routes>
                        <Route exact path="/" element={<main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><Home/></main>}/>
                        <Route path="/products" element={<main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><Customisation/></main>}/>
                        <Route path="/product/:id" element={<main style={{minHeight: "calc(100vh - 60px)", backgroundImage: "radial-gradient(circle, #ffffff, #ffffff, #ffffff, #ffffff, #fefdfe, #fdfcfd, #fcfafb, #fbf6f7, #f9f2f2, #f7eeec, #f4ebe6)", display: "flex", flexDirection: "column"}}><Product/></main>}/>
                        <Route path="/login" element={user ? <Navigate to={"/"}/> : <main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><Login/></main>}/>
                        <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register/>}/>
                        <Route path="/logout" element={<Navigate to={"/"}/>}/>
                        <Route path="/cart" element={<main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><Cart/></main>}/>
                        <Route path="/success" element={<main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><Success/></main>}/>
                        <Route path="/myaccount" element={user && <main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main, display: "flex", flexDirection: "column"}}><MyAccount/></main>}/>
                    </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;