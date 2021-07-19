import React, { useState, useEffect } from "react";
import MCQ from "./MCQS/MCQ";
import Text from "./Text/Text";
import Number from "./Numbers/Number";
import Header from "./Header/Header";
import { Container, Button } from "@material-ui/core";
import fetchData from "./utils/fetchData";

function Questionnnaire() {
  useEffect(() => {
    fetchData();
  }, []);

  const [answers, setAnswers] = useState([]);
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
        "Write a javascript function which sum two integers like `sum(2,2)`",
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
    <Container style={{marginTop:"10px"}}>
      <Header />
      {questions.length > 0 &&
        questions.map((item, index) => {
          switch (item.type) {
            case "numeric": {
              return (
                <div key={index}>
                  <Number
                    index={index}
                    question={item}
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                </div>
              );
            }
            case "text": {
              return (
                <div key={index}>
                  <Text
                    index={index}
                    question={item}
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                </div>
              );
            }
            case "code": {
              return (
                <div key={index}>
                  <Text
                    index={index}
                    question={item}
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                </div>
              );
            }
            case "mcq": {
              return (
                <div key={index}>
                  <MCQ
                    index={index}
                    question={item}
                    answers={answers}
                    setAnswers={setAnswers}
                  />
                </div>
              );
            }
            default: {
              return <div key={index}>Not a Valild type</div>;
            }
          }
        })}
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log(JSON.stringify(answers))}
        style={{ float: "left", marginTop: "2%" }}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Questionnnaire;
