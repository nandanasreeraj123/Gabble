import "./App.css";
import React from "react";
import Reg from "./Components/Registration/register";
import Lands from "./Components/Land/landing";
import { Router } from "@reach/router";
import Gabble from "./Components/Gab/maingab";
import Login from "./Components/login/login";
import Intro from "./Components/Intro/intro";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <div>
        <Router>
          <Regs path="/reg"></Regs>
          <Landingpage path="/"></Landingpage>
          <Gabfinals path="/gab"></Gabfinals>
          <Loginpage path="/login"></Loginpage>
          <Intropage path="/intro"></Intropage>
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
export default App;
