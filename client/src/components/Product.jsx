// import {
//     FavoriteBorderOutlined,
//     SearchOutlined,
//     ShoppingCartOutlined,
// } from "@material-ui/icons";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import mergeImages from "merge-images";
import React from "react";



const Product = ({ item }) => {

    async function xyz() {
        await mergeImages(['http://localhost:3000/static/media/uszy.95f309a756b72a842cfa.png', 'http://localhost:3000/static/media/glowa.8843494bc3e645fc3839.png'])
            .then((mergedSrc) => {
                document.getElementById("mis").src = mergedSrc;
            })
            .catch(error => console.log(error));
    }
    xyz();

    return (
        <Container>
            {/*<Circle />*/}
            {/*<Image id="mis"/>*/}


            <Image src={item.img} key={item._id}/>
            <Info>{item.title}
            </Info>
            <Info>{item.desc}
            </Info>

                {/*<Icon>*/}
                {/*    <ShoppingCartOutlined />*/}
                {/*</Icon>*/}
                {/*<Icon>*/}
                {/*    <Link to={`/products/${item._id}`} key={item._id}>*/}
                {/*        <SearchOutlined />*/}
                {/*    </Link>*/}
                {/*</Icon>*/}
                {/*<Icon>*/}
                {/*    <FavoriteBorderOutlined />*/}
                {/*</Icon>*/}
        </Container>
    );
};

export default Product;

const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
   display: flex;
   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
 `;

const Container = styled.div`
   //flex: 1;
  // margin: 5px;
  // min-width: 280px;
   height: 350px;
   display: flex;
  // align-items: center;
  // justify-content: center;
  // background-color: #f5fbfd;
  // position: relative;
 
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;




// import {
//     FavoriteBorderOutlined,
//     SearchOutlined,
//     ShoppingCartOutlined,
// } from "@material-ui/icons";
// import styled from "styled-components";
//
// const Info = styled.div`
//   opacity: 0;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: all 0.5s ease;
//   cursor: pointer;
// `;
//
// const Container = styled.div`
//   flex: 1;
//   margin: 5px;
//   min-width: 280px;
//   height: 350px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f5fbfd;
//   position: relative;
//
//   &:hover ${Info}{
//     opacity: 1;
//   }
// `;
//
// const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: white;
//   position: absolute;
// `;
//
// const Image = styled.img`
//   height: 75%;
//   z-index: 2;
// `;
//
// const Icon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px;
//   transition: all 0.5s ease;
//   &:hover {
//     background-color: #e9f5f5;
//     transform: scale(1.1);
//   }
// `;
//
// const Product = ({ item }) => {
//     return (
//         <Container>
//             <Circle />
//             <Image src={item.img} />
//             <Info>
//                 <Icon>
//                     <ShoppingCartOutlined />
//                 </Icon>
//                 <Icon>
//                     <SearchOutlined />
//                 </Icon>
//                 <Icon>
//                     <FavoriteBorderOutlined />
//                 </Icon>
//             </Info>
//         </Container>
//     );
// };
//
// export default Product;