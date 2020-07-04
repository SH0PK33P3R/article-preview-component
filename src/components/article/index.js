import React from "react";
import styled from "styled-components";

import ArticleContent from "./articleContent";

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  transition: 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.05);
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  height: auto;
  width: 248px;
  background-size: cover;
  background-position: left;
  background-image: ${(props) => `url(${props.src})`};

  @media only screen and (max-width: 750px) {
    height: 248px;
    width: auto;
  }
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
