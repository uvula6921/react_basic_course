import React from "react";
import styled from "styled-components";

const Quiz = ({question_number, questions}) => {

  return (
    <div className="QuizWrap">
      <QuestionNumber>{question_number}번 문제</QuestionNumber>
      <Question>
        {
          questions[question_number-1]
        }
      </Question>
    </div>
  );
};

const QuestionNumber = styled.div`
  text-align: center;
  background-color: beige;
  width: 150px;
  margin: 0 auto;
  padding: 10px 0;
  border-radius: 20px;
`

const Question = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  margin-top: 50px;
`

export default Quiz;