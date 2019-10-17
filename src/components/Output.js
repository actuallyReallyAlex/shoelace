import React from "react";
import { TextField } from "@material-ui/core";

const Output = ({ output }) => {
  return (
    <TextField
      label="Output"
      multiline
      // rowsMax="4"
      value={JSON.stringify(output, null, 2)}
      // onChange={handleChange('multiline')}
      // className={classes.textField}
      // margin="normal"
    />
  );
};

export default Output;
