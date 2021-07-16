import React, { useState } from "react";
import StyledRadio from "./StyledRadio";
import useStyles from "./useStyles";
import PropTypes from "prop-types";
import {
  Typography,
  Container,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
MCQ.propTypes = {};
function MCQ({ question, setAnswers }) {
  const classes = useStyles();

  const [value, setValue] = useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
    setAnswers((state) => [...state, value]);
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

        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
          className={classes.question}
        >
          <FormControlLabel
            value={question.options[0]}
            control={<StyledRadio />}
            label={question.options[0]}
          />
          <FormControlLabel
            value={question.options[1]}
            control={<StyledRadio />}
            label={question.options[1]}
          />
          <FormControlLabel
            value={question.options[2]}
            control={<StyledRadio />}
            label={question.options[2]}
          />
          <FormControlLabel
            value={question.options[3]}
            control={<StyledRadio />}
            label={question.options[3]}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default MCQ;
