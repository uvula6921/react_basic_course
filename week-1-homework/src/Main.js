import React from 'react';
import Sarang from './sarang.png'

const Main = ({name}) => {
  return (
    <div className="wrap">
      <img className="img" src={Sarang} alt={name}></img>
      <div className="container">
          <h1 className="title">나는 <span>{name}</span>에 대해 얼마나 알고 있을까?</h1>
          <input className="inputBox" type="text" placeholder="내 이름"></input>
          <button className="btn">시작하기</button>
      </div>
    </div>
  );
}

export default Main;