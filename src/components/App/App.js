import React, {Component} from 'react';
import CalContainer from './../cal-container';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <CalContainer />
    </div>
    );
  }
}

export default App;