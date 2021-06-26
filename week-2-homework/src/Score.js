import React from "react";
import styled from "styled-components";

const Score = ({name, score}) => {

  return (
    <div className="ScoreWrap">
      <Title>{name} 퀴즈에 대한 내 점수는?</Title>
      <ScoreText>{score} 점!</ScoreText>
    </div>
  );
};

const Title = styled.div`
  
`

const ScoreText = styled.div`

`

export default Score;