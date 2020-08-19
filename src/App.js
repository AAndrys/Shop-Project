import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Home from './components/home';
import NavBar from './components/navBar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'App'
    }
  }
  render() {
    return (
      <Router>
      {/* <div className="container"> */}
        <NavBar />
        <Switch>
          <Route 
            path='/Shop-Project'
            exact 
            render={(props) => <Home {...props} /> } 
          />
        </Switch>
      {/* </div> */}
      </Router>
    );
  }
}

export default App;
