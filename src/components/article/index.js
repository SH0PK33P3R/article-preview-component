import React from "react";
import styled from "styled-components";

import ArticleContent from "./articleContent";

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s;
  flex-direction: row;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.06);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.05);
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  width: 248px;
  height: auto;
  background-size: cover;
  background-position: left;
  background-image: ${(props) => `url(${props.src})`};

  @media only screen and (max-width: 750px) {
    width: auto;
    height: 248px;
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
