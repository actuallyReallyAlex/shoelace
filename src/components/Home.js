import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Home = () => {
  return (
    <Container id="home-container">
      <span>HOME</span>
    </Container>
  );
};

export default Home;
