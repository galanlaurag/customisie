import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
    background-color: yellow;
    font-size: 2em;
`


const Navbar = () => {
    return (
        <Container>
            This is navbar
        </Container>
    )
}

export default Navbar;