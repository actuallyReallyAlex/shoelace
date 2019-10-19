import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";
import moment from "moment";
import styled from "styled-components";

const StyledCard = styled(Card)`
  margin-right: 25px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 150px;

  :hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const Date = styled(Typography)`
  pointer-events: none;
`;

const Time = styled(Typography)`
  pointer-events: none;
`;

const Name = styled(Typography)`
  pointer-events: none;
`;

const FileDisplay = ({ pastFile }) => {
  const { created, name } = pastFile;
  const date = moment(created, "x").format("MM/DD/YYYY");
  const time = moment(created, "x").format("h:mm A");

  return (
    <StyledCard>
      <CardContent>
        <Date color="textSecondary">{date}</Date>
        <Time color="textSecondary" gutterBottom>
          {time}
        </Time>
        <Name variant="h5" component="h2">
          {name}
        </Name>
      </CardContent>
      <CardActions>
        <Button onClick={() => alert("clicked")} size="small">
          View File
        </Button>
      </CardActions>
    </StyledCard>
  );
};

export default FileDisplay;
