import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import React, {Component} from 'react';
import Admin from './screens/Admin';
import Login from './screens/Login';
import Passenger from './screens/Passenger';
import GenericContainer from "./components/GenericContainer";
import AdminOrPassenger from "./screens/AdminOrPassenger";

const AdminWithGenericContainer = GenericContainer(Admin);
const PassengerWithGenericContainer = GenericContainer(Passenger);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      isPassenger: false,
      token: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    // if (this.state.token === "") {
    //   return <Login handleChange={this.handleChange} />;
    // }

    if (this.state.isAdmin) {
      return <AdminWithGenericContainer token={this.state.token} />;
    }

    if (this.state.isPassenger) {
      return <PassengerWithGenericContainer token={this.state.token} />;
    }

    return <AdminOrPassenger handleChange={this.handleChange} />;
  }
}
