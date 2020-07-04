import React from "react";
import styled from "styled-components";

import ShareIcon from "./icon-share.svg";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: hsl(210, 46%, 95%);
  border-radius: 100%;
  &:hover {
    background-color: hsl(217, 19%, 35%);
  }
`;

const Img = styled.img`
  margin-top: -2px;
`;

const ShareButton = () => {
  return (
    <Wrapper>
      <Img src={ShareIcon} />
    </Wrapper>
  );
};

export default ShareButton;
