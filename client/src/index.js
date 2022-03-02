import React from 'react';
import ReactDOM from 'react-dom';
import Password from './components/Password.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Password />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));