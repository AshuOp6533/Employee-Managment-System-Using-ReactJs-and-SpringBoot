import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/employees")
            .then((res) => {
                setEmployees(res.data);
            })
            .catch((error) => {
                console.log("error",error);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="my-4">Employee List</h1>
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
