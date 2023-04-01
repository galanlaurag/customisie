import {device, Container, BackgroundImage, GlobalStyle, GeneralButton} from '../responsive&generalStyling';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import styled from "styled-components/macro";
import {ExpandMoreRounded} from '@material-ui/icons';
import {Link} from "react-router-dom";
const BtnLink = styled(Link)``

const data = {
    rows: [
        {
            title: "What are Customisie?",
            content: <div><p>Customisie are <b>handmade crochet teddy bears</b> - customisable by you!</p>
                     <p>They are carefully made with high-quality, soft, <b>plushy fabric</b> and are filled with safe, <b>certified filling</b>.</p>
                     <p>What distinguishes Customisie from other crochet teddy bears in the market is the fact that you can customise your teddy bear using our intuitive <b>customisation system</b>.
                         It allows you to see a <b>preview of your teddy bear</b> in real-time while you customise it!</p>
                <div style={{textAlign: "center"}}><BtnLink to={"/customise"}><GeneralButton style={{marginBottom: "1rem"}}>Try it yourself!</GeneralButton></BtnLink></div></div>,
        },
        {
            title: "How long does it take until I receive my order?",
            content: <div><p>All customised teddy bears are <b>handmade</b> by one person.</p>
                     <p>Each teddy bear takes around <b>2 days to make</b>. Depending on the number of orders, your order can take around <b>1-2 weeks</b> to be made and delivered to you.</p>
                     <p>After you make an order, you will receive confirmation emails from us about all stages of your order and informing you about any potential delay.</p></div>,
        },
        {
            title: "What size will my teddy bear be?",
            content: <div><p>For now, there is only <b>one size</b> of teddy bear available.</p>
                     <p>Depending on your customisation selections, your teddy bear will be around <b>30-45cm</b> long and <b>15-20cm</b> wide.</p></div>,
        },
        {
            title: "How much does it cost?",
            content: <div><p>Each teddy bear - no matter how you customise it - is at the same price - <b>£99</b>.</p>
                     <p>There is also no additional charge for special requests that you can add in the checkout :)</p></div>,
        },
        {
            title: "Will there be more customisation options  in the future?",
            content: <div><p>We hope so! We are constantly working on improving our system.</p>
                     <p>For now, if you would like to make some changes to your final teddy bear - simply <b>add a comment</b> in the checkout and we will do our best to meet your expectations.</p>
                     <p>If you have any improvement ideas or suggestions regarding our website or services, you can <BtnLink to={"/contact"} style={{textDecoration: "underline", color: "#4C4F6B"}}>contact us</BtnLink> and let us know.</p></div>,
        },
        {
            title: "Can I wash my teddy bear?",
            content: <div><p>Yes!</p>
                     <p>The high-quality materials and certified filling make it safe to use a washing machine to wash our teddy bears.
                         However, we do not recommend using temperatures higher than <b>30-40°</b>.</p></div>,
        },
        {
            title: "Are the teddy bears safe to play for small children?",
            content: <div><p>Yes!</p>
                     <p>Materials that we use to make teddy bears are 100% safe for children's use. We use so-called safety eyes and noses that are securely mounted making them almost impossible to pull out using only hands.</p>
                     <p>However - we recommend increased attentiveness considering children under the age of three and pets.</p></div>,
        },
    ],
};
const config = {
    animate: true,
    arrowIcon: "v",
    openOnload: 0,
    expandIcon: <ExpandMoreRounded />,
    collapseIcon: <ExpandMoreRounded />,
};

const About = () => {
    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);
        }
    }, [rows]);

    return (
        <Container>
            <GlobalStyle/>
            <style>{`
                .styles_row-body__1NvUo {
                    padding: 2rem;
                }
                .styles_row-content-text__2sgAB {
                        padding: 1rem;
                    }
                .styles_faq-row-wrapper__3vA1D {
                  background-color: #ffffff66;
                  border-radius: 20px;
                  backdrop-filter: blur(10px);
                  box-shadow: 0 0 10px #98878F;
                }
                .styles_row-title-text__1MuhU {
                  font-weight: bold;
                }
                .styles_icon-wrapper__2cftw {
                    right: 0 !important;
                }
                .expanded + .styles_row-content__QOGZd {
                    height: 100% !important;
                }
                @media ${device.tabletL} {
                    .styles_row-body__1NvUo {
                        padding: 1rem;
                    }
                    .styles_row-content-text__2sgAB {
                        padding: 0.5rem;
                    }
                }
            `}</style>
            <BackgroundImage src={`/assets/tlo.png`}/>

            <FaqWrapper>
                <Faq data={data} config={config} getRowOptions={setRowsOption} />
            </FaqWrapper>

        </Container>
    )
}
export default About;

const FaqWrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 3rem auto;
  @media ${device.laptop} {
    width: 85%;
    height: 85%;
  }
  @media ${device.tabletL} {
    width: 90%;
    height: 90%;
    margin: 2rem auto;
  }
  @media ${device.mobileL} {
    width: 95%;
    height: 95%;
    margin: 1.5rem auto;
  }
`
