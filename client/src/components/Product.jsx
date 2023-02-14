import styled from "styled-components";
// import mergeImages from "merge-images";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import {withTheme} from "@material-ui/core/styles";

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
    const [headShape, setHeadShape] = useState("Smile");
    const [earsShape, setEarsShape] = useState("Small");
    const [armsShape, setArmsShape] = useState("Short");
    const [legsShape, setLegsShape] = useState("Short");

    const [headColour, setHeadColour] = useState("Brown");
    const [earsColour, setEarsColour] = useState("Brown");
    const [armsColour, setArmsColour] = useState("Brown");
    const [legsColour, setLegsColour] = useState("Brown");

    const [eyesColour, setEyesColour] = useState("Black");
    const [innerEarsColour, setInnerEarsColour] = useState("Same as ears");
    const [handsColour, setHandsColour] = useState("Same as arms");
    const [feetColour, setFeetColour] = useState("Same as legs");
    const [size, setSize] = useState("Small");

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
            } catch(err) {
                return console.log(err);
            }
        }
        getProducts();
    }, [item, id]);

    //update cart
    const handleClick = () => {
        dispatch(
            addProduct({...product, productQuantity, headShape, earsShape, armsShape, legsShape, headColour, eyesColour, earsColour, innerEarsColour, armsColour, handsColour, legsColour, feetColour, size})
        )
    }

    return (
        <Container>
            {/*local img*/}
            {/*<Image id="mis"/>*/}

            {/*img from database*/}
            <Image src={product.img} key={product._id}/>
            <Info>{product.title}
            </Info>
            <Info>{product.desc}
            </Info>

            {/*shape*/}
            <SelectionContainer>
                <FilterShape onChange={(e) => setHeadShape(e.target.value)}>
                    {product.headShape?.map((s) => (
                        <FilterShapeOption key={s}>{s}</FilterShapeOption>
                    ))}
                </FilterShape>
                <FilterShape onChange={(e) => setEarsShape(e.target.value)}>
                    {product.earsShape?.map((s) => (
                        <FilterShapeOption key={s}>{s}</FilterShapeOption>
                    ))}
                </FilterShape>
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
                <FilterColour onChange={(e) => setHeadColour(e.target.value)}>
                    {product.headColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterColour>
                <FilterColour onChange={(e) => setEarsColour(e.target.value)}>
                    {product.earsColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterColour>
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
                <FilterEyesColour onChange={(e) => setEyesColour(e.target.value)}>
                    {product.eyesColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterEyesColour>
                <FilterInnerEarsColour onChange={(e) => setInnerEarsColour(e.target.value)}>
                    {product.innerEarsColour?.map((c) => (
                        <FilterColourOption key={c}>{c}</FilterColourOption>
                    ))}
                </FilterInnerEarsColour>
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
                <Button onClick={handleClick}>Confirm</Button>
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

const Info = styled.div`
   display: flex;
   flex-direction: column;
 `;

const Container = styled.div`
   height: 350px;
   display: flex;
`;
const SelectionContainer = styled.div`
   display: flex;
   flex-direction: column;
`

const Image = styled.img`
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
const FilterEyesColour = styled.select`
 `
const FilterInnerEarsColour = styled.select`
 `
const FilterHandsColour = styled.select`
 `
const FilterFeetColour = styled.select`
 `

const FilterSize = styled.select`
 `
const FilterSizeOption = styled.option`
 `


