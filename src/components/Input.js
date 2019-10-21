import React, { Fragment } from "react";
import fs from "fs";
import styled from "styled-components";
import { Button, Fab, Typography } from "@material-ui/core";
import ConvertIcon from "@material-ui/icons/Redo";
import ContinueIcon from "@material-ui/icons/ChevronRight";
import CodePreview from "./CodePreview";
import UploadIcon from "@material-ui/icons/CloudUpload";
import uuid from "uuid/v4";
import moment from "moment";

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

const InputButton = styled.input`
  display: none;
`;

const InputLabel = styled.label`
  align-items: center;
  color: #fff;
  background-color: #f50057;
  border: 0;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  margin: 0;
  min-width: 64px;
  outline: 0;
  padding: 6px 16px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: #722040;
  }

  svg {
    margin-right: 0.25em;
  }
`;

const ContinueButtonContainer = styled.div`
  bottom: 0;
  margin-bottom: 50px;
  margin-right: 50px;
  position: absolute;
  right: 0;
`;

const ContinueButton = styled(Fab)``;

const NewFileContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NewFileButton = styled(Button)`
  margin-top: 25px;
`;

const FabIconContainer = styled.div`
  margin-right: 10px;
`;

const Input = ({
  converted,
  file,
  output,
  setConverted,
  setFile,
  setOutput,
  setStage,
  setType,
  store,
  type
}) => {
  const handleFileUpload = () => {
    const input = document.getElementById("input");
    const label = document.getElementById("input-label");
    const labelSpan = label.querySelector("span");
    const { name, path, type } = input.files[0];
    const finalType = type.replace("text/", "");
    const file = fs.readFileSync(path, "utf8");

    labelSpan.innerHTML = name;
    setOutput(file);
    setFile(name);
    setType(finalType);
  };

  const handleContinue = () => {
    const pastFiles = store.get("pastFiles");
    pastFiles.push({
      created: moment().format("x"),
      id: uuid(),
      language: type,
      name: file,
      output,
      string: JSON.stringify(output)
    });
    store.set("pastFiles", pastFiles);
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
          <Fragment>
            <InputButton
              id="input"
              name="input"
              onChange={handleFileUpload}
              type="file"
            />
            <InputLabel htmlFor="input" id="input-label">
              <UploadIcon />
              <span>Choose a file</span>
            </InputLabel>
          </Fragment>
        )}
      </InputContainer>
      <CodePreview code={output} language={type} />
      {file && (
        <ContinueButtonContainer>
          <ContinueButton
            color="primary"
            onClick={handleContinue}
            variant="extended"
          >
            <FabIconContainer>
              {converted ? <ContinueIcon /> : <ConvertIcon />}
            </FabIconContainer>
            {converted ? "Continue" : "Convert"}
          </ContinueButton>
        </ContinueButtonContainer>
      )}
    </Container>
  );
};

export default Input;
