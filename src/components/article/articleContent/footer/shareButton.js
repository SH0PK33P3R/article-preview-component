import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as ShareIcon } from "./icon-share.svg";

const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  border-radius: 100%;
  justify-content: center;
  background-color: hsl(210, 46%, 95%);

  &:hover {
    background-color: hsl(217, 19%, 35%);
    path {
      fill: white !important;
    }
  }
`;

const Icon = styled(ShareIcon)`
  margin-top: -2px;
  margin-left: 1px;
`;

const ShareButton = () => {
  const [shareOverlay, setShareOverlay] = useState(false);

  const clickHandler = () => {
    setShareOverlay(!shareOverlay);
  };

  return (
    <Wrapper onClick={clickHandler}>
      <Icon />
    </Wrapper>
  );
};

export default ShareButton;
