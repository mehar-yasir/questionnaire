import React from "react";
import { useFormik } from "formik";
import useStyles from "./useStyles";
import { Typography, FormControl, TextField } from "@material-ui/core";
const Text = ({ question, answers, setAnswers, index }) => {
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
          id={index.toString()}
          name="answer"
          fullWidth={true}
          onChange={formik.handleChange}
          value={formik.values.answer}
          onBlur={handleBlur}
          placeholder="Write your answer here..."
          margin="normal"
        />
      </FormControl>
    </div>
  );
};
export default Text;
