import React from 'react';
import Slider from '../components/Slider.jsx';
// import {withTheme} from "@material-ui/core/styles";
// import styled from "styled-components";
import styled from "styled-components/macro";

const Home = () => {
    return (
        <Container>
            <Image src={`/assets/misieNoBackground.png`}/>
        Ok
        <Slider />
        </Container>
    )
}
export default Home;

const Container = styled.div`
`
const Image = styled.img`
  width: 80%;
`
