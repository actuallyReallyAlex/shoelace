import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Home = ({ setStage, store }) => {
  console.log(store.get("pastFiles"));
  return (
    <Container id="home-container">
      <span>HOME</span>
      <Button onClick={() => setStage("input")}>INPUT</Button>
      <Button onClick={() => setStage("output")}>OUTPUT</Button>
      <Button onClick={() => store.set("pastFiles", [])}>Clear History</Button>
      {store.get("pastFiles").map(pastFile => (
        <pre key={pastFile.id}>{JSON.stringify(pastFile, null, 2)}</pre>
      ))}
    </Container>
  );
};

export default Home;
