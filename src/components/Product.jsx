import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();

 const handleAddCart = () => {
   try {
     let sizeToAdd = "M";
     if (item.size && item.size.includes("M")) {
       sizeToAdd = "M";
     } else if (item.size && item.size.length > 0) {
       sizeToAdd = item.size[0];
     }
     const productToAdd = {
       ...item,
       quantity: 1,
       color: item.color && item.color.length > 0 ? item.color[0] : "",
       size: sizeToAdd,
     };
     dispatch(addProduct(productToAdd));
     console.log(productToAdd);
   } catch (err) {
     console.log(err);
   }
 };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Link style={{ color: "black" }} onClick={handleAddCart}>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </Link>
        <Icon>
          <Link style={{ color: "black" }} to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;