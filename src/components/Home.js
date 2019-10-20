import React from "react";
import styled from "styled-components";
import FileDisplay from "./FileDisplay";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

const PastFilesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Home = ({ store }) => {
  console.log(store.get("pastFiles"));
  return (
    <Container id="home-container">
      <PastFilesContainer>
        {store.get("pastFiles").map(pastFile => (
          <FileDisplay key={pastFile.id} pastFile={pastFile} />
        ))}
      </PastFilesContainer>
    </Container>
  );
};

export default Home;
