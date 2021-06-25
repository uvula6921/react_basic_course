import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 3,
    };
  }
  
  addNemo = () => {
    this.setState({count: this.state.count + 1}) // key는 count, value는 this.state.count
  }

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1}) // 계속 줄다보면 this.state.count가 0 이하가 되는데 이때는 UX를 고려하여 alert을 날려주자.
    } else {
      alert('더 이상은 naver...!')
    }
  }

  render() {
    
    const nemo_count = Array.from({length: this.state.count}, (item, index) => index)
    
    return (
      <div className="App">
        {nemo_count.map((num, index) => { // 돔 구조 안에서 map을 이용한 반복문을 사용하기 위해 {} bracket으로 감싸주었음.
          return (
            <div key={index} style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#eee',
              margin: '10px'
            }}>
              nemo
            </div>
          )
        })}
        <button onClick={this.addNemo}>+</button>
        <button onClick={this.removeNemo}>-</button>
      </div>
    );
  }
}
export default App;