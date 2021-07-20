import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import MCQ from "./MCQS/MCQ";
import Text from "./Text/Text";
import Number from "./Numbers/Number";
import Header from "./Header/Header";
import { Container, Button } from "@material-ui/core";

import { fetchQuestions } from '../redux/questionSlice';
function Questionnnaire() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.questions);
  useEffect(() => {

    dispatch(fetchQuestions());
  }, []);
  const [answers, setAnswers] = useState([]);

  if (state.status === "loading") {
    return <div>loading....</div>
  } else {
    return (
      <Container style={{ marginTop: "10px" }}>
        <Header />
        {state.questions.length > 0 &&
          state.questions.map((item, index) => {
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
          onClick={() => alert(JSON.stringify(answers))}
          style={{ float: "left", marginTop: "2%" }}
        >
          Submit
        </Button>
      </Container>
    );
  }
}

export default Questionnnaire;
