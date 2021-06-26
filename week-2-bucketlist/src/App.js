import React from 'react';
import BucketList from './BucketList';
// import './style.css';
import './scss_ex.scss';
import styled from 'styled-components'
import { Route, Switch, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import Detail from './Detail';
import NotFound from './NotFound';
import {connect} from 'react-redux';
import { loadBucket, createBucket } from './redux/modules/bucket';

const mapStateToProps = (state) => {
  return {bucket_list: state.bucket.list} // 여기서 state 뒤에 bucket이 뭔지 모르겠다...
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => {
      dispatch(loadBucket());
    },
    create: (bucket) => {
      dispatch(createBucket(bucket))
    }
  }
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
    
    this.text = React.createRef()
  }
  
  submitList = () => {
    const new_item = this.text.current.value;
    this.props.create(new_item)
    
    this.text.current.value = ""
  }
  
  render() {
      
      return (
      <div className="App">
        <Container>
          {/* <NavLink to="/faq" activeClassName="selected" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>
            FAQs
          </NavLink> */}
          <Title >내 버킷리스트</Title>
          <Line/>
          <Switch>
            <Route exact path="/" render={(props) => <BucketList list={this.props.bucket_list} history={props.history} />} />
            {/* props를 넘겨주는 컴포넌트이기 때문에 render 형식의 component를 이용함. */}
            {/*  */}
            <Route path="/Detail" component={Detail}/>
            <Route render={() => <NotFound history={this.props.history}/>} /> {/* 없는 주소에 접속했을 때 예외처리. 모든 Route를 Switch로 감싸야함. */}
          </Switch>
          <div>
            <Input type="text" ref={this.text}></Input>
            <Submit onClick={this.submitList}>추가하기</Submit>
            <button onClick={() => {
              this.props.history.push("/")
            }}>홈으로</button>
          </div>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

const Input = styled.input`
  
`;

const Submit = styled.button`
  
`;

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));