import React, { useState, useCallback, useEffect } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import styled from "styled-components";
import Status from "./components/status";
import Home from "./components/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Store from "electron-store";
import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";

const AppContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const store = new Store();

const theme = createMuiTheme({
  palette: {
    primary: {
      500: "#e040fb"
    }
  }
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const InnerContainer = styled.div`
  height: calc(100vh - 164px);
  margin-left: 240px;
  padding: 50px;
`;

const App = () => {
  const [output, setOutput] = useState(null);
  const [stage, setStage] = useState("home");
  const [file, setFile] = useState(null);
  const [converted, setConverted] = useState(false);
  const [displayStatus, setDisplayStatus] = useState(false);
  const [type, setType] = useState(null);
  const [, updateState] = React.useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const stages = {
    home: <Home forceUpdate={forceUpdate} store={store} />,
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
        store={store}
        type={type}
      />
    ),
    output: (
      <Output
        output={output}
        setDisplayStatus={setDisplayStatus}
        setStage={setStage}
        store={store}
      />
    )
  };

  // * If this is the first time the app is run, store an empty array.
  useEffect(() => {
    if (!store.get("pastFiles")) {
      store.set("pastFiles", []);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container id="main-container">
          <Content id="content">
            <Header />
            <Sidebar
              forceUpdate={forceUpdate}
              setStage={setStage}
              store={store}
            />
            <InnerContainer id="inner-container">
              <AppContainer id="app-container">
                {stages[stage]}
                <Status
                  displayStatus={displayStatus}
                  setDisplayStatus={setDisplayStatus}
                />
              </AppContainer>
            </InnerContainer>
          </Content>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
