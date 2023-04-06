import {
    device,
    Container,
    BackgroundImage,
    GlobalStyle,
    GeneralButton,
    BackgroundImageTop,
    showOpacity
} from '../responsive&generalStyling';
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import styled from "styled-components/macro";
import {ExpandMoreRounded} from '@material-ui/icons';
import {Link} from "react-router-dom";
const CustomiseButton = styled(GeneralButton)`
  margin: 1rem;
  opacity: 0;
  animation: ${showOpacity} ease 1s 0.5s forwards;
`

const data = {
    rows: [
        {
            title: "What are Customisie?",
            content: <div><p>Customisie are <b>handmade crochet teddy bears</b> - customisable by you!</p>
                     <p>Our teddy bears are carefully made with high-quality, soft, <b>plushy fabric</b> and are filled with safe, <b>certified filling</b>.</p>
                     <p>What distinguishes Customisie from other crochet teddy bears in the market is the fact that you can customise your teddy bear using our intuitive <b>customisation system</b>.
                         It allows you to see a <b>preview of your teddy bear</b> in real-time while you customise it!</p>
                     <p>A word "Customisie" is a combination of the English word <b>“customise”</b> and Polish <b>“misie”</b> – meaning teddy bears <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{marginBottom: "-5px"}}><path fill="currentColor" d="M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.813 4.813 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09c.45 0 .88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12"/></svg>.</p>
                     <p style={{fontSize: "0.8rem"}}><span style={{color: "red"}}>*</span> Actual colours can slightly differ from those that you see on the website.</p>
                     <div style={{textAlign: "center"}}><Link to={"/customise"}><CustomiseButton>Try it yourself!</CustomiseButton></Link></div></div>,
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
                     <p>If you have any improvement ideas or suggestions regarding our website or services, you can <Link to={"/contact"} style={{textDecoration: "underline", color: "#4C4F6B"}}>contact us</Link> and let us know.</p></div>,
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
    useEffect(() => {
        document.title = 'Customisie - About';
    }, []);
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
                @keyframes showOpacity {
                  0% {
                    opacity: 0;
                  }
                  100% {
                    opacity: 1;
                  }
                }
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
                  -webkit-backdrop-filter: blur(10px);
                  box-shadow: 0 0 10px #98878F;
                  animation: showOpacity 2s ease;
                }
                .styles_row-title-text__1MuhU {
                  font-weight: bold;
                }
                .styles_icon-wrapper__2cftw {
                    right: 0 !important;
                }
                .expanded + .styles_row-content__QOGZd {
                    height: fit-content !important;
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
            <BackgroundImageTop src={`/assets/tloTop.png`}/>
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
