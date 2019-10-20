import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { createMuiTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import "./assets/prism.css";
import Store from "electron-store";

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

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Container id="main-container">
        <Content id="content">
          <Header />
          <Sidebar />
          <InnerContainer id="inner-container">
            <App store={store} />
          </InnerContainer>
        </Content>
      </Container>
    </ThemeProvider>
  </StylesProvider>,
  document.getElementById("root")
);
