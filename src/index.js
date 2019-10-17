import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { StylesProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

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
    <Container id="main-container">
      <Content id="content">
        <Header />
        <Sidebar />
        <InnerContainer id="inner-container">
          <App />
        </InnerContainer>
      </Content>
    </Container>
  </StylesProvider>,
  document.getElementById("root")
);
