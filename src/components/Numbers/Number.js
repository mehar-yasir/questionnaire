import React, { useState } from "react";
import { useFormik } from "formik";
import useStyles from "./useStyles";
import {
  Typography,
  Container,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
const Number = ({ question, setAnswers }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setValue(event.target.value);
    setAnswers((state) => [...state, event.target.value]);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <FormControl component="fieldset">
        <Typography variant="h4" component="h2">
          {question.title}
          <span
            style={{ marginLeft: "25px", fontSize: "x-large", color: "grey" }}
          >
            {question.weight} Marks
          </span>
        </Typography>
        <br></br>
        <input
          type="number"
          id="ans"
          className={classes.question}
          min="0"
          max="10"
          value={value}
          onChange={handleChange}
          placeholder="0"
        />
      </FormControl>
    </div>
  );
};
export default Number;
