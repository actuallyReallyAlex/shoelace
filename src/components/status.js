import React from "react";
import PropTypes from "prop-types";
import { IconButton, Snackbar, SnackbarContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import styled from "styled-components";

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #43a047;
`;

const StyledSpan = styled.span`
  align-items: center;
  display: flex;
`;

const StyledCheckCircleIcon = styled(CheckCircleIcon)`
  margin-right: 10px;
`;

const Status = ({ displayStatus, setDisplayStatus }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      autoHideDuration={6000}
      open={displayStatus}
      onClose={() => setDisplayStatus(false)}
    >
      <StyledSnackbarContent
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={() => setDisplayStatus(false)}
          >
            <CloseIcon />
          </IconButton>
        ]}
        message={
          <StyledSpan>
            <StyledCheckCircleIcon />
            Output copied to clipboard
          </StyledSpan>
        }
      />
    </Snackbar>
  );
};

Status.propTypes = {
  displayStatus: PropTypes.bool.isRequired,
  setDisplayStatus: PropTypes.func.isRequired
};

export default Status;
