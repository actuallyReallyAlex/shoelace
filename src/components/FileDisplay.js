import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import styled from "styled-components";
import { languageTypes } from "../constants";

const Date = styled(Typography)`
  user-select: none;
`;

const Time = styled(Typography)`
  user-select: none;
`;

const Name = styled(Typography)`
  user-select: none;
`;

const LanguageIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 53.59px;
  justify-content: center;
  margin-right: 5px;
  width: 53.59px;
`;

const TimeInfoContainer = styled.div``;

const TopContainer = styled.div`
  display: flex;
`;

const FileDisplay = ({ darkMode, forceUpdate, pastFile, store }) => {
  const { created, id, language, name } = pastFile;
  const date = moment(created, "x").format("MM/DD/YYYY");
  const time = moment(created, "x").format("h:mm A");

  const handleDelete = () => {
    const pastFiles = store.get("pastFiles");
    const index = pastFiles.findIndex(file => file.id === id);
    pastFiles.splice(index, 1);
    store.set("pastFiles", pastFiles);
    forceUpdate();
  };

  const StyledCard = styled(Card)`
    background-color: ${darkMode ? "#958299" : "#ffffff"};
    color: #ffffff;
    margin-right: 25px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 150px;

    :hover {
      background-color: ${darkMode ? "#ac99b0" : "rgba(0, 0, 0, 0.08)"};
    }
  `;

  const ViewFileButton = styled(Button)`
    color: ${darkMode ? "#ffffff" : "rgba(0, 0, 0, 0.87)"};
  `;

  const DeleteButton = styled(IconButton)`
    color: ${darkMode ? "#ffffff" : "rgba(0, 0, 0, 0.54)"};
  `;

  return (
    <StyledCard>
      <CardContent>
        <TopContainer id={`top-container-${id}`}>
          <LanguageIconContainer id={`language-icon-container-${id}`}>
            {languageTypes[language]}
          </LanguageIconContainer>
          <TimeInfoContainer id={`time-info-container-${id}`}>
            <Date color={darkMode ? "initial" : "textSecondary"}>{date}</Date>
            <Time color={darkMode ? "initial" : "textSecondary"} gutterBottom>
              {time}
            </Time>
          </TimeInfoContainer>
        </TopContainer>

        <Name variant="h5" component="h2">
          {name}
        </Name>
      </CardContent>
      <CardActions>
        <ViewFileButton onClick={() => alert("clicked")} size="small">
          View File
        </ViewFileButton>
        <DeleteButton aria-label="Delete" onClick={handleDelete}>
          <DeleteIcon />
        </DeleteButton>
      </CardActions>
    </StyledCard>
  );
};

export default FileDisplay;
