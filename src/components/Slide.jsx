import React from "react";
import styled from "styled-components";

const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;



const Slide = ({ img, title, desc, button, bgColor }) => {
  return (
    <SlideContainer bg={bgColor}>
      <ImgContainer>
        <Image src={img} />
      </ImgContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Button>{button}</Button>
      </InfoContainer>
    </SlideContainer>
  );
};

export default Slide;
