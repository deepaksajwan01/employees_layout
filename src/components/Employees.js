import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEmployees } from "../redux/actions/employeesAction";
import { deleteEmployee } from "../redux/actions/employeesAction";

import "../static/styles/employees.css";
import { Link } from "react-router-dom";
import Employee from "./Employee";

class Employees extends Component {
  componentDidMount() {
    // console.log("fetching data......")
    // this.props.fetchEmployees();
  }
  handleDeleteEmployee = (id) => {
    this.props.deleteEmployee(id);
  };

  render() {
    console.log(this.props);
    const { loading, employees } = this.props;
    return (
      <div className="emp-table-wrap">
        <h5>Employees Details</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Details</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return (
                <tr key={employee.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{employee.employee_name}</td>
                  <td>{employee.employee_age}</td>
                  <td>{employee.employee_salary}</td>
                  <td>
                    <Link to={`/employee/${employee.id}`}>
                      <button type="button" className="btn btn-outline-primary">
                        Details
                      </button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/addEmployee/${employee.id}`}>
                      {" "}
                      <button type="button" className="btn btn-outline-primary">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.handleDeleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    employees: state.employees,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {
      dispatch(fetchEmployees());
    },
    deleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
