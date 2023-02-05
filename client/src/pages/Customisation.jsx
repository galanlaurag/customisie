import React from 'react';
// import styled from 'styled-components/macro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pay from "../components/Pay";
import Success from "../components/Success";

const Customisation = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pay" element={<Pay/>}/>
                <Route path="/success" element={<Success/>}/>
            </Routes>
        </Router>
    )
}
export default Customisation;

// const Router = styled.div``
// const Switch = styled.div``
// const Route = styled.div``