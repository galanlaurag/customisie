import React from 'react';
import styled from 'styled-components';
import { withTheme } from "@material-ui/core/styles"


const Container = withTheme(styled('div')`
  width: 100%;
  height: 20em;
  background-color: ${props => props.theme.palette.fourth.main};
  display: flex;
`)

const Slider = () => {
    return (
        <Container>

        </Container>
    )
}

export default Slider;