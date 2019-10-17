import React from "react";
import { Fab, IconButton, TextField } from "@material-ui/core";
import styled from "styled-components";
import CopyIcon from "@material-ui/icons/FileCopy";
import BackIcon from "@material-ui/icons/ChevronLeft";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const OutputField = styled(TextField)`
  height: 100%;
  width: 100%;
`;

const BackButtonContainer = styled.div`
  margin-bottom: 25px;
`;

const BackButton = styled(IconButton)``;

const CopyButtonContainer = styled.div`
  bottom: 0;
  margin-bottom: 50px;
  margin-right: 50px;
  position: absolute;
  right: 0;
`;

const CopyButton = styled(Fab)``;

const Output = ({ output, setStage }) => {
  const handleBack = () => setStage("input");

  return (
    <Container id="output-container">
      <BackButtonContainer>
        <BackButton onClick={handleBack}>
          <BackIcon />
        </BackButton>
      </BackButtonContainer>
      <OutputField
        label="Output"
        multiline
        value={JSON.stringify(output, null, 2)}
      />
      <CopyButtonContainer>
        <CopyButton
          aria-label="copy"
          onClick={() => alert("clicked")}
          variant="extended"
        >
          <CopyIcon />
          Copy
        </CopyButton>
      </CopyButtonContainer>
    </Container>
  );
};

export default Output;
