package com.jspiders.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jspiders.employee.pojo.Employee;
import com.jspiders.employee.response.ResponseStructure;
import com.jspiders.employee.service.EmpService;

@RestController
public class EmpController {
	
	@Autowired
	private EmpService empService;
	
	@PostMapping("/employees")
	public ResponseEntity<ResponseStructure<Employee>> addEmp(@RequestBody Employee employee){
		Employee addedEmp=empService.addEmp(employee);
		ResponseStructure<Employee> responseStructure=new ResponseStructure<>();
		responseStructure.setMessage("Employee Added");
		responseStructure.setData(addedEmp);
		responseStructure.setStatus(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<Employee>>(responseStructure,HttpStatus.OK);
	}

}
