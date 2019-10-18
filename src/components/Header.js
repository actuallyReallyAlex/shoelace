import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  width: calc(100% - 240px);
`;

const Bar = styled(AppBar)`
  margin-left: 240px;
`;

const Header = () => {
  return (
    <Container>
      <Bar position="static">
        <Toolbar></Toolbar>
      </Bar>
    </Container>
  );
};

export default Header;
