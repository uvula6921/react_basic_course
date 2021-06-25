import React from 'react';
import Nemo from './Nemo';

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    };
    
    this.div = React.createRef();
  }
  
  hoverEvent = (e) => {
    e.target.style.backgroundColor = "red"
  }
  
  componentDidMount() {
    this.div.current.addEventListener("mouseover", this.hoverEvent)
  }
  
  componentWillUnmount() {
    this.div.current.removeEventListener("mouseover", this.hoverEvent)
  }
  
  render() {
    
    return (
      <div className="App" ref={this.div}>
        <Nemo ></Nemo>
      </div>
    );
  }
}
export default App;