import axios from 'axios'
import React, { useEffect, useState } from 'react'
import EmployeeUpdate from './EmployeeUpdate'

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(null)

    useEffect(() => {
        const fetchEmployees = async () => {
          try {
            const response = await axios.get('http://localhost:8080/employee');
            const responseData = response.data;
            if (responseData.status === 200) {
              setEmployees(responseData.data);
            } else {
              console.error('Error fetching employees:', responseData.message);
            }
          } catch (error) {
            console.error('Error fetching employees:', error);
          } 
        };
    
        fetchEmployees();
      }, []);

    const handleUpdateClick = (employee) => {
        setSelectedEmployee(employee);
        setShowUpdateForm(true);
    }

    return (
        <div className="container">
            <h1 className="my-4">Employee List</h1>
            {showUpdateForm && <EmployeeUpdate employee={selectedEmployee} />}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee, index) => {
                            return (
                                <tr key={index}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.mobile}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <button className="btn btn-sm btn-primary" onClick={() => handleUpdateClick(employee)}>Update</button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;
