import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import React from "react";
import Header from "./components/Header";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Customisation from "./pages/Customisation";
// import Product from "./pages/Product";
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import About from "./pages/About";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import MyAccount from "./pages/MyAccount";
import {Main} from './responsive&generalStyling';
import ScrollToTop from "./components/ScrollToTop";

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
            main: '#ffffff66'
        },
    }
});

const App = () => {
    const user = useSelector(state => state.user.currentUser);
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ScrollToTop />
                <Header />
                    <Routes>
                        <Route exact path="/" element={<Main><Home/></Main>}/>
                        <Route path="/contact" element={<Main><Contact/></Main>}/>
                        {/*<Route path="/product/:id" element={<Main><Product/></Main>}/>*/}
                        <Route path="/customise" element={<Main><Customisation/></Main>}/>
                        <Route path="/login" element={user ? <Navigate to={"/"}/> : <Main><Login/></Main>}/>
                        <Route path="/register" element={user ? <Navigate to={"/"}/> : <Main><Register/></Main>}/>
                        <Route path="/logout" element={<Navigate to={"/"}/>}/>
                        <Route path="/about" element={<Main><About/></Main>}/>
                        <Route path="/cart" element={<Main><Cart/></Main>}/>
                        <Route path="/success" element={<Main><Success/></Main>}/>
                        <Route path="/myaccount" element={user ? <Main><MyAccount/></Main> : <Main><Login/></Main>}/>
                        <Route path='*' element={<Main><Error/></Main>}/>
                    </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    )
}

export default App;