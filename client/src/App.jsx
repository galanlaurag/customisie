import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import Customisation from "./pages/Customisation";
import Product from "./components/Product";
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
                <main style={{minHeight: "calc(100vh - 60px)", backgroundColor: theme.palette.fourth.main}}>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route path="/products" element={<Customisation/>}/>
                        <Route path="/product/:id" element={<Product/>}/>
                        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Login/>}/>
                        <Route path="/register" element={user ? <Navigate to={"/"}/> : <Register/>}/>
                        <Route path="/logout" element={<Navigate to={"/"}/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/success" element={<Success/>}/>
                        <Route path="/myaccount" element={user && <MyAccount/>}/>
                    </Routes>
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;