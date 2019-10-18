import React from "react";
import { Divider, Drawer, Typography } from "@material-ui/core";
import styled from "styled-components";
import { version } from "../../package.json";

const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const TitleHeight = styled.div`
  align-items: center;
  display: flex;
  height: 64px;
  justify-content: center;
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
`;

const VersionContainer = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  position: absolute;
  width: 100%;
`;

const Version = styled(Typography)``;

const Sidebar = () => {
  return (
    <Drawer
      anchor="left"
      classes={{
        paper: "drawer-paper"
      }}
      open={true}
      variant="persistent"
    >
      <TitleContainer>
        <TitleHeight>
          <Title variant="h1">shoelace</Title>
        </TitleHeight>
      </TitleContainer>
      <Divider />
      <VersionContainer>
        <Version>v{version}</Version>
      </VersionContainer>
    </Drawer>
  );
};

export default Sidebar;
