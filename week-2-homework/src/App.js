import React from 'react';
import styled from 'styled-components'
import Quiz from './Quiz'
import SwipeItem from './SwipeItem'
import Score from './Score'
import './App.css'

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: '사랑이',
      question_number: 1,
      score: 0,
      questions: ['사랑이는 여자다', '사랑이는 2011년 생이다', '사랑이의 엄마는 애견대회 입상자였다', '사랑이는 용맹하다', '사랑이는 귀엽다'],
      answers: ['O', 'X', 'O', 'O', 'O']
    };
  }

  selectO = () => {
    if (this.state.answers[this.state.question_number - 1] === 'O') {
      this.setState({score: this.state.score + 20})
    }
    this.setState({question_number: this.state.question_number + 1})
  }
  
  selectX = () => {
    if (this.state.answers[this.state.question_number - 1] === 'X') {
      this.setState({score: this.state.score + 20})
    }
    this.setState({question_number: this.state.question_number + 1})
  }

  render() {

    return (
      <div className="App">
        <Wrap>
          {this.state.question_number > 5 && <Score score={this.state.score} name={this.state.name}></Score>}
          {this.state.question_number <= 5 && <Quiz question_number={this.state.question_number} questions={this.state.questions}></Quiz>}
          {this.state.question_number <= 5 && <SwipeItem selectO={this.selectO} selectX={this.selectX}></SwipeItem>}
        </Wrap>
      </div>
    );
  }
}

const Wrap = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`

export default App;