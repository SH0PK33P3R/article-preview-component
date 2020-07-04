import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const AuthorImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 100%;
  background-size: cover;
  background-image: url("avatar-michelle.jpg");
`;

const Name = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: hsl(217, 19%, 35%);
`;

const Date = styled.span`
  font-size: 12px;
`;

const AuthorBlock = () => {
  return (
    <Wrapper>
      <AuthorImg />
      <AuthorInfo>
        <Name>Michelle Appleton</Name>
        <Date>28 Jun 2020</Date>
      </AuthorInfo>
    </Wrapper>
  );
};

export default AuthorBlock;
