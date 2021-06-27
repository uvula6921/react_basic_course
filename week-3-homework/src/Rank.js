import React from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux';
import { useDispatch } from "react-redux";
import {deleteMessage} from './redux/modules/message';

const Rank = (props) => {

  const message_list = useSelector(state => state.message.list);
  const dispatch = useDispatch();

  return (
    <RankWrap>
        {
          message_list.map((list, index) => {
            return (
              <Messages key={index}>
                <Number>
                  {index + 1}
                </Number>
                <Text>
                  {list}
                </Text>
                <Delete onClick={() => {
                  dispatch(deleteMessage(index));
                }}>
                  삭제
                </Delete>
              </Messages>
            );
          })
        }
    </RankWrap>
  );
};

const RankWrap = styled.div`
  
`;

const Messages = styled.div`
  border: 1px solid #333;
  min-height: 40px;
  display: flex;
  margin-top: 15px;
`;

const Number = styled.div`
  min-width: 65px;
  border-right: 1px solid #333;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Text = styled.div`
  display: flex;
  align-items:center;
  justify-content:left;
  flex-grow: 1;
`;

const Delete = styled.button`
  display: flex;
  justify-content:center;
  align-items:center;
`

export default Rank;