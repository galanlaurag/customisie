import styled from "styled-components";
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
    // console.log("location = " + location.pathname);
    const productQuantity = 1;
    const dispatch = useDispatch();
    const [product, setProduct] = useState([]);
    const [headShape, setHeadShape] = useState();
    const [earsShape, setEarsShape] = useState();
    const [armsShape, setArmsShape] = useState();
    const [legsShape, setLegsShape] = useState();

    const [headColour, setHeadColour] = useState();
    const [earsColour, setEarsColour] = useState();
    const [armsColour, setArmsColour] = useState();
    const [legsColour, setLegsColour] = useState();

    const [eyesColour, setEyesColour] = useState();
    const [noseColour, setNoseColour] = useState();
    const [innerEarsColour, setInnerEarsColour] = useState();
    const [handsColour, setHandsColour] = useState();
    const [feetColour, setFeetColour] = useState();
    const [size, setSize] = useState();

    useEffect(() =>{
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

    //change
    const [headShapeIndex, setHeadShapeIndex] = useState(0);
    const [headColourIndex, setHeadColourIndex] = useState(1);
    const [earsShapeIndex, setEarsShapeIndex] = useState(0);
    const [earsColourIndex, setEarsColourIndex] = useState(0);
    const [eyesColourIndex, setEyesColourIndex] = useState(0);
    const [noseColourIndex, setNoseColourIndex] = useState(0);
    const [innerEarsColourIndex, setInnerEarsColourIndex] = useState(0);
    const handleBodyShape = (direction) => {
        if (direction === "left") {
            setHeadShapeIndex(headShapeIndex > 0 ? headShapeIndex - 1 : 4);
        } else {
            setHeadShapeIndex(headShapeIndex < 4 ? headShapeIndex + 1 : 0);
        }
    };
    const handleEarsShape = (direction) => {
        if (direction === "left") {
            setEarsShapeIndex(earsShapeIndex > 0 ? earsShapeIndex - 1 : 4);
        } else {
            setEarsShapeIndex(earsShapeIndex < 4 ? earsShapeIndex + 1 : 0);
        }
    };

    //show and hide colour selections
    const [headClicked, setHeadClicked] = React.useState(false);
    const [eyesClicked, setEyesClicked] = React.useState(false);
    const [noseClicked, setNoseClicked] = React.useState(false);
    const [earsClicked, setEarsClicked] = React.useState(false);
    const [innerEarsClicked, setInnerEarsClicked] = React.useState(false);
    const handleClickColour = (bodyPart) => {
        if (bodyPart === "head") {
            setHeadClicked(true);
            setEyesClicked(false);
            setNoseClicked(false);
            setEarsClicked(false);
            setInnerEarsClicked(false);
        } else if (bodyPart === "eyes") {
            setEyesClicked(true);
            setHeadClicked(false);
            setNoseClicked(false);
            setEarsClicked(false);
            setInnerEarsClicked(false);
        } else if (bodyPart === "nose") {
            setNoseClicked(true);
            setHeadClicked(false);
            setEyesClicked(false);
            setEarsClicked(false);
            setInnerEarsClicked(false);
        } else if (bodyPart === "ears") {
            setEarsClicked(true);
            setHeadClicked(false);
            setEyesClicked(false);
            setNoseClicked(false);
            setInnerEarsClicked(false);
        } else if (bodyPart === "innerEars") {
            setInnerEarsClicked(true);
            setHeadClicked(false);
            setEyesClicked(false);
            setNoseClicked(false);
            setEarsClicked(false);
        }
    }

    // const handleClickColour = (colour) => {
    //     setHeadColourIndex(  0);
    //     if (colour === "brown") {
    //         setHeadColourIndex(0)
    //     } else if (colour === "pink") {
    //         setHeadColourIndex(  1);
    //     } else if (colour === "beige") {
    //         setHeadColourIndex( 2);
    //     } else if (colour === "cream") {
    //         setHeadColourIndex( 3);
    //     } else if (colour === "grey") {
    //         setHeadColourIndex(4);
    //     }
    //     console.log(colour + headColourIndex)
    // };

    return (
        <Container>
            {/*local img*/}
            {/*<Image id="mis"/>*/}


            {/*<Image src={product.img} key={product._id}/>*/}
            {/*<Info>{product.title}*/}
            {/*</Info>*/}
            {/*<Info>{product.desc}*/}
            {/*</Info>*/}


            {/*head*/}
            <Wrapper headShapeIndex={headShapeIndex}/>
            {product.headShape?.slice(0, 1).map(() => (
                <Wrapper key={product.headShape[headShapeIndex]} className={product.headShape[headShapeIndex]} >
                    <HeadArrow direction="left" onClick={() => {handleBodyShape("left"); setHeadShape(product.headShape[headShapeIndex-1])}} >
                        <ArrowLeftOutlined />
                    </HeadArrow>
                    {product.headColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.headColour[headColourIndex]} className={product.headColour[headColourIndex]}>
                            <Button onClick={() => handleClickColour("head")}>Head</Button>
                            { headClicked ?
                                <ColourWrapper id="headColour" style={{border: "1px solid blue"}}>
                                    <Button onClick={() => {setHeadColour(product.headColour[0]); setHeadColourIndex(0)}}>Brown</Button>
                                    <Button onClick={() => {setHeadColour(product.headColour[1]); setHeadColourIndex(1)}}>Pink</Button>
                                    <Button onClick={() => {setHeadColour(product.headColour[2]); setHeadColourIndex(2)}}>Beige</Button>
                                    <Button onClick={() => {setHeadColour(product.headColour[3]); setHeadColourIndex(3)}}>Cream</Button>
                                    <Button onClick={() => {setHeadColour(product.headColour[4]); setHeadColourIndex(4)}}>Grey</Button>
                                    {/*<div>{product.headShape[headShapeIndex]}</div>*/}
                                    {/*<div>{product.headColour[headColourIndex]}</div>*/}
                                    {/*<div>{headColourIndex}</div>*/}
                                </ColourWrapper>
                            : null}
                            <Image id="headImg" src={`/assets/head/${product.headColour[headColourIndex]}/${product.headShape[headShapeIndex]}.png`} style={{zIndex: "10"}}/>


                            {/*eyes*/}
                            {(headShapeIndex === 2 || headShapeIndex === 3) && (
                                <OptionalBodyPartWrapper>
                                    <Button onClick={() => handleClickColour("eyes")}>Eyes</Button>
                                    { eyesClicked ?
                                        <ColourWrapper id="eyesColour" style={{border: "1px solid red"}}>
                                            <Button onClick={() => {setEyesColour(product.eyesColour[0]); setEyesColourIndex(0)}}>Brown</Button>
                                            <Button onClick={() => {setEyesColour(product.eyesColour[1]); setEyesColourIndex(1)}}>Pink</Button>
                                            <Button onClick={() => {setEyesColour(product.eyesColour[2]); setEyesColourIndex(2)}}>Beige</Button>
                                            <Button onClick={() => {setEyesColour(product.eyesColour[3]); setEyesColourIndex(3)}}>Cream</Button>
                                            <Button onClick={() => {setEyesColour(product.eyesColour[4]); setEyesColourIndex(4)}}>Grey</Button>
                                            {/*<div>{product.eyesColour[eyesColourIndex]}</div>*/}
                                            {/*<div>{eyesColourIndex}</div>*/}
                                        </ColourWrapper>
                                    : null }
                                    {/*one eye*/}
                                    {headShapeIndex === 2 && (
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eye.png`} style={{zIndex: "11"}}/>
                                    )}
                                    {/*two eyes*/}
                                    {headShapeIndex === 3 && (
                                        <Image id="eyesImg" src={`/assets/eyes/${product.eyesColour[eyesColourIndex]}/Eyes.png`} style={{zIndex: "11"}}/>
                                    )}
                                </OptionalBodyPartWrapper>
                            )}


                            {/*nose*/}
                            {headShapeIndex === 0 && (
                                <OptionalBodyPartWrapper>
                                    <Button onClick={() => handleClickColour("nose")}>Nose</Button>
                                    { noseClicked ?
                                        <ColourWrapper id="noseColour" style={{border: "1px solid purple"}}>
                                            <Button onClick={() => {setNoseColour(product.noseColour[0]); setNoseColourIndex(0)}}>Brown</Button>
                                            <Button onClick={() => {setNoseColour(product.noseColour[1]); setNoseColourIndex(1)}}>Pink</Button>
                                            <Button onClick={() => {setNoseColour(product.noseColour[2]); setNoseColourIndex(2)}}>Beige</Button>
                                            <Button onClick={() => {setNoseColour(product.noseColour[3]); setNoseColourIndex(3)}}>Cream</Button>
                                            <Button onClick={() => {setNoseColour(product.noseColour[4]); setNoseColourIndex(4)}}>Grey</Button>
                                            {/*<div>{'\n'}{product.noseColour[noseColourIndex]}</div>*/}
                                            {/*<div>{noseColourIndex}</div>*/}
                                        </ColourWrapper>
                                    : null }
                                    <Image id="noseImg" src={`/assets/nose/${product.noseColour[noseColourIndex]}/Nose.png`} style={{zIndex: "11"}}/>
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                        ))}
                    <HeadArrow direction="right" onClick={() => {handleBodyShape("right"); setHeadShape(product.headShape[headShapeIndex+1])}}>
                        <ArrowRightOutlined />
                    </HeadArrow>
                </Wrapper>
            ))}
            {product.earsShape?.slice(0, 1).map(() => (
                <Wrapper key={product.earsShape[earsShapeIndex]} className={product.earsShape[earsShapeIndex]} >
                    <EarsArrow direction="left" onClick={() => {handleEarsShape("left"); setEarsShape(product.earsShape[earsShapeIndex-1])}} >
                        <ArrowLeftOutlined />
                    </EarsArrow>
                    {product.earsColour?.slice(0, 1).map(() => (
                        <Wrapper key={product.earsColour[earsColourIndex]} className={product.earsColour[earsColourIndex]}>
                            <Button onClick={() => handleClickColour("ears")}>Ears</Button>
                            { earsClicked ?
                                <ColourWrapper id="earsColour" style={{border: "1px solid pink"}}>
                                    <Button onClick={() => {setEarsColour(product.earsColour[0]); setEarsColourIndex(0)}}>Brown</Button>
                                    <Button onClick={() => {setEarsColour(product.earsColour[1]); setEarsColourIndex(1)}}>Pink</Button>
                                    <Button onClick={() => {setEarsColour(product.earsColour[2]); setEarsColourIndex(2)}}>Beige</Button>
                                    <Button onClick={() => {setEarsColour(product.earsColour[3]); setEarsColourIndex(3)}}>Cream</Button>
                                    <Button onClick={() => {setEarsColour(product.earsColour[4]); setEarsColourIndex(4)}}>Grey</Button>
                                    {/*<div>{'\n'}{product.earsShape[earsShapeIndex]}</div>*/}
                                    {/*<div>{product.earsColour[earsColourIndex]}</div>*/}
                                    {/*<div>{earsColourIndex}</div>*/}
                                </ColourWrapper>
                            : null }
                            <Image id="earsImg" src={`/assets/ears/${product.earsColour[earsColourIndex]}/${product.earsShape[earsShapeIndex]}.png`} />

                            {/*inner ears*/}
                            {earsShapeIndex === 2 && (
                                <OptionalBodyPartWrapper>
                                    <Button onClick={() => handleClickColour("innerEars")}>Inner ears</Button>
                                    { innerEarsClicked ?
                                        <ColourWrapper id="innerEarsColour" style={{border: "1px solid yellow"}}>
                                            <Button onClick={() => {setInnerEarsColour(product.innerEarsColour[0]); setInnerEarsColourIndex(0)}}>Brown</Button>
                                            <Button onClick={() => {setInnerEarsColour(product.innerEarsColour[1]); setInnerEarsColourIndex(1)}}>Pink</Button>
                                            <Button onClick={() => {setInnerEarsColour(product.innerEarsColour[2]); setInnerEarsColourIndex(2)}}>Beige</Button>
                                            <Button onClick={() => {setInnerEarsColour(product.innerEarsColour[3]); setInnerEarsColourIndex(3)}}>Cream</Button>
                                            <Button onClick={() => {setInnerEarsColour(product.innerEarsColour[4]); setInnerEarsColourIndex(4)}}>Grey</Button>
                                            {/*<div>{'\n'}{product.innerEarsColour[innerEarsColourIndex]}</div>*/}
                                            {/*<div>{innerEarsColourIndex}</div>*/}
                                        </ColourWrapper>
                                        : null }
                                    <Image id="innerEarsImg" src={`/assets/innerEars/${product.innerEarsColour[innerEarsColourIndex]}/Inner ears.png`} style={{zIndex: "11"}}/>
                                </OptionalBodyPartWrapper>
                            )}
                        </Wrapper>
                    ))}
                    <EarsArrow direction="right" onClick={() => {handleEarsShape("right"); setEarsShape(product.earsShape[earsShapeIndex+1])}}>
                        <ArrowRightOutlined />
                    </EarsArrow>
                </Wrapper>
            ))}


            <SelectionContainer>
                {/*replaced with arrows above*/}
                {/*<FilterShape onChange={(e) => setHeadShape(e.target.value)}>*/}
                {/*    {product.headShape?.map((s) => (*/}
                {/*        <FilterShapeOption key={s}>{s}</FilterShapeOption>*/}
                {/*    ))}*/}
                {/*</FilterShape>*/}
                {/*<FilterShape onChange={(e) => setEarsShape(e.target.value)}>*/}
                {/*    {product.earsShape?.map((s) => (*/}
                {/*        <FilterShapeOption key={s}>{s}</FilterShapeOption>*/}
                {/*    ))}*/}
                {/*</FilterShape>*/}
                <FilterShape onChange={(e) => setArmsShape(e.target.value)}>
                    {product.armsShape?.map((s) => (
                        <FilterShapeOption key={s}>{s}</FilterShapeOption>
                    ))}
                </FilterShape>
                <FilterShape onChange={(e) => setLegsShape(e.target.value)}>
                    {product.legsShape?.map((s) => (
                        <FilterShapeOption key={s}>{s}</FilterShapeOption>
                    ))}
                </FilterShape>

                {/*colour*/}
                {/*<FilterColour onChange={(e) => setHeadColour(e.target.value)}>*/}
                {/*    {product.headColour?.map((c) => (*/}
                {/*        <FilterColourOption key={c}>{c}</FilterColourOption>*/}
                {/*    ))}*/}
                {/*</FilterColour>*/}
                {/*<FilterColour onChange={(e) => setEarsColour(e.target.value)}>*/}
                {/*    {product.earsColour?.map((c) => (*/}
                {/*        <FilterColourOption key={c}>{c}</FilterColourOption>*/}
                {/*    ))}*/}
                {/*</FilterColour>*/}
                <FilterColour onChange={(e) => setArmsColour(e.target.value)}>
                    {product.armsColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterColour>
                <FilterColour onChange={(e) => setLegsColour(e.target.value)}>
                    {product.legsColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterColour>
                {/*additional colours*/}
                {/*<FilterEyesColour onChange={(e) => setEyesColour(e.target.value)}>*/}
                {/*    {product.eyesColour?.map((c) => (*/}
                {/*        <FilterColourOption key={c}>{c}</FilterColourOption>*/}
                {/*    ))}*/}
                {/*</FilterEyesColour>*/}
                {/*<FilterInnerEarsColour onChange={(e) => setInnerEarsColour(e.target.value)}>*/}
                {/*    {product.innerEarsColour?.map((c) => (*/}
                {/*        <FilterColourOption key={c}>{c}</FilterColourOption>*/}
                {/*    ))}*/}
                {/*</FilterInnerEarsColour>*/}
                <FilterHandsColour onChange={(e) => setHandsColour(e.target.value)}>
                    {product.handsColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterHandsColour>
                <FilterFeetColour onChange={(e) => setFeetColour(e.target.value)}>
                    {product.feetColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterFeetColour>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                    {product.size?.map((s) => (
                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                    ))}
                </FilterSize>
            </SelectionContainer>


            <NavbarLink to={"/cart"}>
                <Button onClick={handleConfirm}>Confirm</Button>
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

// const Info = styled.div`
//    display: flex;
//    flex-direction: column;
//  `;

const Container = styled.div`
   height: 50px;
   display: flex;
`;
const SelectionContainer = styled.div`
   display: flex;
   flex-direction: column;
`

const Image = styled.img`
  position: absolute;
  left: 5em;
  top: 15em;
  height: 75%;
  z-index: 2;
`;

const NavbarLink = withTheme(styled(Link)`
   text-decoration: none;
   color: ${props => props.theme.palette.primary.main};
 `)
const Button = styled.button`
 `


const FilterShape = styled.select`
 `
const FilterShapeOption = styled.option`
 `
const FilterColour = styled.select`
 `
const FilterColourOption = styled.option`
 `

//additional shapes & colours
// const FilterEyesColour = styled.select`
//  `
// const FilterInnerEarsColour = styled.select`
//  `
const FilterHandsColour = styled.select`
 `
const FilterFeetColour = styled.select`
 `

const FilterSize = styled.select`
 `
const FilterSizeOption = styled.option`
 `

const HeadArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7em;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const EarsArrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
`;
const ColourWrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  transition: all 1.5s ease;
  position: absolute;
  right: 10em;
  top: 25em;
`;
const OptionalBodyPartWrapper = styled.div`
`


