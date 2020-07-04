import React from "react";
import styled from "styled-components";

import Article from "components/article";
import { posts, authors } from "data.js";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: hsl(210, 46%, 95%);
`;

const Spacer = styled.div`
  margin-bottom: ${() => (posts.length > 1 ? "15px" : "0")};
`;

function getAuthorByName(name) {
  return authors.find((author) => author.name === name) || authors[0];
}

function App() {
  return (
    <Wrapper>
      {posts.map(({ authorName, id, ...rest }) => {
        return (
          <Spacer key={id}>
            <Article authorInfo={getAuthorByName(authorName)} {...rest} />
          </Spacer>
        );
      })}
    </Wrapper>
  );
}

export default App;
