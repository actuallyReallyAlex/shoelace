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

const Home = ({ forceUpdate, store }) => {
  return (
    <Container id="home-container">
      <PastFilesContainer>
        {store.get("pastFiles").map(pastFile => (
          <FileDisplay
            forceUpdate={forceUpdate}
            key={pastFile.id}
            pastFile={pastFile}
            store={store}
          />
        ))}
      </PastFilesContainer>
    </Container>
  );
};

export default Home;
