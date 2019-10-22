import React, { Fragment } from "react";
import PropTypes from "prop-types";
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
import ConvertIcon from "@material-ui/icons/InsertDriveFile";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
import { version } from "../../package.json";
import moment from "moment";
import uuid from "uuid/v4";
import { randItem } from "pickitt";

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

const Sidebar = ({ darkMode, forceUpdate, setStage, store }) => {
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
        language: randItem(["javascript", "html", "java"]),
        name: `TestFile${i}`,
        output: "",
        string: ""
      });
    }

    store.set("pastFiles", newPastFiles);
    forceUpdate();
  };

  const handleConvert = () => setStage("input");

  const StyledListItemIcon = styled(ListItemIcon)`
    color: ${darkMode ? "#ffffff" : "rgba(0, 0, 0, 0.54)"};
  `;

  const StyledListItem = styled(ListItem)`
    :hover {
      background-color: ${darkMode ? "#958299" : "rgba(0, 0, 0, 0.08)"};
    }
  `;

  return (
    <Drawer
      anchor="left"
      classes={{
        paper: darkMode ? "drawer-paper-dark" : "drawer-paper-light"
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
      <List>
        <StyledListItem button onClick={handleConvert}>
          <StyledListItemIcon>
            <ConvertIcon />
          </StyledListItemIcon>
          <ListItemText primary="Convert a File" />
        </StyledListItem>
        {process.env.NODE_ENV === "development" && (
          <Fragment>
            <StyledListItem button onClick={handleDelete}>
              <StyledListItemIcon>
                <DeleteIcon />
              </StyledListItemIcon>
              <ListItemText primary="Delete" />
            </StyledListItem>
            <StyledListItem button onClick={handleAdd}>
              <StyledListItemIcon>
                <AddIcon />
              </StyledListItemIcon>
              <ListItemText primary="Add Items" />
            </StyledListItem>
          </Fragment>
        )}
      </List>

      <VersionContainer>
        <Version>v{version}</Version>
      </VersionContainer>
    </Drawer>
  );
};

Sidebar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  forceUpdate: PropTypes.func.isRequired,
  setStage: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};

export default Sidebar;
