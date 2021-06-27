import React, { useRef } from "react";
import styled from "styled-components";
import img from './sarang.jpeg';
import {createMessage} from './redux/modules/message';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Main = (props) => {

  const dispatch = useDispatch();
  const message_text = useRef();

  return (
    <div className="MainWrap">
      <Image>
        <img src={img} style={{width: '100%', padding: '0 20px', boxSizing: 'border-box'}} alt="사랑짱" />
      </Image>
      <Text>
        <h2>사랑짱에게 한 마디!</h2>
        <textarea type="text" style={{
          width: '100%',
          height: '80px',
          boxSizing: 'border-box',
          resize: 'none'
        }} ref={message_text}/>
      </Text>
      <Button onClick={() => {
        dispatch(createMessage(message_text.current.value));
      }}>
        등록하기
      </Button>
      <Link to="/messages" style={{
        color: 'inherit',
        cursor: 'inherit',
        textDecoration: 'inherit'
      }}>
        <Button>
          리스트 보기
        </Button>
      </Link>
    </div>
  );
};

const Image = styled.div`
  
`;

const Text = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: white;
  font-size: 18px;
  color: #333;
  border: 1px solid pink;
  padding: 10px 0;
  width: 100%;
  display: block;
`;

export default Main;