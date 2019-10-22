import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import styled from "styled-components";

const Pre = styled.pre`
  height: 100%;
  width: 100%;
`;

const CodePreview = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <Pre className={`language-${language} code`}>
      <code className={`language-${language}`}>
        {code ? code : "Select a file to view it's contents here ..."}
      </code>
    </Pre>
  );
};

CodePreview.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string
};

export default CodePreview;
