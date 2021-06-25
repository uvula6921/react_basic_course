import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 3,
    };
  }
  
  addNemo = () => {
    this.setState({count: this.state.count + 1})
  }

  removeNemo = () => {
    if (this.state.count > 0) {
      this.setState({count: this.state.count - 1})
    } else {
      alert('더 이상은 naver...!')
    }
  }

  render() {
    
    const nemo_count = Array.from({length: this.state.count}, (item, index) => index)
    
    return (
      <div className="App">
        {nemo_count.map((num, index) => {
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