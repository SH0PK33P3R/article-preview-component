import React from "react";
import styled from "styled-components";

import Footer from "./footer";

const Title = styled.h1`
  font-size: 20px;
  margin-top: 0px;
  font-weight: 700;
  margin-bottom: 10px;
  color: hsl(217, 19%, 35%);
`;
const Paragraph = styled.p`
  margin: 0;
  font-size: 13px;
`;

const TextContent = styled.div`
  width: 360px;
  padding: 25px;
  font-weight: 500;
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
