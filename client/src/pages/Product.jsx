import styled, {css} from "styled-components/macro";
// import mergeImages from "merge-images";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {withTheme} from "@material-ui/core/styles";
import { ArrowBackIosRounded, ArrowForwardIosRounded, InfoRounded } from "@material-ui/icons";
import {device, Container, BackgroundImage, GlobalStyle} from '../responsive&generalStyling';

const Product = ({item}) => {

    //merging multiple images test - works DO NOT DELETE
    // async function mergeMultipleImages() {
    //      await mergeImages(['http://localhost:3000/assets/head/Brown/Regular.png', 'http://localhost:3000/assets/nose/Brown/Nose.png'])
    //         .then((mergedSrc) => {
    //             return document.getElementById("mergedTeddyBear").src = mergedSrc;
    //         })
    //         .catch(err => {
    //              return console.log(err)
    //          });
    // }
    // mergeMultipleImages();

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const productQuantity = 1;
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    //initial default settings onload
    const [headShape, setHeadShape] = useState("Regular");
    const [earsShape, setEarsShape] = useState("Small");
    const [armsShape, setArmsShape] = useState("Short");
    const [legsShape, setLegsShape] = useState("Long");

    const [headColour, setHeadColour] = useState("Brown");
    const [earsColour, setEarsColour] = useState("Brown");
    const [armsColour, setArmsColour] = useState("Brown");
    const [legsColour, setLegsColour] = useState("Brown");

    const [eyesColour, setEyesColour] = useState("Brown");
    const [noseColour, setNoseColour] = useState("Brown");
    const [innerEarsColour, setInnerEarsColour] = useState("Brown");
    const [handsColour, setHandsColour] = useState("Brown");
    const [feetColour, setFeetColour] = useState("Brown");
    const [size] = useState("Small");

    //reset customisation
    function resetCustomisation()  {
        setHeadShapeIndex(0);
        setHeadShape(product.headShape[0]);
        setEarsShapeIndex(0);
        setEarsShape(product.earsShape[0]);
        setArmsShapeIndex(0);
        setArmsShape(product.armsShape[0]);
        setLegsShapeIndex(0);
        setLegsShape(product.legsShape[0]);
        setHeadColourIndex(0);
        setHeadColour(product.headColour[0]);
        setEarsColourIndex(0);
        setEarsColour(product.earsColour[0]);
        setArmsColourIndex(0);
        setArmsColour(product.armsColour[0]);
        setLegsColourIndex(0);
        setLegsColour(product.legsColour[0]);
        setEyesColourIndex(0);
        setEyesColour(product.eyesColour[0]);
        setNoseColourIndex(0);
        setNoseColour(product.noseColour[0]);
        setInnerEarsColourIndex(0);
        setInnerEarsColour(product.innerEarsColour[0]);
        setHandsColourIndex(0);
        setHandsColour(product.handsColour[0]);
        setFeetColourIndex(0);
        setFeetColour(product.feetColour[0]);
    }

    //randomise customisation
    function randomiseCustomisation() {
        var randomHeadShapeIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setHeadShape(product.headShape[randomHeadShapeIndex]);
        setHeadShapeIndex(randomHeadShapeIndex);
        var randomEarsShapeIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setEarsShapeIndex(randomEarsShapeIndex);
        setEarsShape(product.earsShape[randomEarsShapeIndex]);
        var randomArmsShapeIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setArmsShapeIndex(randomArmsShapeIndex);
        setArmsShape(product.armsShape[randomArmsShapeIndex]);
        var randomLegsShapeIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setLegsShapeIndex(randomLegsShapeIndex);
        setLegsShape(product.legsShape[randomLegsShapeIndex]);
        var randomHeadColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setHeadColourIndex(randomHeadColourIndex);
        setHeadColour(product.headColour[randomHeadColourIndex]);
        var randomEarsColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setEarsColourIndex(randomEarsColourIndex);
        setEarsColour(product.earsColour[randomEarsColourIndex]);
        var randomArmsColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setArmsColourIndex(randomArmsColourIndex);
        setArmsColour(product.armsColour[randomArmsColourIndex]);
        var randomLegsColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setLegsColourIndex(randomLegsColourIndex);
        setLegsColour(product.legsColour[randomLegsColourIndex]);
        var randomEyesColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setEyesColourIndex(randomEyesColourIndex);
        setEyesColour(product.eyesColour[randomEyesColourIndex]);
        var randomNoseColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setNoseColourIndex(randomNoseColourIndex);
        setNoseColour(product.noseColour[randomNoseColourIndex]);
        var randomInnerEarsColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setInnerEarsColourIndex(randomInnerEarsColourIndex);
        setInnerEarsColour(product.innerEarsColour[randomInnerEarsColourIndex]);
        var randomHandsColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setHandsColourIndex(randomHandsColourIndex);
        setHandsColour(product.handsColour[randomHandsColourIndex]);
        var randomFeetColourIndex = [0,1,2,3,4][Math.floor(Math.random()*5)];
        setFeetColourIndex(randomFeetColourIndex);
        setFeetColour(product.feetColour[randomFeetColourIndex]);
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                //works for individual product
                // const res = await publicRequest.get("products/" + id);
                //works for all products
                // const res = await publicRequest.get(`products/${item._id}`);

                // works for both!!
                const res = await publicRequest.get(
                    item
                        ? `products/${item._id}`
                        : "products/" + id
                );
                return setProduct(res.data);
                //test code to add new product to database - works
                // if (!item) {
                //     try {
                //         await axios.post("http://localhost:5000/api/products/" + id, {
                //             title: 'Teddy bead',
                //             img: 'http://localhost:3000/assets/merged/mergedTeddyBear.png'
                //         }).then(function (response) {
                //             console.log(response);
                //         })
                //     } catch(err) {
                //         console.log(err);
                //     }
                // } else {
                //     const res = await publicRequest.get(`products/${item._id}`);
                //     console.log(res);
                // }
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, [item, id]);

    //update cart
    const handleConfirm = () => {
        dispatch(
            addProduct({...product, productQuantity, headShape, earsShape, armsShape, legsShape, headColour, eyesColour, noseColour, earsColour, innerEarsColour, armsColour, handsColour, legsColour, feetColour, size})
        )
    }

    //change shape & colour
    const [headShapeIndex, setHeadShapeIndex] = useState(0);
    const [headColourIndex, setHeadColourIndex] = useState(0);
    const [earsShapeIndex, setEarsShapeIndex] = useState(0);
    const [earsColourIndex, setEarsColourIndex] = useState(0);
    const [eyesColourIndex, setEyesColourIndex] = useState(0);
    const [noseColourIndex, setNoseColourIndex] = useState(0);
    const [innerEarsColourIndex, setInnerEarsColourIndex] = useState(0);
    const [armsShapeIndex, setArmsShapeIndex] = useState(0);
    const [armsColourIndex, setArmsColourIndex] = useState(0);
    const [handsColourIndex, setHandsColourIndex] = useState(0);
    const [legsShapeIndex, setLegsShapeIndex] = useState(0);
    const [legsColourIndex, setLegsColourIndex] = useState(0);
    const [feetColourIndex, setFeetColourIndex] = useState(0);
    const handleBodyShape = (direction) => {
        if (direction === "left") {
            setHeadShape(headShapeIndex > 0 ? product.headShape[headShapeIndex-1] : product.headShape[4]);
            setHeadShapeIndex(headShapeIndex > 0 ? headShapeIndex-1 : 4);
        } else {
            setHeadShape(headShapeIndex < 4 ? product.headShape[headShapeIndex + 1] : product.headShape[0]);
            setHeadShapeIndex(headShapeIndex < 4 ? headShapeIndex+1 : 0);
        }
    };
    const handleEarsShape = (direction) => {
        if (direction === "left") {
            setEarsShape(earsShapeIndex > 0 ? product.earsShape[earsShapeIndex-1] : product.earsShape[4]);
            setEarsShapeIndex(earsShapeIndex > 0 ? earsShapeIndex - 1 : 4);
        } else {
            setEarsShape(earsShapeIndex < 4 ? product.earsShape[earsShapeIndex+1] : product.earsShape[0]);
            setEarsShapeIndex(earsShapeIndex < 4 ? earsShapeIndex + 1 : 0);
        }
    };
    const handleArmsShape = (direction) => {
        if (direction === "left") {
            setArmsShape(armsShapeIndex > 0 ? product.armsShape[armsShapeIndex-1] : product.armsShape[4]);
            setArmsShapeIndex(armsShapeIndex > 0 ? armsShapeIndex-1 : 4);
        } else {
            setArmsShape(armsShapeIndex < 4 ? product.armsShape[armsShapeIndex+1] : product.armsShape[0]);
            setArmsShapeIndex(armsShapeIndex < 4 ? armsShapeIndex+1 : 0);
        }
    };
    const handleLegsShape = (direction) => {
        if (direction === "left") {
            setLegsShape(legsShapeIndex > 0 ? product.legsShape[legsShapeIndex-1] : product.legsShape[4]);
            setLegsShapeIndex(legsShapeIndex > 0 ? legsShapeIndex-1 : 4);
        } else {
            setLegsShape(legsShapeIndex < 4 ? product.legsShape[legsShapeIndex+1] : product.legsShape[0]);
            setLegsShapeIndex(legsShapeIndex < 4 ? legsShapeIndex+1 : 0);
        }
    };

    //show and hide colour selections
    const [headClicked, setHeadClicked] = React.useState(true);
    const [earsClicked, setEarsClicked] = React.useState(false);
    const [armsClicked, setArmsClicked] = React.useState(false);
    const [legsClicked, setLegsClicked] = React.useState(false);
    const handleClickColour = (bodyPart) => {
        if (bodyPart === "head") {
            setHeadClicked(true);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "eyes") {
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "nose") {
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "ears") {
            setEarsClicked(true);
            setHeadClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "innerEars") {
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "arms") {
            setArmsClicked(true);
            setHeadClicked(false);
            setEarsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "hands") {
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        } else if (bodyPart === "legs") {
            setLegsClicked(true);
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
        } else if (bodyPart === "feet") {
            setHeadClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
        }
    }

    return (
        <Container>
            <GlobalStyle/>
            <BackgroundImage src={`/assets/tlo.png`}/>
            {/*top instructions*/}
            <SpanContainer>
                <LeftSpan/>
                <MiddleSpan>use arrows to change shape <InfoWrapper><Info/><InfoText>There are 5 options of each body part (from top - ears, head, arms, legs)</InfoText></InfoWrapper></MiddleSpan>
                <RightSpan>use buttons to change colour</RightSpan>
            </SpanContainer>

            {/*customisation part*/}
            <CustomisationWrapper>
                {/*part 1 - reset & randomise buttons*/}
                <RButtonContainer>
                    <RButton type="reset" onClick={resetCustomisation}>Reset</RButton>
                    <RButton type="randomise" onClick={randomiseCustomisation}>Randomise</RButton>
                </RButtonContainer>

                {/*part 2 - images/visualisation*/}
                <ImagesContainer>
                    {/*head*/}
                    <HeadShapeWrapper headShapeIndex={headShapeIndex}/>
                    {product.headShape?.slice(0, 1).map(() => (
                        <ImagesWrapper key={product.headShape[headShapeIndex]} className={product.headShape[headShapeIndex]}>
                            <HeadArrow direction="left" onClick={() => {handleBodyShape("left"); handleClickColour("head")}}>
                                <ArrowBackIosRounded />
                            </HeadArrow>

                            <ImageWrapper>
                                <Image id="headImg" src={`/assets/head/${product.headColour[headColourIndex]}/${product.headShape[headShapeIndex]}.png`} style={{zIndex: "11"}}/>
                                {/*one eye*/}
                                {headShapeIndex === 2 && (
                                    <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eye.png`} style={{zIndex: "12"}}/>
                                )}
                                {/*two eyes*/}
                                {headShapeIndex === 3 && (
                                    <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eyes.png`} style={{zIndex: "12"}}/>
                                )}
                                {/*nose*/}
                                {headShapeIndex === 0 && (
                                    <Image id="noseImg" src={`/assets/nose/${product.noseColour[noseColourIndex]}/Nose.png`} style={{zIndex: "12"}}/>
                                )}
                            </ImageWrapper>

                            <HeadArrow direction="right" onClick={() => {handleBodyShape("right"); handleClickColour("head")}}>
                                <ArrowForwardIosRounded />
                            </HeadArrow>
                        </ImagesWrapper>
                    ))}
                    {/*ears*/}
                    {product.earsShape?.slice(0, 1).map(() => (
                        <ImagesWrapper key={product.earsShape[earsShapeIndex]} className={product.earsShape[earsShapeIndex]} >
                            <EarsArrow direction="left" onClick={() => {handleEarsShape("left"); handleClickColour("ears")}} >
                                <ArrowBackIosRounded />
                            </EarsArrow>

                            <ImageWrapper>
                                <Image id="earsImg" src={`/assets/ears/${product.earsColour[earsColourIndex]}/${product.earsShape[earsShapeIndex]}.png`}/>
                                {/*inner ears*/}
                                {earsShapeIndex === 2 && (
                                    <Image id="innerEarsImg" src={`/assets/innerEars/${product.innerEarsColour[innerEarsColourIndex]}/Inner ears.png`} style={{zIndex: "11"}}/>
                                )}
                            </ImageWrapper>

                            <EarsArrow direction="right" onClick={() => {handleEarsShape("right"); handleClickColour("ears")}}>
                                <ArrowForwardIosRounded />
                            </EarsArrow>
                        </ImagesWrapper>
                    ))}
                    {/*arms*/}
                    {product.armsShape?.slice(0, 1).map(() => (
                        <ImagesWrapper key={product.armsShape[armsShapeIndex]} className={product.armsShape[armsShapeIndex]} >
                            <ArmsArrow direction="left" onClick={() => {handleArmsShape("left"); handleClickColour("arms")}} >
                                <ArrowBackIosRounded />
                            </ArmsArrow>

                            <ImageWrapper>
                                <Image id="armsImg" src={`/assets/arms/${product.armsColour[armsColourIndex]}/${product.armsShape[armsShapeIndex]}.png`} style={{zIndex: "10"}}/>
                                {/*hands*/}
                                {armsShapeIndex === 3 && (
                                    <Image id="handsImg" src={`/assets/hands/${product.handsColour[handsColourIndex]}/Hands.png`} style={{zIndex: "11"}}/>
                                )}
                                {/*hands & fingernails*/}
                                {armsShapeIndex === 4 && (
                                    <Image id="handsImg" src={`/assets/hands/${product.handsColour[handsColourIndex]}/Hands & fingernails.png`} style={{zIndex: "11"}}/>
                                )}
                            </ImageWrapper>

                            <ArmsArrow direction="right" onClick={() => {handleArmsShape("right"); handleClickColour("arms")}}>
                                <ArrowForwardIosRounded />
                            </ArmsArrow>
                        </ImagesWrapper>
                    ))}
                    {/*legs*/}
                    {product.legsShape?.slice(0, 1).map(() => (
                        <ImagesWrapper key={product.legsShape[legsShapeIndex]} className={product.legsShape[legsShapeIndex]} >
                            <LegsArrow direction="left" onClick={() => {handleLegsShape("left"); handleClickColour("legs")}} >
                                <ArrowBackIosRounded />
                            </LegsArrow>

                            <ImageWrapper>
                                <Image id="legsImg" src={`/assets/legs/${product.legsColour[legsColourIndex]}/${product.legsShape[legsShapeIndex]}.png`} style={{zIndex: "9"}}/>
                                {/*feet*/}
                                {legsShapeIndex === 3 && (
                                    <Image id="feetImg" src={`/assets/feet/${product.feetColour[feetColourIndex]}/Feet.png`} style={{zIndex: "10"}}/>
                                )}
                                {/*feet & toenails*/}
                                {legsShapeIndex === 4 && (
                                    <Image id="feetImg" src={`/assets/feet/${product.feetColour[feetColourIndex]}/Feet & toenails.png`} style={{zIndex: "10"}}/>
                                )}
                            </ImageWrapper>

                            <LegsArrow direction="right" onClick={() => {handleLegsShape("right"); handleClickColour("legs")}}>
                                <ArrowForwardIosRounded />
                            </LegsArrow>
                        </ImagesWrapper>
                    ))}
                </ImagesContainer>

                {/*part 3 - colour selection*/}
                <ColoursContainer>
                    {/*body parts buttons*/}
                    { earsClicked ?
                        <BodyPartButtonWrapper>
                            <BodyPartButton onClick={() => handleClickColour("ears")} className="activeBodyPartButton">Ears</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("head")}>Head</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("arms")}>Arms</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("legs")}>Legs</BodyPartButton>
                        </BodyPartButtonWrapper>
                    : headClicked ?
                        <BodyPartButtonWrapper>
                            <BodyPartButton onClick={() => handleClickColour("ears")}>Ears</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("head")} className="activeBodyPartButton">Head</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("arms")}>Arms</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("legs")}>Legs</BodyPartButton>
                        </BodyPartButtonWrapper>
                    : armsClicked ?
                        <BodyPartButtonWrapper>
                            <BodyPartButton onClick={() => handleClickColour("ears")}>Ears</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("head")}>Head</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("arms")} className="activeBodyPartButton">Arms</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("legs")}>Legs</BodyPartButton>
                        </BodyPartButtonWrapper>
                    : legsClicked ?
                        <BodyPartButtonWrapper>
                            <BodyPartButton onClick={() => handleClickColour("ears")}>Ears</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("head")}>Head</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("arms")}>Arms</BodyPartButton>
                            <BodyPartButton onClick={() => handleClickColour("legs")} className="activeBodyPartButton">Legs</BodyPartButton>
                        </BodyPartButtonWrapper>
                    : null }

                    {/*colours*/}
                    <Wrapper>
                        {/*head*/}
                        {product.headColour?.slice(0, 1).map(() => (
                            <ColoursWrapper key={product.headColour[headColourIndex]}>
                                { headClicked ?
                                    <ColourWrapper id="headColour" className={product.headColour[headColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Head</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setHeadColour(product.headColour[0]); setHeadColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setHeadColour(product.headColour[1]); setHeadColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setHeadColour(product.headColour[2]); setHeadColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setHeadColour(product.headColour[3]); setHeadColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setHeadColour(product.headColour[4]); setHeadColourIndex(4)}}>gray</GrayButton>
                                    </ColourWrapper>
                                    : null}

                                {/*eyes*/}
                                {((headShapeIndex === 2 || headShapeIndex === 3) && headClicked) ?
                                    <AdditionalColourWrapper id="eyesColour" className={product.eyesColour[eyesColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Eyes</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setEyesColour(product.eyesColour[0]); setEyesColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setEyesColour(product.eyesColour[1]); setEyesColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setEyesColour(product.eyesColour[2]); setEyesColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setEyesColour(product.eyesColour[3]); setEyesColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setEyesColour(product.eyesColour[4]); setEyesColourIndex(4)}}>gray</GrayButton>
                                    </AdditionalColourWrapper>
                                : null }
                                {/*nose*/}
                                {headShapeIndex === 0 && headClicked ?
                                    <AdditionalColourWrapper id="noseColour" className={product.noseColour[noseColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Nose</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setNoseColour(product.noseColour[0]); setNoseColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setNoseColour(product.noseColour[1]); setNoseColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setNoseColour(product.noseColour[2]); setNoseColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setNoseColour(product.noseColour[3]); setNoseColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setNoseColour(product.noseColour[4]); setNoseColourIndex(4)}}>gray</GrayButton>
                                    </AdditionalColourWrapper>
                                : null }
                            </ColoursWrapper>
                        ))}
                        {/*ears*/}
                        {product.earsColour?.slice(0, 1).map(() => (
                            <ColoursWrapper key={product.earsColour[earsColourIndex]}>
                                { earsClicked ?
                                    <ColourWrapper id="earsColour" className={product.earsColour[earsColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Ears</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setEarsColour(product.earsColour[0]); setEarsColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setEarsColour(product.earsColour[1]); setEarsColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setEarsColour(product.earsColour[2]); setEarsColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setEarsColour(product.earsColour[3]); setEarsColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setEarsColour(product.earsColour[4]); setEarsColourIndex(4)}}>gray</GrayButton>
                                    </ColourWrapper>
                                    : null }

                                {/*inner ears*/}
                                {earsShapeIndex === 2 && earsClicked ?
                                    <AdditionalColourWrapper id="innerEarsColour" className={product.innerEarsColour[innerEarsColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Inner ears</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setInnerEarsColour(product.innerEarsColour[0]); setInnerEarsColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setInnerEarsColour(product.innerEarsColour[1]); setInnerEarsColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setInnerEarsColour(product.innerEarsColour[2]); setInnerEarsColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setInnerEarsColour(product.innerEarsColour[3]); setInnerEarsColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setInnerEarsColour(product.innerEarsColour[4]); setInnerEarsColourIndex(4)}}>gray</GrayButton>
                                    </AdditionalColourWrapper>
                                : null }
                            </ColoursWrapper>
                        ))}
                        {/*arms*/}
                        {product.armsColour?.slice(0, 1).map(() => (
                            <ColoursWrapper key={product.armsColour[armsColourIndex]}>
                                { armsClicked ?
                                    <ColourWrapper id="armsColour" className={product.armsColour[armsColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Arms</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setArmsColour(product.armsColour[0]); setArmsColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setArmsColour(product.armsColour[1]); setArmsColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setArmsColour(product.armsColour[2]); setArmsColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setArmsColour(product.armsColour[3]); setArmsColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setArmsColour(product.armsColour[4]); setArmsColourIndex(4)}}>gray</GrayButton>
                                    </ColourWrapper>
                                    : null }
                                {/*hands*/}
                                {((armsShapeIndex === 3 || armsShapeIndex === 4) && armsClicked) ?
                                    <AdditionalColourWrapper id="handsColour" className={product.handsColour[handsColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Hands</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setHandsColour(product.handsColour[0]); setHandsColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setHandsColour(product.handsColour[1]); setHandsColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setHandsColour(product.handsColour[2]); setHandsColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setHandsColour(product.handsColour[3]); setHandsColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setHandsColour(product.handsColour[4]); setHandsColourIndex(4)}}>gray</GrayButton>
                                    </AdditionalColourWrapper>
                                : null }
                            </ColoursWrapper>
                        ))}
                        {/*legs*/}
                        {product.legsColour?.slice(0, 1).map(() => (
                            <ColoursWrapper key={product.legsColour[legsColourIndex]}>
                                { legsClicked ?
                                    <ColourWrapper id="legsColour" className={product.legsColour[legsColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Legs</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setLegsColour(product.legsColour[0]); setLegsColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setLegsColour(product.legsColour[1]); setLegsColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setLegsColour(product.legsColour[2]); setLegsColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setLegsColour(product.legsColour[3]); setLegsColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setLegsColour(product.legsColour[4]); setLegsColourIndex(4)}}>gray</GrayButton>
                                    </ColourWrapper>
                                    : null }

                                {/*feet*/}
                                {((legsShapeIndex === 3 || legsShapeIndex === 4) && legsClicked) ?
                                    <AdditionalColourWrapper id="feetColour" className={product.feetColour[feetColourIndex]}>
                                        <SpanBodyPart style={{textAlign: "center"}}>Feet</SpanBodyPart>
                                        <BrownButton className="brownBtn" onClick={() => {setFeetColour(product.feetColour[0]); setFeetColourIndex(0)}}>brown</BrownButton>
                                        <PinkButton className="pinkBtn" onClick={() => {setFeetColour(product.feetColour[1]); setFeetColourIndex(1)}}>pink</PinkButton>
                                        <BeigeButton className="beigeBtn" onClick={() => {setFeetColour(product.feetColour[2]); setFeetColourIndex(2)}}>beige</BeigeButton>
                                        <CreamButton className="creamBtn" onClick={() => {setFeetColour(product.feetColour[3]); setFeetColourIndex(3)}}>cream</CreamButton>
                                        <GrayButton className="grayBtn" onClick={() => {setFeetColour(product.feetColour[4]); setFeetColourIndex(4)}}>gray</GrayButton>
                                    </AdditionalColourWrapper>
                                : null }
                            </ColoursWrapper>
                        ))}
                    </Wrapper>

                    {/*confirm button*/}
                    <NavbarLink to={"/cart"}>
                        <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
                    </NavbarLink>
                </ColoursContainer>
            </CustomisationWrapper>

            {/*optional - maybe to be added in the future - size selection*/}
            {/*<SelectionContainer>*/}
            {/*    <FilterSize onChange={(e) => setSize(e.target.value)}>*/}
            {/*        {product.size?.map((s) => (*/}
            {/*            <FilterSizeOption key={s}>{s}</FilterSizeOption>*/}
            {/*        ))}*/}
            {/*    </FilterSize>*/}
            {/*</SelectionContainer>*/}

            {/*info about product from database*/}
            {/*<Image src={item.img} key={item._id}/>*/}
            {/*<Info>{item.title}*/}
            {/*</Info>*/}
            {/*<Info>{item.desc}*/}
            {/*</Info>*/}
        </Container>
    );
};
export default Product;

//top instructions
const SpanContainer = styled.div``;
const sharedStylesForTopSpans = css`
    margin: 0;
    padding: 1rem 0;
    font-size: 1.5rem;
    display: inline-flex;
    width: 50%;
  &:before, &:after{
    content: "";
    flex: 1 1;
    border-bottom: 1px solid;
    margin: auto;
  }
  &:before {
    margin-right: 10px
  }
  &:after {
    margin-left: 10px
  }
  @media ${device.laptop} {
    font-size: 1.3rem;
  }
  @media ${device.tabletL} {
    font-size: 1.2rem;
  }
  // @media ${device.tabletM} {
  //   font-size: 1.2rem;
  // }
`
const LeftSpan = withTheme(styled.span`
  ${sharedStylesForTopSpans};
  width: 10%;
  &:before {
    margin-right: 0;
  }
  &:after {
    margin-left: 0;
  }
  @media ${device.tabletL} {
    width: 0;
  }
`)
const MiddleSpan = withTheme(styled.span`
  ${sharedStylesForTopSpans};
  @media ${device.tabletL} {
    width: 50%;
  }
  @media ${device.tabletM} {
    width: 100%;
    padding: 0;
  }
`)
const RightSpan = withTheme(styled.span`
  ${sharedStylesForTopSpans};
  width: 40%;
  @media ${device.tabletL} {
    width: 50%;
  }
  @media ${device.tabletM} {
    width: 100%;
    padding: 0 0 0.5rem 0;
  }
`)
const InfoWrapper = styled.div`
  position: relative;
  font-size: 0.9rem;
`
const InfoText = withTheme(styled.span`
  visibility: hidden;
  font-size: 0.9rem;
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  text-align: center;
  padding: 0.5rem;
  width: 16rem;
  top: -0.75rem;
  left: 1.5rem;
  border-radius: 20px;
  position: absolute;
  z-index: 50;
  &:before {
    content: "";
    position: absolute;
    transform: rotate(45deg);
    background-color: ${props => props.theme.palette.primary.main};
    padding: 5px;
    z-index: 1;
    top: 30%;
    left: -3px;
  }
  @media ${device.tabletM} {
    top: 1.5rem;
    left: -8rem;
    &:before {
      top: -3px;
      left: 48.5%;
    }
  }
  @media ${device.tabletS} {
    width: 10rem;
    left: -5rem;
  }
  @media ${device.mobileL} {
    top: 0;
    left: -11.2rem;
    &:before {
      top: 15%;
      left: auto;
      right: -3px;
    }
  }
`);
const Info = withTheme(styled(InfoRounded)`
  font-size: 1.2rem !important;
  color: ${props => props.theme.palette.primary.main};
  &:hover + ${InfoText} {
    visibility: visible;
  }
`)


//customisation
const CustomisationWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 50px;
  margin-right: 25px;
  margin-bottom: 2rem;
  z-index: 1;
  @media ${device.laptop} {
    gap: 10px;
    margin-right: 0;
  }
  @media ${device.tabletM} {
    flex-direction: column;
    margin-bottom: 0;
  }
`
//left buttons
const RButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: flex-start;
  top: 10rem;
  width: 10%;
  height: auto;
  @media ${device.tabletL} {
    width:6%;
  }
  @media ${device.tabletM} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  }
`
const RButton = withTheme(styled.p`
  padding: 1.5rem 0;
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
  background-color: ${props => props.theme.palette.default.main};
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.tabletL} {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    border-radius: 20px 0 0 20px;
    width: fit-content;
    padding: 1.5rem 0.4rem 1.5rem 0.9rem;
  }
  @media ${device.tabletM} {
    writing-mode: horizontal-tb;
    transform: rotate(0);
    font-size: 1.1rem;
    padding: 1rem 0;
    width: 40%;
    border-radius: ${(props) => props.type === "reset" && "0 20px 20px 0"};
    border-radius: ${(props) => props.type === "randomise" && "20px 0 0 20px"};
  }
`)


//images
const HeadShapeWrapper = styled.div``;
const ImagesContainer = withTheme(styled.div`
  background-color: ${props => props.theme.palette.fourth.main};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  height: auto;
  margin: 0;
  width: 50%;
  position: relative;
  @media ${device.tabletL} {
    width: 60%;
  }
  @media ${device.tabletM} {
    min-height: 60vh;
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
  @media ${device.mobileM} {
    width: 95%;
  }
`)
const ImagesWrapper = styled.div``
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
`
const Image = styled.img`
  height: -webkit-fill-available;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1rem 0;
`
//arrows
const sharedStyleForArrows = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.default.main};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5%"};
  right: ${(props) => props.direction === "right" && "5%"};
  margin: auto;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  @media ${device.laptop} {
    left: ${(props) => props.direction === "left" && "2%"};
    right: ${(props) => props.direction === "right" && "2%"};
  }
  @media ${device.tabletL} {
    width: 40px;
    height: 40px;
  }
  @media ${device.tabletM} {
    width: 50px;
    height: 50px;
    left: ${(props) => props.direction === "left" && "5%"};
    right: ${(props) => props.direction === "right" && "5%"};
  }
  @media screen and (max-height: 450px) {
    width: 40px;
    height: 40px;
  }
`
const EarsArrow = withTheme(styled.div`
  ${sharedStyleForArrows};
  top: -60%;
`);
const HeadArrow = withTheme(styled.div`
  ${sharedStyleForArrows};
  top: -20%;
`);
const ArmsArrow = withTheme(styled.div`
  ${sharedStyleForArrows};
  top: 20%;
`);
const LegsArrow = withTheme(styled.div`
  ${sharedStyleForArrows};
  top: 60%;
`);


//right buttons
const ColoursContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  z-index: 10;
  @media ${device.tabletL} {
    width: 34%;
  }
  @media ${device.tabletM} {
    width: 100%;
    gap: 10px;
  }
`
const BodyPartButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const BodyPartButton = withTheme(styled.button`
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem 1.2rem;
  border-radius: 20px;
  background-color: #98878f;
  border: none;
  margin: 0.3rem;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  &.activeBodyPartButton {
    transform: scale(1.1);
    background-color: ${props => props.theme.palette.secondary.main};
    border: 2px solid #000;
  }
  @media ${device.laptop} {
    padding: 1rem 1.1rem;
    margin: 0.2rem;
    font-size: 0.9rem;
  }
  @media ${device.tabletL} {
    width: 45%;
  }
  @media ${device.tabletM} {
    width: 22%;
    margin: 0.3rem;
  }
  @media ${device.mobileS} {
    width: 45%;
  }
`)
const Wrapper = styled.div``;
const SpanBodyPart = styled.span`
  font-size: 1.3rem;
  margin: 0 10px 10px 10px;
  @media ${device.tabletM} {
    margin: auto 10px auto 0;
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    font-size: 1.15rem;
  }
  @media ${device.mobileM} {
    font-size: 1.1rem;
  }
`
const ColoursWrapper = withTheme(styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  &:not(:empty){
    background-color: ${props => props.theme.palette.fourth.main};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    padding: 2rem;
    width: 50%;
    margin: 1rem auto;
    box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  }
  @media ${device.tabletL} {
    &:not(:empty) {
      width: 60%;
    }
  }
  @media ${device.tabletM} {
    flex-direction: column;
    align-items: center;
    &:not(:empty) {
      width: 80%;
      padding: 0;
    }
  }
  @media ${device.mobileL} {
    &:not(:empty) {
      width: 90%;
    }
  }
  @media ${device.mobileM} {
    &:not(:empty) {
      width: 95%;
    }
  }
`)
const colourPicker = css`
  &.Brown .brownBtn, &.Pink .pinkBtn, &.Beige .beigeBtn, &.Cream .creamBtn, &.Gray .grayBtn {
    transform: scale(1.2);
    border: 2px solid #000;
  }
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  padding: 0 1rem;
  @media ${device.tabletM} {
    flex-direction: row;
    justify-content: center;
    padding: 0 0.5rem;
  }
`
const ColourWrapper = styled.div`
  ${colourPicker};
  @media ${device.tabletM} {
    margin: 2rem 0 1rem 0;
  }
`;
const AdditionalColourWrapper = styled.div`
  ${colourPicker};
  @media ${device.tabletM} {
    margin: 1rem 0 2rem 0;
  }
`;
const colourButton = css`
   border-radius: 50%;
   height: 4rem;
   width: 4rem;
   border: none;
   cursor: pointer;
   margin: 0.3rem;
   padding: 0; 
   box-shadow: 0 7px 10px ${props => props.theme.palette.default.main};
   font-size: 1rem;
  @media ${device.laptop} {
    height: 3.5rem;
    width: 3.5rem;
    font-size: 0.9rem;
  }
  @media ${device.tabletL} {
    height: 3rem;
    width: 3rem;
    font-size: 0.8rem;
  }
  @media ${device.tabletS} {
    height: 2.7rem;
    width: 2.7rem;
  }
   @media ${device.mobileM} {
     height: 2.4rem;
     width: 2.4rem;
     font-size: 0.7rem;
   }
   @media ${device.mobileS} {
     height: 2.2rem;
     width: 2.2rem;
     font-size: 0.65rem;
   }
`
const BrownButton = withTheme(styled.button`
   ${colourButton};
   background-color: #835632;
   z-index: 5;
   color: #fff;
`)
const PinkButton = withTheme(styled.button`
   ${colourButton};
   background-color: #c99d96;
   z-index: 6;
`)
const BeigeButton = withTheme(styled.button`
   ${colourButton};
   background-color: #bd9e86;
   z-index: 7;
`)
const CreamButton = withTheme(styled.button`
   ${colourButton};
   background-color: #F5EBD3;
   z-index: 8;
`)
const GrayButton = withTheme(styled.button`
   ${colourButton};
   background-color: #BCBCBC;
   z-index: 9;
`)
//cart
const NavbarLink = withTheme(styled(Link)`
  text-decoration: none;
  text-align: right;
  @media ${device.tabletM} {
    text-align: center;
  }
`)
const ConfirmButton = withTheme(styled.button`
  font-size: 1.3rem;
  cursor: pointer;
  padding: 1.5rem 3rem;
  margin-right: -25px;
  border-radius: 20px 0 0 20px;
  border: none;
  background-color: ${props => props.theme.palette.primary.main};
  color: #fff;
  box-shadow: 0 0 10px ${props => props.theme.palette.default.main};
  @media ${device.laptop} {
    margin-right: 0;
  }
  @media ${device.tabletM} {
    border-radius: 20px 20px 0 0;
    font-size: 1.2rem;
  }
  @media ${device.mobileL} {
    padding: 1.25rem 2.5rem;
    font-size: 1.15rem;
  }
  @media ${device.mobileM} {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
`)

// const FilterSize = styled.select`
//  `
// const FilterSizeOption = styled.option`
//  `



