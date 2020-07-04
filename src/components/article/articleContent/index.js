import React from "react";
import styled from "styled-components";

import Footer from "./footer";

const Title = styled.h1`
  margin-top: 0px;
  color: hsl(217, 19%, 35%);
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 20px;
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 13px;
`;

const TextContent = styled.div`
  font-weight: 500;
  width: 360px;
  padding: 25px;
`;

const ArticleContent = ({ title, body, ...rest }) => {
  return (
    <TextContent>
      <Title>{title}</Title>
      <Paragraph>{body}</Paragraph>
      <Footer {...rest} />
    </TextContent>
  );
};

export default ArticleContent;
