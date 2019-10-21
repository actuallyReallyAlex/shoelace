import React, { useState } from "react";
import styled from "styled-components";
import FileDisplay from "./FileDisplay";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import escapeRegExp from "lodash.escaperegexp";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

const PastFilesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchIconContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  pointer-events: none;
  position: absolute;
  width: 56px;
`;

const Home = ({ darkMode, forceUpdate, store }) => {
  const pastFiles = store.get("pastFiles");
  const [filteredFiles, setFilteredFiles] = useState(pastFiles);

  const handleSearch = e => {
    if (e.target.value === "") {
      setFilteredFiles(pastFiles);
    } else {
      const reg = new RegExp(escapeRegExp(e.target.value), "i");
      console.log({ reg });
      const newFilteredFiles = Array.from(pastFiles).filter(file => {
        return reg.test(file.name);
      });
      setFilteredFiles(newFilteredFiles);
    }
  };

  const SearchContainer = styled.div`
    background-color: ${darkMode ? "#766779" : "rgba(0, 0, 0, 0.15)"};
    border-radius: 4px;
    margin-bottom: 25px;
    margin-left: 0;
    position: relative;
    width: 100%;

    :hover {
      background-color: ${darkMode ? "#958299" : "rgba(0, 0, 0, 0.25)"};
    }
  `;

  return (
    <Container id="home-container">
      <SearchContainer>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
        <InputBase
          classes={{
            root: "input-root",
            input: "input-input"
          }}
          inputProps={{ "aria-label": "Search" }}
          onChange={e => handleSearch(e)}
          placeholder="Search…"
        />
      </SearchContainer>
      <PastFilesContainer>
        {filteredFiles.map(pastFile => (
          <FileDisplay
            darkMode={darkMode}
            forceUpdate={forceUpdate}
            key={pastFile.id}
            pastFile={pastFile}
            store={store}
          />
        ))}
      </PastFilesContainer>
    </Container>
  );
};

export default Home;
