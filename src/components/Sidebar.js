import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { version } from "../../package.json";
import moment from "moment";
import uuid from "uuid/v4";

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
  user-select: none;
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

const Sidebar = ({ forceUpdate, store }) => {
  const handleDelete = () => {
    store.set("pastFiles", []);
    forceUpdate();
  };

  const handleAdd = () => {
    const newPastFiles = [];

    for (let i = 0; i < 5; i++) {
      newPastFiles.push({
        created: moment().format("x"),
        id: uuid(),
        name: `TestFile${i}`,
        output: "",
        string: ""
      });
    }

    store.set("pastFiles", newPastFiles);
    forceUpdate();
  };

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
      {process.env.NODE_ENV === "development" && (
        <List>
          <ListItem button onClick={handleDelete}>
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
          <ListItem button onClick={handleAdd}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Items" />
          </ListItem>
        </List>
      )}
      <VersionContainer>
        <Version>v{version}</Version>
      </VersionContainer>
    </Drawer>
  );
};

export default Sidebar;
