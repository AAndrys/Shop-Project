import React from "react";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

//Components
import Home from "./components/home";
import NavBar from "./components/navBar";
import MobileNavBar from "./components/mobileNavBar";
import MobileSideMenu from "./components/mobileSideMenu";
import LoginPage from "./components/login";
import Account from "./components/account";
import { authenticate } from "./operations/operations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "App",
      sideMenuOpen: false,
    };
  }

  componentDidMount() {
    this.props.authenticateUser();
  }

  openSideMenu = () => {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
    document.body.style.overflow = this.state.sideMenuOpen ? "" : "hidden";
  };

  render() {
    const { sideMenuOpen } = this.state;
    const { userInfo } = this.props;

    return (
      <Router>
        {/* <div className="container"> */}
        {sideMenuOpen ? (
          <MobileSideMenu closeSideMenu={this.openSideMenu} />
        ) : null}
        <MobileNavBar openSideMenu={this.openSideMenu} />
        <NavBar />
        <Switch>
          <Route
            path="/Shop-Project/"
            exact
            render={(props) => <Home {...props} />}
          />
          <Route
            path="/account"
            exact
            render={(props) =>
              userInfo.isLogged ? (
                <Account {...props} />
              ) : (
                <LoginPage {...props} />
              )
            }
          />
        </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.UserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: () =>
    dispatch(authenticate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
