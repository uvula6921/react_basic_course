import React from "react";
import styled from "styled-components";
import TinderCard from 'react-tinder-card'
import img from './sarang.png'

const SwipeItem = ({selectO, selectX}) => {
  const ButtonStyle = {
    width: '80px'
  }
  
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }
  
  return (
    <QuizContainer>
      <AnswerZone>
        <Answer>{"O "}</Answer>
        <Answer>{" X"}</Answer>
      </AnswerZone>
      <SwipeItemWrap>
        {/* <button onClick={selectO} style={ButtonStyle}>O</button>
        <button onClick={selectX} style={ButtonStyle}>X</button> */}
        <DragItem>
          <TinderCard
            onSwipe={onSwipe}
            onCardLeftScreen={onSwipe}
            onCardRightScreen={onSwipe}
            preventSwipe={["up", "down"]}
          >
            <img src={img} alt="사랑이" />
          </TinderCard>
        </DragItem>
      </SwipeItemWrap>
    </QuizContainer>
  );
};

const SwipeItemWrap = styled.div`
  text-align: center;
  margin-top: 80px;
`;

const QuizContainer = styled.div`
  & > p > span {
    padding: 8px 16px;
    background-color: #fef5d4;
    // border-bottom: 3px solid #ffd6aa;
    border-radius: 30px;
  }
`;

const AnswerZone = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 70vh;
`;

const Answer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: 600;
  color: #dadafc77;
`;

const DragItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & > div {
    border-radius: 500px;
    background-color: #ffd6aa;
  }
  & img {
    max-width: 150px;
  }
`;

export default SwipeItem;