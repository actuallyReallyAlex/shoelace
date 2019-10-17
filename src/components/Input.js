import React, { useState } from "react";
import fs from "fs";
import styled from "styled-components";
import { Button, Typography } from "@material-ui/core";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
`;

const InputContainer = styled.div`
  margin-top: 25px;
`;

const InputButton = styled.input``;

const ContinueButtonContainer = styled.div`
  bottom: 0;
  margin-bottom: 50px;
  margin-right: 50px;
  position: absolute;
  right: 0;
`;

const ContinueButton = styled(Button)``;

const Input = ({ setOutput, setStage }) => {
  const [fileChosen, setFileChosen] = useState(false);

  const handleFileUpload = () => {
    const path = document.getElementById("input").files[0].path;
    const file = fs.readFileSync(path, "utf8");
    setOutput(file);
    setFileChosen(true);
  };

  const handleContinue = () => setStage("output");

  return (
    <Container>
      <Title variant="h2">Please select a file to convert</Title>
      <InputContainer>
        <InputButton
          id="input"
          name="input"
          onChange={handleFileUpload}
          type="file"
        />
      </InputContainer>
      {fileChosen && (
        <ContinueButtonContainer>
          <ContinueButton
            color="primary"
            onClick={handleContinue}
            variant="contained"
          >
            Convert
          </ContinueButton>
        </ContinueButtonContainer>
      )}
    </Container>
  );
};

export default Input;
