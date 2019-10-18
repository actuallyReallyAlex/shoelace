import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import styled from "styled-components";
import Status from "./components/status";
import Home from "./components/Home";

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
  const [stage, setStage] = useState("home");
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(false);
  const [displayStatus, setDisplayStatus] = useState(false);
  const [type, setType] = useState(null);

  const stages = {
    home: <Home />,
    input: (
      <Input
        converted={converted}
        file={file}
        output={output}
        setConverted={setConverted}
        setFile={setFile}
        setOutput={setOutput}
        setStage={setStage}
        setType={setType}
        type={type}
      />
    ),
    output: (
      <Output
        output={output}
        setDisplayStatus={setDisplayStatus}
        setStage={setStage}
      />
    )
  };

  return (
    <AppContainer id="app-container">
      {stages[stage]}
      <Status
        displayStatus={displayStatus}
        setDisplayStatus={setDisplayStatus}
      />
    </AppContainer>
  );
};

export default App;
