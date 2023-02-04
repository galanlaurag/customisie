import React from 'react';
import styled from 'styled-components/macro';

const Customisation = () => {
    return (
        <Router>
            <Switch>
                <Route path="/pay">
                    <Pay />
                </Route>
                <Route path="/success">
                    <Success />
                </Route>
            </Switch>
        </Router>
    )
}
export default Customisation;

const Router = styled.div`
`
const Switch = styled.div`
`
const Route = styled.div`
`
const Pay = styled.div`
`
const Success = styled.div`
`