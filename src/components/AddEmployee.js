import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeesAction";
import { createNewEmployee } from "../redux/actions/employeesAction";
import { updateEmployee } from "../redux/actions/employeesAction";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.empyloyee ? props.empyloyee.employee_name : "",
      salary: props.empyloyee ? props.empyloyee.employee_salary : "",
      age: props.empyloyee ? props.empyloyee.employee_age : "",
      nameError: "",
      salaryError: "",
      ageError: "",
    };
  }

  handleValidation = () => {
    console.log("handle validation");
    let nameError = "";
    let salaryError = "";
    let ageError = "";

    if (!this.state.name) {
      console.log("inside name error");
      nameError = "Name Is Required";
    }
    if (!this.state.salary) {
      salaryError = "Salary Is Required";
    }
    if (!this.state.age) {
      ageError = "Age Is Required";
    }

    if (nameError || salaryError || ageError) {
      this.setState({ nameError, salaryError, ageError });
    } else {
      this.setState({ nameError, salaryError, ageError });
    }
    console.log(this.state);
    // console.log("Name Error", nameError);
    // console.log("Salary Error", salaryError);
    // console.log("Age Error", ageError);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { nameError, salaryError, ageError } = this.state;
    e.preventDefault();

    if (nameError || salaryError || ageError) {
      return false;
    }

    if (this.props.match.params.id) {
      const { name, salary, age } = this.state;
      const { id } = this.props.match.params;
      const newEmployee = {
        employee_name: name,
        employee_salary: salary,
        employee_age: age,
        id: id,
      };
      // console.log("state", this.state, newEmployee)
      // console.log("Update Emp", newEmployee)
      this.props.updateEmployee(id, newEmployee);
      this.props.history.push("/");
    } else {
      const { name, salary, age } = this.state;
      const newEmployee = {
        employee_name: name,
        employee_salary: salary,
        employee_age: age,
        id: "100",
      };
      this.props.createNewEmployee(newEmployee, this.props.history);
      this.props.history.push("/");
    }
  };

  render() {
    const { nameError, salaryError, ageError } = this.state;
    return (
      <div className="emp-form-wrapper ">
        <h5 className="text-center mb-4">Add Employee Details</h5>
        <form
          className="col-md-6 m-auto border shadow p-4"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Employee Name"
            />
            <div className="invalid-feedback">{nameError}</div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Salary</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
              placeholder="Employee Salary"
            />
            <div className="invalid-feedback">{salaryError}</div>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Age</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Employee Age"
            />
            <div className="invalid-feedback">{ageError}</div>
          </div>

          <button
            type="submit"
            className="btn btn-block btn-primary"
            onMouseEnter={() => this.handleValidation()}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props.match.params.id);
  if (props.match.params.id) {
    return {
      empyloyee: state.employees.find(
        (emp) => emp.id === props.match.params.id
      ),
    };
  }
  return { empyloyee: null };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    },
    createNewEmployee: (newEmployee, history) => {
      dispatch(createNewEmployee(newEmployee, history));
    },
    updateEmployee: (id, employee) => {
      dispatch(updateEmployee(id, employee));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
