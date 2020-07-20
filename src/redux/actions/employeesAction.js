import { SET_CURRENT_EMPLOYEE_REQUEST } from "./types";
import { SET_CURRENT_EMPLOYEE_SUCESS } from "./types";
import { SET_CURRENT_EMPLOYEE } from "./types";
import axios from "axios";

export const fetchEmployeesRequest = () => {
  return {
    type: SET_CURRENT_EMPLOYEE_REQUEST,
  };
};

export const fetchEmployeesSucess = (employees) => {
  return {
    type: SET_CURRENT_EMPLOYEE_SUCESS,
    payload: employees,
  };
};

export const fetchCurrentEmployee = (employee) => {
  return {
    type: SET_CURRENT_EMPLOYEE,
    payload: employee,
  };
};

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(fetchEmployeesRequest);
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        const employees = response.data.data;
        dispatch(fetchEmployeesSucess(employees));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteEmployee = (id) => {
  return (dispatch, getState) => {
    let updateEmp = getState().employees.filter((emp) => emp.id !== id);
    dispatch(fetchEmployeesSucess(updateEmp));
  };
};

export const fetchEmployee = (id) => {
  return (dispatch, getState) => {
    let currentEmployee = getState().employees.find(emp=>{
      return emp.id === id
    })
    dispatch(fetchCurrentEmployee(currentEmployee))
  };
};

export const createNewEmployee = (newEmployee, history) => {
  return (dispatch, getState) => {
   const employees = getState().employees;
   const updatedEmp = [newEmployee, ...employees]
   console.log("updatedEmployees", updatedEmp);
   dispatch(fetchEmployeesSucess(updatedEmp))
  };
};

export const updateEmployee = (id, newEmployee) => {
  console.log("inside update Action with id and emp ", id, newEmployee);
  return (dispatch, getState) => {
  const employees = getState().employees;
   const currentEmpIndex = employees.findIndex((emp)=>{
     return emp.id == id
   })
   employees[currentEmpIndex] = newEmployee;
   dispatch(fetchEmployeesSucess(employees))
  };
};