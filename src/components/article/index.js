import React from "react";
import styled from "styled-components";

import ArticleContent from "./articleContent";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.05);
  }
`;

const Img = styled.div`
  width: 248px;
  background-size: cover;
  background-position: left;
  background-image: ${(props) => `url(${props.src})`};
`;

const Article = ({ image, ...rest }) => {
  return (
    <Wrapper>
      <Img src={image} />
      <ArticleContent {...rest} />
    </Wrapper>
  );
};

export default Article;
