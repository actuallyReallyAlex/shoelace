import React, { useState } from "react";
import fs from "fs";

const App = () => {
  const [filePath, setFilePath] = useState(null);
  const [output, setOutput] = useState(null);

  const handleFileUpload = () => {
    const path = document.getElementById("fileupload").files[0].path;
    setFilePath(path);
    const file = fs.readFileSync(path, "utf8");
    setOutput(file);
  };

  return (
    <form>
      <input
        onChange={handleFileUpload}
        type="file"
        name="fileupload"
        id="fileupload"
      />
      <label htmlFor="fileupload"> Select a file to upload</label>
      {filePath && <span>{JSON.stringify(filePath, null, 2)}</span>}
      {output && <p>{JSON.stringify(output, null, 2)}</p>}
    </form>
  );
};

export default App;
