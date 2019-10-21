import React from "react";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import LightIcon from "@material-ui/icons/WbSunny";
import DarkIcon from "@material-ui/icons/NightsStay";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  width: calc(100% - 240px);
`;

const Bar = styled(AppBar)`
  margin-left: 240px;
`;

const Header = ({ darkMode, setDarkMode }) => {
  const handleClick = () => setDarkMode(!darkMode);

  return (
    <Container>
      <Bar position="static">
        <Toolbar>
          <IconButton aria-label="Color mode" onClick={handleClick}>
            {darkMode ? <LightIcon /> : <DarkIcon />}
          </IconButton>
        </Toolbar>
      </Bar>
    </Container>
  );
};

export default Header;
