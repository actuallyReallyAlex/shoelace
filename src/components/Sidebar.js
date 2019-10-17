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
import InboxIcon from "@material-ui/icons/Inbox";
import MailIcon from "@material-ui/icons/Mail";
import styled from "styled-components";

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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
