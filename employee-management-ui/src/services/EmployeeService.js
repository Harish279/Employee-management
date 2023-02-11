import axios from "axios";
import React from "react";

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees"

class EmployeeService extends React.Component{

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployees()
    {
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmployee(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+id);
    }

    updateEmployee(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+id,employee);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();