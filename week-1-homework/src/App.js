import React from 'react';
import Main from './Main';
import './style.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: '사랑이'
    };
  }
  
  render() {
    return (
      <div className="App">
        <Main name={this.state.name}/>
      </div>
    );
  }
}

export default App;