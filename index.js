import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router, Link, Location } from "@reach/router";

const MyInput = styled.input`
  border: 1px solid black;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myQuery: ""
    };
  }

  handleChange(event) {
    let myQuery = event.target.value;
    this.setState({ myQuery });
  }

  render() {
    let { myQuery } = this.state;
    const handleChange = this.handleChange.bind(this);

    return (
      <div>
        <p>change the value!</p>
        <MyInput type="text" value={myQuery} onChange={handleChange} />
        <Link to={`/?foo=${myQuery}`}>
          <button>submit</button>
        </Link>

        <Location>{({ location }) => <div>{location.search}</div>}</Location>
      </div>
    );
  }
}
// http://localhost:1234/?test=foobar
let Dash = () => <div>Dash</div>;

const App = () => {
  return (
    <Router>
      <Home path="/" location={location} />
      <Dash path="/dash" />
    </Router>
  );
};

ReactDOM.render(<App foo="world" />, document.getElementById("react-root"));
