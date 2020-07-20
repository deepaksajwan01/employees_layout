import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { fetchEmployees } from "./redux/actions/employeesAction";
import { connect } from "react-redux";

import Header from "./components/layout/Header";
import SideMenu from "./components/layout/SideMenu";
import Footer from "./components/layout/Footer";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import Employee from "./components/Employee";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  componentDidMount(){
    console.log("App did mount....")
    this.props.fetchEmployees();

  }
  render() {
    return (
      <Router>
        <Header />
        <SideMenu />
        <div className="main-section">
          <Route path="/" exact component={Employees} />
          <Route path="/addEmployee" exact component={AddEmployee} />
          <Route path="/addEmployee/:id" exact component={AddEmployee} />
          <Route path="/employee/:id" exact component={Employee} />
          <Route path="/contact" exact component={Contact} />
        </div>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);

