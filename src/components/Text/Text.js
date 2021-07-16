import React from "react";
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
const Text = ({ question, answers, setAnswers }) => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      answer: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleBlur = (event) => {
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
        <form onSubmit={formik.handleSubmit} className={classes.question}>
          <textarea
            rows="5"
            cols="100"
            id="answer"
            placeholder="Write your answer here..."
            name="answer"
            type="answer"
            onChange={formik.handleChange}
            value={formik.values.answer}
            onBlur={handleBlur}
          />
          <input type="submit" value="submit"></input>
        </form>
      </FormControl>
    </div>
  );
};
export default Text;
