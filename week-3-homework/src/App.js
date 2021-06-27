import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import {connect} from 'react-redux';
import {loadBucket, createBucket} from './redux/modules/bucket';

// 이 함수는 스토어가 가진 상태값을 props로 받아오기 위한 함수예요.
const mapStateToProps = (state) => ({
  bucket_list: state.bucket.list,
});

// 이 함수는 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수예요.
const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadBucket());
  },
  create: (new_item) => {
    dispatch(createBucket(new_item));
  }
});

const App = (props) => {

  return (
    <div className="App">

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);