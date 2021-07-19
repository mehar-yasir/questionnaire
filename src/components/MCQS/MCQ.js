import React, { useState } from "react";
import StyledRadio from "./StyledRadio";
import useStyles from "./useStyles";
import PropTypes from "prop-types";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core";
MCQ.propTypes = {};
function MCQ({ question, setAnswers, answers, index }) {
  const classes = useStyles();

  const [value, setValue] = useState(null);
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
