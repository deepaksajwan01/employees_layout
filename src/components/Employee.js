import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEmployee } from "../redux/actions/employeesAction";
import { deleteEmployee } from "../redux/actions/employeesAction";

class Employee extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchEmployee(id);
  }
  handleDeleteEmployee = (id) => {
    this.props.deleteEmployee(id);
    this.props.history.push('/')
  };

  render() {
    const { currentEmployee } = this.props;
    return (
      <div className='emp-detail'>
         {
           currentEmployee ? <h5>{currentEmployee.employee_name}</h5> : <p>Loading......</p>
         }

        {
          currentEmployee ? 
          <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          
             <tr>
              <th scope="row"> {currentEmployee.id} </th>
              <td>{currentEmployee.employee_name}</td>
              <td>{currentEmployee.employee_age}</td>
              <td>{currentEmployee.employee_salary}</td>
              <td>
                    <Link to={`/addEmployee/${currentEmployee.id}`}>
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
                      onClick={() => this.handleDeleteEmployee(currentEmployee.id)}
                    >
                      Delete
                    </button>
                  </td>
            </tr> 
          </tbody>
        </table> : null
        }
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentEmployee: state.currentEmployee,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployee: (id) => {
      dispatch(fetchEmployee(id));
    },
    deleteEmployee: (id) => {
      dispatch(deleteEmployee(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
