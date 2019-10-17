import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";

const App = () => {
  const [output, setOutput] = useState(null);
  const [stage, setStage] = useState("input");

  return (
    <div>
      {stage === "input" && <Input setOutput={setOutput} setStage={setStage} />}
      {stage === "output" && <Output output={output} />}
    </div>
  );
};

export default App;
