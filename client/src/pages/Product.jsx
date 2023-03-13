import styled, {css} from "styled-components/macro";
// import mergeImages from "merge-images";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {withTheme} from "@material-ui/core/styles";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Product = ({item}) => {

    //merging multiple images - works DO NOT DELETE
    // async function mergeMultipleImages() {
    //     await mergeImages(['http://localhost:3000/static/media/uszy.95f309a756b72a842cfa.png', 'http://localhost:3000/static/media/glowa.8843494bc3e645fc3839.png'])
    //         .then((mergedSrc) => {
    //             return document.getElementById("mis").src = mergedSrc;
    //         })
    //         .catch(err => return console.log(err));
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
        setEarsShapeIndex(0);
        setArmsShapeIndex(0);
        setLegsShapeIndex(0);
        setHeadColourIndex(0);
        setEarsColourIndex(0);
        setArmsColourIndex(0);
        setLegsColourIndex(0);
        setEyesColourIndex(0);
        setNoseColourIndex(0);
        setInnerEarsColourIndex(0);
        setHandsColourIndex(0);
        setFeetColourIndex(0);
    }

    //randomise customisation
    function randomiseCustomisation() {
        setHeadShapeIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setEarsShapeIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setArmsShapeIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setLegsShapeIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setHeadColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setEarsColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setArmsColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setLegsColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setEyesColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setNoseColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setInnerEarsColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setHandsColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
        setFeetColourIndex([0,1,2,3,4][Math.floor(Math.random()*5)]);
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
                // console.log(res);
                return setProduct(res.data);
                //code to add new product
                // if (!item) {
                //     try {
                //         await axios.post("http://localhost:5000/api/products/" + id, {
                //             title: 'bja',
                //             img: 'http://localhost:3000/static/media/krolik.6bcb6a9b28f7a0c63624.png'
                //         }).then(function (response) {
                //             console.log(response);
                //             setProduct(response.data.json);
                //         })
                //     } catch(err) {
                //         console.log("error")
                //         console.log(err.response.data);
                //     }
                // } else {
                //     const res = await publicRequest.get(`products/${item._id}`);
                //     console.log(res);
                //     setProduct(res.data);
                // }
                // document.getElementById("headImg").src = "/assets/head/Brown/Small.png";
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
    const [headClicked, setHeadClicked] = React.useState(false);
    // const [eyesClicked, setEyesClicked] = React.useState(false);
    // const [noseClicked, setNoseClicked] = React.useState(false);
    const [earsClicked, setEarsClicked] = React.useState(false);
    // const [innerEarsClicked, setInnerEarsClicked] = React.useState(false);
    const [armsClicked, setArmsClicked] = React.useState(false);
    // const [handsClicked, setHandsClicked] = React.useState(false);
    const [legsClicked, setLegsClicked] = React.useState(false);
    // const [feetClicked, setFeetClicked] = React.useState(false);
    const handleClickColour = (bodyPart) => {
        if (bodyPart === "head") {
            setHeadClicked(true);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "eyes") {
            // setEyesClicked(true);
            setHeadClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "nose") {
            // setNoseClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "ears") {
            setEarsClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "innerEars") {
            // setInnerEarsClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "arms") {
            setArmsClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "hands") {
            // setHandsClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            setLegsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "legs") {
            setLegsClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            // setFeetClicked(false);
        } else if (bodyPart === "feet") {
            // setFeetClicked(true);
            setHeadClicked(false);
            // setEyesClicked(false);
            // setNoseClicked(false);
            setEarsClicked(false);
            // setInnerEarsClicked(false);
            setArmsClicked(false);
            // setHandsClicked(false);
            setLegsClicked(false);
        }
    }

    const css = `
        .Brown .Product__BrownButton-sc-1iai0om-6 {
            transform: scale(1.2);
            border: 2px solid #000;
        }
        .Pink .Product__PinkButton-sc-1iai0om-7 {
            transform: scale(1.2);
            border: 2px solid #000;
        }
        .Beige .Product__BeigeButton-sc-1iai0om-8 {
            transform: scale(1.2);
            border: 2px solid #000;
        }
        .Cream .Product__CreamButton-sc-1iai0om-9 {
            transform: scale(1.2);
            border: 2px solid #000;
        }
        .Gray .Product__GrayButton-sc-1iai0om-10 {
            transform: scale(1.2);
            border: 2px solid #000;
        }
    `

    return (
        <Container>
            <style>{css}</style>
            <Span>use arrows to change shape</Span>
            <Span>click on body part to change colour</Span>
            {/*local img*/}
            {/*<Image id="mis"/>*/}


            {/*<Image src={product.img} key={product._id}/>*/}
            {/*<Info>{product.title}*/}
            {/*</Info>*/}
            {/*<Info>{product.desc}*/}
            {/*</Info>*/}

            <Image src={`/assets/backgroundImageOld.png`} style={{width: "100%", padding: "0", margin: "20em 0", opacity: "0.3"}}/>

            <RButtonContainer>
                <RButton onClick={resetCustomisation}>Reset</RButton>
                <RButton onClick={randomiseCustomisation}>Randomise</RButton>
            </RButtonContainer>

            {/*body parts buttons*/}
            <BodyPartButtonWrapper>
                <BodyPartButton onClick={() => handleClickColour("head")}>Head</BodyPartButton>
                {/*{(headShapeIndex === 2 || headShapeIndex === 3) && (*/}
                {/*    <BodyPartButton onClick={() => handleClickColour("eyes")}>Eyes</BodyPartButton>*/}
                {/*)}*/}
                {/*{(headShapeIndex === 0 &&*/}
                {/*    <BodyPartButton onClick={() => handleClickColour("nose")}>Nose</BodyPartButton>*/}
                {/*)}*/}
                <BodyPartButton onClick={() => handleClickColour("ears")}>Ears</BodyPartButton>
                {/*{(earsShapeIndex === 2 &&*/}
                {/*    <BodyPartButton onClick={() => handleClickColour("innerEars")}>Inner ears</BodyPartButton>*/}
                {/*)}*/}
                <BodyPartButton onClick={() => handleClickColour("arms")}>Arms</BodyPartButton>
                {/*{(armsShapeIndex === 3 || armsShapeIndex === 4) && (*/}
                {/*    <BodyPartButton onClick={() => handleClickColour("hands")}>Hands</BodyPartButton>*/}
                {/*)}*/}
                <BodyPartButton onClick={() => handleClickColour("legs")}>Legs</BodyPartButton>
                {/*{(legsShapeIndex === 3 || legsShapeIndex === 4) && (*/}
                {/*    <BodyPartButton onClick={() => handleClickColour("feet")}>Feet</BodyPartButton>*/}
                {/*)}*/}
            </BodyPartButtonWrapper>

            {/*head*/}
            <Wrapper headShapeIndex={headShapeIndex}/>
            {product.headShape?.slice(0, 1).map(() => (
                <Wrapper key={product.headShape[headShapeIndex]} className={product.headShape[headShapeIndex]}>
                    <HeadArrow direction="left" onClick={() => {handleBodyShape("left"); handleClickColour("head")}}>
                        <ArrowLeftOutlined />
                    </HeadArrow>
                    {product.headColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.headColour[headColourIndex]}>
                            {/*<BodyPartButton onClick={() => handleClickColour("head")}>Head</BodyPartButton>*/}
                            { headClicked ?
                                <ColourWrapper id="headColour" className={product.headColour[headColourIndex]}>
                                    <div style={{textAlign: "center"}}>Head</div>
                                    <BrownButton onClick={() => {setHeadColour(product.headColour[0]); setHeadColourIndex(0)}}/>
                                    <PinkButton onClick={() => {setHeadColour(product.headColour[1]); setHeadColourIndex(1)}}/>
                                    <BeigeButton onClick={() => {setHeadColour(product.headColour[2]); setHeadColourIndex(2)}}/>
                                    <CreamButton onClick={() => {setHeadColour(product.headColour[3]); setHeadColourIndex(3)}}/>
                                    <GrayButton onClick={() => {setHeadColour(product.headColour[4]); setHeadColourIndex(4)}}/>
                                    {/*<div>{product.headShape[headShapeIndex]}</div>*/}
                                    {/*<div>{product.headColour[headColourIndex]}</div>*/}
                                    {/*<div>{headColourIndex}</div>*/}
                                </ColourWrapper>
                            : null}
                            <Image id="headImg" src={`/assets/head/${product.headColour[headColourIndex]}/${product.headShape[headShapeIndex]}.png`} style={{zIndex: "11"}}/>


                            {/*eyes*/}
                            {(headShapeIndex === 2 || headShapeIndex === 3) && (
                                <OptionalBodyPartWrapper>
                                    {/*<BodyPartButton onClick={() => handleClickColour("eyes")}>Eyes</BodyPartButton>*/}
                                    {/*{ eyesClicked ?*/}
                                    { headClicked ?
                                        <AdditionalColourWrapper id="eyesColour" className={product.eyesColour[eyesColourIndex]}>
                                            <div style={{textAlign: "center"}}>Eyes</div>
                                            <BrownButton onClick={() => {setEyesColour(product.eyesColour[0]); setEyesColourIndex(0)}}/>
                                            <PinkButton onClick={() => {setEyesColour(product.eyesColour[1]); setEyesColourIndex(1)}}/>
                                            <BeigeButton onClick={() => {setEyesColour(product.eyesColour[2]); setEyesColourIndex(2)}}/>
                                            <CreamButton onClick={() => {setEyesColour(product.eyesColour[3]); setEyesColourIndex(3)}}/>
                                            <GrayButton onClick={() => {setEyesColour(product.eyesColour[4]); setEyesColourIndex(4)}}/>
                                            {/*<div>{product.eyesColour[eyesColourIndex]}</div>*/}
                                            {/*<div>{eyesColourIndex}</div>*/}
                                        </AdditionalColourWrapper>
                                    : null }
                                    {/*one eye*/}
                                    {headShapeIndex === 2 && (
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eye.png`} style={{zIndex: "12"}}/>
                                    )}
                                    {/*two eyes*/}
                                    {headShapeIndex === 3 && (
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eyes.png`} style={{zIndex: "12"}}/>
                                    )}
                                </OptionalBodyPartWrapper>
                            )}


                            {/*nose*/}
                            {headShapeIndex === 0 && (
                                <OptionalBodyPartWrapper>
                                    {/*<BodyPartButton onClick={() => handleClickColour("nose")}>Nose</BodyPartButton>*/}
                                    {/*{ noseClicked ?*/}
                                    { headClicked ?
                                        <AdditionalColourWrapper id="noseColour" className={product.noseColour[noseColourIndex]}>
                                            <div style={{textAlign: "center"}}>Nose</div>
                                            <BrownButton onClick={() => {setNoseColour(product.noseColour[0]); setNoseColourIndex(0)}}/>
                                            <PinkButton onClick={() => {setNoseColour(product.noseColour[1]); setNoseColourIndex(1)}}/>
                                            <BeigeButton onClick={() => {setNoseColour(product.noseColour[2]); setNoseColourIndex(2)}}/>
                                            <CreamButton onClick={() => {setNoseColour(product.noseColour[3]); setNoseColourIndex(3)}}/>
                                            <GrayButton onClick={() => {setNoseColour(product.noseColour[4]); setNoseColourIndex(4)}}/>
                                            {/*<div>{'\n'}{product.noseColour[noseColourIndex]}</div>*/}
                                            {/*<div>{noseColourIndex}</div>*/}
                                        </AdditionalColourWrapper>
                                    : null }
                                    <Image id="noseImg" src={`/assets/nose/${product.noseColour[noseColourIndex]}/Nose.png`} style={{zIndex: "12"}}/>
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                        ))}
                    <HeadArrow direction="right" onClick={() => {handleBodyShape("right"); handleClickColour("head")}}>
                        <ArrowRightOutlined />
                    </HeadArrow>
                </Wrapper>
            ))}
            {/*ears*/}
            {product.earsShape?.slice(0, 1).map(() => (
                <Wrapper key={product.earsShape[earsShapeIndex]} className={product.earsShape[earsShapeIndex]} >
                    <EarsArrow direction="left" onClick={() => {handleEarsShape("left"); handleClickColour("ears")}} >
                        <ArrowLeftOutlined />
                    </EarsArrow>
                    {product.earsColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.earsColour[earsColourIndex]}>
                            {/*<BodyPartButton onClick={() => handleClickColour("ears")}>Ears</BodyPartButton>*/}
                            { earsClicked ?
                                <ColourWrapper id="earsColour" className={product.earsColour[earsColourIndex]}>
                                    <div style={{textAlign: "center"}}>Ears</div>
                                    <BrownButton onClick={() => {setEarsColour(product.earsColour[0]); setEarsColourIndex(0)}}/>
                                    <PinkButton onClick={() => {setEarsColour(product.earsColour[1]); setEarsColourIndex(1)}}/>
                                    <BeigeButton onClick={() => {setEarsColour(product.earsColour[2]); setEarsColourIndex(2)}}/>
                                    <CreamButton onClick={() => {setEarsColour(product.earsColour[3]); setEarsColourIndex(3)}}/>
                                    <GrayButton onClick={() => {setEarsColour(product.earsColour[4]); setEarsColourIndex(4)}}/>
                                    {/*<div>{'\n'}{product.earsShape[earsShapeIndex]}</div>*/}
                                    {/*<div>{product.earsColour[earsColourIndex]}</div>*/}
                                    {/*<div>{earsColourIndex}</div>*/}
                                </ColourWrapper>
                            : null }
                            <Image id="earsImg" src={`/assets/ears/${product.earsColour[earsColourIndex]}/${product.earsShape[earsShapeIndex]}.png`} style={{backgroundColor: "#ffffff66", borderRadius: "20px", backdropFilter: "blur(10px)", boxShadow: "0 3px 3px rgb(152 135 143)"}} />

                            {/*inner ears*/}
                            {earsShapeIndex === 2 && (
                                <OptionalBodyPartWrapper>
                                    {/*<BodyPartButton onClick={() => handleClickColour("innerEars")}>Inner ears</BodyPartButton>*/}
                                    {/*{ innerEarsClicked ?*/}
                                    { earsClicked ?
                                        <AdditionalColourWrapper id="innerEarsColour" className={product.innerEarsColour[innerEarsColourIndex]}>
                                            <div style={{textAlign: "center"}}>Inner ears</div>
                                            <BrownButton onClick={() => {setInnerEarsColour(product.innerEarsColour[0]); setInnerEarsColourIndex(0)}}/>
                                            <PinkButton onClick={() => {setInnerEarsColour(product.innerEarsColour[1]); setInnerEarsColourIndex(1)}}/>
                                            <BeigeButton onClick={() => {setInnerEarsColour(product.innerEarsColour[2]); setInnerEarsColourIndex(2)}}/>
                                            <CreamButton onClick={() => {setInnerEarsColour(product.innerEarsColour[3]); setInnerEarsColourIndex(3)}}/>
                                            <GrayButton onClick={() => {setInnerEarsColour(product.innerEarsColour[4]); setInnerEarsColourIndex(4)}}/>
                                            {/*<div>{'\n'}{product.innerEarsColour[innerEarsColourIndex]}</div>*/}
                                            {/*<div>{innerEarsColourIndex}</div>*/}
                                        </AdditionalColourWrapper>
                                    : null }
                                    <Image id="innerEarsImg" src={`/assets/innerEars/${product.innerEarsColour[innerEarsColourIndex]}/Inner ears.png`} style={{zIndex: "11"}}/>
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                    ))}
                    <EarsArrow direction="right" onClick={() => {handleEarsShape("right"); handleClickColour("ears")}}>
                        <ArrowRightOutlined />
                    </EarsArrow>
                </Wrapper>
            ))}

            {/*arms*/}
            {product.armsShape?.slice(0, 1).map(() => (
                <Wrapper key={product.armsShape[armsShapeIndex]} className={product.armsShape[armsShapeIndex]} >
                    <ArmsArrow direction="left" onClick={() => {handleArmsShape("left"); handleClickColour("arms")}} >
                        <ArrowLeftOutlined />
                    </ArmsArrow>
                    {product.armsColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.armsColour[armsColourIndex]}>
                            {/*<BodyPartButton onClick={() => handleClickColour("arms")}>Arms</BodyPartButton>*/}
                            { armsClicked ?
                                <ColourWrapper id="armsColour" className={product.armsColour[armsColourIndex]}>
                                    <div style={{textAlign: "center"}}>Arms</div>
                                    <BrownButton onClick={() => {setArmsColour(product.armsColour[0]); setArmsColourIndex(0)}}/>
                                    <PinkButton onClick={() => {setArmsColour(product.armsColour[1]); setArmsColourIndex(1)}}/>
                                    <BeigeButton onClick={() => {setArmsColour(product.armsColour[2]); setArmsColourIndex(2)}}/>
                                    <CreamButton onClick={() => {setArmsColour(product.armsColour[3]); setArmsColourIndex(3)}}/>
                                    <GrayButton onClick={() => {setArmsColour(product.armsColour[4]); setArmsColourIndex(4)}}/>
                                    {/*<div>{'\n'}{product.armsShape[armsShapeIndex]}</div>*/}
                                    {/*<div>{product.armsColour[armsColourIndex]}</div>*/}
                                    {/*<div>{armsColourIndex}</div>*/}
                                </ColourWrapper>
                                : null }
                            <Image id="armsImg" src={`/assets/arms/${product.armsColour[armsColourIndex]}/${product.armsShape[armsShapeIndex]}.png`} style={{zIndex: "10"}}/>

                            {/*hands*/}
                            {(armsShapeIndex === 3 || armsShapeIndex === 4) && (
                                <OptionalBodyPartWrapper>
                                    {/*<BodyPartButton onClick={() => handleClickColour("hands")}>Hands</BodyPartButton>*/}
                                    {/*{ handsClicked ?*/}
                                    { armsClicked ?
                                        <AdditionalColourWrapper id="handsColour" className={product.handsColour[handsColourIndex]}>
                                            <div style={{textAlign: "center"}}>Hands</div>
                                            <BrownButton onClick={() => {setHandsColour(product.handsColour[0]); setHandsColourIndex(0)}}/>
                                            <PinkButton onClick={() => {setHandsColour(product.handsColour[1]); setHandsColourIndex(1)}}/>
                                            <BeigeButton onClick={() => {setHandsColour(product.handsColour[2]); setHandsColourIndex(2)}}/>
                                            <CreamButton onClick={() => {setHandsColour(product.handsColour[3]); setHandsColourIndex(3)}}/>
                                            <GrayButton onClick={() => {setHandsColour(product.handsColour[4]); setHandsColourIndex(4)}}/>
                                            {/*<div>{'\n'}{product.handsColour[handsColourIndex]}</div>*/}
                                            {/*<div>{handsColourIndex}</div>*/}
                                        </AdditionalColourWrapper>
                                        : null }
                                    {/*hands*/}
                                    {armsShapeIndex === 3 && (
                                        <Image id="handsImg" src={`/assets/hands/${product.handsColour[handsColourIndex]}/Hands.png`} style={{zIndex: "11"}}/>
                                    )}
                                    {/*hands & fingernails*/}
                                    {armsShapeIndex === 4 && (
                                        <Image id="handsImg" src={`/assets/hands/${product.handsColour[handsColourIndex]}/Hands & fingernails.png`} style={{zIndex: "11"}}/>
                                    )}
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                    ))}
                    <ArmsArrow direction="right" onClick={() => {handleArmsShape("right"); handleClickColour("arms")}}>
                        <ArrowRightOutlined />
                    </ArmsArrow>
                </Wrapper>
            ))}

            {/*legs*/}
            {product.legsShape?.slice(0, 1).map(() => (
                <Wrapper key={product.legsShape[legsShapeIndex]} className={product.legsShape[legsShapeIndex]} >
                    <LegsArrow direction="left" onClick={() => {handleLegsShape("left"); handleClickColour("legs")}} >
                        <ArrowLeftOutlined />
                    </LegsArrow>
                    {product.legsColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.legsColour[legsColourIndex]}>
                            {/*<BodyPartButton onClick={() => handleClickColour("legs")}>Legs</BodyPartButton>*/}
                            { legsClicked ?
                                <ColourWrapper id="legsColour" className={product.legsColour[legsColourIndex]}>
                                    <div style={{textAlign: "center"}}>Legs</div>
                                    <BrownButton onClick={() => {setLegsColour(product.legsColour[0]); setLegsColourIndex(0)}}/>
                                    <PinkButton onClick={() => {setLegsColour(product.legsColour[1]); setLegsColourIndex(1)}}/>
                                    <BeigeButton onClick={() => {setLegsColour(product.legsColour[2]); setLegsColourIndex(2)}}/>
                                    <CreamButton onClick={() => {setLegsColour(product.legsColour[3]); setLegsColourIndex(3)}}/>
                                    <GrayButton onClick={() => {setLegsColour(product.legsColour[4]); setLegsColourIndex(4)}}/>
                                    {/*<div>{'\n'}{product.legsShape[legsShapeIndex]}</div>*/}
                                    {/*<div>{product.legsColour[legsColourIndex]}</div>*/}
                                    {/*<div>{legsColourIndex}</div>*/}
                                </ColourWrapper>
                                : null }
                            <Image id="legsImg" src={`/assets/legs/${product.legsColour[legsColourIndex]}/${product.legsShape[legsShapeIndex]}.png`} style={{zIndex: "9"}}/>

                            {/*feet*/}
                            {(legsShapeIndex === 3 || legsShapeIndex === 4) && (
                                <OptionalBodyPartWrapper>
                                    {/*<BodyPartButton onClick={() => handleClickColour("feet")}>Feet</BodyPartButton>*/}
                                    {/*{ feetClicked ?*/}
                                    { legsClicked ?
                                        <AdditionalColourWrapper id="feetColour" className={product.feetColour[feetColourIndex]}>
                                            <div style={{textAlign: "center"}}>Feet</div>
                                            <BrownButton onClick={() => {setFeetColour(product.feetColour[0]); setFeetColourIndex(0)}}/>
                                            <PinkButton onClick={() => {setFeetColour(product.feetColour[1]); setFeetColourIndex(1)}}/>
                                            <BeigeButton onClick={() => {setFeetColour(product.feetColour[2]); setFeetColourIndex(2)}}/>
                                            <CreamButton onClick={() => {setFeetColour(product.feetColour[3]); setFeetColourIndex(3)}}/>
                                            <GrayButton onClick={() => {setFeetColour(product.feetColour[4]); setFeetColourIndex(4)}}/>
                                            {/*<div>{'\n'}{product.feetColour[feetColourIndex]}</div>*/}
                                            {/*<div>{feetColourIndex}</div>*/}
                                        </AdditionalColourWrapper>
                                        : null }
                                    {/*feet*/}
                                    {legsShapeIndex === 3 && (
                                        <Image id="feetImg" src={`/assets/feet/${product.feetColour[feetColourIndex]}/Feet.png`} style={{zIndex: "10"}}/>
                                    )}
                                    {/*feet & toenails*/}
                                    {legsShapeIndex === 4 && (
                                        <Image id="feetImg" src={`/assets/feet/${product.feetColour[feetColourIndex]}/Feet & toenails.png`} style={{zIndex: "10"}}/>
                                    )}
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                    ))}
                    <LegsArrow direction="right" onClick={() => {handleLegsShape("right"); handleClickColour("legs")}}>
                        <ArrowRightOutlined />
                    </LegsArrow>
                </Wrapper>
            ))}


            {/* size selection */}
            {/*<SelectionContainer>*/}
            {/*    <FilterSize onChange={(e) => setSize(e.target.value)}>*/}
            {/*        {product.size?.map((s) => (*/}
            {/*            <FilterSizeOption key={s}>{s}</FilterSizeOption>*/}
            {/*        ))}*/}
            {/*    </FilterSize>*/}
            {/*</SelectionContainer>*/}

            <NavbarLink to={"/cart"}>
                <ConfirmButton onClick={handleConfirm}>Confirm</ConfirmButton>
            </NavbarLink>

            {/*<Image src={item.img} key={item._id}/>*/}
            {/*<Info>{item.title}*/}
            {/*</Info>*/}
            {/*<Info>{item.desc}*/}
            {/*</Info>*/}
        </Container>
    );
};

export default Product;

const Container = styled.div`
`;

const Span = styled.span`
   & {
     margin: 0;
     padding: 1rem 0;
     font-size: 1.5rem;
     display: inline-flex;
     width: 50%;
   }
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
`
const RButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  top: 10rem;
  position: absolute;
`
const RButton = withTheme(styled.button`
  padding: 1.5rem;
  margin: 1.5rem 0;
  background-color: ${props => props.theme.palette.default.main};
  border: none;
  border-radius: 0 5% 5% 0;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`)

const BodyPartButtonWrapper = styled.div`
    text-align: right;
`
const BodyPartButton = styled.button`
    padding: 1em 2em;
    border-radius: 10px;
    background-color: #98878f;
    border: none;
    margin: 0.2em;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`
const colourButton = css`
   border-radius: 50%;
   height: 3rem;
   width: 3rem;
   border: none;
   cursor: pointer;
   margin: 0.3rem;
   box-shadow: 0 10px 10px rgba(0, 0, 0, 0.75);
`
const BrownButton = styled.button`
   ${colourButton};
   background-color: #835632;
`
const PinkButton = styled.button`
   ${colourButton};
   background-color: #D0A9A4;
`
const BeigeButton = styled.button`
   ${colourButton};
   background-color: #E2CDAD;
`
const CreamButton = styled.button`
   ${colourButton};
   background-color: #F5EBD3;
`
const GrayButton = styled.button`
   ${colourButton};
   background-color: #BCBCBC;
`

const Image = styled.img`
  position: absolute;
  left: 0;
  margin: auto;
  right: 20%;
  top: 5em;
  bottom: 0;
  height: 75%;
  padding: 2em 8em;
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
`

const NavbarLink = withTheme(styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.palette.primary.main};
 `)
const ConfirmButton = styled.button`
  position: absolute;
  right: 7em;
  bottom: 7em;
  padding: 2em 3em;
  border-radius: 20px;
  border: none;
  background-color: #4c4f6b;
  color: #fff;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
`
// const Button = styled.button`
//  `

// const SelectionContainer = styled.div`
//    display: inline-flex;
//    flex-direction: column;
// `
// const FilterSize = styled.select`
//  `
// const FilterSizeOption = styled.option`
//  `

const sharedStyleForArrows = css`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "20%"};
  right: ${(props) => props.direction === "right" && "40%"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 20;
`
const EarsArrow = styled.div`
  ${sharedStyleForArrows};
  top: -15rem;
`;
const HeadArrow = styled.div`
  ${sharedStyleForArrows};
  top: -5rem;
`;
const ArmsArrow = styled.div`
  ${sharedStyleForArrows};
  top: 10rem;
`;
const LegsArrow = styled.div`
  ${sharedStyleForArrows};
  top: 30rem;
`;
const Wrapper = styled.div`
  height: 100%;
  display: inline-flex;
  transition: all 1.5s ease;
`;
const ColourWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  position: absolute;
  right: 10em;
  top: 16rem;
`;
const AdditionalColourWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  position: absolute;
  right: 5em;
  top: 16rem;
`
const OptionalBodyPartWrapper = styled.div`
`


