import React, { Component } from 'react';
import './App.css';
import PersonList from './Components/PersonList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProfileComments from './Components/ProfileComments';
class App extends Component {
  state = {
    route: null,
  };
  defineRoute = e => {
    this.setState({
      route: e,
    });
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Route path={`/news/:id`} component={ProfileComments} />
          <Route path={`/`} exact component={PersonList} />
        </div>
      </Router>
    );
  }
}

export default App;
