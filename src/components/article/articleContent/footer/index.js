import React from "react";
import styled from "styled-components";

import Chip from "components/chip";

import ShareButton from "./shareButton";

const Wrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
`;

const Footer = ({ authorInfo, date }) => {
  return (
    <Wrapper>
      <Chip name={authorInfo.name} date={date} image={authorInfo.image} />
      <ShareButton />
    </Wrapper>
  );
};

export default Footer;
