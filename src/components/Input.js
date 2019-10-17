import React from "react";
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

const NewFileContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewFileButton = styled(Button)`
  margin-top: 25px;
`;

const Input = ({
  converted,
  file,
  setConverted,
  setFile,
  setOutput,
  setStage
}) => {
  const handleFileUpload = () => {
    const { name, path } = document.getElementById("input").files[0];
    const file = fs.readFileSync(path, "utf8");
    setOutput(file);
    setFile(name);
  };

  const handleContinue = () => {
    setStage("output");
    setConverted(true);
  };

  return (
    <Container>
      <Title variant="h2">Please select a file to convert</Title>
      <InputContainer>
        {converted ? (
          <NewFileContainer>
            <Typography>Currently Chosen File: {file}</Typography>
            <NewFileButton
              color="secondary"
              onClick={() => alert("clicked")}
              variant="contained"
            >
              Choose New File
            </NewFileButton>
          </NewFileContainer>
        ) : (
          <InputButton
            id="input"
            name="input"
            onChange={handleFileUpload}
            type="file"
          />
        )}
      </InputContainer>
      {file && (
        <ContinueButtonContainer>
          <ContinueButton
            color="primary"
            onClick={handleContinue}
            variant="contained"
          >
            {converted ? "Continue" : "Convert"}
          </ContinueButton>
        </ContinueButtonContainer>
      )}
    </Container>
  );
};

export default Input;
