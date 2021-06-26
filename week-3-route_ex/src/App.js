import React from 'react';
import {Route, Link} from "react-router-dom";
import {withRouter} from "react-router"; // props에 url 관련 객체들(history 등)을 받아오기 위함.
import Home from './Home'
import Dog from './Dog'
import Cat from './Cat'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {

    return (
      <div className="App">
        <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat/nabi">Cat으로 가기</Link>
          <Link to="/dog">Dog로 가기</Link>
        </div>
        <Route exact path="/" component={Home}/>
        <Route path="/cat/:cat_name" component={Cat}/>
        <Route path="/dog" component={Dog}/>
        
        <button onClick={() => {
          this.props.history.push('/cat/nabi');
        }}>cat으로 가기</button>
        <button onClick={() => {
          this.props.history.goBack();
        }}>뒤로 가기</button>
      </div>
    );
  }
}

export default withRouter(App); // props에 url 관련 객체들(history 등)을 받아오기 위해 withRouter() 적용.