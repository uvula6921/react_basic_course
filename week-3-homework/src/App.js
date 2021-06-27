import React from "react";
import './App.css'
import styled from "styled-components";
import { Route } from "react-router-dom";
import Rank from './Rank';
import Main from './Main';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    };
  }  
  
  render() {

    return (
      <div className="App">
        <Container>
          <Route exact path="/" component={Main}></Route>
          <Route path="/messages" component={Rank}></Route>
        </Container>
      </div>
    );
  }
};

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

export default App;