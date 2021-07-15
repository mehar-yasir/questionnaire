import React from 'react';
import MCQ from './MCQS/MCQ';
import Text from './Text/Text';
import {Typography,Container,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@material-ui/core';

function App() {
  const questions = [
  {
    title: "How do you rate yourself on javascript on scale of 1 to 10 ?",
    type: "numeric",
    score: 0,
    weight: 10,
    optional: false,
  },
  {
    title: "What's your favorite programming language ?",
    type: "text",
    score: 0,
    weight: 10,
    optional: false,
  },
  {
    title:
      "Write a javascript function which sum two integers like `sum(2,2)` and `sum(2)(2)`",
    type: "code",
    score: 0,
    weight: 10,
    optional: false,
  },
  {
    title: "What's the output of following: `12.445.toFixed(1)` ?",
    type: "mcq",
    score: 0,
    weight: 10,
    optional: false,
    options: ["12.4", "12.45", "12.44", "12"],
  },
];
  return (
    <Container>
    <MCQ question={questions[3]}/>
    <Text question={questions[1]}/>
   </Container>
  );
}

export default App;
