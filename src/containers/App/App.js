import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import './App.css';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history} />
    )
  }

  render () {
     return (

       <div className="App">
         <div style={{ height: '100%' }}>
          <h2>Welcome to Vavavoom!</h2>
           {this.content}
         </div>
      </div>
     )
   }
}

export default App;
