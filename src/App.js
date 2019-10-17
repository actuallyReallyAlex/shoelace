import React, { useState } from "react";

const App = () => {
  const [filePath, setFilePath] = useState(null);

  const handleFileUpload = () =>
    setFilePath(document.getElementById("fileupload").files[0].path);

  return (
    <form>
      <input
        onChange={handleFileUpload}
        type="file"
        name="fileupload"
        id="fileupload"
      />
      <label htmlFor="fileupload"> Select a file to upload</label>
      <span>{JSON.stringify(filePath, null, 2)}</span>
    </form>
  );
};

export default App;
