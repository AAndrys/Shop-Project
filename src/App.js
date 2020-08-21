import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Home from './components/home';
import NavBar from './components/navBar';
import MobileNavBar from './components/mobileNavBar';
import MobileSideMenu from './components/mobileSideMenu';
import LoginPage from './components/login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'App',
      sideMenuOpen: false,
    }
  }

  openSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen
    });
    document.body.style.overflow = this.state.sideMenuOpen ? "" : "hidden";
  };

  render() {
    const { sideMenuOpen } = this.state;

    return (
      <Router>
      {/* <div className="container"> */}
        {sideMenuOpen ? <MobileSideMenu closeSideMenu={this.openSideMenu} /> : null}
        <MobileNavBar openSideMenu={this.openSideMenu} />
        <NavBar />
        <Switch>
          <Route 
            path='/Shop-Project/'
            exact 
            render={(props) => <Home {...props} /> } 
          />
          <Route
            path='/account'
            exact
            render={(props) => <LoginPage {...props} />}
          />
        </Switch>
      {/* </div> */}
      </Router>
    );
  }
}

export default App;
