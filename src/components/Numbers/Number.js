import React, { useState } from "react";
import useStyles from "./useStyles";
import { Typography, FormControl, TextField } from "@material-ui/core";
const Number = ({ question, setAnswers, answers, index }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
    let newArr = [...answers]; // copying the old datas array
    newArr[index] = event.target.value;
    setAnswers(newArr);
  };
  return (
    <div className={classes.outer}>
      <FormControl component="fieldset">
        <Typography variant="h5">
          {question.title}
          <span className={classes.span}>{question.weight} Marks</span>
        </Typography>

        <TextField
          type="number"
          id="ans"
          className={classes.question}
          InputProps={{ inputProps: { min: 0, max: 10 } }}
          value={value}
          onChange={handleChange}
          placeholder="0"
        />
      </FormControl>
    </div>
  );
};
export default Number;
