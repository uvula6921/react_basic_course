import React from "react";
import styled from "styled-components";

const SwipeItem = ({selectO, selectX}) => {
  const ButtonStyle = {
    width: '80px'
  }
  return (
    <SwipeItemWrap>
      <button onClick={selectO} style={ButtonStyle}>O</button>
      <button onClick={selectX} style={ButtonStyle}>X</button>
    </SwipeItemWrap>
  );
};

const SwipeItemWrap = styled.div`
  text-align: center;
  margin-top: 80px;
`

export default SwipeItem;