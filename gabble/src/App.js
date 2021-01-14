import "./App.css";
import React from "react";
import Reg from "./Components/Registration/register";
import Lands from "./Components/Land/landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Router } from "@reach/router";
import Gabble from "./Components/Gab/maingab";
import Profile from "./Components/Gab/profile";
import Login from "./Components/login/login";
import Intro from "./Components/Intro/intro";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route path="/reg" exact render={() => <Regs />} />
          <Route path="/" exact render={() => <Landingpage />} />
          <Route path="/gab" exact render={() => <Gabfinals />} />
          <Route path="/login" exact render={() => <Loginpage />} />
          <Route path="/intro" exact render={() => <Intropage />} />
          <Route path="/profile" exact render={() => <Profilepage />} />
        </Router>
      </div>
    );
  }
}

function Regs() {
  return <Reg></Reg>;
}
function Gabfinals() {
  return <Gabble></Gabble>;
}
function Landingpage() {
  return <Lands></Lands>;
}
function Loginpage() {
  return <Login></Login>;
}
function Intropage() {
  return <Intro></Intro>;
}
function Profilepage() {
  return <Profile></Profile>;
}
export default App;
