import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import styled from "styled-components";

const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const App = () => {
  const [output, setOutput] = useState(null);
  const [stage, setStage] = useState("input");
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(false);

  return (
    <AppContainer id="app-container">
      {stage === "input" && (
        <Input
          converted={converted}
          file={file}
          setConverted={setConverted}
          setFile={setFile}
          setOutput={setOutput}
          setStage={setStage}
        />
      )}
      {stage === "output" && <Output output={output} setStage={setStage} />}
    </AppContainer>
  );
};

export default App;
