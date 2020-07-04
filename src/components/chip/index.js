import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 100%;
  background-size: cover;
  background-image: ${(props) => `url(${props.backgroundImage})`};
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: hsl(217, 19%, 35%);
`;

const Date = styled.span`
  font-size: 12px;
`;

const Chip = ({ name, date, image }) => {
  return (
    <Wrapper>
      <Img backgroundImage={image} />
      <Info>
        <Name>{name}</Name>
        <Date>{date}</Date>
      </Info>
    </Wrapper>
  );
};

export default Chip;
