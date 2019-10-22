import React from "react";
import PropTypes from "prop-types";
import { Fab, IconButton, TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import CopyIcon from "@material-ui/icons/FileCopy";
import BackIcon from "@material-ui/icons/ChevronLeft";
import copy from "copy-to-clipboard";

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

const FabIconContainer = styled.div`
  margin-right: 10px;
`;

const ExportToFileButton = styled(Button)``;

const Output = ({ file, output, setDisplayStatus, setStage }) => {
  const handleBack = () => setStage("input");

  const handleCopy = () => {
    copy(JSON.stringify(output));
    setDisplayStatus(true);
  };

  const handleExport = () => {
    const exportLink = document.createElement("a");
    exportLink.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(`{ "code": ${JSON.stringify(output)} }`)
    );
    const trimmedFileName = file.match(/^.*?(?=\.)/);
    exportLink.setAttribute("download", `${trimmedFileName}.json`);
    exportLink.click();
  };

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
        <CopyButton aria-label="copy" onClick={handleCopy} variant="extended">
          <FabIconContainer>
            <CopyIcon />
          </FabIconContainer>
          Copy
        </CopyButton>
      </CopyButtonContainer>
      <ExportToFileButton
        aria-label="Export"
        onClick={handleExport}
        variant="contained"
      >
        Export
      </ExportToFileButton>
    </Container>
  );
};

Output.propTypes = {
  file: PropTypes.string,
  output: PropTypes.string,
  setDisplayStatus: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired
};

export default Output;
