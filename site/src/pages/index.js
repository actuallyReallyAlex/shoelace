import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify: center;
  width: 100vw;
`;

const HomePage = () => (
  <Container>
    <h1>Shoelace</h1>
    <a
      href="https://github.com/alexlee-dev/shoelace"
      rel="noopener noreferrer"
      target="_blank"
    >
      Source
    </a>
  </Container>
);

export default HomePage;
